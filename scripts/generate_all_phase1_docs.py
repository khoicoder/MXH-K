import os
import sys
from docx.shared import Inches
from doc_helpers import (
    create_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_callout, create_table_from_data
)

def build_project_overview():
    doc = create_base_doc(
        title="Project Overview & Architectural Charter",
        doc_id="DOC-00-OVERVIEW-001",
        category="00_PROJECT_OVERVIEW",
        version="1.0.0",
        status="Architecture Review"
    )
    
    add_heading_1(doc, "1. Executive Summary & Mission")
    add_p(doc, "The purpose of this engineering initiative is to architect, engineer, and deploy a production-grade, highly scalable, and modular social networking platform. Unlike proof-of-concept prototypes or monolithic CRUD applications, this platform is founded on strict microservices architectural principles, event-driven inter-service choreography, zero-trust token-based authentication, and dedicated database perimeters.")
    
    add_callout(doc, "Zero tolerance for fake API mocks, decorative buttons, empty services, or cross-database foreign key leaks. Every microservice owns its domain logic, datastore, and communication boundaries.", "CORE MISSION PRINCIPLE")
    
    add_heading_1(doc, "2. System Objectives & High-Level Scope")
    add_p(doc, "The platform addresses modern digital social interaction patterns encompassing rich media feeds, short-form vertical video (Reels), complex social graph interactions (unidirectional following vs. bidirectional friendships), multifaceted emotional reactions, threaded discussions, and real-time push notifications.")
    
    headers = ["Domain Pillar", "Target Capability", "Key Technical Architectural Mechanism"]
    rows = [
        ["Authentication & Security", "Multi-device sessions, Argon2id hashing, token rotation, instant revocation", "JWT + Refresh token family hashing + Redis revocation layer"],
        ["Social Graph", "Bidirectional friends, unidirectional follows, strict block enforcement", "Graph relationship tables with composite indexes & privacy filters"],
        ["Content Engine", "Rich post composition, multi-image/video processing, hashtag parsing", "S3/MinIO chunked storage, async metadata extraction, full-text tags"],
        ["Feed & Discovery", "Cursor-paginated personalized timeline & algorithmic ranking", "Multi-factor scoring (recency, engagement, affinity) + Redis cache"],
        ["Short-form Video (Reels)", "Vertical video streaming, view-duration tracking, recommendation feed", "HLS/MP4 optimized streaming metadata, async view aggregation"],
        ["Real-time Notification", "Event-triggered instant push & in-app alerts", "RabbitMQ fanout exchanges + WebSocket Gateway cluster"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.8), Inches(2.2), Inches(2.27)])
    
    add_heading_1(doc, "3. Team Engineering Roles & Responsibilities")
    add_p(doc, "Execution is governed by specialized engineering domains acting in concert:")
    add_p(doc, "Defines macro topology, bounded contexts, inter-service contracts, resilience patterns, and scalability blueprints.", "• Senior Software Architect: ")
    add_p(doc, "Constructs modular NestJS microservices, REST APIs, domain services, DTO validations, and repository interfaces.", "• Senior Backend Engineer: ")
    add_p(doc, "Implements Next.js App Router, SSR/CSR balance, TanStack Query cache, Zustand stores, and Shadcn UI.", "• Senior Frontend Engineer: ")
    add_p(doc, "Designs third normal form schemas, composite indexes, query optimization, migration scripts, and Redis topologies.", "• Senior Database Architect: ")
    add_p(doc, "Configures Docker Compose, multi-stage builds, MinIO, RabbitMQ clusters, networking tiers, and structured logging.", "• Senior DevOps Engineer: ")
    add_p(doc, "Defines design token systems, dark/light visual identity, component states, and responsive layouts.", "• Senior UI/UX Designer: ")
    add_p(doc, "Enforces Argon2id hashing, RS256 signing, token reuse theft detection, CSRF protection, and OWASP Top 10 compliance.", "• Application Security Engineer: ")

    path = os.path.join("docs", "00_PROJECT_OVERVIEW", "Project_Overview.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_system_architecture():
    doc = create_base_doc(
        title="Enterprise System Architecture Specification",
        doc_id="DOC-00-SYSARCH-002",
        category="00_PROJECT_OVERVIEW",
        version="1.0.0"
    )
    
    add_heading_1(doc, "1. Macro Architectural Topology")
    add_p(doc, "The platform adopts a decoupled Microservices Architecture fronted by a unified API Gateway and synchronized via an asynchronous event bus. Clients (Web browsers running Next.js and mobile PWA viewports) never communicate directly with internal microservices.")
    
    add_callout(doc, "Clients -> Reverse Proxy / Edge -> Next.js (SSR / Web UI) -> NestJS API Gateway -> Internal Microservices (REST over HTTP) + RabbitMQ Event Broker -> PostgreSQL Datastores & Redis Caches.", "TRAFFIC FLOW TOPOLOGY")
    
    add_heading_1(doc, "2. Core Architectural Layers")
    add_p(doc, "1. Client Edge Layer: Next.js 15+ App Router application rendering Server Components for fast first-contentful paint and Client Components for dynamic hydration.")
    add_p(doc, "2. Ingress & API Gateway: NestJS Gateway handling TLS termination, JWT verification, rate limiting, request schema validation, and correlation ID (x-correlation-id) injection.")
    add_p(doc, "3. Domain Microservices Layer: 10 isolated NestJS backend services encapsulating dedicated bounded contexts with strict single-responsibility boundaries.")
    add_p(doc, "4. Event Choreography & Messaging: RabbitMQ cluster utilizing topic and fanout exchanges for decoupled asynchronous notifications and feed fanouts.")
    add_p(doc, "5. Persistence & Cache Tier: Dedicated PostgreSQL database per service managed via Prisma ORM, supplemented by Redis Sentinel/Cluster for caching, rate limiting, and real-time state.")
    add_p(doc, "6. Object Storage: S3-compatible MinIO object storage for media files, raw uploads, optimized variants, and video segments.")

    add_heading_1(doc, "3. System Quality Attributes & Trade-Off Analysis")
    headers = ["Architectural Decision", "Problem Solved", "Trade-Off & Mitigation"]
    rows = [
        ["Database-per-Service", "Eliminates cross-team schema coupling and single database bottlenecks.", "Cross-service JOINs prohibited. Solved via REST client composition and read models."],
        ["Hybrid REST + AMQP", "Guarantees immediate response for user commands while decoupling heavy side-effects.", "Eventual consistency introduced. Mitigated by optimistic UI updates and idempotent workers."],
        ["Dual-Token + Redis Revocation", "Preserves stateless JWT performance while providing instant session termination capability.", "Redis lookup required during token verification or session version invalidation."]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.8), Inches(2.2), Inches(2.27)])

    path = os.path.join("docs", "00_PROJECT_OVERVIEW", "System_Architecture.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_technology_stack():
    doc = create_base_doc(
        title="Comprehensive Technology Stack Specification",
        doc_id="DOC-00-TECHSTACK-003",
        category="00_PROJECT_OVERVIEW",
        version="1.0.0"
    )
    
    add_heading_1(doc, "1. Frontend Technology Stack")
    headers = ["Technology", "Version", "Role in Architecture", "Selection Rationale"]
    rows = [
        ["Next.js", "15.x", "Core Web Framework (App Router)", "High performance SSR, React Server Components, streaming hydration"],
        ["React", "19.x", "UI Component Library", "Modern concurrent features, server actions, and component lifecycle"],
        ["TypeScript", "5.x (Strict)", "Programming Language", "End-to-end type safety, contracts alignment, zero any tolerance"],
        ["Tailwind CSS", "3.4+", "Utility-First CSS Engine", "Design token compliance, atomic styles, minimal bundle size"],
        ["Shadcn UI", "Latest", "Headless Accessible UI Components", "Full accessibility (Radix UI), complete source code ownership"],
        ["Lucide React", "Latest", "Iconography", "Consistent SVG visual identity, lightweight tree-shaking"],
        ["TanStack Query", "v5", "Server State & Caching", "Automatic query deduplication, optimistic updates, background refetching"],
        ["Zustand", "v5", "Client State Management", "Lightweight, un-opinionated store for auth sessions, modal states, UI themes"],
        ["React Hook Form + Zod", "Latest", "Form Management & Validation", "Type-safe runtime validation matching backend DTO schemas"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.5), Inches(0.8), Inches(2.0), Inches(1.97)])
    
    add_heading_1(doc, "2. Backend & Infrastructure Technology Stack")
    headers = ["Component", "Technology", "Responsibility", "Configuration / Version"]
    rows = [
        ["Microservices Framework", "NestJS 10.x", "Backend Services & API Gateway", "Modular Architecture, Dependency Injection, Swagger OpenAPI"],
        ["Database Engine", "PostgreSQL 16+", "Relational Persistent Storage", "Per-service database isolation, connection pooling, full-text search"],
        ["ORM", "Prisma 5.x", "Data Modeling & Querying", "Type-safe schemas, automated migrations, declarative relations"],
        ["In-Memory Store", "Redis 7.x", "Caching, Blacklist & Rate Limiting", "Token revocation store, feed cache, sliding-window rate limiters"],
        ["Message Broker", "RabbitMQ 3.13+", "Inter-Service Asynchronous Events", "Topic exchanges, dead-letter queues, idempotent subscriber consumers"],
        ["Object Storage", "MinIO (S3 Compatible)", "Binary Media Storage", "Presigned upload URLs, media chunking, thumbnail storage"],
        ["Containerization", "Docker & Compose", "Deployment Orchestration", "Multi-stage builds, isolated networks, healthcheck dependencies"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.6), Inches(1.4), Inches(1.8), Inches(1.47)])

    path = os.path.join("docs", "00_PROJECT_OVERVIEW", "Technology_Stack.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_srs_doc():
    doc = create_base_doc(
        title="Software Requirements Specification (SRS)",
        doc_id="DOC-01-SRS-001",
        category="01_REQUIREMENTS",
        version="1.0.0"
    )
    
    add_heading_1(doc, "1. Functional Requirements Matrix")
    headers = ["Req ID", "Module", "Functional Specification Description", "Priority"]
    rows = [
        ["FR-AUTH-001", "Auth", "User account registration with email verification and Argon2id password hashing.", "Critical"],
        ["FR-AUTH-002", "Auth", "Multi-device login issuing short-lived Access Token & long-lived rotated Refresh Token.", "Critical"],
        ["FR-AUTH-003", "Auth", "Session management allowing inspection and remote revocation of specific active devices.", "Critical"],
        ["FR-AUTH-004", "Auth", "Logout-all endpoint invalidating all active sessions and refresh token families.", "Critical"],
        ["FR-AUTH-005", "Auth", "Automatic token theft detection upon reused rotated refresh tokens, terminating the family.", "Critical"],
        ["FR-USER-001", "User", "Profile management (avatar, cover, bio, privacy settings) and public profile viewing.", "High"],
        ["FR-SOC-001", "Social", "Bidirectional friend request workflow (send, accept, reject, cancel, remove friend).", "Critical"],
        ["FR-SOC-002", "Social", "Unidirectional follow/unfollow capability with follower and following listings.", "Critical"],
        ["FR-SOC-003", "Social", "User blocking enforcing two-way invisibility and complete interaction prohibition.", "Critical"],
        ["FR-POST-001", "Post", "Rich post creation supporting text, multiple images, video, hashtags, and mentions.", "Critical"],
        ["FR-POST-002", "Post", "Granular visibility controls (PUBLIC, FRIENDS_ONLY, PRIVATE) and post pinning.", "High"],
        ["FR-ACT-001", "Interaction", "6-type reaction picker (LIKE, LOVE, HAHA, WOW, SAD, ANGRY) with single active reaction.", "High"],
        ["FR-ACT-002", "Interaction", "Hierarchical nested comments with depth clamping and reaction support.", "High"],
        ["FR-FEED-001", "Feed", "Personalized news feed combining friends, followed users, and trending ranked content.", "Critical"],
        ["FR-REEL-001", "Reels", "Short vertical video feed with infinite scroll, view metrics, and watch duration tracking.", "High"],
        ["FR-NOTIF-001", "Notification", "Real-time WebSocket alerts and paginated notification center for social events.", "High"],
        ["FR-SRCH-001", "Search", "Full-text search across users, posts, and hashtags with typeahead suggestions.", "Medium"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.1), Inches(1.1), Inches(3.27), Inches(0.8)])

    add_heading_1(doc, "2. Non-Functional Requirements & Performance SLAs")
    add_p(doc, "The system architecture is engineered to satisfy strict non-functional constraints:")
    add_p(doc, "API Gateway response time < 50ms for cached routes, < 200ms p95 for complex aggregations.", "• Latency: ")
    add_p(doc, "Designed for horizontal scale out of stateless microservices behind Nginx load balancers.", "• Scalability: ")
    add_p(doc, "Zero storage of plaintext tokens or credentials. HttpOnly, SameSite=Lax cookies, strict CORS.", "• Security: ")
    add_p(doc, "Transactional consistency within domain boundaries; eventual consistency for feed fanout < 1.5s.", "• Consistency: ")
    add_p(doc, "Graceful degradation when non-critical services (e.g. Notification or Search) encounter latency.", "• Resilience: ")

    path = os.path.join("docs", "01_REQUIREMENTS", "Software_Requirements_Specification.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_microservices_architecture():
    doc = create_base_doc(
        title="Microservices Architecture & Service Responsibilities",
        doc_id="DOC-02-MICRO-001",
        category="02_ARCHITECTURE",
        version="1.0.0"
    )
    
    add_heading_1(doc, "1. Microservice Roster & Bounded Contexts")
    add_p(doc, "The backend platform is partitioned into 11 discrete services. Every service is completely encapsulated with its own domain logic, Prisma client, and dedicated PostgreSQL database.")
    
    headers = ["Service Name", "Internal Port", "Database Name", "Primary Domain Responsibilities"]
    rows = [
        ["api-gateway", "3000", "N/A (Stateless)", "Reverse proxy, route dispatching, auth guard, rate limit, correlation ID"],
        ["auth-service", "3001", "auth_db", "User credentials, Argon2id, JWT issuance, session management, token rotation"],
        ["user-service", "3002", "user_db", "User profiles, avatars, covers, bios, privacy settings, account lifecycle"],
        ["social-graph-service", "3003", "social_db", "Friendships, friend requests, follows, blocks, relationship queries"],
        ["post-service", "3004", "post_db", "Post lifecycle, post privacy, hashtags, mentions, post sharing/pinning"],
        ["interaction-service", "3005", "interaction_db", "6 emotional reactions, nested comments, replies, content reporting"],
        ["feed-service", "3006", "feed_db", "Personalized timeline ranking, cursor pagination, hide post, deduplication"],
        ["media-service", "3007", "media_db", "File type/size validation, MinIO S3 integration, thumbnailing, media meta"],
        ["reels-service", "3008", "reels_db", "Short vertical videos, infinite scroll feed, watch duration, video metrics"],
        ["notification-service", "3009", "notification_db", "In-app notifications, read/unread states, WebSocket real-time delivery"],
        ["search-service", "3010", "search_db", "Full-text search indexing, users/posts/hashtags query engine, suggestions"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.5), Inches(0.8), Inches(1.1), Inches(2.87)])

    add_heading_1(doc, "2. Service Interaction & Decoupling Principles")
    add_p(doc, "1. Zero Cross-Database Foreign Keys: Under no circumstances may a service query or join tables belonging to another microservice.")
    add_p(doc, "2. Synchronous REST with Timeouts: Direct HTTP calls between services are limited to synchronous validation (e.g. Post Service validating user permissions against Social Graph Service). All calls use circuit-breaker patterns and strict 3000ms timeouts.")
    add_p(doc, "3. Asynchronous Event Propagation: State changes (PostCreated, UserFollowed, ReactionAdded) are published to RabbitMQ. Downstream consumers (Feed Service, Notification Service, Search Service) process events without blocking the originating request.")

    path = os.path.join("docs", "02_ARCHITECTURE", "Microservices_Architecture.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_database_architecture():
    doc = create_base_doc(
        title="Database Architecture & Entity-Relationship Specifications",
        doc_id="DOC-02-DBARCH-002",
        category="02_ARCHITECTURE",
        version="1.0.0"
    )
    
    add_heading_1(doc, "1. Database Ownership Matrix")
    add_p(doc, "To enforce microservice autonomy and eliminate database contention, each service possesses an isolated PostgreSQL schema/database.")
    
    headers = ["Database", "Owning Service", "Managed Entities", "Key Performance Indexes"]
    rows = [
        ["auth_db", "auth-service", "Account, Session, PasswordResetToken", "btree(userId), btree(refreshTokenHash), btree(expiresAt)"],
        ["user_db", "user-service", "UserProfile, UserSettings", "unique(username), btree(userId), gin(searchVector)"],
        ["social_db", "social-graph-service", "FriendRequest, Friendship, Follow, Block", "unique(userA, userB), btree(targetUserId), btree(status)"],
        ["post_db", "post-service", "Post, PostMedia, PostHashtag, Hashtag, SavedPost", "btree(authorId, createdAt DESC), gin(tags), btree(visibility)"],
        ["interaction_db", "interaction-service", "Reaction, Comment, CommentReaction, Report", "unique(userId, targetType, targetId), btree(postId, path)"],
        ["feed_db", "feed-service", "UserFeedItem, HiddenContent, FeedScoreCache", "btree(recipientId, score DESC, createdAt DESC)"],
        ["media_db", "media-service", "MediaFile, MediaVariant", "unique(fileKey), btree(uploaderId), btree(status)"],
        ["reels_db", "reels-service", "Reel, ReelView, ReelBookmark", "btree(creatorId), btree(viewsCount DESC), btree(createdAt DESC)"],
        ["notification_db", "notification-service", "Notification, NotificationPreference", "btree(recipientId, isRead, createdAt DESC)"],
        ["search_db", "search-service", "SearchIndexRecord, SearchQueryLog", "gin(to_tsvector('english', content)), btree(entityType)"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.1), Inches(1.4), Inches(2.0), Inches(1.77)])

    add_heading_1(doc, "2. Indexing & Pagination Strategy")
    add_p(doc, "All feeds, comments, and notifications strictly utilize Cursor-Based Pagination (keyset pagination) using composite indexes over (createdAt, id) or (score, id). Offset-based pagination (LIMIT/OFFSET) is explicitly forbidden for scale-critical tables to avoid O(N) database scans.")

    path = os.path.join("docs", "02_ARCHITECTURE", "Database_Architecture.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_inter_service_communication():
    doc = create_base_doc(
        title="Inter-Service Communication & Event Choreography",
        doc_id="DOC-02-COMM-003",
        category="02_ARCHITECTURE",
        version="1.0.0"
    )
    
    add_heading_1(doc, "1. Synchronous REST Protocol Standards")
    add_p(doc, "When a service requires immediate validation from a peer service (e.g. verifying block status during post creation), it executes an internal HTTP REST request. All inter-service calls must comply with:")
    add_p(doc, "Forwarding of 'x-correlation-id' across all network hops to enable distributed tracing.", "• Correlation ID Propagation: ")
    add_p(doc, "Standardized NestJS Axios HTTP module configured with a 2500ms timeout.", "• Timeout Enforcements: ")
    add_p(doc, "Exponential backoff retry with jitter (max 3 retries, only for idempotent GET/PUT requests).", "• Retry Policies: ")
    add_p(doc, "Internal services authenticate incoming calls via internal JWT or mutual service pre-shared tokens.", "• Service Authentication: ")

    add_heading_1(doc, "2. RabbitMQ Event Choreography Matrix")
    headers = ["Published Event", "Originating Service", "Consuming Services", "Asynchronous Processing Effect"]
    rows = [
        ["user.registered", "auth-service", "user-service, notification-service", "Initialize default profile, send welcome notification"],
        ["post.created", "post-service", "feed-service, notification-service, search-service", "Fan-out to followers' feeds, parse mentions, index content"],
        ["friend_request.sent", "social-graph-service", "notification-service", "Trigger real-time alert and WebSocket push to target user"],
        ["friend_request.accepted", "social-graph-service", "feed-service, notification-service", "Backfill mutual friends' feeds, alert requester"],
        ["post.reacted", "interaction-service", "notification-service, feed-service", "Increment engagement score, alert post author"],
        ["comment.created", "interaction-service", "notification-service, feed-service", "Update post comment count, alert post/parent comment author"],
        ["reel.created", "reels-service", "feed-service, search-service", "Index video metadata, seed initial discovery pool"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.5), Inches(1.3), Inches(1.7), Inches(1.77)])

    path = os.path.join("docs", "02_ARCHITECTURE", "Inter_Service_Communication.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_security_architecture():
    doc = create_base_doc(
        title="Authentication & Security Architecture Specification",
        doc_id="DOC-02-SEC-004",
        category="02_ARCHITECTURE",
        version="1.0.0"
    )
    
    add_heading_1(doc, "1. Dual-Token Architecture & Cryptographic Standards")
    add_p(doc, "The security model implements a robust dual-token lifecycle with proactive theft detection:")
    add_p(doc, "Lifetime: 15 minutes. Signed using RS256 private key. Contains userId, sessionId, and role. Statelessly verified by API Gateway via public key.", "• Access Token (JWT): ")
    add_p(doc, "Lifetime: 14 days. 256-bit CSPRNG cryptographically generated string. Stored exclusively in PostgreSQL as an Argon2id/SHA-256 hash.", "• Refresh Token: ")
    add_p(doc, "Transported exclusively via Set-Cookie with 'HttpOnly; Secure; SameSite=Lax'. Never exposed to JavaScript.", "• Storage Security: ")

    add_heading_1(doc, "2. Multi-Device Session Entity Model")
    add_p(doc, "Every login creates an isolated row in the Session table (auth_db):")
    add_p(doc, "id (UUID), userId (UUID), deviceId (Fingerprint), deviceName (e.g. 'Chrome on Windows'), userAgent, ipAddress, refreshTokenHash, tokenFamilyId, expiresAt, createdAt, lastUsedAt, revokedAt, revokeReason.")

    add_heading_1(doc, "3. Critical Revocation Scenarios")
    headers = ["Scenario", "Triggering Action", "Technical Revocation & Mitigation Procedure"]
    rows = [
        ["Scenario A: Logout Current Device", "POST /api/auth/logout", "Set revokedAt=NOW() for active sessionId. Clear client HttpOnly cookie. Push sessionId to Redis revocation blacklist."],
        ["Scenario B: Revoke Specific Remote Device", "DELETE /api/auth/sessions/:id", "Verify ownership (userId = auth.userId). Set revokedAt on target session. Target session cannot refresh; immediate API access blocked via Redis."],
        ["Scenario C: Logout All Devices", "POST /api/auth/logout-all", "Mark all active sessions for userId as revoked. Invalidate user session version in Redis key 'auth:version:{userId}'. All active JWTs rejected."],
        ["Scenario D: Token Reuse / Theft Detected", "POST /api/auth/refresh with rotated token", "CRITICAL SECURITY BREACH. When an already-used refresh token is presented, revoke the entire tokenFamilyId immediately, notify user of breach, and reject request."]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.5), Inches(1.4), Inches(3.37)])

    path = os.path.join("docs", "02_ARCHITECTURE", "Security_Architecture.docx")
    doc.save(path)
    print(f"Generated {path}")

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), ".."))
    print("Generating Phase 1 System Documentation...")
    build_project_overview()
    build_system_architecture()
    build_technology_stack()
    build_srs_doc()
    build_microservices_architecture()
    build_database_architecture()
    build_inter_service_communication()
    build_security_architecture()
    print("All Phase 1 DOCX files successfully created.")
