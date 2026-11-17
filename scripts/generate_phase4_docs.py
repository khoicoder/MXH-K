import os
import sys
from docx.shared import Inches
from doc_helpers import (
    create_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_callout, create_table_from_data
)

def build_user_service_spec():
    doc = create_base_doc(
        title="User Service Technical Specification",
        doc_id="DOC-03-USER-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )

    add_heading_1(doc, "1. Service Purpose & Scope")
    add_p(doc, "The User Service manages user profile lifecycles, avatars, cover pictures, biographies, gender, birthdate, and account privacy configurations. It isolates all profile data within 'user_db' and provides high-speed batch retrieval for downstream feed and interaction rendering.")

    add_heading_1(doc, "2. API Endpoint Matrix")
    headers = ["HTTP Method", "Path", "Auth Required", "Description & Response Contract"]
    rows = [
        ["GET", "/api/users/me", "x-user-id", "Retrieves current authenticated profile and settings, auto-initializing if missing."],
        ["PATCH", "/api/users/me", "x-user-id", "Updates profile details (displayName, bio, avatarUrl, coverUrl, gender)."],
        ["PATCH", "/api/users/me/settings", "x-user-id", "Updates privacy settings (postVisibilityDefault, allowFriendRequests, isPrivateAccount)."],
        ["GET", "/api/users/:userId/profile", "Public/Auth", "Retrieves public profile information for a specified user."],
        ["POST", "/api/users/batch", "Internal Service", "Batch retrieves public user cards (avatar, username, displayName) by ID list."]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.1), Inches(1.8), Inches(1.1), Inches(2.27)])

    path = os.path.join("docs", "03_BACKEND_SERVICES", "User_Service_Specification.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_social_service_spec():
    doc = create_base_doc(
        title="Social Graph Service Technical Specification",
        doc_id="DOC-03-SOCIAL-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )

    add_heading_1(doc, "1. Service Purpose & Scope")
    add_p(doc, "The Social Graph Service manages relationships between users. It strictly enforces bidirectional friendships, unidirectional following, and bidirectional privacy blocking. It owns 'social_db' and serves as the single source of truth for visibility authorization.")

    add_heading_1(doc, "2. API Endpoint Matrix")
    headers = ["HTTP Method", "Path", "Auth Required", "Description & Domain Behavior"]
    rows = [
        ["POST", "/api/friends/requests", "x-user-id", "Sends a friend request to a target user. Blocks prevented."],
        ["PATCH", "/api/friends/requests/:id/accept", "x-user-id", "Accepts request and establishes bidirectional friendship."],
        ["PATCH", "/api/friends/requests/:id/reject", "x-user-id", "Rejects pending friend request."],
        ["DELETE", "/api/friends/requests/:id", "x-user-id", "Cancels a sent friend request."],
        ["DELETE", "/api/friends/:targetUserId", "x-user-id", "Removes an established friendship between users."],
        ["GET", "/api/friends", "x-user-id", "Lists all friends of the current user."],
        ["POST", "/api/follows/:targetUserId", "x-user-id", "Follows a creator/user unidirectionally."],
        ["DELETE", "/api/follows/:targetUserId", "x-user-id", "Unfollows a creator/user."],
        ["POST", "/api/blocks/:targetUserId", "x-user-id", "Blocks a user: breaks friendship, deletes mutual follows, cancels requests."],
        ["DELETE", "/api/blocks/:targetUserId", "x-user-id", "Unblocks a user."],
        ["GET", "/api/social/relationship/:targetUserId", "x-user-id", "Real-time evaluation: isFriend, isFollowing, isFollowedBy, isBlocked."]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.1), Inches(2.0), Inches(1.0), Inches(2.17)])

    path = os.path.join("docs", "03_BACKEND_SERVICES", "Social_Graph_Service_Specification.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_social_features_doc():
    doc = create_base_doc(
        title="Social Relationships Feature Specification",
        doc_id="DOC-09-FEAT-SOC-001",
        category="09_FEATURE_SPECIFICATIONS",
        version="1.0.0",
        status="Implemented & Verified"
    )

    add_heading_1(doc, "1. Strict Blocking Invariants")
    add_p(doc, "When User A blocks User B, the system executes an atomic transaction that: (1) Creates the Block record, (2) Permanently deletes any existing Friendship between A and B, (3) Permanently deletes any Follow relations (both A following B and B following A), and (4) Cancels all pending FriendRequests between them. Furthermore, blocked users are rejected immediately with a 403 ForbiddenException if they attempt to interact.")

    path = os.path.join("docs", "09_FEATURE_SPECIFICATIONS", "Social_Relationships.docx")
    doc.save(path)
    print(f"Generated {path}")

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), ".."))
    print("Generating Phase 4 DOCX...")
    build_user_service_spec()
    build_social_service_spec()
    build_social_features_doc()
    print("Completed Phase 4 Documentation.")
