# -*- coding: utf-8 -*-
"""
Dữ liệu sinh tài liệu Phần 5:
- 09_FEATURE_SPECIFICATIONS (8 tài liệu)
- 10_CHANGELOG (2 tài liệu)
- Master Document: tai-lieu-ky-thuat-mxh-k.docx (1 tài liệu)
"""

from vietnamese_doc_builder import (
    create_vietnamese_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_bullet, add_callout, add_styled_table,
    add_ba_notes_section, add_user_operations_guide, add_technical_glossary,
    save_document
)

def generate_part5():
    print("=== BẮT ĐẦU SINH TÀI LIỆU PHẦN 5 (TÍNH NĂNG, CHANGELOG & TÀI LIỆU TỔNG THỂ) ===")

    # =========================================================
    # 09_FEATURE_SPECIFICATIONS (8 tài liệu)
    # =========================================================

    feature_specs = [
        ("Authentication_Feature.docx", "DOC-09-FEAT-AUTH", "Đặc Tả Tính Năng Xác Thực & Quản Lý Phiên Thiết Bị",
         "Phân tích chuyên sâu tính năng đăng ký, đăng nhập mật khẩu, bảo vệ phiên đăng nhập và khả năng duy trì trạng thái đăng nhập trên thiết bị.",
         "Người dùng có thể đăng nhập liền mạch và an toàn tuyệt đối trên cả điện thoại di động và máy tính.",
         [
             ("Khắc phục phiên làm việc", "Khắc phục hiện tượng mất phiên khi làm mới trang trên môi trường di động thông qua cơ chế lưu trữ token an toàn.")
         ]),

        ("Google_OAuth_Integration.docx", "DOC-09-FEAT-OAUTH", "Đặc Tả Tính Năng Đăng Nhập Một Chạm Google OAuth 2.0",
         "Quy trình tích hợp đăng nhập qua tài khoản Google Cloud, ánh xạ thông tin hồ sơ và xử lý tên miền biến đổi trên Cloudflare Tunnel.",
         "Đăng nhập chỉ với 1 cú nhấp chuột mà không cần ghi nhớ thêm mật khẩu mới.",
         [
             ("Khắc phục triệt để lỗi Google Auth 500", "Bổ sung dotenv.config() nạp biến môi trường cho API Gateway và thêm bắt lỗi Redis reconnection.")
         ]),

        ("News_Feed.docx", "DOC-09-FEAT-FEED", "Đặc Tả Tính Năng Bảng Tin Dòng Thời Gian (News Feed)",
         "Đặc tả trải nghiệm lướt bảng tin, thuật toán sắp xếp bài viết theo thời gian thực và cơ chế đồng bộ hóa bài viết mới.",
         "Hiển thị đầy đủ bài viết của bạn bè và các bài viết công khai nổi bật với tốc độ tức thời.",
         [
             ("Loại bỏ bài viết giả lập (Mock)", "Xóa bỏ các bài viết mẫu 'Nguyễn Thành Nam', 'Trần Mai Phương', kết nối 100% dữ liệu thực từ PostgreSQL.")
         ]),

        ("Notification_Feature.docx", "DOC-09-FEAT-NOTIF", "Đặc Tả Tính Năng Thông Báo Đẩy Thời Gian Thực",
         "Hệ thống thông báo đẩy thông minh thông báo khi có người tương tác bài viết, trả lời bình luận hoặc gửi lời mời kết bạn.",
         "Chuông thông báo hiển thị chấm đỏ kèm thông tin ngắn gọn ngay khi có tương tác mới.",
         [
             ("Sửa lỗi thông báo tương tác & kết bạn", "Cập nhật Notification Gateway tự động kích hoạt sự kiện khi có like, comment hoặc kết bạn.")
         ]),

        ("Post_Management.docx", "DOC-09-FEAT-POST", "Đặc Tả Tính Năng Quản Lý Bài Viết & Đăng Ảnh Máy Tính",
         "Đặc tả tính năng tạo bài viết, tải hình ảnh trực tiếp từ thư mục máy tính, phân tích hashtag và quyền xóa bài của tác giả.",
         "Cho phép đăng tải nhiều ảnh từ máy tính cá nhân lên bài viết với tỷ lệ hiển thị đẹp mắt.",
         [
             ("Hỗ trợ tải ảnh từ máy tính", "Phát triển chức năng upload ảnh cục bộ từ thiết bị và lưu trữ bền vững tại thư mục uploads/.")
         ]),

        ("Reactions_Comments.docx", "DOC-09-FEAT-REACT", "Đặc Tả Tính Năng Bày Tỏ Cảm Xúc & Bình Luận Phân Cấp",
         "Đặc tả 6 biểu tượng cảm xúc xã hội và luồng thảo luận bình luận đa cấp theo thời gian thực qua WebSockets.",
         "Tương tác cảm xúc và bình luận hiển thị ngay lập tức trên màn hình của tất cả người đang xem.",
         [
             ("Đồng bộ cảm xúc thời gian thực", "Lưu vĩnh viễn cảm xúc vào interact_db và phát sóng cập nhật qua Socket.IO.")
         ]),

        ("Reels_Feature.docx", "DOC-09-FEAT-REELS", "Đặc Tả Tính Năng Video Ngắn Toàn Màn Hình (Reels)",
         "Đặc tả trải nghiệm xem video ngắn tỷ lệ 9:16 tối ưu hóa cho màn hình cảm ứng điện thoại thông minh.",
         "Xem video dọc tràn viền, vuốt chuyển video mượt mà kèm thanh công cụ cảm ứng chuẩn di động.",
         [
             ("Tối ưu Reels Mobile", "Thiết kế giao diện Reels tràn viền chuẩn 9:16 với modal bình luận Bottom Sheet thuận tiện cho ngón tay cái.")
         ]),

        ("Social_Relationships.docx", "DOC-09-FEAT-SOCIAL", "Đặc Tả Tính Năng Mạng Lưới Bạn Bè & Tìm Kiếm Người Thật",
         "Đặc tả quy trình kết bạn, theo dõi và tìm kiếm người dùng thật từ cơ sở dữ liệu hệ thống.",
         "Khám phá danh sách bạn bè thật và tìm kiếm người dùng chính xác theo họ tên hoặc email.",
         [
             ("Khám phá người dùng thật", "Nâng cấp trang Bạn bè và công cụ Tìm kiếm kết nối trực tiếp vào cơ sở dữ liệu tài khoản thật.")
         ])
    ]

    for fname, doc_id, title, desc, user_benefit, fixes_list in feature_specs:
        d = create_vietnamese_base_doc(
            title=title,
            doc_id=doc_id,
            category_name="09_FEATURE_SPECIFICATIONS"
        )
        add_heading_1(d, "1. Mô Tả Tổng Quan & Giá Trị Tính Năng")
        add_p(d, desc)
        add_callout(d, "Lợi ích đối với Người dùng", user_benefit)

        add_ba_notes_section(
            d,
            business_goal=f"Cung cấp tính năng {title} hoàn chỉnh, tiện dụng, đóng vai trò then chốt trong việc xây dựng hệ sinh thái mạng xã hội hoàn chỉnh.",
            user_flow_items=[
                ("Trải nghiệm trực quan", "Mọi thao tác của người dùng được phản hồi ngay trên giao diện trong vòng 100ms."),
                ("Tương thích đa nền tảng", "Hoạt động hoàn hảo trên mọi thiết bị di động thông minh, máy tính bảng và máy tính để bàn.")
            ],
            acceptance_criteria_items=[
                ("AC-FEAT-01", "Dữ liệu liên quan đến tính năng phải được lưu trữ bền vững trong cơ sở dữ liệu chuyên biệt."),
                ("AC-FEAT-02", "Giao diện phải tuân thủ chuẩn thiết kế Mobile-First, không bị tràn màn hình.")
            ],
            implemented_fixes_items=fixes_list
        )

        add_user_operations_guide(
            d,
            user_instructions=[
                ("Sử dụng tính năng", "Truy cập tính năng tương ứng từ thanh điều hướng trên cùng hoặc thanh điều hướng đáy của điện thoại.")
            ],
            admin_instructions=[
                ("Kiểm tra hoạt động", "Xác nhận vi dịch vụ tương ứng đang chạy bình thường trong cụm NestJS.")
            ],
            troubleshooting_items=[
                ("Sự cố thao tác", "Nếu gặp lỗi, làm mới lại trang web hoặc kiểm tra lại kết nối mạng Internet.")
            ]
        )

        add_technical_glossary(d, [
            ("Feature Specification", "Đặc tả tính năng", "Tài liệu mô tả chi tiết yêu cầu, thiết kế và luồng xử lý của một chức năng cụ thể trong phần mềm."),
            ("Acceptance Criteria (AC)", "Tiêu chuẩn nghiệm thu", "Bộ điều kiện cụ thể để xác nhận một tính năng đã hoàn thành đúng yêu cầu nghiệp vụ.")
        ])

        save_document(d, f"09_FEATURE_SPECIFICATIONS/{fname}")

    # =========================================================
    # 10_CHANGELOG (2 tài liệu)
    # =========================================================

    # 9. Architecture_Decision_Records.docx
    doc9 = create_vietnamese_base_doc(
        title="Biên Bản Quyết Định Kiến Trúc Hệ Thống (ADR)",
        doc_id="DOC-10-ADR-001",
        category_name="10_CHANGELOG"
    )
    add_heading_1(doc9, "1. Danh Mục Các Quyết Định Kiến Trúc Then Chốt (ADRs)")
    add_p(doc9, "Tài liệu ghi lại toàn bộ các quyết định kỹ thuật mang tính chiến lược đã được thảo luận và phê duyệt:")
    
    adr_headers = ["Mã ADR", "Chủ đề quyết định", "Quyết định lựa chọn", "Lý do kỹ thuật & Lợi ích mang lại"]
    adr_data = [
        ["ADR-01", "Mô hình Cơ sở dữ liệu", "Database-per-Service (10 DB)", "Cách ly hoàn toàn rủi ro dữ liệu, cho phép mở rộng độc lập từng dịch vụ"],
        ["ADR-02", "Bộ đệm Bảng tin", "Redis Cache + Fallback PostgreSQL", "Tối ưu tốc độ tải bảng tin dưới 30ms, tự động lùi về DB nếu cache gián đoạn"],
        ["ADR-03", "Lưu trữ Tệp Đa phương tiện", "Local Disk Storage /uploads/", "Cho phép tải ảnh trực tiếp từ máy tính cá nhân nhanh chóng, an toàn"],
        ["ADR-04", "Thiết kế Giao diện", "Mobile-First Design & Safe Area", "Tối ưu hóa trải nghiệm cho hơn 80% người dùng truy cập từ điện thoại di động"],
        ["ADR-05", "Xác thực Một chạm", "Google OAuth 2.0 Authorization Code", "Đăng nhập tiện lợi không cần mật khẩu, tương thích với Cloudflare Tunnel"]
    ]
    add_styled_table(doc9, adr_headers, adr_data, [25, 40, 45, 50])

    add_ba_notes_section(
        doc9,
        business_goal="Minh bạch hóa các lý do kỹ thuật và cơ sở lựa chọn công nghệ, giúp các thế hệ kỹ sư tiếp theo hiểu rõ ngữ cảnh kiến trúc hệ thống.",
        user_flow_items=[
            ("Tính nhất quán", "Mọi quyết định đều lấy sự ổn định của hệ thống và sự hài lòng của người dùng làm trung tâm.")
        ],
        acceptance_criteria_items=[
            ("AC-ADR-01", "Mọi quyết định kiến trúc thay đổi cấu trúc dữ liệu hoặc giao tiếp đều phải được lập biên bản ADR.")
        ],
        implemented_fixes_items=[
            ("Ghi nhận ADR-02 đến ADR-05", "Bổ sung chính thức các quyết định chuyển đổi Persistent Storage, sửa lỗi Google Auth và thiết kế Mobile-First.")
        ]
    )
    add_user_operations_guide(
        doc9,
        user_instructions=[
            ("Đối tượng tham khảo", "Dành cho các Chuyên viên Phân tích Nghiệp vụ (BA), Kiến trúc sư Phần mềm (SA) và Kỹ sư Phát triển.")
        ],
        admin_instructions=[
            ("Cập nhật quyết định mới", "Khi có sự thay đổi lớn về kiến trúc, bổ sung bản ghi ADR mới vào tài liệu này.")
        ],
        troubleshooting_items=[
            ("Đánh giá lại quyết định", "Định kỳ hàng quý rà soát lại các ADR để xem xét việc áp dụng công nghệ mới hơn.")
        ]
    )
    add_technical_glossary(doc9, [
        ("Architecture Decision Record (ADR)", "Biên bản ghi nhận quyết định kiến trúc", "Tài liệu ghi lại một quyết định kiến trúc quan trọng kèm theo bối cảnh, các phương án xem xét và hậu quả lựa chọn."),
        ("Trade-off Analysis", "Phân tích đánh đổi", "Quá trình cân nhắc giữa ưu điểm và nhược điểm của các giải pháp kỹ thuật trước khi đưa ra quyết định cuối cùng.")
    ])
    save_document(doc9, "10_CHANGELOG/Architecture_Decision_Records.docx")

    # 10. Project_Changelog.docx
    doc10 = create_vietnamese_base_doc(
        title="Nhật Ký Thay Đổi Dự Án & Các Cột Mốc Phát Hành (Project Changelog)",
        doc_id="DOC-10-CHANGELOG-002",
        category_name="10_CHANGELOG"
    )
    add_heading_1(doc10, "1. Lịch Sử Phát Hành & Bản Vá Sản Xuất (Release History)")
    add_p(doc10, "Nhật ký ghi lại toàn bộ các phiên bản phát hành và các đợt sửa lỗi sản xuất quan trọng:")
    
    cl_headers = ["Phiên bản", "Ngày phát hành", "Nội dung nâng cấp & Sửa lỗi quan trọng", "Trạng thái"]
    cl_data = [
        ["v2.0.0", "18/11/2026", "Tối ưu hóa Mobile-First toàn diện, Safe Area iPhone, Bottom Nav, xuất bản tài liệu kỹ thuật Word Tiếng Việt chuẩn mực", "HOÀN THÀNH"],
        ["v1.9.0", "18/11/2026", "Chuyển đổi Persistent Storage sang 100% PostgreSQL, loại bỏ hoàn toàn mock demo posts, bổ sung script backup/restore tự động", "HOÀN THÀNH"],
        ["v1.8.0", "17/11/2026", "Sửa lỗi Google Auth 500 do nạp dotenv và lỗi Redis, hỗ trợ Cloudflare Tunnel", "HOÀN THÀNH"],
        ["v1.7.0", "17/11/2026", "Thêm chức năng tải ảnh từ máy tính cho bài viết và ảnh đại diện qua /api/uploads/", "HOÀN THÀNH"],
        ["v1.6.0", "17/11/2026", "Nâng cấp tìm kiếm người dùng thật và trang Bạn bè thấy người dùng thật", "HOÀN THÀNH"],
        ["v1.5.0", "17/11/2026", "Đồng bộ hóa tương tác cảm xúc, bình luận và thông báo đẩy theo thời gian thực", "HOÀN THÀNH"],
        ["v1.0.0", "15/11/2026", "Khởi tạo kiến trúc Microservices 10 database và giao diện Next.js chuẩn Facebook", "HOÀN THÀNH"]
    ]
    add_styled_table(doc10, cl_headers, cl_data, [25, 30, 80, 25])

    add_ba_notes_section(
        doc10,
        business_goal="Theo dõi tiến độ phát triển và duy trì lịch sử kiểm soát thay đổi phục vụ công tác quản lý chất lượng và chuyển giao dự án.",
        user_flow_items=[
            ("Tính minh bạch", "Người dùng và các bên liên quan dễ dàng nắm bắt các tính năng mới được cập nhật trong từng phiên bản.")
        ],
        acceptance_criteria_items=[
            ("AC-CL-01", "Mọi thay đổi mã nguồn triển khai lên sản xuất đều phải được đánh số phiên bản ngữ nghĩa (Semantic Versioning).")
        ],
        implemented_fixes_items=[
            ("Ghi nhận đầy đủ bản vá", "Toàn bộ các yêu cầu từ bài viết thật, upload ảnh, sửa lỗi Google 500 và tối ưu Mobile đều được tổng hợp đầy đủ.")
        ]
    )
    add_user_operations_guide(
        doc10,
        user_instructions=[
            ("Xem thông tin cập nhật", "Người dùng có thể theo dõi danh sách các cải tiến mới trong thông báo cập nhật hệ thống.")
        ],
        admin_instructions=[
            ("Quản lý phiên bản", "Sử dụng 'git tag' để gắn nhãn phiên bản tương ứng trên kho lưu trữ Git.")
        ],
        troubleshooting_items=[
            ("Kiểm tra phiên bản hiện tại", "Xem tệp package.json tại thư mục gốc.")
        ]
    )
    add_technical_glossary(doc10, [
        ("Semantic Versioning (SemVer)", "Đánh số phiên bản theo ngữ nghĩa", "Quy ước đặt số phiên bản phần mềm theo dạng MAJOR.MINOR.PATCH phản ánh mức độ thay đổi của mã nguồn."),
        ("Hotfix", "Bản vá khẩn cấp", "Bản sửa lỗi được phát hành ngay lập tức để khắc phục sự cố nghiêm trọng trên môi trường sản xuất.")
    ])
    save_document(doc10, "10_CHANGELOG/Project_Changelog.docx")

    # =========================================================
    # Master Document: tai-lieu-ky-thuat-mxh-k.docx (Root)
    # =========================================================
    doc_master = create_vietnamese_base_doc(
        title="Tài Liệu Đặc Tả Kỹ Thuật & Vận Hành Toàn Diện Hệ Thống Mạng Xã Hội Phân Tán MXH-K",
        doc_id="DOC-MASTER-MXHK-2026",
        category_name="TÀI LIỆU KỸ THUẬT TỔNG THỂ"
    )
    add_heading_1(doc_master, "1. Giới Thiệu Chung & Bối Cảnh Hệ Thống")
    add_p(doc_master, "MXH-K là giải pháp nền tảng mạng xã hội doanh nghiệp cao cấp được thiết kế theo kiến trúc Vi dịch vụ (Microservices Architecture), bao gồm 10 dịch vụ nghiệp vụ chuyên biệt với 10 cơ sở dữ liệu PostgreSQL độc lập, điều phối qua API Gateway duy nhất, bộ nhớ đệm phân tầng Redis và hàng đợi sự kiện RabbitMQ. Hệ thống hỗ trợ tương tác cảm xúc thời gian thực (Socket.IO), video ngắn Reels 9:16, tải ảnh từ máy tính, kết bạn người dùng thật và tối ưu hóa toàn diện cho thiết bị di động (Mobile-First).")
    add_callout(doc_master, "Tuyên ngôn Bền vững & Sẵn sàng Sản xuất", "Hệ thống loại bỏ hoàn toàn các cơ chế lưu trữ tạm thời trong bộ nhớ (In-memory mock). Mọi bài viết, tệp ảnh tải lên và thông tin tài khoản được lưu trữ bền vững (Persistent Storage) trên đĩa cứng vật lý và PostgreSQL, sẵn sàng triển khai trên quy mô lớn.")

    add_heading_1(doc_master, "2. Danh Sách 10 Vi Dịch Vụ & 10 Cơ Sở Dữ Liệu Độc Lập")
    master_db_headers = ["Vi Dịch Vụ", "Cơ Sở Dữ Liệu", "Cổng Dịch Vụ", "Nghiệp Vụ & Dữ Liệu Cốt Lõi"]
    master_db_data = [
        ["Auth Service", "auth_db", "Port 4000 (/api/auth)", "Định danh, mật khẩu Argon2id, Google OAuth 2.0, cấp phát JWT"],
        ["User Service", "user_db", "Port 4000 (/api/users)", "Hồ sơ cá nhân, ảnh đại diện, ảnh bìa, cài đặt tài khoản"],
        ["Post Service", "post_db", "Port 4000 (/api/posts)", "Vòng đời bài viết, phân quyền tác giả, thẻ #Hashtags, ảnh đính kèm"],
        ["Feed Service", "feed_db", "Port 4000 (/api/feed)", "Bảng tin cá nhân hóa, bảng tin công khai, Redis Cache 30s"],
        ["Interaction Service", "interact_db", "Port 4000 (/api/interactions)", "6 loại cảm xúc, bình luận phân cấp, đồng bộ Socket.IO"],
        ["Media Service", "media_db", "Port 4000 (/api/media, /api/uploads)", "Tải ảnh từ máy tính cá nhân, phục vụ tệp tĩnh bền vững"],
        ["Social Graph Service", "social_db", "Port 4000 (/api/social)", "Bạn bè thật hai chiều, theo dõi một chiều, danh sách chặn"],
        ["Reels Service", "reels_db", "Port 4000 (/api/reels)", "Video ngắn tỷ lệ 9:16 toàn màn hình di động, tương tác video"],
        ["Notification Service", "notif_db", "Port 4000 (/api/notifications)", "Thông báo đẩy WebSockets khi có like, comment, kết bạn"],
        ["Search Service", "search_db", "Port 4000 (/api/search)", "Tìm kiếm người dùng thật theo họ tên/email và bài viết theo từ khóa"]
    ]
    add_styled_table(doc_master, master_db_headers, master_db_data, [35, 30, 35, 60])

    add_ba_notes_section(
        doc_master,
        business_goal="Xây dựng nền tảng mạng xã hội Make in Vietnam hoàn chỉnh, an toàn, độc lập về công nghệ, có khả năng mở rộng không giới hạn và mang lại giá trị tương tác xã hội cao nhất cho người dùng.",
        user_flow_items=[
            ("Đăng ký & Đăng nhập", "Người dùng tiếp cận qua web/mobile, đăng nhập một chạm qua Google hoặc email, nhận token an toàn."),
            ("Tương tác & Chia sẻ", "Soạn bài viết, chọn ảnh từ máy tính, gắn thẻ #hashtag, đăng bài tức thì và xuất hiện ngay trên bảng tin."),
            ("Kết nối bạn bè thật", "Tìm kiếm người dùng thật, gửi lời mời kết bạn và nhận thông báo đẩy thời gian thực.")
        ],
        acceptance_criteria_items=[
            ("AC-MASTER-01", "Dữ liệu bài viết, hình ảnh và tài khoản không bị mất sau khi tắt máy chủ hoặc khởi động lại container."),
            ("AC-MASTER-02", "Giao diện hiển thị sắc nét trên mọi kích thước màn hình từ 320px đến 1440px+, chuẩn tiếp xúc cảm ứng 44x44px."),
            ("AC-MASTER-03", "Đăng nhập Google OAuth hoạt động ổn định trên các tên miền động của Cloudflare Tunnel.")
        ],
        implemented_fixes_items=[
            ("Khắc phục lưu trữ Demo sang Persistent Storage", "Loại bỏ hoàn toàn mock demo posts trong page.tsx, chuyển 100% sang PostgreSQL và Redis Cache Fallback."),
            ("Khắc phục lỗi Google Auth 500", "Bổ sung dotenv.config() nạp biến môi trường cho API Gateway và thêm cơ chế tự phục hồi kết nối Redis."),
            ("Hỗ trợ tải ảnh từ máy tính", "Xây dựng endpoint upload tệp nhị phân multipart/form-data và phục vụ ảnh qua đường dẫn tĩnh /api/uploads/."),
            ("Đồng bộ thời gian thực & Cloudflare", "Cấu hình Next.js Rewrites và polling fallback cho kết nối Socket.IO."),
            ("Tối ưu hóa Mobile-First UX", "Xây dựng thanh điều hướng đáy di động (Mobile Bottom Nav) có Safe Area cho iPhone, tối ưu thẻ bài viết và Reels 9:16."),
            ("Tự động hóa sao lưu & khôi phục", "Xây dựng bộ kịch bản PowerShell scripts/backup-db.ps1 và scripts/restore-db.ps1.")
        ]
    )

    add_user_operations_guide(
        doc_master,
        user_instructions=[
            ("Trải nghiệm mạng xã hội", "Mở trình duyệt truy cập địa chỉ máy chủ, đăng nhập bằng Google hoặc tài khoản riêng."),
            ("Chia sẻ nội dung", "Soạn thảo bài viết, đính kèm ảnh kỷ niệm từ máy tính và nhấn 'Đăng bài'."),
            ("Khám phá video Reels", "Chuyển sang mục Reels để lướt xem video ngắn toàn màn hình.")
        ],
        admin_instructions=[
            ("Khởi động hệ thống hàng ngày", "Chạy 'npm run dev:server' để mở Backend API Gateway cổng 4000; chạy 'npm run dev' để mở Frontend Web cổng 3000."),
            ("Vận hành Cloudflare Tunnel", "Chạy 'npx cloudflared tunnel --url http://localhost:3000', sau đó cập nhật domain mới vào 'Authorized redirect URIs' trên Google Cloud Console."),
            ("Sao lưu dữ liệu định kỳ", "Chạy 'powershell -ExecutionPolicy Bypass -File ./scripts/backup-db.ps1' để sao lưu an toàn toàn bộ 10 database và thư mục ảnh uploads/.")
        ],
        troubleshooting_items=[
            ("Lỗi Google Auth 500 sau khi khởi động lại", "Do domain Cloudflare Tunnel bị đổi mới. Hãy sao chép URL mới vào Google Cloud Console Credentials."),
            ("Lỗi Port 4000 in use", "Kiểm tra tiến trình đang chiếm cổng và tắt bằng lệnh 'taskkill /PID <PID> /F'.")
        ]
    )

    add_technical_glossary(doc_master, [
        ("Microservices Architecture", "Kiến trúc vi dịch vụ", "Mô hình kiến trúc phần mềm phân tán trong đó mỗi dịch vụ đảm nhận một nghiệp vụ riêng biệt và sở hữu cơ sở dữ liệu độc lập."),
        ("Database-per-Service", "Mỗi dịch vụ một cơ sở dữ liệu", "Quy chuẩn kiến trúc cấm việc truy cập chéo cơ sở dữ liệu, đảm bảo tính đóng gói và an toàn tuyệt đối cho dữ liệu."),
        ("Persistent Storage", "Lưu trữ bền vững", "Cơ chế bảo toàn dữ liệu trên đĩa cứng vật lý và hệ quản trị cơ sở dữ liệu, không bị mất khi ứng dụng tắt."),
        ("Redis Cache Fallback", "Dự phòng bộ nhớ đệm Redis", "Cơ chế đọc dữ liệu từ bộ đệm tốc độ cao, nhưng tự động chuyển sang đọc cơ sở dữ liệu gốc nếu bộ đệm gặp sự cố."),
        ("Single Sign-On (SSO)", "Đăng nhập một chạm", "Cơ chế chứng thực cho phép người dùng đăng nhập bằng một tài khoản duy nhất (Google) trên nhiều ứng dụng."),
        ("Socket.IO / WebSockets", "Giao thức truyền dữ liệu hai chiều thời gian thực", "Kênh truyền thông tin liên tục giữa trình duyệt và máy chủ, phục vụ cập nhật tương tác và thông báo tức thì."),
        ("Safe Area Insets", "Khoảng đệm an toàn màn hình", "Vùng đệm trên thiết bị di động hiện đại (iPhone, Android) để tránh bị che bởi tai thỏ và thanh điều hướng cảm ứng."),
        ("Touch Target Size (44×44px)", "Kích thước vùng chạm cảm ứng", "Chuẩn thiết kế công thái học đảm bảo nút bấm đủ lớn để ngón tay cái chạm chính xác."),
        ("Recovery Point Objective (RPO)", "Mục tiêu điểm phục hồi dữ liệu", "Thời lượng dữ liệu tối đa chấp nhận bị mất khi có thảm họa (hệ thống đạt RPO < 1 giờ nhờ sao lưu định kỳ)."),
        ("Recovery Time Objective (RTO)", "Mục tiêu thời gian phục hồi dịch vụ", "Thời gian tối đa để đưa toàn bộ hệ thống hoạt động trở lại sau sự cố (hệ thống đạt RTO < 5 phút nhờ Docker).")
    ])
    save_document(doc_master, "tai-lieu-ky-thuat-mxh-k.docx")

    print("=== HOÀN TẤT SINH TÀI LIỆU PHẦN 5 (11 TÀI LIỆU) ===")

if __name__ == "__main__":
    generate_part5()
