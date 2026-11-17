import os
import sys
from docx.shared import Inches
from doc_helpers import (
    create_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_callout, create_table_from_data
)

def build_phase8_docs():
    # 1. Frontend Architecture
    doc1 = create_base_doc(
        title="Frontend Architecture Specification",
        doc_id="DOC-04-FRONT-001",
        category="04_FRONTEND",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc1, "1. Next.js 15 App Router & Hydration Strategy")
    add_p(doc1, "The frontend leverages Next.js 15 with App Router. Server Components render initial HTML shells and metadata, while Client Components ('use client') manage interactive state, form validation, real-time WebSocket listening, and video controls.")

    add_heading_1(doc1, "2. State Management Architecture")
    add_p(doc1, "• TanStack Query (React Query v5): Manages server cache, pagination queries, optimistic updates for reactions, and background refetching.")
    add_p(doc1, "• Zustand Store: Manages in-memory auth state, access token lifespan, user session details, and UI theme toggles.")
    doc1.save(os.path.join("docs", "04_FRONTEND", "Frontend_Architecture.docx"))

    # 2. UI/UX Design Specification
    doc2 = create_base_doc(
        title="UI/UX Design Specification",
        doc_id="DOC-04-DESIGN-002",
        category="04_FRONTEND",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc2, "1. Visual Identity & Design Direction")
    add_p(doc2, "Modern minimalist design system inspired by premium social networks (Facebook, Threads, TikTok). Built using Tailwind CSS design tokens, consistent 8px grid spacing, rounded 2xl/3xl corners, subtle shadows, and dark/light mode support.")

    add_heading_1(doc2, "2. Responsive 3-Column Layout")
    add_p(doc2, "Desktop features a fixed Left Navigation Sidebar (260px), Center Main Content Feed (max 768px), and Right Discovery Panel (320px) with Trending Hashtags and Suggested Creators. Mobile switches seamlessly to a 64px bottom touch bar.")
    doc2.save(os.path.join("docs", "04_FRONTEND", "UI_UX_Design_Specification.docx"))

    # 3. Component Architecture
    doc3 = create_base_doc(
        title="Component Architecture Specification",
        doc_id="DOC-04-COMP-003",
        category="04_FRONTEND",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc3, "1. Reusable Component Hierarchy")
    add_p(doc3, "• PostComposer: Multi-line rich text composer with hashtag extraction preview, media upload attachment, and visibility picker.")
    add_p(doc3, "• PostCard: Interactive post card with 6-reaction popover (Like, Love, Haha, Wow, Sad, Angry), threaded comment viewer, and bookmark save.")
    add_p(doc3, "• ReelsPlayer: Vertical full-screen HTML5 video viewport with play/pause, like, save, and watch duration metrics.")
    doc3.save(os.path.join("docs", "04_FRONTEND", "Component_Architecture.docx"))

    # 4. Frontend API Integration
    doc4 = create_base_doc(
        title="Frontend API Integration & Security Specification",
        doc_id="DOC-04-INTEG-004",
        category="04_FRONTEND",
        version="1.0.0",
        status="Implemented & Verified"
    )
    add_heading_1(doc4, "1. Centralized API Client & Token Interceptors")
    add_p(doc4, "The centralized Axios client ('api-client.ts') intercepts every outgoing request to inject 'x-correlation-id' and the in-memory Bearer Access Token. When a 401 response is intercepted, it pauses requests, initiates a refresh call using the HttpOnly cookie, drains the failed queue with the new token, and transparently retries original requests without disrupting the user.")
    doc4.save(os.path.join("docs", "04_FRONTEND", "Frontend_API_Integration.docx"))

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), ".."))
    print("Generating Phase 8 DOCX...")
    build_phase8_docs()
    print("Completed Phase 8 Documentation.")
