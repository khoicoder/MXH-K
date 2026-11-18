# -*- coding: utf-8 -*-
"""
Dữ liệu sinh tài liệu Phần 1:
- 00_PROJECT_OVERVIEW (3 tài liệu)
- 01_REQUIREMENTS (1 tài liệu)
- 02_ARCHITECTURE (4 tài liệu)
"""

from vietnamese_doc_builder import (
    create_vietnamese_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_bullet, add_callout, add_styled_table,
    add_ba_notes_section, add_user_operations_guide, add_technical_glossary,
    save_document
)

def generate_part1():
    print("=== BẮT ĐẦU SINH TÀI LIỆU PHẦN 1 ===")

    # -------------------------------------------------------------
    # 1. Project_Overview.docx
    # -------------------------------------------------------------
    doc1 = create_vietnamese_base_doc(
        title="Tổng Quan Dự Án & Hiến Chương Kiến Trúc Hệ Thống",
        doc_id="DOC-00-OVERVIEW-001",
        category_name="00_PROJECT_OVERVIEW"
    )
    add_heading_1(doc1, "1. Giới thiệu Dự án & Sứ mệnh Phát triển")
    add_p(doc1, "Dự án MXH-K là nền tảng mạng xã hội doanh nghiệp hiện đại được thiết kế và xây dựng theo chuẩn mực kỹ thuật cao cấp, vận hành trên nền tảng kiến trúc Vi dịch vụ (Microservices Architecture). Dự án hướng đến việc cung cấp một môi trường tương tác xã hội trực tuyến an toàn, tin cậy, mượt mà và bền bỉ, hỗ trợ chia sẻ bài viết đa phương tiện, video ngắn Reels, kết nối bạn bè, tương tác cảm xúc và trò chuyện thời gian thực.")
    add_callout(doc1, "Mục tiêu kiến trúc tối thượng", "Kiên quyết loại bỏ hoàn toàn các cấu trúc nguyên khối (Monolith) và dữ liệu tạm thời trong bộ nhớ (In-memory Mock). Mọi dịch vụ được cô lập độc lập, bảo đảm tính sẵn sàng cao, lưu trữ bền vững (Persistent Storage) và trải nghiệm người dùng tối ưu hóa trên thiết bị di động (Mobile-First).")

    add_heading_1(doc1, "2. Phạm vi & Mục tiêu Cốt lõi của Hệ thống")
    add_p(doc1, "Hệ thống bao quát toàn bộ các nghiệp vụ trọng tâm của một mạng xã hội thế hệ mới:")
    add_bullet(doc1, "Đăng nhập một chạm (Single Sign-On - SSO) qua Google OAuth 2.0 và tài khoản mật khẩu mã hóa Argon2id/Bcrypt.", "Bảo mật định danh")
    add_bullet(doc1, "Bảng tin cá nhân hóa (Personalized Newsfeed) với bộ nhớ đệm phân tầng Redis Cache và lưu trữ PostgreSQL.", "Bảng tin & Khám phá")
    add_bullet(doc1, "Đăng ảnh trực tiếp từ thiết bị máy tính cá nhân hoặc điện thoại di động lên bài viết và trang cá nhân.", "Quản lý đa phương tiện")
    add_bullet(doc1, "Cập nhật lượt thích, bày tỏ cảm xúc và phản hồi bình luận phân cấp theo thời gian thực qua WebSockets / Socket.IO.", "Tương tác Realtime")
    add_bullet(doc1, "Trải nghiệm video ngắn Reels tỷ lệ chuẩn 9:16 toàn màn hình, vuốt chuyển mượt mà trên di động.", "Trải nghiệm Reels")

    add_ba_notes_section(
        doc1,
        business_goal="Xây dựng nền tảng mạng xã hội thuần Việt đạt chuẩn doanh nghiệp quốc tế, có khả năng mở rộng hàng triệu người dùng, tối ưu tỷ lệ tương tác hàng ngày (Daily Active Users - DAU) và lưu giữ phiên người dùng bền bỉ.",
        user_flow_items=[
            ("Bước 1 - Tiếp cận", "Người dùng truy cập domain web thông qua máy tính hoặc trình duyệt di động, tự động nhận diện thiết bị để dàn trang tối ưu."),
            ("Bước 2 - Đăng nhập", "Chọn đăng nhập bằng tài khoản nội bộ hoặc click một chạm vào nút 'Đăng nhập bằng Google'."),
            ("Bước 3 - Trải nghiệm", "Lướt xem bảng tin, đăng bài kèm hình ảnh máy tính, thả tim, bình luận và nhận thông báo đẩy tức thì.")
        ],
        acceptance_criteria_items=[
            ("AC-01 (Toàn vẹn dữ liệu)", "Dữ liệu bài viết, tài khoản và tương tác không bao giờ bị mất hoặc trở về trạng thái mẫu (demo) sau khi khởi động lại máy chủ."),
            ("AC-02 (Độ trễ phản hồi)", "Thời gian tải bảng tin từ bộ đệm Redis dưới 50ms; nếu truy vấn cơ sở dữ liệu PostgreSQL dưới 200ms."),
            ("AC-03 (Tương thích di động)", "Giao diện hiển thị sắc nét trên các độ rộng màn hình từ 320px đến 1440px+, không phát sinh lỗi cuộn ngang.")
        ],
        implemented_fixes_items=[
            ("Khắc phục lưu trữ Demo", "Đã gỡ bỏ toàn bộ danh sách bài viết mẫu cứng ('Nguyễn Thành Nam', 'Trần Mai Phương') trong mã nguồn, chuyển đổi hoàn toàn sang truy vấn PostgreSQL và đệm Redis tự động vô hiệu hóa (Cache Invalidation)."),
            ("Khắc phục lỗi Google Auth 500", "Bổ sung nạp biến môi trường dotenv cho API Gateway và xử lý lỗi ngắt kết nối Redis, giúp đăng nhập qua Google OAuth trên Cloudflare Tunnel hoạt động 100% ổn định.")
        ]
    )

    add_user_operations_guide(
        doc1,
        user_instructions=[
            ("Truy cập hệ thống", "Mở trình duyệt truy cập đường dẫn URL hệ thống (hoặc link Cloudflare Tunnel được cấp)."),
            ("Đăng nhập tài khoản", "Nhấp chuột vào 'Tiếp tục với Google' hoặc nhập thông tin email và mật khẩu."),
            ("Đăng bài viết mới", "Nhập nội dung chia sẻ, bấm biểu tượng 'Hình ảnh' để chọn ảnh từ máy tính, sau đó nhấn 'Đăng bài'.")
        ],
        admin_instructions=[
            ("Khởi động API Gateway", "Chạy lệnh 'npm run dev:server' tại thư mục gốc để mở cổng 4000."),
            ("Khởi động Giao diện Web", "Chạy lệnh 'npm run dev' tại thư mục gốc để mở cổng 3000."),
            ("Sao lưu định kỳ", "Thực thi kịch bản './scripts/backup-db.ps1' để sao lưu an toàn toàn bộ 10 database PostgreSQL và thư mục ảnh uploads/.")
        ],
        troubleshooting_items=[
            ("Lỗi Google Auth 500", "Nguyên nhân do domain Cloudflare Tunnel bị thay đổi sau khi restart. Cách xử lý: Sao chép URL mới vào 'Authorized redirect URIs' trên Google Cloud Console."),
            ("Lỗi bảng tin trống", "Kiểm tra xem container Docker PostgreSQL và Redis có đang chạy hay không bằng lệnh 'docker ps'.")
        ]
    )

    add_technical_glossary(doc1, [
        ("Microservices Architecture", "Kiến trúc vi dịch vụ", "Mô hình phân tách hệ thống lớn thành nhiều dịch vụ chuyên biệt nhỏ, độc lập về triển khai và cơ sở dữ liệu."),
        ("Single Sign-On (SSO)", "Đăng nhập một chạm", "Cơ chế cho phép người dùng xác thực danh tính một lần duy nhất thông qua bên thứ ba (Google) mà không cần tạo mật khẩu riêng."),
        ("Persistent Storage", "Lưu trữ dữ liệu bền vững", "Cơ chế lưu trữ đảm bảo toàn vẹn dữ liệu trên ổ cứng vật lý/cơ sở dữ liệu, không bị mất khi ứng dụng tắt hoặc máy chủ khởi động lại."),
        ("Cache Invalidation", "Vô hiệu hóa bộ nhớ đệm", "Tiến trình xóa hoặc cập nhật bản ghi trong Redis ngay khi có bài viết mới hoặc bài viết bị xóa để đảm bảo bảng tin hiển thị đồng bộ."),
        ("Cloudflare Tunnel", "Đường hầm mạng Cloudflare", "Giải pháp kết nối an toàn từ máy chủ cục bộ (Localhost) ra Internet công cộng mà không cần mở cổng NAT hoặc gán IP tĩnh.")
    ])
    save_document(doc1, "00_PROJECT_OVERVIEW/Project_Overview.docx")

    # -------------------------------------------------------------
    # 2. System_Architecture.docx
    # -------------------------------------------------------------
    doc2 = create_vietnamese_base_doc(
        title="Đặc Tả Kiến Trúc Tổng Thể Hệ Thống Doanh Nghiệp",
        doc_id="DOC-00-ARCH-002",
        category_name="00_PROJECT_OVERVIEW"
    )
    add_heading_1(doc2, "1. Cấu trúc Tổng thể & Ranh giới Vi Dịch vụ")
    add_p(doc2, "Hệ thống MXH-K được tổ chức thành 10 vi dịch vụ độc lập kết nối qua cổng API Gateway duy nhất tại cổng 4000. Kiến trúc tuân thủ nguyên tắc Bounded Context của Domain-Driven Design (DDD):")
    add_bullet(doc2, "API Gateway (Port 4000): Tiếp nhận mọi yêu cầu HTTP/WebSocket từ máy khách, định tuyến, kiểm tra JWT Guard và giới hạn tốc độ (Rate Limiting).", "Cổng giao tiếp")
    add_bullet(doc2, "Auth & User Services: Quản lý định danh, phiên đăng nhập, thông tin tài khoản và phân quyền bảo mật.", "Định danh & Người dùng")
    add_bullet(doc2, "Post, Feed & Reels Services: Xử lý vòng đời bài viết, phân phối bảng tin dòng thời gian và trải nghiệm video ngắn.", "Nội dung & Dòng tin")
    add_bullet(doc2, "Interaction & Notification Services: Tiếp nhận lượt thích, bình luận đa cấp độ và phát thông báo thời gian thực.", "Tương tác & Thông báo")
    add_bullet(doc2, "Social Graph & Search Services: Quản lý mối quan hệ bạn bè, theo dõi và thuật toán tìm kiếm dữ liệu người dùng thật.", "Kết nối & Tra cứu")

    add_ba_notes_section(
        doc2,
        business_goal="Đảm bảo hệ thống đạt độ sẵn sàng cao (High Availability), khi một dịch vụ phụ gặp sự cố (ví dụ Media hoặc Notification) thì các dịch vụ cốt lõi như Đăng nhập, Xem bài viết vẫn vận hành bình thường.",
        user_flow_items=[
            ("Định tuyến thông minh", "Mọi cuộc gọi từ máy khách di động và web đều đi qua API Gateway, ẩn giấu cấu trúc mạng nội bộ phía sau."),
            ("Cách ly lỗi", "Nếu hàng đợi RabbitMQ tạm gián đoạn, dịch vụ bài viết vẫn ghi nhận thành công vào PostgreSQL và trả mã phản hồi 201 cho người dùng.")
        ],
        acceptance_criteria_items=[
            ("AC-ARCH-01", "Không dịch vụ nào được phép truy cập trực tiếp vào cơ sở dữ liệu của dịch vụ khác (Nguyên tắc Database-per-Service tuyệt đối)."),
            ("AC-ARCH-02", "Thời gian xử lý định tuyến tại API Gateway phải nhỏ hơn 5ms.")
        ],
        implemented_fixes_items=[
            ("Tách biệt cơ sở dữ liệu", "Thiết lập 10 cơ sở dữ liệu PostgreSQL độc lập trên Docker: auth_db, user_db, post_db, feed_db, interact_db, media_db, social_db, reels_db, notif_db, search_db."),
            ("Dự phòng kết nối Redis", "Bổ sung bộ lắng nghe lỗi và cơ chế thử lại (Retry Strategy) cho kết nối Redis trong JWT Auth Guard, chống sập cổng API.")
        ]
    )

    add_user_operations_guide(
        doc2,
        user_instructions=[
            ("Truy cập thống nhất", "Người dùng chỉ cần ghi nhớ duy nhất một địa chỉ cổng (Port 3000 cho Web hoặc domain duy nhất), không cần tương tác trực tiếp với các cổng backend lẻ.")
        ],
        admin_instructions=[
            ("Kiểm tra trạng thái các cổng", "Chạy lệnh 'netstat -ano | findstr \"LISTENING\"' để xác nhận các cổng 3000, 4000, 5432, 6380 đều đang mở."),
            ("Khởi động cụm dịch vụ", "Sử dụng 'docker-compose up -d' để kích hoạt toàn bộ cơ sở hạ tầng nền tảng.")
        ],
        troubleshooting_items=[
            ("Lỗi Port in use (EADDRINUSE)", "Sử dụng 'taskkill /PID <PID> /F' để giải phóng cổng bị tiến trình cũ chiếm dụng.")
        ]
    )

    add_technical_glossary(doc2, [
        ("API Gateway", "Cổng kết nối giao diện lập trình", "Điểm đón tiếp duy nhất tiếp nhận tất cả các yêu cầu từ phía máy khách, thực hiện bảo mật, chứng thực và định tuyến vào các dịch vụ con."),
        ("Bounded Context", "Ngữ cảnh giới hạn", "Khái niệm trong thiết kế hướng miền (DDD) xác định ranh giới rõ ràng của một phân hệ nghiệp vụ, dữ liệu và logic."),
        ("Database-per-Service", "Mỗi dịch vụ một cơ sở dữ liệu", "Quy chuẩn kiến trúc đòi hỏi mỗi microservice toàn quyền sở hữu cơ sở dữ liệu riêng, cấm truy cập chéo trực tiếp ở tầng dữ liệu."),
        ("High Availability (HA)", "Độ sẵn sàng cao", "Khả năng hệ thống tiếp tục phục vụ người dùng liên tục mà không bị gián đoạn toàn bộ khi có lỗi cục bộ xảy ra.")
    ])
    save_document(doc2, "00_PROJECT_OVERVIEW/System_Architecture.docx")

    # -------------------------------------------------------------
    # 3. Technology_Stack.docx
    # -------------------------------------------------------------
    doc3 = create_vietnamese_base_doc(
        title="Đặc Tả Toàn Diện Ngăn Xếp Công Nghệ Dự Án (Tech Stack)",
        doc_id="DOC-00-STACK-003",
        category_name="00_PROJECT_OVERVIEW"
    )
    add_heading_1(doc3, "1. Danh mục Ngăn xếp Công nghệ Nền tảng")
    add_p(doc3, "Hệ thống sử dụng các công nghệ dẫn đầu xu hướng công nghiệp phần mềm hiện nay, tối ưu hóa cả về hiệu năng thực thi lẫn năng suất phát triển:")
    
    headers = ["Phân tầng", "Công nghệ chính", "Phiên bản", "Vai trò nghiệp vụ & Kỹ thuật"]
    stack_data = [
        ["Frontend Framework", "Next.js (App Router)", "15.0+", "Dựng giao diện SSR/CSR, định tuyến thông minh, tối ưu SEO và tốc độ tải"],
        ["Ngôn ngữ giao diện", "TypeScript (Strict Mode)", "5.x", "Đảm bảo an toàn kiểu dữ liệu, ngăn ngừa lỗi runtime ở client"],
        ["CSS & Styling", "Tailwind CSS + Shadcn UI", "3.4+", "Thiết kế giao diện phản hồi Mobile-First, giao diện Facebook chuẩn Việt"],
        ["Quản lý trạng thái", "TanStack Query & Zustand", "5.x", "Đồng bộ trạng thái máy chủ, lưu cache cục bộ và kiểm soát thanh điều hướng"],
        ["Backend Framework", "NestJS", "10.x", "Khung kiến trúc backend hướng đối tượng (OOP), Dependency Injection mạnh mẽ"],
        ["Cơ sở dữ liệu chính", "PostgreSQL", "16.x", "Lưu trữ dữ liệu quan hệ bền vững, ACID, hỗ trợ JSONB và tìm kiếm văn bản"],
        ["Bộ đệm thời gian thực", "Redis", "7.x", "Bộ nhớ đệm bảng tin tốc độ cao (In-memory Cache), lưu phiên và token"],
        ["Hàng đợi thông điệp", "RabbitMQ", "3.x", "Truyền tải sự kiện bất đồng bộ giữa các vi dịch vụ (Async Event Broker)"],
        ["Giao tiếp thời gian thực", "Socket.IO / WebSockets", "4.x", "Bắn thông báo đẩy và cập nhật số lượng cảm xúc, bình luận tức thời"],
        ["Container & Môi trường", "Docker & Docker Compose", "26.x", "Đóng gói đồng nhất môi trường phát triển và máy chủ sản xuất"]
    ]
    add_styled_table(doc3, headers, stack_data, [35, 40, 20, 65])

    add_ba_notes_section(
        doc3,
        business_goal="Lựa chọn công nghệ ổn định, có cộng đồng hỗ trợ lớn và hiệu năng đã được kiểm chứng nhằm giảm thiểu chi phí bảo trì và rủi ro kỹ thuật trong tương lai.",
        user_flow_items=[
            ("Trải nghiệm siêu mượt", "Người dùng cảm nhận tốc độ chuyển trang tức thì nhờ kỹ thuật nạp trước (Prefetching) của Next.js 15 và xử lý cache client."),
            ("Không giật lag khi tải ảnh", "Ảnh được nén và hiển thị tối ưu tỉ lệ khung hình (Aspect Ratio) trên mọi dòng điện thoại.")
        ],
        acceptance_criteria_items=[
            ("AC-STK-01", "Toàn bộ mã nguồn phải vượt qua trình biên dịch TypeScript không phát sinh bất kỳ lỗi cú pháp nào (0 Type Errors)."),
            ("AC-STK-02", "Next.js Build thành công 100% tất cả 13 trang định tuyến tĩnh và động.")
        ],
        implemented_fixes_items=[
            ("Dọn dẹp bộ nhớ đệm Next.js", "Xử lý triệt để lỗi Invariant _not-found bằng cách giải phóng thư mục cache .next trước khi đóng gói sản phẩm."),
            ("Chuẩn hóa cấu trúc tsconfig", "Thiết lập tsconfig-paths cho phép nạp mã nguồn trực tiếp giữa các gói module trong monorepo.")
        ]
    )

    add_user_operations_guide(
        doc3,
        user_instructions=[
            ("Trình duyệt khuyến nghị", "Sử dụng Google Chrome, Apple Safari, Microsoft Edge hoặc Cốc Cốc phiên bản mới nhất để có trải nghiệm đồ họa tốt nhất.")
        ],
        admin_instructions=[
            ("Kiểm tra phiên bản Node.js", "Yêu cầu Node.js phiên bản 20.x trở lên (khuyến nghị v20.18 LTS hoặc v22)."),
            ("Kiểm tra Docker Desktop", "Đảm bảo Docker Desktop đã kích hoạt chế độ WSL 2 trên hệ điều hành Windows.")
        ],
        troubleshooting_items=[
            ("Lỗi thiếu thư viện node_modules", "Chạy lệnh 'npm install' để cập nhật đầy đủ các gói phụ thuộc.")
        ]
    )

    add_technical_glossary(doc3, [
        ("Next.js App Router", "Trình định tuyến ứng dụng Next.js", "Cơ chế định tuyến hiện đại dựa trên thư mục của Next.js, hỗ trợ Server Components mặc định."),
        ("Server-Side Rendering (SSR)", "Kết xuất phía máy chủ", "Kỹ thuật tạo mã HTML trực tiếp từ máy chủ trước khi gửi về trình duyệt, tăng tốc độ mở trang ban đầu."),
        ("TanStack Query", "Thư viện quản lý trạng thái máy chủ", "Công cụ điều phối việc lấy dữ liệu (fetching), lưu bộ đệm (caching) và tự động đồng bộ trạng thái backend lên giao diện."),
        ("Argon2id", "Thuật toán băm mật khẩu", "Thuật toán băm mật khẩu an toàn nhất hiện nay, chống lại các cuộc tấn công bẻ khóa bằng phần cứng chuyên dụng (GPU/ASIC).")
    ])
    save_document(doc3, "00_PROJECT_OVERVIEW/Technology_Stack.docx")

    # -------------------------------------------------------------
    # 4. Software_Requirements_Specification.docx
    # -------------------------------------------------------------
    doc4 = create_vietnamese_base_doc(
        title="Đặc Tả Yêu Cầu Phần Mềm Toàn Diện (SRS)",
        doc_id="DOC-01-REQ-001",
        category_name="01_REQUIREMENTS"
    )
    add_heading_1(doc4, "1. Yêu cầu Chức năng Hệ thống (Functional Requirements - FR)")
    add_p(doc4, "Hệ thống đáp ứng 6 nhóm chức năng cốt lõi:")
    add_bullet(doc4, "FR-01: Xác thực tài khoản qua mật khẩu mã hóa hoặc Google OAuth 2.0; cấp phát cặp mã thông báo JWT (Access Token & Refresh Token).", "Định danh người dùng")
    add_bullet(doc4, "FR-02: Đăng tải bài viết kèm văn bản, danh sách thẻ bắt đầu bằng dấu thăng (#Hashtags) và tệp hình ảnh tải trực tiếp từ máy tính.", "Quản lý bài viết")
    add_bullet(doc4, "FR-03: Hiển thị bảng tin Newsfeed dạng danh sách phân trang con trỏ, tự động cập nhật khi có bài viết mới.", "Dòng thông tin")
    add_bullet(doc4, "FR-04: Thả cảm xúc 6 cung bậc (Thích, Yêu thích, Haha, Wow, Buồn, Phẫn nộ) và bình luận phản hồi nhiều tầng.", "Tương tác xã hội")
    add_bullet(doc4, "FR-05: Gửi lời mời kết bạn, chấp nhận kết bạn, theo dõi người dùng và tìm kiếm danh tính người dùng thật từ cơ sở dữ liệu.", "Mạng lưới bạn bè")
    add_bullet(doc4, "FR-06: Xem video ngắn Reels với giao diện toàn màn hình 9:16, hỗ trợ tương tác thả tim và xem danh sách bình luận.", "Video ngắn Reels")

    add_heading_1(doc4, "2. Yêu cầu Phi Chức năng (Non-Functional Requirements - NFR)")
    add_bullet(doc4, "NFR-01 (Hiệu năng): Tốc độ phản hồi API < 100ms với các truy vấn có bộ nhớ đệm Redis và < 300ms với truy vấn phức hợp cơ sở dữ liệu.", "Hiệu năng phản hồi")
    add_bullet(doc4, "NFR-02 (Bảo mật): Tuyệt đối không lưu trữ khóa bí mật trong mã nguồn máy khách hoặc cam kết git công khai; kiểm soát phân quyền tác giả chặt chẽ.", "An toàn thông tin")
    add_bullet(doc4, "NFR-03 (Đáp ứng thiết bị di động): Thiết kế theo triết lý Mobile-First, vùng tiếp xúc chạm của mọi nút bấm tối thiểu 44×44 pixel.", "Trải nghiệm di động")

    add_ba_notes_section(
        doc4,
        business_goal="Định hình toàn bộ quy chuẩn kỹ thuật và tiêu chí nghiệm thu cho sản phẩm mạng xã hội, đảm bảo mọi tính năng được xây dựng bám sát nhu cầu sử dụng thực tế của người dùng.",
        user_flow_items=[
            ("Bảo vệ quyền riêng tư", "Chỉ tác giả thực sự của bài viết mới có quyền xóa bài viết đó; người dùng khác chỉ có quyền xem, thích hoặc bình luận."),
            ("Tìm kiếm bạn bè thật", "Hệ thống kết nối trực tiếp vào bảng cơ sở dữ liệu tài khoản thật, loại bỏ hoàn toàn các danh sách người dùng giả lập.")
        ],
        acceptance_criteria_items=[
            ("AC-REQ-01", "Nếu người dùng chưa đăng nhập, hệ thống vẫn cho phép xem bảng tin bài viết công khai (Public Guest Feed)."),
            ("AC-REQ-02", "Khi nhấn xóa bài viết, chỉ khi mã định danh của người dùng trùng khớp với tác giả bài viết thì hệ thống mới thực hiện xóa.")
        ],
        implemented_fixes_items=[
            ("Mở quyền xem bảng tin công khai", "Điều chỉnh bộ lọc JwtAuthGuard để cho phép phương thức GET /api/feed hoạt động đối với khách vãng lai."),
            ("Kiểm tra phân quyền xóa bài", "Cài đặt kiểm tra so khớp userId giữa token xác thực và trường authorId trong cơ sở dữ liệu post_db.")
        ]
    )

    add_user_operations_guide(
        doc4,
        user_instructions=[
            ("Đăng ký tài khoản", "Nhấp 'Đăng ký', điền họ tên, email, mật khẩu tối thiểu 8 ký tự và hoàn tất tạo tài khoản."),
            ("Quản lý bài viết của tôi", "Người dùng có thể nhấp vào biểu tượng 3 chấm ở góc bài viết do chính mình đăng để thực hiện 'Xóa bài viết'.")
        ],
        admin_instructions=[
            ("Kiểm thử tự động", "Chạy lệnh 'node tests/persistence-e2e.test.js' để xác minh toàn bộ các yêu cầu chức năng về bài viết và phân quyền.")
        ],
        troubleshooting_items=[
            ("Không xóa được bài viết", "Kiểm tra xem bạn có đang đăng nhập đúng tài khoản tác giả đã tạo ra bài viết đó hay không.")
        ]
    )

    add_technical_glossary(doc4, [
        ("Acceptance Criteria (AC)", "Tiêu chí chấp nhận nghiệm thu", "Bộ điều kiện cụ thể mà một tính năng bắt buộc phải đáp ứng hoàn hảo trước khi được bàn giao cho người dùng."),
        ("Non-Functional Requirements (NFR)", "Yêu cầu phi chức năng", "Các tiêu chuẩn đo lường chất lượng hệ thống như tính bảo mật, hiệu năng, độ tin cậy và khả năng mở rộng."),
        ("Guest Feed", "Bảng tin dành cho khách", "Chế độ xem các bài viết công khai trên mạng xã hội dành cho người dùng chưa đăng nhập tài khoản.")
    ])
    save_document(doc4, "01_REQUIREMENTS/Software_Requirements_Specification.docx")

    # -------------------------------------------------------------
    # 5. Database_Architecture.docx
    # -------------------------------------------------------------
    doc5 = create_vietnamese_base_doc(
        title="Đặc Tả Kiến Trúc Cơ Sở Dữ Liệu & Mô Hình 10 DB Phân Tán",
        doc_id="DOC-02-DB-001",
        category_name="02_ARCHITECTURE"
    )
    add_heading_1(doc5, "1. Nguyên tắc Phân lập Cơ sở Dữ liệu (Database Isolation)")
    add_p(doc5, "Hệ thống kiên quyết áp dụng mô hình Database-per-Service với 10 cơ sở dữ liệu PostgreSQL độc lập:")
    
    headers = ["Tên Cơ sở dữ liệu", "Dịch vụ sở hữu", "Các bảng dữ liệu chính", "Chiến lược lưu trữ & Chỉ mục"]
    db_data = [
        ["auth_db", "Auth Service", "users, refresh_tokens, oauth_accounts", "Chỉ mục B-Tree trên email, sessionId và tokenHash"],
        ["user_db", "User Service", "profiles, user_settings", "Chỉ mục B-Tree trên userId, tìm kiếm tên người dùng"],
        ["post_db", "Post Service", "posts, post_media, hashtags, post_hashtags", "Chỉ mục composite (authorId, createdAt DESC), hashtag slug"],
        ["feed_db", "Feed Service", "feed_items, user_timelines", "Chỉ mục phân trang con trỏ (userId, createdAt DESC)"],
        ["interact_db", "Interaction Service", "reactions, comments", "Ràng buộc duy nhất (postId, userId) chống thích trùng lặp"],
        ["media_db", "Media Service", "media_files, upload_records", "Lưu metadata tệp, đường dẫn tệp trên ổ cứng"],
        ["social_db", "Social Graph Service", "friendships, follows, blocks", "Ràng buộc hai chiều quan hệ bạn bè và danh sách chặn"],
        ["reels_db", "Reels Service", "reels_videos, reels_audio", "Chỉ mục thời gian đăng video ngắn, tối ưu tải dọc"],
        ["notif_db", "Notification Service", "notifications, notification_settings", "Chỉ mục (recipientId, isRead, createdAt DESC)"],
        ["search_db", "Search Service", "search_indices, search_history", "Chỉ mục GIN trên tên người dùng và nội dung bài viết"]
    ]
    add_styled_table(doc5, headers, db_data, [30, 35, 45, 50])

    add_ba_notes_section(
        doc5,
        business_goal="Loại bỏ hoàn toàn điểm nghẽn cổ chai (Bottleneck) khi cơ sở dữ liệu nguyên khối quá tải, đồng thời ngăn chặn triệt để nguy cơ lộ lọt chéo dữ liệu giữa các nghiệp vụ.",
        user_flow_items=[
            ("Tính bền bỉ tuyệt đối", "Mọi thay đổi từ đăng bài, cập nhật avatar đến thả tim đều được ghi nhận bền vững xuống đĩa cứng ngay lập tức."),
            ("Đồng bộ bộ nhớ đệm", "Dữ liệu được nạp vào Redis trong 30 giây để phục vụ người dùng tiếp theo với tốc độ tức thời.")
        ],
        acceptance_criteria_items=[
            ("AC-DB-01", "Dữ liệu bài viết lưu trữ trên post_db phải giữ nguyên trạng thái vĩnh viễn dù tắt toàn bộ máy tính hoặc khởi động lại container."),
            ("AC-DB-02", "Mỗi bảng đều có trường khóa chính UUID ngẫu nhiên v4 chống trùng lặp trên môi trường phân tán.")
        ],
        implemented_fixes_items=[
            ("Khắc phục lưu trữ Demo", "Chuyển toàn bộ dữ liệu bài viết sang lưu trữ bảng posts và post_media của PostgreSQL post_db."),
            ("Tự động dọn dẹp Cache", "Kích hoạt hàm invalidateFeedCache() mỗi khi có sự kiện thêm hoặc xóa bài viết trên post_service.")
        ]
    )

    add_user_operations_guide(
        doc5,
        user_instructions=[
            ("Kiểm tra dữ liệu cá nhân", "Người dùng có thể an tâm dữ liệu bài đăng, hình ảnh và danh sách bạn bè luôn được bảo toàn trọn vẹn theo thời gian.")
        ],
        admin_instructions=[
            ("Sao lưu toàn bộ cơ sở dữ liệu", "Chạy script PowerShell: './scripts/backup-db.ps1' để tự động kết xuất tệp sao lưu của cả 10 cơ sở dữ liệu."),
            ("Phục hồi cơ sở dữ liệu từ bản sao", "Chạy script PowerShell: './scripts/restore-db.ps1' để nạp lại dữ liệu trong trường hợp phát sinh sự cố.")
        ],
        troubleshooting_items=[
            ("Lỗi kết nối cơ sở dữ liệu", "Kiểm tra chuỗi kết nối DATABASE_URL trong tệp .env xem đã chỉ đúng cổng 5432 và mật khẩu postgres hay chưa.")
        ]
    )

    add_technical_glossary(doc5, [
        ("UUID v4", "Mã định danh duy nhất toàn cầu phiên bản 4", "Chuỗi định danh 128-bit sinh ngẫu nhiên đảm bảo tính duy nhất tuyệt đối trên toàn hệ thống phân tán."),
        ("B-Tree Index", "Chỉ mục cây cân bằng", "Cấu trúc dữ liệu chỉ mục mặc định giúp tìm kiếm bản ghi theo giá trị hoặc dải giá trị với độ phức tạp O(log N)."),
        ("GIN Index", "Chỉ mục đảo ngược tổng quát", "Loại chỉ mục đặc biệt trong PostgreSQL tối ưu cho việc tìm kiếm toàn văn (Full-text Search) và mảng phần tử."),
        ("ACID Properties", "Thuộc tính ACID", "Bốn tính chất bảo đảm giao dịch cơ sở dữ liệu tin cậy: Nguyên tử (Atomicity), Nhất quán (Consistency), Độc lập (Isolation), Bền vững (Durability).")
    ])
    save_document(doc5, "02_ARCHITECTURE/Database_Architecture.docx")

    # -------------------------------------------------------------
    # 6. Inter_Service_Communication.docx
    # -------------------------------------------------------------
    doc6 = create_vietnamese_base_doc(
        title="Đặc Tả Giao Tiếp Liên Dịch Vụ & Điều Phối Sự Kiện (Event Choreography)",
        doc_id="DOC-02-COMM-002",
        category_name="02_ARCHITECTURE"
    )
    add_heading_1(doc6, "1. Mô hình Giao tiếp Đồng bộ & Bất đồng bộ")
    add_p(doc6, "Hệ thống kết hợp linh hoạt giữa giao thức RESTful cho các tác vụ đồng bộ đòi hỏi kết quả tức thì và mô hình xuất bản/đăng ký (Pub/Sub) qua RabbitMQ cho các tác vụ bất đồng bộ:")
    add_bullet(doc6, "RESTful HTTP/JSON qua API Gateway: Dùng cho các luồng xác thực, đọc dữ liệu bảng tin, lấy chi tiết trang cá nhân.", "Giao tiếp đồng bộ")
    add_bullet(doc6, "RabbitMQ Event Choreography: Khi một bài viết được tạo, Post Service phát sự kiện 'post.created'. Dịch vụ Feed Service lắng nghe để phân phối vào bảng tin của bạn bè; Notification Service lắng nghe để gửi thông báo.", "Giao tiếp bất đồng bộ")
    add_bullet(doc6, "Socket.IO Gateway: Duy trì kết nối hai chiều liên tục giữa trình duyệt của người dùng và máy chủ để truyền tải cảm xúc và tin nhắn thời gian thực.", "Giao tiếp thời gian thực")

    add_ba_notes_section(
        doc6,
        business_goal="Giảm thiểu tối đa thời gian chờ đợi của người dùng khi thực hiện các tác vụ nặng (như phân phối bài viết cho hàng nghìn bạn bè), mang lại trải nghiệm tương tác mượt mà không độ trễ.",
        user_flow_items=[
            ("Đăng bài không giật màn hình", "Người dùng nhấn 'Đăng bài', giao diện lập tức hiển thị bài viết thành công mà không phải chờ máy chủ xử lý phân phối bảng tin nền.")
        ],
        acceptance_criteria_items=[
            ("AC-COMM-01", "Thông điệp trên hàng đợi RabbitMQ không bị mất nếu một worker bị tắt đột ngột (Kích hoạt chế độ Message Durability)."),
            ("AC-COMM-02", "Sự kiện thời gian thực Socket.IO phải tự động chuyển sang chế độ Polling nếu mạng chặn WebSockets.")
        ],
        implemented_fixes_items=[
            ("Cấu hình Polling Fallback", "Bổ sung transports: ['websocket', 'polling'] trong cấu hình Socket.IO của Next.js và Backend để hỗ trợ hoàn hảo đường truyền qua Cloudflare Tunnel.")
        ]
    )

    add_user_operations_guide(
        doc6,
        user_instructions=[
            ("Nhận thông báo tức thì", "Khi có người bày tỏ cảm xúc lên bài viết của bạn, biểu tượng quả chuông trên góc màn hình sẽ lập tức hiển thị chấm đỏ kèm thông tin chi tiết.")
        ],
        admin_instructions=[
            ("Truy cập bảng điều khiển RabbitMQ", "Mở trình duyệt truy cập 'http://localhost:15672', đăng nhập tài khoản guest/guest để quan sát lưu lượng các hàng đợi (Queues).")
        ],
        troubleshooting_items=[
            ("Không nhận được sự kiện realtime", "Kiểm tra xem trình duyệt có đang chặn kết nối WebSocket hay không; hệ thống sẽ tự động hạ cấp xuống polling.")
        ]
    )

    add_technical_glossary(doc6, [
        ("Event Choreography", "Vũ đạo sự kiện", "Mô hình phối hợp dịch vụ phân tán nơi mỗi dịch vụ tự động phản ứng với các sự kiện mà không cần một bộ điều phối trung tâm."),
        ("Pub/Sub (Publish/Subscribe)", "Xuất bản và Đăng ký", "Mô hình gửi nhận thông điệp trong đó người gửi không gửi trực tiếp tới người nhận mà gửi tới một kênh trung gian."),
        ("Polling Fallback", "Dự phòng thăm dò định kỳ", "Cơ chế máy khách gửi các yêu cầu HTTP lặp lại liên tục để lấy dữ liệu mới khi đường truyền WebSocket bị chặn.")
    ])
    save_document(doc6, "02_ARCHITECTURE/Inter_Service_Communication.docx")

    # -------------------------------------------------------------
    # 7. Microservices_Architecture.docx
    # -------------------------------------------------------------
    doc7 = create_vietnamese_base_doc(
        title="Đặc Tả Chi Tiết Kiến Trúc Vi Dịch Vụ & Khả Năng Phục Hồi",
        doc_id="DOC-02-MS-003",
        category_name="02_ARCHITECTURE"
    )
    add_heading_1(doc7, "1. Cấu trúc Mô-đun & Khả năng Tự phục hồi (Resilience)")
    add_p(doc7, "Hệ thống áp dụng các mẫu thiết kế bảo đảm khả năng phục hồi của vi dịch vụ:")
    add_bullet(doc7, "Mẫu ngắt mạch (Circuit Breaker): Ngăn chặn sự cố dây chuyền khi một dịch vụ nội bộ phản hồi chậm hoặc tạm dừng.", "Bảo vệ quá tải")
    add_bullet(doc7, "Bộ đệm đa tầng (Multi-tier Cache): Khi cơ sở dữ liệu tạm thời bận, hệ thống vẫn có thể phục vụ nội dung bài viết từ Redis Cache.", "Dự phòng dữ liệu")
    add_bullet(doc7, "Cơ chế Thử lại có Giãn cách (Exponential Backoff): Tự động kết nối lại các dịch vụ bên ngoài khi gặp gián đoạn mạng tạm thời.", "Tự phục hồi")

    add_ba_notes_section(
        doc7,
        business_goal="Bảo đảm tính liên tục của hoạt động kinh doanh (Business Continuity), duy trì hoạt động của mạng xã hội ngay cả trong điều kiện bảo trì từng phần hoặc lượng truy cập tăng đột biến.",
        user_flow_items=[
            ("Trải nghiệm không gián đoạn", "Nếu một tính năng phụ gặp lỗi, người dùng vẫn có thể xem bảng tin và tương tác bình thường.")
        ],
        acceptance_criteria_items=[
            ("AC-MS-01", "Khi một container dịch vụ khởi động lại, API Gateway phải tự động khôi phục kết nối mà không cần khởi động lại toàn bộ hệ thống.")
        ],
        implemented_fixes_items=[
            ("Cố định kết nối Redis trong API Gateway", "Bổ sung retryStrategy cho kết nối Redis trong JwtAuthGuard, ngăn chặn hiện tượng Unhandled error event làm tắt tiến trình cổng.")
        ]
    )

    add_user_operations_guide(
        doc7,
        user_instructions=[
            ("Tải lại trang", "Trong trường hợp mạng cá nhân bị mất kết nối tạm thời, chỉ cần bấm nút 'Thử lại' trên giao diện.")
        ],
        admin_instructions=[
            ("Khởi động từng dịch vụ độc lập", "Có thể khởi động hoặc dừng riêng lẻ bất kỳ dịch vụ nào bằng lệnh 'docker-compose restart <service_name>'.")
        ],
        troubleshooting_items=[
            ("Khắc phục tiến trình treo", "Kiểm tra log của container tương ứng bằng lệnh 'docker logs -f <container_id>'.")
        ]
    )

    add_technical_glossary(doc7, [
        ("Circuit Breaker", "Bộ ngắt mạch", "Mẫu thiết kế phần mềm tự động ngắt các cuộc gọi tới dịch vụ đang bị lỗi để tránh làm nghẽn toàn bộ hệ thống."),
        ("Exponential Backoff", "Giãn cách số mũ", "Thuật toán tăng dần thời gian chờ đợi giữa các lần thử lại sau mỗi lần thất bại (ví dụ: 1s, 2s, 4s, 8s...)."),
        ("Resilience", "Khả năng phục hồi", "Năng lực của hệ thống trong việc đối phó và tự hồi phục sau các sự cố phần cứng hoặc mạng.")
    ])
    save_document(doc7, "02_ARCHITECTURE/Microservices_Architecture.docx")

    # -------------------------------------------------------------
    # 8. Security_Architecture.docx
    # -------------------------------------------------------------
    doc8 = create_vietnamese_base_doc(
        title="Đặc Tả Kiến Trúc An Toàn Thông Tin & Bảo Mật Hệ Thống",
        doc_id="DOC-02-SEC-004",
        category_name="02_ARCHITECTURE"
    )
    add_heading_1(doc8, "1. Kiến trúc Bảo mật Đa Tầng (Defense-in-Depth)")
    add_p(doc8, "An toàn thông tin được triển khai toàn diện trên mọi phân tầng của hệ thống MXH-K:")
    add_bullet(doc8, "Xác thực danh tính: Sử dụng chuẩn mã hóa JSON Web Token (JWT) với cặp khóa đối xứng an toàn; thời hạn Access Token ngắn (15 phút) kết hợp Refresh Token lưu trữ trong bảng auth_db.", "Xác thực")
    add_bullet(doc8, "Mã hóa mật khẩu: Sử dụng thuật toán băm Argon2id và Bcrypt với độ phức tạp cao, chống lại các đòn tấn công từ điển và bẻ khóa bảng băm.", "Bảo vệ mật khẩu")
    add_bullet(doc8, "Kiểm soát phân quyền tác giả (Owner Authorization): Mọi thao tác chỉnh sửa hoặc xóa bài viết, bình luận đều bắt buộc xác minh quyền sở hữu tài khoản.", "Phân quyền")
    add_bullet(doc8, "Phòng chống rò rỉ bí mật: Toàn bộ khóa API, Google Client Secret được lưu trữ độc quyền trong biến môi trường .env và loại bỏ hoàn toàn khỏi các commit git.", "Quản trị bí mật")

    add_ba_notes_section(
        doc8,
        business_goal="Tuân thủ nghiêm ngặt các quy định về an toàn an ninh mạng và bảo vệ dữ liệu cá nhân của người dùng, ngăn ngừa triệt để các hành vi giả mạo hoặc xâm nhập trái phép.",
        user_flow_items=[
            ("Phiên làm việc bảo mật", "Người dùng không cần đăng nhập lại liên tục nhờ cơ chế tự động làm mới mã xác thực (Silent Refresh Token).")
        ],
        acceptance_criteria_items=[
            ("AC-SEC-01", "Yêu cầu xóa bài viết từ người không phải tác giả phải lập tức bị chặn với mã lỗi HTTP 401 hoặc 403."),
            ("AC-SEC-02", "Không có bất kỳ khóa bí mật Google Client Secret nào bị phơi bày trên mã nguồn máy khách hoặc kho lưu trữ Git.")
        ],
        implemented_fixes_items=[
            ("Lọc sạch commit Git", "Đã viết lại lịch sử commit để gỡ bỏ toàn bộ chuỗi ký tự bí mật bị GitHub Push Protection cảnh báo."),
            ("Nạp an toàn biến môi trường", "Bổ sung dotenv.config() tại dòng 1 của tệp main.ts thuộc API Gateway.")
        ]
    )

    add_user_operations_guide(
        doc8,
        user_instructions=[
            ("Đặt mật khẩu an toàn", "Nên tạo mật khẩu có độ dài tối thiểu 8 ký tự, bao gồm chữ hoa, chữ thường và số."),
            ("Đăng xuất khi dùng máy lạ", "Sau khi sử dụng xong trên máy tính công cộng, hãy bấm vào avatar và chọn 'Đăng xuất'.")
        ],
        admin_instructions=[
            ("Kiểm tra rò rỉ bí mật", "Chạy công cụ quét bí mật trước khi thực hiện 'git push origin master'."),
            ("Bảo vệ tệp .env", "Không bao giờ thêm tệp .env vào chỉ mục của git.")
        ],
        troubleshooting_items=[
            ("Lỗi bị từ chối truy cập (403 Forbidden)", "Xác minh lại xem tài khoản hiện tại có đúng là người sở hữu tài nguyên cần thao tác hay không.")
        ]
    )

    add_technical_glossary(doc8, [
        ("JSON Web Token (JWT)", "Mã thông báo web JSON", "Chuẩn mở (RFC 7519) định nghĩa phương thức nhỏ gọn và tự chứa để truyền tải thông tin an toàn giữa các bên dưới dạng đối tượng JSON."),
        ("Access Token", "Mã thông báo truy cập", "Chuỗi mã ngắn hạn dùng để chứng thực danh tính người dùng trong mỗi yêu cầu gửi lên máy chủ."),
        ("Refresh Token", "Mã thông báo làm mới", "Chuỗi mã dài hạn dùng để lấy Access Token mới khi mã cũ hết hạn mà không yêu cầu người dùng nhập lại mật khẩu."),
        ("Defense-in-Depth", "Phòng thủ theo chiều sâu", "Chiến lược an ninh sử dụng nhiều lớp phòng thủ độc lập để bảo vệ dữ liệu và hệ thống thông tin.")
    ])
    save_document(doc8, "02_ARCHITECTURE/Security_Architecture.docx")
    print("=== HOÀN TẤT SINH TÀI LIỆU PHẦN 1 (8 TÀI LIỆU) ===")

if __name__ == "__main__":
    generate_part1()
