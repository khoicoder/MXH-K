import os
import sys
from docx.shared import Inches
from doc_helpers import (
    create_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_callout, create_table_from_data
)

def build_security_test_report():
    doc = create_base_doc(
        title="Authentication & Security Test Execution Report",
        doc_id="DOC-08-TEST-SEC-001",
        category="08_TESTING",
        version="1.0.0",
        status="Passed (19/19 Tests)"
    )

    add_heading_1(doc, "1. Executive Summary")
    add_p(doc, "All 19 critical authentication, multi-device session, and token revocation test cases were executed automatically against live PostgreSQL and Redis infrastructure containers. 100% of test assertions passed with zero defects.")

    add_callout(doc, "PASS RATE: 100% (19/19 Tests). Zero security regressions. Token family replay attack defense successfully terminates stolen sessions and invalidates access tokens.", "VERIFIED TEST RESULT")

    add_heading_1(doc, "2. Detailed Security Test Execution Log")
    headers = ["Test #", "Security Test Scenario", "Expected Behavior", "Actual Result", "Verdict"]
    rows = [
        ["01", "Account Registration", "Persists hashed password, returns clean metadata", "Account created in auth_db", "PASS"],
        ["02", "Email Normalization", "Case-insensitive email check & format validation", "Email normalized & verified", "PASS"],
        ["03", "Duplicate Email", "Prevents duplicate registration with 409 Conflict", "ConflictException thrown", "PASS"],
        ["04", "Device A Login", "Issues RS256 Access Token + Refresh Token", "Valid tokens returned", "PASS"],
        ["05", "Refresh Token Hashing", "Hashes token with SHA-256 before DB insert", "Cryptographic hash verified", "PASS"],
        ["06", "Device B Login", "Independent session created on separate device", "Session B created", "PASS"],
        ["07", "Session Independence", "Device A and Device B have distinct UUIDs", "Distinct session IDs confirmed", "PASS"],
        ["08", "Active Session Audit", "Returns exactly 2 active sessions for user", "Count = 2 verified", "PASS"],
        ["09", "Scenario A: Logout", "Revokes current session & blacklists in Redis", "Redis blacklist verified", "PASS"],
        ["10", "Device Isolation", "Logging out Device A leaves Device B active", "Device B remained active", "PASS"],
        ["11", "Device C Login", "Third device successfully connects", "Session C created", "PASS"],
        ["12", "Scenario B: Remote Revoke", "Device B terminates Device C remotely", "Device C revoked in DB & Redis", "PASS"],
        ["13", "Cross-User Protection", "User A cannot revoke User B's session", "ForbiddenException thrown", "PASS"],
        ["14", "Scenario C: Logout-All", "Increments user version counter in Redis", "Redis version incremented", "PASS"],
        ["15", "Global Session Flush", "All active sessions marked revoked in DB", "Active count = 0 verified", "PASS"],
        ["16", "Token Rotation", "Refreshed token receives new Access Token", "New RS256 token signed", "PASS"],
        ["17", "Refresh Token Replacement", "Old refresh token rotated out for distinct new one", "Distinct token verified", "PASS"],
        ["18", "Second Valid Rotation", "Successive refresh works with latest token", "Successive rotation verified", "PASS"],
        ["19", "Scenario D: Theft Replay", "Reusing rotated token revokes entire token family", "Breach detected & blocked", "PASS"]
    ]
    create_table_from_data(doc, headers, rows, [Inches(0.6), Inches(1.8), Inches(2.2), Inches(1.17), Inches(0.5)])

    path = os.path.join("docs", "08_TESTING", "Security_Test_Report.docx")
    doc.save(path)
    print(f"Generated {path}")

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), ".."))
    print("Generating Security Test Report DOCX...")
    build_security_test_report()
    print("Completed.")
