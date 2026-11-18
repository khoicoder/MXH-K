# -*- coding: utf-8 -*-
"""
Dữ liệu sinh tài liệu Phần 4:
- 06_DATABASE (4 tài liệu)
- 07_DEVOPS_INFRASTRUCTURE (1 tài liệu)
- 08_TESTING (5 tài liệu)
"""

from vietnamese_doc_builder import (
    create_vietnamese_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_bullet, add_callout, add_styled_table,
    add_ba_notes_section, add_user_operations_guide, add_technical_glossary,
    save_document
)

def generate_part4():
    print("=== BẮT ĐẦU SINH TÀI LIỆU PHẦN 4 (DATABASE, DEVOPS & TESTING) ===")

    # =========================================================
    # 06_DATABASE (4 tài liệu)
    # =========================================================

    # 1. Database_Design.docx
    doc1 = create_vietnamese_base_doc(
        title="Đặc Tả Thiết Kế Chi Tiết Cơ Sở Dữ Liệu Phân Tán",
        doc_id="DOC-06-DESIGN-001",
        category_name="06_DATABASE"
    )
    add_heading_1(doc1, "1. Lược Đồ Dữ Liệu & Chuẩn Hóa")
    add_p(doc1, "Thiết kế cơ sở dữ liệu của MXH-K tuân thủ chuẩn 3NF (Third Normal Form) nhằm hạn chế dư thừa dữ liệu, đồng thời kết hợp linh hoạt kiểu dữ liệu JSONB của PostgreSQL để lưu trữ metadata mở rộng:")
    add_bullet(doc1, "Mỗi bảng đều có trường ID định dạng UUID v4 sinh ngẫu nhiên, createdAt (mốc thời gian tạo) và updatedAt (mốc thời gian sửa đổi).", "Trường chuẩn hóa")
    add_bullet(doc1, "Bảng posts (post_db): Lưu trữ tác giả, nội dung, phạm vi hiển thị (PUBLIC, FRIENDS, PRIVATE), cờ ghim bài và số đếm tương tác được cập nhật nguyên tử.", "Bảng bài viết")
    add_bullet(doc1, "Bảng post_media: Lưu danh sách tệp đính kèm với thứ tự hiển thị (orderIndex) và loại phương tiện (IMAGE, VIDEO).", "Bảng đa phương tiện")
    add_bullet(doc1, "Bảng reactions & comments (interact_db): Quản lý tương tác với khóa ngoại liên kết logic tới postId.", "Bảng tương tác")

    add_ba_notes_section(
        doc1,
        business_goal="Thiết lập nền tảng dữ liệu vững chắc, chuẩn hóa quan hệ giữa các đối tượng để đảm bảo dữ liệu luôn nhất quán, không xảy ra hiện tượng mâu thuẫn dữ liệu.",
        user_flow_items=[
            ("Lưu trữ bền bỉ", "Mỗi bài viết khi được đăng sẽ tự động tạo một bản ghi chính trong bảng posts và các bản ghi phụ trong post_media và hashtags.")
        ],
        acceptance_criteria_items=[
            ("AC-DBD-01", "Dữ liệu bài viết và tương tác không bị mất đi khi máy chủ hoặc container bị khởi động lại."),
            ("AC-DBD-02", "Mọi thao tác ghi dữ liệu đều phải tuân thủ tính toán vẹn ACID.")
        ],
        implemented_fixes_items=[
            ("Lưu trữ quan hệ hoàn chỉnh", "Khai báo đầy đủ quan hệ giữa posts, post_media và hashtags trong Prisma Schema của post_db, chấm dứt hoàn toàn việc lưu trữ tạm thời.")
        ]
    )
    add_user_operations_guide(
        doc1,
        user_instructions=[
            ("Bảo toàn thông tin", "Người dùng hoàn toàn yên tâm mọi bài viết và kỷ niệm lưu lại trên trang cá nhân đều được lưu giữ vĩnh viễn.")
        ],
        admin_instructions=[
            ("Kiểm tra cấu trúc bảng", "Kết nối vào PostgreSQL bằng lệnh 'docker exec -it mxh-postgres psql -U postgres -d post_db' và chạy '\\dt' để xem danh sách bảng.")
        ],
        troubleshooting_items=[
            ("Lỗi xung đột khóa ngoại", "Đảm bảo dịch vụ cha đã hoàn tất việc tạo bản ghi trước khi gọi dịch vụ con tạo bản ghi liên kết.")
        ]
    )
    add_technical_glossary(doc1, [
        ("Third Normal Form (3NF)", "Dạng chuẩn 3", "Mức độ chuẩn hóa cơ sở dữ liệu trong đó mọi thuộc tính không khóa đều phụ thuộc trực tiếp vào khóa chính và không phụ thuộc bắc cầu."),
        ("Atomic Update", "Cập nhật nguyên tử", "Phép toán cập nhật dữ liệu diễn ra trọn vẹn trong một bước duy nhất, không thể bị chen ngang bởi giao dịch khác (ví dụ: Tăng số like thêm 1).")
    ])
    save_document(doc1, "06_DATABASE/Database_Design.docx")

    # 2. Database_Indexing_Strategy.docx
    doc2 = create_vietnamese_base_doc(
        title="Chiến Lược Lập Chỉ Mục & Phân Trang Con Trỏ Tối Ưu",
        doc_id="DOC-06-INDEX-002",
        category_name="06_DATABASE"
    )
    add_heading_1(doc2, "1. Chiến Lược Chỉ Mục Composite & Phân Trang Tốc Độ Cao")
    add_p(doc2, "Nhằm duy trì tốc độ truy vấn ổn định khi dữ liệu tăng trưởng lên hàng triệu bản ghi, hệ thống áp dụng các loại chỉ mục tiên tiến:")
    add_bullet(doc2, "Chỉ mục phức hợp (Composite Index): CREATE INDEX idx_posts_author_created ON posts(author_id, created_at DESC) phục vụ tải bài viết trên trang cá nhân dưới 5ms.", "Chỉ mục phức hợp")
    add_bullet(doc2, "Phân trang con trỏ (Cursor Pagination): Sử dụng mốc created_at hoặc ID làm con trỏ thay thế cho OFFSET cổ điển, loại bỏ việc quét toàn bộ bảng (Full Table Scan).", "Phân trang con trỏ")
    add_bullet(doc2, "Chỉ mục GIN (Generalized Inverted Index): Lập chỉ mục trên các cột mảng hashtags và tìm kiếm văn bản toàn diện.", "Chỉ mục toàn văn")

    add_ba_notes_section(
        doc2,
        business_goal="Đảm bảo người dùng trải nghiệm việc cuộn vô tận (Infinite Scrolling) liên tục mà không gặp tình trạng đơ giật hay bài viết bị trùng lặp.",
        user_flow_items=[
            ("Cuộn xem bài mượt mà", "Khi cuộn đến cuối danh sách, 10 bài tiếp theo được nạp tức thì trong vòng 50ms.")
        ],
        acceptance_criteria_items=[
            ("AC-IDX-01", "Không xảy ra hiện tượng bài viết bị lặp lại hai lần khi đang cuộn bảng tin trong lúc có người dùng khác vừa đăng bài mới.")
        ],
        implemented_fixes_items=[
            ("Chuyển đổi sang phân trang con trỏ", "Áp dụng phân trang theo mốc createdAt và nextCursor cho toàn bộ API /api/feed và /api/posts.")
        ]
    )
    add_user_operations_guide(
        doc2,
        user_instructions=[
            ("Khám phá tin tức", "Cứ tự nhiên cuộn màn hình để thưởng thức các nội dung thú vị từ cộng đồng.")
        ],
        admin_instructions=[
            ("Kiểm tra hiệu năng truy vấn", "Sử dụng lệnh EXPLAIN ANALYZE trên psql để kiểm tra xem PostgreSQL có đang tận dụng đúng chỉ mục Index Scan hay không.")
        ],
        troubleshooting_items=[
            ("Truy vấn chậm", "Kiểm tra xem bảng đã được chạy lệnh 'VACUUM ANALYZE' để cập nhật thống kê chỉ mục hay chưa.")
        ]
    )
    add_technical_glossary(doc2, [
        ("Full Table Scan", "Quét toàn bộ bảng", "Hành vi cơ sở dữ liệu phải duyệt qua từng hàng trên đĩa cứng để tìm kết quả khi thiếu chỉ mục, gây suy giảm nghiêm trọng hiệu năng."),
        ("Index Scan", "Quét theo chỉ mục", "Cơ chế tìm kiếm trực tiếp trên cây chỉ mục, giúp tìm thấy dữ liệu chỉ sau vài bước đọc đĩa."),
        ("Offset Degradation", "Suy giảm hiệu năng của Offset", "Hiện tượng câu lệnh 'OFFSET 100000 LIMIT 10' chạy cực kỳ chậm do cơ sở dữ liệu phải đọc và bỏ qua 100,000 hàng đầu tiên.")
    ])
    save_document(doc2, "06_DATABASE/Database_Indexing_Strategy.docx")

    # 3. Entity_Relationship_Description.docx
    doc3 = create_vietnamese_base_doc(
        title="Đặc Tả Mô Tả Thực Thể & Mối Quan Hệ (Entity-Relationship)",
        doc_id="DOC-06-ERD-003",
        category_name="06_DATABASE"
    )
    add_heading_1(doc3, "1. Bản Đồ Mối Quan Hệ Giữa Các Thực Thể Phân Tán")
    add_p(doc3, "Mô hình ERD của mạng xã hội MXH-K được phân bổ trên 10 cơ sở dữ liệu độc lập, liên kết qua các khóa ngoại logic (UUIDs):")
    add_bullet(doc3, "Thực thể Người dùng (User / Profile): Sở hữu nhiều bài viết (1-N), nhiều tương tác cảm xúc (1-N) và nhiều mối quan hệ bạn bè (N-N).", "Thực thể người dùng")
    add_bullet(doc3, "Thực thể Bài viết (Post): Thuộc về một tác giả (N-1), chứa nhiều tệp đa phương tiện (1-N), liên kết nhiều thẻ hashtag (N-N) và nhận nhiều cảm xúc/bình luận (1-N).", "Thực thể bài viết")
    add_bullet(doc3, "Thực thể Tương tác (Reaction / Comment): Liên kết logic với Post và User, có cơ chế phân cấp cha-con (parentId) cho bình luận trả lời.", "Thực thể tương tác")

    add_ba_notes_section(
        doc3,
        business_goal="Phản ánh đầy đủ thế giới quan tương tác xã hội vào trong cấu trúc dữ liệu, bảo đảm tính mạch lạc và dễ dàng mở rộng tính năng mới.",
        user_flow_items=[
            ("Hồ sơ và Bài viết", "Nhấp vào tên hoặc avatar của tác giả trên bài viết sẽ chuyển thẳng đến trang cá nhân hiển thị toàn bộ bài viết của người đó.")
        ],
        acceptance_criteria_items=[
            ("AC-ERD-01", "Mọi thực thể phải có khóa chính duy nhất không trùng lặp và lưu trữ đúng cơ sở dữ liệu chuyên biệt của vi dịch vụ sở hữu.")
        ],
        implemented_fixes_items=[
            ("Chuẩn hóa mối quan hệ phân tán", "Xác định rõ ràng authorId trong post_db tham chiếu tới userId trong auth_db và user_db qua tầng ứng dụng.")
        ]
    )
    add_user_operations_guide(
        doc3,
        user_instructions=[
            ("Xem thông tin bạn bè", "Bấm vào bất kỳ người dùng nào trên bảng tin để khám phá trang cá nhân của họ.")
        ],
        admin_instructions=[
            ("Quan sát lược đồ Prisma", "Xem chi tiết mô hình tại các tệp 'schema.prisma' bên trong từng thư mục dịch vụ.")
        ],
        troubleshooting_items=[
            ("Dữ liệu mồ côi (Orphan Records)", "Khi xóa một bài viết, Post Service sẽ tự động xóa kèm toàn bộ post_media liên quan nhờ cơ chế Cascade Delete.")
        ]
    )
    add_technical_glossary(doc3, [
        ("Entity-Relationship Diagram (ERD)", "Sơ đồ thực thể quan hệ", "Bản vẽ mô hình hóa trực quan các bảng dữ liệu và mối liên kết logic giữa chúng."),
        ("Cascade Delete", "Xóa theo tầng", "Cơ chế tự động xóa các bản ghi con khi bản ghi cha tương ứng bị xóa để tránh dữ liệu rác.")
    ])
    save_document(doc3, "06_DATABASE/Entity_Relationship_Description.docx")

    # 4. Migration_Guide.docx
    doc4 = create_vietnamese_base_doc(
        title="Hướng Dẫn Di Chuyển Lược Đồ & Khởi Tạo Dữ Liệu (Migration & Seeding)",
        doc_id="DOC-06-MIG-004",
        category_name="06_DATABASE"
    )
    add_heading_1(doc4, "1. Quy Trình Di Chuyển Lược Đồ với Prisma ORM")
    add_p(doc4, "Toàn bộ việc khởi tạo bảng và nâng cấp lược đồ cơ sở dữ liệu được tự động hóa qua công cụ Prisma Migrations:")
    add_bullet(doc4, "Tạo bản di chuyển mới: Sử dụng lệnh 'npx prisma migrate dev --name <ten_thay_doi>' để đồng bộ mã nguồn schema vào database.", "Tạo Migration")
    add_bullet(doc4, "Triển khai lên máy chủ sản xuất: Chạy lệnh 'npx prisma migrate deploy' đảm bảo an toàn không làm mất dữ liệu hiện hữu.", "Triển khai sản xuất")
    add_bullet(doc4, "Khởi tạo dữ liệu mẫu (Database Seeding): Khởi tạo tài khoản quản trị viên và các phân loại hệ thống cơ bản.", "Dữ liệu mẫu")

    add_ba_notes_section(
        doc4,
        business_goal="Bảo đảm quy trình nâng cấp phần mềm diễn ra trơn tru, không phát sinh thời gian chết (Zero-downtime Deployment) và không làm mất dữ liệu khách hàng.",
        user_flow_items=[
            ("Nâng cấp vô hình", "Hệ thống nâng cấp tính năng mới mà người dùng vẫn có thể đăng bài và trò chuyện bình thường.")
        ],
        acceptance_criteria_items=[
            ("AC-MIG-01", "Tuyệt đối không sử dụng lệnh 'prisma migrate reset' trên môi trường sản xuất để tránh làm sạch dữ liệu.")
        ],
        implemented_fixes_items=[
            ("Bảo toàn dữ liệu thật", "Đã di chuyển và giữ nguyên toàn bộ 11 bài viết thật và 26 tài khoản người dùng thật có sẵn trong PostgreSQL.")
        ]
    )
    add_user_operations_guide(
        doc4,
        user_instructions=[
            ("Người dùng cuối", "Không cần thực hiện bất kỳ thao tác kỹ thuật nào.")
        ],
        admin_instructions=[
            ("Chạy di chuyển lược đồ", "Di chuyển vào thư mục dịch vụ tương ứng và chạy lệnh 'npx prisma migrate deploy'."),
            ("Kiểm tra trạng thái", "Chạy 'npx prisma migrate status' để kiểm tra xem có bản di chuyển nào chưa được áp dụng hay không.")
        ],
        troubleshooting_items=[
            ("Lỗi Migration lock", "Nếu có tiến trình di chuyển bị treo, kiểm tra bảng '_prisma_migrations' trong cơ sở dữ liệu.")
        ]
    )
    add_technical_glossary(doc4, [
        ("Database Migration", "Di chuyển cơ sở dữ liệu", "Tiến trình quản lý phiên bản của cấu trúc cơ sở dữ liệu, cho phép nâng cấp hoặc hạ cấp có kiểm soát."),
        ("Database Seeding", "Gieo dữ liệu ban đầu", "Quy trình nạp dữ liệu ban đầu cần thiết cho hệ thống hoạt động ngay sau khi khởi tạo bảng mới.")
    ])
    save_document(doc4, "06_DATABASE/Migration_Guide.docx")

    # =========================================================
    # 07_DEVOPS_INFRASTRUCTURE (1 tài liệu)
    # =========================================================

    # 5. Docker_Configuration.docx
    doc5 = create_vietnamese_base_doc(
        title="Đặc Tả Cấu Hình Hạ Tầng DevOps & Đóng Gói Docker",
        doc_id="DOC-07-DEVOPS-001",
        category_name="07_DEVOPS_INFRASTRUCTURE"
    )
    add_heading_1(doc5, "1. Kiến Trúc Container Đóng Gói (Docker Compose)")
    add_p(doc5, "Hạ tầng kỹ thuật nền tảng được quản lý hoàn toàn bằng Docker Compose, bảo đảm tính nhất quán giữa môi trường lập trình và máy chủ thực tế:")
    add_bullet(doc5, "Container mxh-postgres (Port 5432): Chạy PostgreSQL 16 Alpine, gắn ổ đĩa lưu trữ bền vững (Docker Named Volume: postgres_data).", "Cơ sở dữ liệu")
    add_bullet(doc5, "Container mxh-redis (Port 6380): Chạy Redis 7 Alpine phục vụ lưu cache bảng tin và phiên người dùng.", "Bộ nhớ đệm")
    add_bullet(doc5, "Container mxh-rabbitmq (Port 5672, 15672): Phục vụ hàng đợi thông điệp và bảng điều khiển quản trị web.", "Hàng đợi thông điệp")
    add_bullet(doc5, "Container mxh-s3-storage (Port 9090): MinIO tương thích chuẩn AWS S3 phục vụ lưu trữ tệp tin đối tượng quy mô lớn.", "Lưu trữ đối tượng")

    add_ba_notes_section(
        doc5,
        business_goal="Chuẩn hóa môi trường triển khai chỉ bằng 1 câu lệnh, giảm thời gian chuẩn bị môi trường cho kỹ sư mới từ 2 ngày xuống còn dưới 5 phút.",
        user_flow_items=[
            ("Hoạt động bền bỉ 24/7", "Các dịch vụ tự động khởi động lại nếu gặp sự cố nhờ chính sách 'restart: unless-stopped'.")
        ],
        acceptance_criteria_items=[
            ("AC-OPS-01", "Dữ liệu trong postgres_data volume không bị xóa khi chạy lệnh 'docker-compose down' thông thường.")
        ],
        implemented_fixes_items=[
            ("Script Sao lưu tự động", "Xây dựng tệp scripts/backup-db.ps1 và scripts/restore-db.ps1 để tự động hóa toàn bộ việc sao lưu và phục hồi thảm họa.")
        ]
    )
    add_user_operations_guide(
        doc5,
        user_instructions=[
            ("Sử dụng bình thường", "Toàn bộ hạ tầng container vận hành ngầm định và tự động.")
        ],
        admin_instructions=[
            ("Khởi động hạ tầng", "Chạy lệnh 'docker-compose up -d' để bật toàn bộ cụm container."),
            ("Kiểm tra trạng thái container", "Chạy lệnh 'docker ps' để xác nhận tất cả container đều có trạng thái 'Up'."),
            ("Sao lưu khẩn cấp", "Chạy lệnh 'powershell -ExecutionPolicy Bypass -File ./scripts/backup-db.ps1'.")
        ],
        troubleshooting_items=[
            ("Container bị lỗi khởi động (CrashLoopBackOff)", "Xem chi tiết lỗi bằng lệnh 'docker logs <container_name>'.")
        ]
    )
    add_technical_glossary(doc5, [
        ("Docker Named Volume", "Ổ đĩa có tên của Docker", "Cơ chế lưu trữ dữ liệu bền vững của Docker được quản lý độc lập ngoài vòng đời của container, không bị mất khi container bị hủy."),
        ("Disaster Recovery Plan (DRP)", "Kế hoạch phục hồi sau thảm họa", "Quy trình kỹ thuật được thiết lập sẵn nhằm khôi phục toàn bộ dữ liệu và hệ thống phần mềm sau sự cố nghiêm trọng.")
    ])
    save_document(doc5, "07_DEVOPS_INFRASTRUCTURE/Docker_Configuration.docx")

    # =========================================================
    # 08_TESTING (5 tài liệu)
    # =========================================================

    test_docs = [
        ("E2E_Test_Report.docx", "DOC-08-TEST-E2E", "Báo Cáo Kiểm Thử Toàn Trình Đầu Cuối (E2E Test Report)",
         "Báo cáo thực thi kiểm thử toàn trình từ khởi tạo tài khoản, tạo bài viết, kiểm tra lưu trữ PostgreSQL, phân quyền xóa bài đến dọn dẹp cache.",
         [
             ["Mã kịch bản", "Nội dung kiểm thử", "Kết quả thực tế", "Đánh giá"],
             ["TC-E2E-01", "Đăng ký và xác thực tài khoản kiểm thử", "Nhận Access Token JWT hợp lệ", "ĐẠT (PASSED)"],
             ["TC-E2E-02", "Tạo bài viết đính kèm hình ảnh và thẻ #Hashtag", "Lưu trữ thành công vào post_db và post_media", "ĐẠT (PASSED)"],
             ["TC-E2E-03", "Kiểm tra phân quyền xóa bài viết của người khác", "Máy chủ từ chối với mã lỗi 403 Forbidden", "ĐẠT (PASSED)"],
             ["TC-E2E-04", "Tác giả thực hiện xóa bài viết của chính mình", "Xóa thành công, tự động làm sạch cache bảng tin", "ĐẠT (PASSED)"]
         ]),

        ("Google_OAuth_Test_Report.docx", "DOC-08-TEST-OAUTH", "Báo Cáo Kiểm Thử Xác Thực Đăng Nhập Google OAuth",
         "Báo cáo kiểm thử luồng xác thực một chạm qua Google Cloud OAuth 2.0 và xử lý đường dẫn động Cloudflare Tunnel.",
         [
             ["Mã kịch bản", "Nội dung kiểm thử", "Kết quả thực tế", "Đánh giá"],
             ["TC-OAUTH-01", "Sinh URL xác thực từ endpoint /api/auth/google/url", "Tạo URL Google Accounts chính xác kèm tham số redirect_uri", "ĐẠT (PASSED)"],
             ["TC-OAUTH-02", "Xác thực mã ủy quyền và cấp phát tài khoản", "Tự động liên kết tài khoản và cấp phát JWT token", "ĐẠT (PASSED)"],
             ["TC-OAUTH-03", "Khắc phục lỗi nạp biến môi trường dotenv trên API Gateway", "Google Client Secret được nạp chuẩn xác, không còn lỗi 500", "ĐẠT (PASSED)"]
         ]),

        ("Integration_Test_Report.docx", "DOC-08-TEST-INT", "Báo Cáo Kiểm Thử Tích Hợp Liên Dịch Vụ (Integration Test)",
         "Báo cáo kiểm thử việc giao tiếp giữa API Gateway, Redis Cache, các dịch vụ nghiệp vụ và PostgreSQL.",
         [
             ["Mã kịch bản", "Nội dung kiểm thử", "Kết quả thực tế", "Đánh giá"],
             ["TC-INT-01", "Giao tiếp giữa Feed Service và Redis Cache", "Đọc bảng tin từ Redis với độ trễ < 20ms", "ĐẠT (PASSED)"],
             ["TC-INT-02", "Cơ chế Fallback khi ngắt kết nối Redis", "Tự động chuyển sang truy vấn trực tiếp post_db", "ĐẠT (PASSED)"],
             ["TC-INT-03", "Đồng bộ ảnh đại diện giữa Media Service và User Service", "Avatar được lưu đường dẫn tĩnh hợp lệ", "ĐẠT (PASSED)"]
         ]),

        ("Security_Test_Report.docx", "DOC-08-TEST-SEC", "Báo Cáo Kiểm Thử An Toàn Thông Tin & Quét Lỗ Hổng",
         "Báo cáo kiểm thử chống rò rỉ bí mật mã nguồn, chống tấn công XSS, SQL Injection và kiểm soát phân quyền.",
         [
             ["Mã kịch bản", "Nội dung kiểm thử", "Kết quả thực tế", "Đánh giá"],
             ["TC-SEC-01", "Quét khóa bí mật trong lịch sử Git (Push Protection)", "Đã loại bỏ 100% Google Secret khỏi các commit", "ĐẠT (PASSED)"],
             ["TC-SEC-02", "Chống tấn công nội suy mã độc SQL Injection", "Prisma ORM tham số hóa toàn bộ truy vấn an toàn", "ĐẠT (PASSED)"],
             ["TC-SEC-03", "Kiểm soát truy cập tài nguyên sở hữu (IDOR Check)", "Chặn thành công việc sửa xóa tài nguyên trái phép", "ĐẠT (PASSED)"]
         ]),

        ("Testing_Strategy.docx", "DOC-08-TEST-STRAT", "Chiến Lược Kiểm Thử Phần Mềm Toàn Diện (Testing Strategy)",
         "Đặc tả kim tự tháp kiểm thử phần mềm áp dụng cho hệ sinh thái MXH-K từ Unit Test, Integration Test đến E2E Test.",
         [
             ["Tầng kiểm thử", "Công cụ sử dụng", "Phạm vi kiểm thử", "Tỷ lệ bao phủ mục tiêu"],
             ["Unit Testing", "Jest / Vitest", "Kiểm thử các hàm nghiệp vụ, bóc tách hashtag, tính toán", ">= 80%"],
             ["Integration Testing", "Supertest / Testcontainers", "Kiểm thử giao tiếp API và tương tác cơ sở dữ liệu", ">= 75%"],
             ["End-to-End Testing", "Playwright / Custom Node.js Script", "Kiểm thử hành trình người dùng toàn vẹn trên giao diện", "100% luồng chính"]
         ])
    ]

    for fname, doc_id, title, desc, test_rows in test_docs:
        d = create_vietnamese_base_doc(
            title=title,
            doc_id=doc_id,
            category_name="08_TESTING"
        )
        add_heading_1(d, "1. Mục Tiêu & Phạm Vi Kiểm Thử")
        add_p(d, desc)
        
        add_heading_2(d, "2. Bảng Kết Quả Thực Thi Kiểm Thử Chi Tiết")
        headers = test_rows[0]
        data = test_rows[1:]
        add_styled_table(d, headers, data)
        
        add_ba_notes_section(
            d,
            business_goal="Kiểm soát chất lượng phần mềm nghiêm ngặt, đảm bảo không có bất kỳ lỗi hồi quy (Regression Bugs) nào lọt vào môi trường người dùng thật.",
            user_flow_items=[
                ("Sự tin cậy tuyệt đối", "Mọi tính năng từ đăng nhập, đăng ảnh đến bình luận đều được kiểm thử tự động trước khi triển khai.")
            ],
            acceptance_criteria_items=[
                ("AC-TEST-01", "Tất cả các ca kiểm thử trong báo cáo đều phải đạt trạng thái ĐẠT (PASSED) 100% trước khi phát hành."),
                ("AC-TEST-02", "Thời gian thực thi bộ kiểm thử tự động toàn trình không vượt quá 30 giây.")
            ],
            implemented_fixes_items=[
                ("Xây dựng kịch bản kiểm thử độc lập", "Viết kịch bản 'tests/persistence-e2e.test.js' chạy tự động kiểm tra tính bền bỉ của dữ liệu và phân quyền.")
            ]
        )
        
        add_user_operations_guide(
            d,
            user_instructions=[
                ("Người dùng cuối", "Thụ hưởng một sản phẩm mạng xã hội ổn định, không bị lỗi vặt trong quá trình sử dụng.")
            ],
            admin_instructions=[
                ("Chạy bộ kiểm thử tự động", "Thực thi lệnh 'node tests/persistence-e2e.test.js' tại thư mục gốc.")
            ],
            troubleshooting_items=[
                ("Kiểm thử thất bại", "Kiểm tra xem các container Docker và API Gateway có đang bật sẵn sàng hay không.")
            ]
        )
        
        add_technical_glossary(d, [
            ("End-to-End (E2E) Testing", "Kiểm thử toàn trình đầu cuối", "Phương pháp kiểm thử mô phỏng chính xác toàn bộ hành vi của người dùng thực từ giao diện tới cơ sở dữ liệu."),
            ("Regression Testing", "Kiểm thử hồi quy", "Kiểm tra lại toàn bộ hệ thống sau khi có sửa đổi mã nguồn để đảm bảo các tính năng cũ không bị ảnh hưởng lỗi."),
            ("IDOR (Insecure Direct Object References)", "Tham chiếu đối tượng trực tiếp không an toàn", "Lỗ hổng bảo mật cho phép kẻ tấn công truy cập hoặc sửa đổi tài nguyên của người khác bằng cách thay đổi ID trong yêu cầu.")
        ])
        
        save_document(d, f"08_TESTING/{fname}")

    print("=== HOÀN TẤT SINH TÀI LIỆU PHẦN 4 (10 TÀI LIỆU) ===")

if __name__ == "__main__":
    generate_part4()
