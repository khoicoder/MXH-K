import os
import sys
from docx.shared import Inches
from doc_helpers import (
    create_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_callout, create_table_from_data
)

def build_docker_config_doc():
    doc = create_base_doc(
        title="DevOps & Docker Infrastructure Specification",
        doc_id="DOC-07-DOCKER-001",
        category="07_DEVOPS_INFRASTRUCTURE",
        version="1.0.0",
        status="Active Infrastructure"
    )
    
    add_heading_1(doc, "1. Infrastructure Topology & Managed Containers")
    add_p(doc, "The entire development and staging ecosystem is containerized using Docker Compose. The topology isolates data persistence and broker services inside the 'mxh-data-network' bridge network.")
    
    headers = ["Container Name", "Base Image", "Host Port", "Internal Port", "Health Check Strategy"]
    rows = [
        ["mxh-postgres", "postgres:16-alpine", "5432", "5432", "pg_isready -U postgres (interval 10s)"],
        ["mxh-redis", "redis:7-alpine", "6380", "6379", "redis-cli -a <pass> ping (interval 10s)"],
        ["mxh-rabbitmq", "rabbitmq:3-management-alpine", "5672, 15672", "5672, 15672", "rabbitmq-diagnostics -q ping"],
        ["mxh-s3-storage", "adobe/s3mock:latest", "9090", "9090", "TCP port probe & bucket initialization"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.5), Inches(1.8), Inches(0.8), Inches(0.8), Inches(1.37)])

    add_heading_1(doc, "2. Automated Multi-Database Initialization")
    add_p(doc, "PostgreSQL automatically mounts the initialization script '01-init-databases.sql' upon initial volume provisioning. It creates 10 distinct logical databases to enforce absolute isolation between microservice domains: auth_db, user_db, social_db, post_db, interact_db, feed_db, media_db, reels_db, notif_db, and search_db.")

    path = os.path.join("docs", "07_DEVOPS_INFRASTRUCTURE", "Docker_Configuration.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_auth_service_spec():
    doc = create_base_doc(
        title="Auth Service Technical Specification",
        doc_id="DOC-03-AUTH-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )

    add_heading_1(doc, "1. Service Purpose & Scope")
    add_p(doc, "The Auth Service is the cryptographic root of trust for the social network. It is responsible for identity creation, Argon2/PBKDF2 password hashing, RS256 JWT access token issuance, session tracking, refresh token rotation, and multi-device revocation.")

    add_heading_1(doc, "2. API Endpoint Matrix")
    headers = ["HTTP Method", "Path", "Auth Required", "Description & Response Contract"]
    rows = [
        ["POST", "/api/auth/register", "No", "Registers an account with email and password. Returns account metadata."],
        ["POST", "/api/auth/login", "No", "Authenticates credentials, generates device session, sets HttpOnly cookie, returns JWT."],
        ["POST", "/api/auth/refresh", "Cookie / Body", "Rotates refresh token. Detects replay attacks and revokes token families."],
        ["POST", "/api/auth/logout", "Bearer JWT", "Scenario A: Revokes current device session in DB and pushes to Redis blacklist."],
        ["GET", "/api/auth/sessions", "Bearer JWT", "Lists all active devices and sessions belonging to the authenticated user."],
        ["DELETE", "/api/auth/sessions/:id", "Bearer JWT", "Scenario B: Revokes specific remote session belonging to the user."],
        ["POST", "/api/auth/logout-all", "Bearer JWT", "Scenario C: Revokes all sessions and increments user version in Redis."]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.1), Inches(1.8), Inches(1.0), Inches(2.37)])

    path = os.path.join("docs", "03_BACKEND_SERVICES", "Auth_Service_Specification.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_auth_features_doc():
    doc = create_base_doc(
        title="Authentication & Device Session Feature Specification",
        doc_id="DOC-09-FEAT-AUTH-001",
        category="09_FEATURE_SPECIFICATIONS",
        version="1.0.0",
        status="Implemented & Verified"
    )

    add_heading_1(doc, "1. Token Rotation & Replay Attack Defense")
    add_p(doc, "When a client requests a token refresh using an already rotated refresh token (detected via the 'revokedAt' timestamp or hash lookup), the Auth Service identifies this as a potential security breach. It immediately revokes all sessions sharing the same 'tokenFamilyId' and increments the Redis user version, preventing unauthorized attackers from gaining access.")

    path = os.path.join("docs", "09_FEATURE_SPECIFICATIONS", "Authentication_Feature.docx")
    doc.save(path)
    print(f"Generated {path}")

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), ".."))
    print("Generating Phase 2 & 3 DOCX...")
    build_docker_config_doc()
    build_auth_service_spec()
    build_auth_features_doc()
    print("Documentation updated.")
