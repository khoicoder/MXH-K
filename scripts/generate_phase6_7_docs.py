import os
import sys
from docx.shared import Inches
from doc_helpers import (
    create_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_callout, create_table_from_data
)

def build_phase6_7_specs():
    # 1. Feed Service
    doc1 = create_base_doc(
        title="Feed Service Technical Specification",
        doc_id="DOC-03-FEED-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc1, "1. Algorithmic Feed Ranking & Affinity Model")
    add_p(doc1, "The Feed Service calculates composite ranking scores combining: Affinity (Friends = 50, Following = 30, Trending = 10), Engagement (Reactions * 2, Comments * 5), and Recency decay penalties (-1.5 per hour). Duplicate posts are prohibited by unique database constraints.")
    doc1.save(os.path.join("docs", "03_BACKEND_SERVICES", "Feed_Service_Specification.docx"))

    # 2. Reels Service
    doc2 = create_base_doc(
        title="Reels Service Technical Specification",
        doc_id="DOC-03-REELS-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc2, "1. Short-Form Video & Watch Metrics")
    add_p(doc2, "Reels Service handles vertical video feeds, views aggregation, watch duration tracking, and video bookmarks. Cursor pagination powers frictionless infinite scrolling.")
    doc2.save(os.path.join("docs", "03_BACKEND_SERVICES", "Reels_Service_Specification.docx"))

    # 3. Notification Service
    doc3 = create_base_doc(
        title="Notification Service Technical Specification",
        doc_id="DOC-03-NOTIF-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc3, "1. Real-time WebSocket Push & Activity Center")
    add_p(doc3, "Integrated WebSocket Gateway dispatches instant alerts for reactions, comments, friend requests, and mentions to connected client sockets. Maintains unread badge counts and cursor-paginated notification history.")
    doc3.save(os.path.join("docs", "03_BACKEND_SERVICES", "Notification_Service_Specification.docx"))

    # 4. Search Service
    doc4 = create_base_doc(
        title="Search Service Technical Specification",
        doc_id="DOC-03-SEARCH-001",
        category="03_BACKEND_SERVICES",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc4, "1. Search Indexing & Typeahead Autocomplete")
    add_p(doc4, "Indexes users, publications, and hashtags with popularity weighting. Provides typeahead suggestions and case-insensitive full-text querying.")
    doc4.save(os.path.join("docs", "03_BACKEND_SERVICES", "Search_Service_Specification.docx"))

    # Feature specs
    f_feed = create_base_doc("News Feed Feature Specification", "DOC-09-FEAT-FEED-001", "09_FEATURE_SPECIFICATIONS")
    add_heading_1(f_feed, "1. Personalized Feed Experience")
    add_p(f_feed, "Combines friends and following content with post hiding and recommendation ranking.")
    f_feed.save(os.path.join("docs", "09_FEATURE_SPECIFICATIONS", "News_Feed.docx"))

    f_reel = create_base_doc("Reels Short Video Feature Specification", "DOC-09-FEAT-REEL-001", "09_FEATURE_SPECIFICATIONS")
    add_heading_1(f_reel, "1. Vertical Video Feed")
    add_p(f_reel, "Optimized for continuous scrolling, view analytics, and creator follow shortcuts.")
    f_reel.save(os.path.join("docs", "09_FEATURE_SPECIFICATIONS", "Reels_Feature.docx"))

    f_notif = create_base_doc("Notification Feature Specification", "DOC-09-FEAT-NOTIF-001", "09_FEATURE_SPECIFICATIONS")
    add_heading_1(f_notif, "1. Unified Notification Center")
    add_p(f_notif, "Tracks social events, unread counters, and instant push updates.")
    f_notif.save(os.path.join("docs", "09_FEATURE_SPECIFICATIONS", "Notification_Feature.docx"))

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), ".."))
    print("Generating Phase 6 & 7 DOCX...")
    build_phase6_7_specs()
    print("Completed Phase 6 & 7 Documentation.")
