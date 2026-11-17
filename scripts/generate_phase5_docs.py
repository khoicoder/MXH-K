import os
import sys
from docx.shared import Inches
from doc_helpers import (
    create_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_callout, create_table_from_data
)

def build_post_service_spec():
    doc = create_base_doc(
        title="Post Service Technical Specification",
        doc_id="DOC-03-POST-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )

    add_heading_1(doc, "1. Service Purpose & Scope")
    add_p(doc, "The Post Service manages the lifecycle of social publications, rich multi-media attachments, automatic hashtag extraction (#tag), mentions (@username), visibility controls (PUBLIC, FRIENDS_ONLY, PRIVATE), post pinning, reposting/sharing, and user bookmarks.")

    add_heading_1(doc, "2. API Endpoint Matrix")
    headers = ["HTTP Method", "Path", "Auth Required", "Description & Payload"]
    rows = [
        ["POST", "/api/posts", "x-user-id", "Creates a new post with text, hashtags, and media attachments."],
        ["GET", "/api/posts/:postId", "Public/Auth", "Retrieves post by ID with visibility enforcement."],
        ["PATCH", "/api/posts/:postId", "x-user-id", "Edits post content or visibility (Author only)."],
        ["DELETE", "/api/posts/:postId", "x-user-id", "Soft-deletes a post (sets deletedAt timestamp)."],
        ["POST", "/api/posts/:postId/pin", "x-user-id", "Toggles pinned state of a post on user profile."],
        ["POST", "/api/posts/:postId/save", "x-user-id", "Toggles saving post to personal bookmarks."],
        ["GET", "/api/posts/saved", "x-user-id", "Retrieves bookmarked posts with cursor-based pagination."],
        ["GET", "/api/posts/user/:authorId", "Public/Auth", "Retrieves author posts with pinned items prioritized."]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.1), Inches(1.8), Inches(1.0), Inches(2.37)])

    path = os.path.join("docs", "03_BACKEND_SERVICES", "Post_Service_Specification.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_interaction_service_spec():
    doc = create_base_doc(
        title="Interaction Service Technical Specification",
        doc_id="DOC-03-INTERACT-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )

    add_heading_1(doc, "1. Emotional Reactions & Unique Constraint")
    add_p(doc, "The service supports 6 reaction types: LIKE, LOVE, HAHA, WOW, SAD, ANGRY. The database enforces a unique composite constraint @@unique([userId, targetType, targetId]), guaranteeing that a user can possess at most one active reaction per entity. Clicking an existing active reaction removes it (toggle off), while selecting a new reaction updates the existing record.")

    add_heading_1(doc, "2. Threaded Comments & Depth Clamping")
    add_p(doc, "Comments support hierarchical parent-child relationships. To prevent infinite recursion and degrade query performance, nested replies are strictly clamped at depth = 2 (Root = 0, Reply = 1, Sub-reply = 2).")

    headers = ["HTTP Method", "Path", "Auth Required", "Description & Behavior"]
    rows = [
        ["POST", "/api/reactions", "x-user-id", "Sets, updates, or toggles off an emotional reaction."],
        ["GET", "/api/reactions/:targetType/:id", "Public/Auth", "Returns breakdown of 6 reaction counts and caller's reaction."],
        ["DELETE", "/api/reactions/:targetType/:id", "x-user-id", "Explicitly removes reaction from entity."],
        ["POST", "/api/comments", "x-user-id", "Posts a root or nested reply comment."],
        ["GET", "/api/comments/post/:postId", "Public/Auth", "Fetches threaded comments with cursor pagination."],
        ["PATCH", "/api/comments/:commentId", "x-user-id", "Edits an existing comment (Author only)."],
        ["DELETE", "/api/comments/:commentId", "x-user-id", "Soft-deletes a comment."],
        ["POST", "/api/reports", "x-user-id", "Submits content violation report to moderation queue."]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.1), Inches(2.1), Inches(1.0), Inches(2.07)])

    path = os.path.join("docs", "03_BACKEND_SERVICES", "Interaction_Service_Specification.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_media_service_spec():
    doc = create_base_doc(
        title="Media Service Technical Specification",
        doc_id="DOC-03-MEDIA-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )

    add_heading_1(doc, "1. S3-Compatible Media Lifecycle")
    add_p(doc, "The Media Service manages binary media lifecycles via S3-compatible object storage. It enforces strict file type MIME validations (JPEG, PNG, WEBP, GIF, MP4, WEBM) and size barriers (Images <= 10MB, Videos <= 100MB). Files are assigned UUID storage keys under 'uploads/{uploaderId}/{uuid}.{ext}'.")

    headers = ["HTTP Method", "Path", "Auth Required", "Description & Behavior"]
    rows = [
        ["POST", "/api/media/upload-url", "x-user-id", "Generates S3 upload target URL with type & size validation."],
        ["POST", "/api/media/confirm", "x-user-id", "Confirms upload completion and sets status to ACTIVE."],
        ["GET", "/api/media/:mediaId", "Public/Auth", "Returns file metadata, storage key, and public CDN URL."]
    ]
    create_table_from_data(doc, headers, rows, [Inches(1.1), Inches(1.9), Inches(1.0), Inches(2.27)])

    path = os.path.join("docs", "03_BACKEND_SERVICES", "Media_Service_Specification.docx")
    doc.save(path)
    print(f"Generated {path}")

def build_feature_specs():
    doc1 = create_base_doc(
        title="Post Management Feature Specification",
        doc_id="DOC-09-FEAT-POST-001",
        category="09_FEATURE_SPECIFICATIONS",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc1, "1. Post Lifecycle & Visibility Control")
    add_p(doc1, "Posts transition through ACTIVE -> DELETED states. When visibility is set to PRIVATE, requests from non-authors are denied with 403 Forbidden. Hashtags are extracted in O(N) regex parsing and synchronized to the hashtags index table.")
    path1 = os.path.join("docs", "09_FEATURE_SPECIFICATIONS", "Post_Management.docx")
    doc1.save(path1)

    doc2 = create_base_doc(
        title="Reactions & Comments Feature Specification",
        doc_id="DOC-09-FEAT-REACT-001",
        category="09_FEATURE_SPECIFICATIONS",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc2, "1. Reaction Deduplication & Comment Tree Depth")
    add_p(doc2, "Database level unique constraints prevent duplicate reactions. Reaction totals are calculated dynamically. Comment trees are limited to 3 visual levels (depth 0, 1, 2) to maintain snappy mobile and web render speeds.")
    path2 = os.path.join("docs", "09_FEATURE_SPECIFICATIONS", "Reactions_Comments.docx")
    doc2.save(path2)

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), ".."))
    print("Generating Phase 5 DOCX...")
    build_post_service_spec()
    build_interaction_service_spec()
    build_media_service_spec()
    build_feature_specs()
    print("Completed Phase 5 Documentation.")
