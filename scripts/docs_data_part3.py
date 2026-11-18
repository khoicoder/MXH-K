# -*- coding: utf-8 -*-
"""
Dữ liệu sinh tài liệu Phần 3:
- 04_FRONTEND (4 tài liệu)
- 05_API_DOCUMENTATION (9 tài liệu)
"""

from vietnamese_doc_builder import (
    create_vietnamese_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_bullet, add_callout, add_styled_table,
    add_ba_notes_section, add_user_operations_guide, add_technical_glossary,
    save_document
)

def generate_part3():
    print("=== BẮT ĐẦU SINH TÀI LIỆU PHẦN 3 (FRONTEND & API DOCUMENTATION) ===")

    # =========================================================
    # 04_FRONTEND
    # =========================================================

    # 1. Component_Architecture.docx
    doc1 = create_vietnamese_base_doc(
        title="Đặc Tả Kiến Trúc Thành Phần Giao Diện (Component Architecture)",
        doc_id="DOC-04-COMP-001",
        category_name="04_FRONTEND"
    )
    add_heading_1(doc1, "1. Cấu trúc Phân tầng Thành phần Giao diện")
    add_p(doc1, "Hệ thống giao diện Next.js 15 được xây dựng theo kiến trúc Component-based hiện đại, phân tách rõ ràng giữa Server Components và Client Components:")
    add_bullet(doc1, "Server Components (Mặc định): Đảm nhận việc tìm nạp dữ liệu ban đầu từ API Gateway, dựng sẵn HTML trên máy chủ, tối ưu tốc độ tải trang đầu tiên.", "Thành phần máy chủ")
    add_bullet(doc1, "Client Components ('use client'): Sử dụng cho các thành phần có tính tương tác cao như PostCard (thả tim, bình luận), PostComposer (soạn bài, chọn ảnh), MobileNav (thanh điều hướng đáy cảm ứng).", "Thành phần máy khách")
    add_bullet(doc1, "Thư viện Thành phần Cơ sở: Xây dựng trên nền tảng Radix UI và Shadcn UI, đảm bảo khả năng tiếp cận (Accessibility - a11y) và độ mượt mà cao.", "Thành phần dùng chung")

    add_ba_notes_section(
        doc1,
        business_goal="Chuẩn hóa thư viện thành phần giao diện giúp giảm thiểu trùng lặp mã nguồn, tăng tốc độ phát triển tính năng mới và mang lại trải nghiệm nhất quán trên toàn bộ ứng dụng.",
        user_flow_items=[
            ("Tải trang trong nháy mắt", "Người dùng mở ứng dụng, nội dung khung và bài viết hiển thị ngay lập tức nhờ Server-Side Rendering mà không thấy màn hình trắng.")
        ],
        acceptance_criteria_items=[
            ("AC-COMP-01", "Mọi thành phần giao diện phải tự động co giãn thích ứng từ màn hình siêu nhỏ (320px) đến màn hình máy tính lớn (1440px+)."),
            ("AC-COMP-02", "Không có bất kỳ cảnh báo Hydraion Mismatch nào giữa máy chủ và máy khách.")
        ],
        implemented_fixes_items=[
            ("Tái cấu trúc PostCard & PostComposer", "Thiết kế lại các thẻ bài viết để hiển thị tràn viền trên di động (rounded-none border-y) và bo góc mềm mại trên máy tính (rounded-2xl border).")
        ]
    )
    add_user_operations_guide(
        doc1,
        user_instructions=[
            ("Sử dụng giao diện trên điện thoại", "Các nút bấm và ô nhập liệu tự động phóng to vừa vặn ngón tay, thuận tiện thao tác bằng một tay.")
        ],
        admin_instructions=[
            ("Kiểm tra thư viện UI", "Mã nguồn các thành phần cơ sở đặt tại thư mục 'apps/web/src/components/ui/'.")
        ],
        troubleshooting_items=[
            ("Giao diện bị lệch phông chữ", "Đảm bảo trình duyệt đã tải xong tệp định kiểu CSS của Tailwind.")
        ]
    )
    add_technical_glossary(doc1, [
        ("React Server Components (RSC)", "Thành phần máy chủ React", "Mô hình kiến trúc mới cho phép các component chạy độc quyền trên máy chủ và không bị tính vào kích thước gói JavaScript tải về trình duyệt."),
        ("Hydration Mismatch", "Lệch đồng bộ hóa giao diện", "Lỗi xảy ra khi cây DOM được kết xuất trên máy chủ khác biệt với kết quả tính toán trên trình duyệt máy khách."),
        ("Accessibility (a11y)", "Khả năng tiếp cận", "Tiêu chuẩn thiết kế phần mềm giúp người khuyết tật hoặc người dùng thiết bị hỗ trợ có thể sử dụng dễ dàng.")
    ])
    save_document(doc1, "04_FRONTEND/Component_Architecture.docx")

    # 2. Frontend_API_Integration.docx
    doc2 = create_vietnamese_base_doc(
        title="Đặc Tả Tích Hợp API Máy Khách & Cơ Chế Xác Thực (API Integration)",
        doc_id="DOC-04-APIINT-002",
        category_name="04_FRONTEND"
    )
    add_heading_1(doc2, "1. Trung tâm Điều phối API & Đánh chặn Yêu cầu (Interceptors)")
    add_p(doc2, "Giao diện tích hợp tập trung thông qua lớp thư viện Axios Client thống nhất:")
    add_bullet(doc2, "Tự động đính kèm tiêu đề 'Authorization: Bearer <token>' vào mọi yêu cầu gửi lên API Gateway.", "Đính kèm Token")
    add_bullet(doc2, "Cơ chế Đánh chặn Phản hồi (Response Interceptor): Tự động bắt lỗi HTTP 401 Unauthorized để kích hoạt quy trình làm mới token (Refresh Token) ngầm định mà không làm gián đoạn trải nghiệm người dùng.", "Tự động làm mới Token")
    add_bullet(doc2, "Cơ chế Định tuyến Lại (Next.js Rewrites): Cấu hình chuyển tiếp yêu cầu /api/... và /socket.io/... thẳng vào API Gateway cổng 4000, khắc phục triệt để lỗi chặn tên miền phụ (CORS) khi chạy Cloudflare Tunnel.", "Khắc phục CORS")

    add_ba_notes_section(
        doc2,
        business_goal="Đảm bảo sự giao tiếp thông suốt, an toàn tuyệt đối giữa giao diện người dùng và hạ tầng máy chủ phía sau.",
        user_flow_items=[
            ("Duy trì phiên liên tục", "Người dùng không bao giờ bị đột ngột văng khỏi ứng dụng khi token hết hạn vì hệ thống tự động làm mới mã xác thực dưới nền.")
        ],
        acceptance_criteria_items=[
            ("AC-INT-01", "Khi Access Token hết hạn, API Client phải tự động gọi POST /api/auth/refresh và gửi lại yêu cầu gốc thành công."),
            ("AC-INT-02", "Khi chạy qua Cloudflare Tunnel, kết nối Socket.IO phải thành công 100% không báo lỗi kết nối.")
        ],
        implemented_fixes_items=[
            ("Cấu hình Next.js Rewrites", "Thêm cấu hình rewrites trong next.config.ts để chuyển tiếp /socket.io sang cổng 4000, giải quyết lỗi ngắt kết nối trên Cloudflare Tunnel.")
        ]
    )
    add_user_operations_guide(
        doc2,
        user_instructions=[
            ("Sử dụng ứng dụng", "Người dùng chỉ cần truy cập vào đường dẫn trang web duy nhất, không cần cài đặt thêm bất kỳ chứng chỉ nào.")
        ],
        admin_instructions=[
            ("Kiểm tra tệp api-client.ts", "Tệp mã nguồn cấu hình Axios Interceptors đặt tại 'apps/web/src/lib/api-client.ts'.")
        ],
        troubleshooting_items=[
            ("Lỗi 'Network Error'", "Kiểm tra xem API Gateway cổng 4000 có đang hoạt động hay không.")
        ]
    )
    add_technical_glossary(doc2, [
        ("Axios Interceptors", "Bộ đánh chặn Axios", "Cơ chế can thiệp vào các yêu cầu HTTP trước khi gửi đi hoặc can thiệp vào phản hồi trước khi trả về hàm gọi."),
        ("Cross-Origin Resource Sharing (CORS)", "Chia sẻ tài nguyên liên nguồn", "Cơ chế bảo mật của trình duyệt ngăn chặn trang web gọi tài nguyên từ một tên miền khác khi chưa được phép."),
        ("Next.js Rewrites", "Cơ chế viết lại đường dẫn Next.js", "Tính năng cho phép ánh xạ một đường dẫn URL trên máy khách tới một máy chủ backend khác mà không làm đổi URL hiển thị trên thanh địa chỉ trình duyệt.")
    ])
    save_document(doc2, "04_FRONTEND/Frontend_API_Integration.docx")

    # 3. Frontend_Architecture.docx
    doc3 = create_vietnamese_base_doc(
        title="Đặc Tả Kiến Trúc Tổng Thể Giao Diện (Frontend Architecture)",
        doc_id="DOC-04-ARCH-003",
        category_name="04_FRONTEND"
    )
    add_heading_1(doc3, "1. Khung Kiến trúc & Quản lý Trạng thái")
    add_p(doc3, "Frontend của MXH-K được thiết kế theo tiêu chuẩn Enterprise Monorepo:")
    add_bullet(doc3, "Quản lý Trạng thái Máy chủ (Server State): Sử dụng TanStack Query (React Query) với chiến lược Stale-While-Revalidate, tự động nạp lại dữ liệu khi người dùng quay lại tab trình duyệt.", "Trạng thái máy chủ")
    add_bullet(doc3, "Quản lý Trạng thái Cục bộ (Client State): Sử dụng Zustand cho các dữ liệu nhẹ như phiên người dùng hiện tại, trạng thái đóng mở modal soạn bài và thanh điều hướng di động.", "Trạng thái cục bộ")
    add_bullet(doc3, "Biểu mẫu & Xác thực: Sử dụng React Hook Form kết hợp Zod Schema Validation, kiểm tra lỗi hợp lệ ngay tại trình duyệt trước khi gửi về máy chủ.", "Xác thực biểu mẫu")

    add_ba_notes_section(
        doc3,
        business_goal="Tối ưu hóa tài nguyên phần cứng máy khách, hạn chế việc tiêu thụ quá mức bộ nhớ RAM và pin trên điện thoại di động.",
        user_flow_items=[
            ("Phản hồi biểu mẫu tức thì", "Khi nhập sai định dạng email hoặc mật khẩu quá ngắn, thông báo lỗi bằng tiếng Việt xuất hiện ngay dưới ô nhập liệu.")
        ],
        acceptance_criteria_items=[
            ("AC-FE-01", "Tốc độ phản hồi giao diện khi người dùng bấm nút đạt mức dưới 16ms (chuẩn 60 khung hình/giây - 60 FPS).")
        ],
        implemented_fixes_items=[
            ("Dọn dẹp mã nguồn lỗi thời", "Loại bỏ hoàn toàn các hàm gọi mock dữ liệu trong page.tsx, chuyển đổi hoàn toàn sang hook useQuery của TanStack Query.")
        ]
    )
    add_user_operations_guide(
        doc3,
        user_instructions=[
            ("Tương tác mượt mà", "Ứng dụng hoạt động mượt mà như một ứng dụng di động gốc (Native App).")
        ],
        admin_instructions=[
            ("Đóng gói ứng dụng", "Chạy lệnh 'npm run build' bên trong thư mục apps/web để kiểm tra biên dịch mã nguồn.")
        ],
        troubleshooting_items=[
            ("Lỗi bộ nhớ đệm trình duyệt", "Xóa cache trình duyệt hoặc thử nghiệm ở chế độ ẩn danh (Incognito Mode).")
        ]
    )
    add_technical_glossary(doc3, [
        ("Stale-While-Revalidate", "Hiển thị dữ liệu cũ trong khi làm mới", "Chiến lược bộ nhớ đệm trả về dữ liệu đã lưu trong cache ngay lập tức đồng thời gửi yêu cầu ngầm để cập nhật dữ liệu mới nhất."),
        ("Zustand", "Thư viện quản lý trạng thái tinh gọn", "Giải pháp quản lý trạng thái máy khách nhanh, nhẹ dựa trên cơ chế hook không phụ thuộc vào Context API cồng kềnh."),
        ("Zod", "Thư viện khai báo và kiểm tra kiểu dữ liệu", "Công cụ TypeScript-first cho phép định nghĩa lược đồ dữ liệu và tự động kiểm tra tính hợp lệ của dữ liệu đầu vào.")
    ])
    save_document(doc3, "04_FRONTEND/Frontend_Architecture.docx")

    # 4. UI_UX_Design_Specification.docx
    doc4 = create_vietnamese_base_doc(
        title="Đặc Tả Thiết Kế Trải Nghiệm & Giao Diện Người Dùng (UI/UX Mobile-First)",
        doc_id="DOC-04-UIUX-004",
        category_name="04_FRONTEND"
    )
    add_heading_1(doc4, "1. Nguyên tắc Thiết kế Mobile-First & Tiêu chuẩn Facebook Thuần Việt")
    add_p(doc4, "Giao diện MXH-K được thiết kế đặt trải nghiệm người dùng di động làm ưu tiên số một:")
    add_bullet(doc4, "Hệ thống Điểm ngắt Đáp ứng (Responsive Breakpoints): Điện thoại nhỏ (320px–374px), Điện thoại tiêu chuẩn (375px–767px), Máy tính bảng (768px–1023px), Máy tính để bàn (1024px trở lên).", "Điểm ngắt")
    add_bullet(doc4, "Thanh điều hướng Đáy Cố định (Fixed Bottom Navigation): Thay thế thanh menu bên cồng kềnh trên điện thoại, tích hợp khoảng đệm an toàn cho iPhone (Safe Area Insets: env(safe-area-inset-bottom)).", "Điều hướng đáy")
    add_bullet(doc4, "Vùng tiếp xúc cảm ứng chuẩn 44×44px: Mọi nút bấm Like, Bình luận, Chia sẻ đều đạt kích thước tối thiểu 44 pixel, dễ bấm bằng ngón tay cái.", "Vùng cảm ứng")
    add_bullet(doc4, "Chống tràn màn hình ngang (Zero Horizontal Overflow): Toàn bộ các trang và thành phần con đều có thuộc tính 'max-w-full overflow-x-hidden'.", "Chống tràn ngang")

    add_ba_notes_section(
        doc4,
        business_goal="Mang lại trải nghiệm quen thuộc, thân thiện tối đa cho người dùng Việt Nam tương tự như Facebook nhưng có tốc độ tải nhanh hơn và hiện đại hơn.",
        user_flow_items=[
            ("Dùng một tay thoải mái", "Người dùng cầm điện thoại bằng một tay vẫn có thể dễ dàng chuyển đổi giữa Trang chủ, Khám phá, Tạo bài viết, Reels và Trang cá nhân.")
        ],
        acceptance_criteria_items=[
            ("AC-UIUX-01", "Tuyệt đối không phát sinh thanh cuộn ngang trên bất kỳ độ phân giải di động nào từ 320px trở lên."),
            ("AC-UIUX-02", "Khi mở bàn phím ảo trên điện thoại, thanh điều hướng đáy và các trường nhập liệu không bị che khuất nội dung.")
        ],
        implemented_fixes_items=[
            ("Hoàn thiện chuẩn Mobile-First", "Cập nhật facebook-header.tsx ẩn tab thừa trên mobile, nâng cấp mobile-nav.tsx với Safe Area cho iPhone và phản hồi xúc giác (tactile feedback).")
        ]
    )
    add_user_operations_guide(
        doc4,
        user_instructions=[
            ("Thao tác trên điện thoại", "Chạm vào các biểu tượng ở thanh dưới cùng của màn hình để chuyển nhanh các tính năng.")
        ],
        admin_instructions=[
            ("Kiểm thử giao diện di động", "Bật chế độ Responsive Design Mode trong Chrome DevTools (Ctrl + Shift + M) để kiểm tra các kích thước iPhone SE, iPhone 14 Pro, Samsung Galaxy.")
        ],
        troubleshooting_items=[
            ("Thanh điều hướng che mất nội dung", "Trang đã được cấu hình pb-24 trên di động để tạo khoảng trống đệm chân trang hoàn hảo.")
        ]
    )
    add_technical_glossary(doc4, [
        ("Mobile-First Design", "Thiết kế ưu tiên di động", "Phương pháp luận thiết kế bắt đầu từ giao diện cho màn hình di động nhỏ nhất rồi mới mở rộng dần ra máy tính để bàn."),
        ("Safe Area Insets", "Khoảng đệm an toàn màn hình", "Vùng đệm cần thiết để tránh việc nội dung giao diện bị che khuất bởi tai thỏ, phần khuyết màn hình hoặc thanh gạt điều hướng của hệ điều hành iOS/Android."),
        ("Touch Target Size", "Kích thước vùng chạm cảm ứng", "Diện tích tối thiểu trên màn hình cảm ứng để người dùng có thể nhấp chính xác mà không bị chạm nhầm vào nút bên cạnh.")
    ])
    save_document(doc4, "04_FRONTEND/UI_UX_Design_Specification.docx")

    # =========================================================
    # 05_API_DOCUMENTATION (9 tài liệu)
    # =========================================================

    api_specs = [
        ("API_Overview.docx", "DOC-05-API-OVERVIEW", "Đặc Tả Chuẩn Hóa Cổng Giao Tiếp API Gateway",
         "Tổng quan cấu trúc phản hồi chuẩn, mã lỗi HTTP và tiêu chuẩn xác thực cổng API Gateway.",
         [
             ["Trường dữ liệu", "Kiểu dữ liệu", "Mô tả ý nghĩa"],
             ["success", "Boolean", "Trạng thái thành công của yêu cầu (true/false)"],
             ["data", "Object / Array", "Dữ liệu kết quả nghiệp vụ trả về cho máy khách"],
             ["error", "Object / null", "Thông tin chi tiết mã lỗi và thông báo bằng tiếng Việt khi thất bại"],
             ["timestamp", "ISO8601 String", "Mốc thời gian máy chủ xử lý xong yêu cầu"],
             ["correlationId", "UUID String", "Mã định danh vết yêu cầu dùng để truy vết lỗi trong nhật ký hệ thống"]
         ],
         "Mọi vi dịch vụ đều phải phản hồi qua cấu trúc chuẩn hóa duy nhất (Response Envelope)."),

        ("Authentication_API.docx", "DOC-05-API-AUTH", "Đặc Tả API Phân Hệ Xác Thực & Phiên Làm Việc",
         "Danh mục các điểm cuối (Endpoints) phục vụ đăng ký, đăng nhập mật khẩu, Google OAuth và quản lý phiên.",
         [
             ["Phương thức", "Đường dẫn Endpoint", "Quyền truy cập", "Mô tả nghiệp vụ"],
             ["POST", "/api/auth/register", "Công khai", "Đăng ký tài khoản nội bộ mới"],
             ["POST", "/api/auth/login", "Công khai", "Đăng nhập bằng email và mật khẩu"],
             ["GET", "/api/auth/google/url", "Công khai", "Lấy URL ủy quyền đăng nhập Google"],
             ["POST", "/api/auth/google/callback", "Công khai", "Tiếp nhận authorization code và cấp phát JWT"],
             ["POST", "/api/auth/refresh", "Bearer Refresh", "Cấp mới Access Token khi mã cũ hết hạn"],
             ["POST", "/api/auth/logout", "Bearer Access", "Đăng xuất và thu hồi phiên làm việc hiện tại"]
         ],
         "Bảo vệ an toàn tuyệt đối các kênh truyền thông tin định danh."),

        ("Feed_API.docx", "DOC-05-API-FEED", "Đặc Tả API Phân Hệ Bảng Tin & Dòng Thời Gian",
         "Các điểm cuối cung cấp dữ liệu bảng tin cá nhân hóa và bảng tin công khai khám phá.",
         [
             ["Phương thức", "Đường dẫn Endpoint", "Quyền truy cập", "Mô tả nghiệp vụ"],
             ["GET", "/api/feed", "Công khai (Khách/Người dùng)", "Lấy bảng tin dòng thời gian có phân trang"],
             ["GET", "/api/feed/personalized", "Bearer Access", "Lấy bảng tin riêng gồm bài viết của bạn bè"]
         ],
         "Hỗ trợ cả người dùng đã đăng nhập lẫn khách vãng lai."),

        ("Interaction_API.docx", "DOC-05-API-INTERACT", "Đặc Tả API Phân Hệ Tương Tác Cảm Xúc & Bình Luận",
         "Các điểm cuối xử lý bày tỏ cảm xúc và gửi bình luận thảo luận đa cấp.",
         [
             ["Phương thức", "Đường dẫn Endpoint", "Quyền truy cập", "Mô tả nghiệp vụ"],
             ["POST", "/api/interactions/reactions", "Bearer Access", "Thả hoặc đổi loại cảm xúc trên bài viết"],
             ["DELETE", "/api/interactions/reactions/:postId", "Bearer Access", "Hủy bỏ cảm xúc đã thả"],
             ["POST", "/api/interactions/comments", "Bearer Access", "Gửi bình luận mới hoặc phản hồi bình luận cũ"],
             ["GET", "/api/interactions/comments/:postId", "Công khai", "Lấy danh sách cây bình luận của bài viết"]
         ],
         "Cập nhật tức thời số lượng cảm xúc trên giao diện."),

        ("Media_API.docx", "DOC-05-API-MEDIA", "Đặc Tả API Phân Hệ Tải Lên & Quản Lý Đa Phương Tiện",
         "Các điểm cuối phục vụ tải tệp hình ảnh từ máy tính cá nhân và phục vụ tệp tĩnh.",
         [
             ["Phương thức", "Đường dẫn Endpoint", "Quyền truy cập", "Mô tả nghiệp vụ"],
             ["POST", "/api/media/upload", "Bearer Access", "Tải tệp ảnh nhị phân từ máy tính lên máy chủ"],
             ["GET", "/api/uploads/:filename", "Công khai", "Truy xuất trực tiếp tệp hình ảnh tĩnh từ ổ cứng"]
         ],
         "Cho phép người dùng upload ảnh từ thư mục cục bộ của thiết bị."),

        ("Notification_API.docx", "DOC-05-API-NOTIF", "Đặc Tả API Phân Hệ Thông Báo Thời Gian Thực",
         "Các điểm cuối quản lý danh sách thông báo và cập nhật trạng thái đã xem.",
         [
             ["Phương thức", "Đường dẫn Endpoint", "Quyền truy cập", "Mô tả nghiệp vụ"],
             ["GET", "/api/notifications", "Bearer Access", "Lấy danh sách thông báo của tôi (phân trang)"],
             ["PATCH", "/api/notifications/:id/read", "Bearer Access", "Đánh dấu một thông báo là đã đọc"],
             ["PATCH", "/api/notifications/read-all", "Bearer Access", "Đánh dấu tất cả thông báo là đã đọc"]
         ],
         "Bắn thông báo đẩy thời gian thực qua kênh WebSockets."),

        ("Post_API.docx", "DOC-05-API-POST", "Đặc Tả API Phân Hệ Quản Lý Bài Viết",
         "Các điểm cuối thực hiện vòng đời khởi tạo, đọc, cập nhật và xóa bài viết.",
         [
             ["Phương thức", "Đường dẫn Endpoint", "Quyền truy cập", "Mô tả nghiệp vụ"],
             ["POST", "/api/posts", "Bearer Access", "Tạo bài viết mới kèm ảnh và hashtag"],
             ["GET", "/api/posts/:id", "Công khai", "Lấy chi tiết một bài viết cụ thể"],
             ["DELETE", "/api/posts/:id", "Tác giả sở hữu", "Xóa vĩnh viễn bài viết (Chỉ tác giả)"]
         ],
         "Kiểm tra phân quyền tác giả nghiêm ngặt."),

        ("Social_API.docx", "DOC-05-API-SOCIAL", "Đặc Tả API Phân Hệ Đồ Thị Bạn Bè & Theo Dõi",
         "Các điểm cuối phục vụ việc gửi kết bạn, đồng ý kết bạn và tìm kiếm bạn bè thật.",
         [
             ["Phương thức", "Đường dẫn Endpoint", "Quyền truy cập", "Mô tả nghiệp vụ"],
             ["GET", "/api/social/friends", "Bearer Access", "Lấy danh sách bạn bè thật từ cơ sở dữ liệu"],
             ["POST", "/api/social/friends/request", "Bearer Access", "Gửi lời mời kết bạn tới người dùng khác"],
             ["POST", "/api/social/friends/accept", "Bearer Access", "Chấp nhận lời mời kết bạn"]
         ],
         "Loại bỏ dữ liệu ảo, phản ánh đúng quan hệ bạn bè thực tế."),

        ("User_API.docx", "DOC-05-API-USER", "Đặc Tả API Phân Hệ Hồ Sơ Người Dùng",
         "Các điểm cuối quản lý trang cá nhân, cập nhật thông tin và ảnh đại diện.",
         [
             ["Phương thức", "Đường dẫn Endpoint", "Quyền truy cập", "Mô tả nghiệp vụ"],
             ["GET", "/api/users/me", "Bearer Access", "Lấy thông tin tài khoản của chính mình"],
             ["PATCH", "/api/users/me", "Bearer Access", "Cập nhật tiểu sử, thông tin cá nhân và avatar"],
             ["GET", "/api/users/:id", "Công khai", "Xem thông tin trang cá nhân của một người dùng khác"]
         ],
         "Đồng bộ hóa ảnh đại diện tải lên từ máy tính cá nhân.")
    ]

    for fname, doc_id, title, desc, table_rows, core_note in api_specs:
        d = create_vietnamese_base_doc(
            title=title,
            doc_id=doc_id,
            category_name="05_API_DOCUMENTATION"
        )
        add_heading_1(d, "1. Phạm vi & Mục tiêu Kỹ thuật Điểm cuối")
        add_p(d, desc)
        add_callout(d, "Yêu cầu kỹ thuật cốt lõi", core_note)
        
        add_heading_2(d, "2. Bảng Danh mục Điểm cuối Chi tiết (Endpoint Matrix)")
        headers = table_rows[0]
        data = table_rows[1:]
        add_styled_table(d, headers, data)
        
        add_ba_notes_section(
            d,
            business_goal=f"Chuẩn hóa giao diện lập trình cho phân hệ {title}, bảo đảm tính toàn vẹn dữ liệu và độ an toàn thông tin cao nhất.",
            user_flow_items=[
                ("Xử lý an toàn", "Máy khách gửi yêu cầu kèm Access Token, máy chủ kiểm tra phân quyền trước khi thực hiện nghiệp vụ."),
                ("Phản hồi rõ ràng", "Mọi lỗi đều trả về thông điệp tiếng Việt dễ hiểu cho người dùng.")
            ],
            acceptance_criteria_items=[
                ("AC-API-01", "Thời gian phản hồi của điểm cuối dưới 200ms."),
                ("AC-API-02", "Khi thiếu tham số bắt buộc, trả về mã lỗi 400 Bad Request kèm chi tiết trường bị lỗi.")
            ],
            implemented_fixes_items=[
                ("Kiểm soát bảo mật", "Toàn bộ điểm cuối quan trọng đều được bảo vệ bởi JwtAuthGuard và kiểm tra quyền sở hữu tài nguyên.")
            ]
        )
        
        add_user_operations_guide(
            d,
            user_instructions=[
                ("Sử dụng tính năng", "Giao diện người dùng sẽ tự động gọi các API này khi bạn thao tác trên màn hình.")
            ],
            admin_instructions=[
                ("Kiểm thử API bằng cURL", f"Có thể sử dụng công cụ Postman hoặc cURL để kiểm thử trực tiếp vào cổng 4000 với tiêu đề 'Authorization: Bearer <token>'.")
            ],
            troubleshooting_items=[
                ("Mã lỗi 401 Unauthorized", "Access Token đã hết hạn hoặc chưa được truyền trong tiêu đề yêu cầu.")
            ]
        )
        
        add_technical_glossary(d, [
            ("Endpoint", "Điểm cuối API", "Đường dẫn URL xác định vị trí của một tài nguyên hoặc dịch vụ trên máy chủ mà máy khách có thể gửi yêu cầu đến."),
            ("Response Envelope", "Vỏ bọc phản hồi", "Cấu trúc dữ liệu chuẩn hóa bao bọc lấy kết quả trả về của API bao gồm trạng thái, dữ liệu và thời gian."),
            ("Bearer Token", "Mã thông báo người cầm", "Cơ chế xác thực trong đó máy chủ cấp quyền cho bất kỳ ai xuất trình được mã thông báo hợp lệ trong tiêu đề Authorization.")
        ])
        
        save_document(d, f"05_API_DOCUMENTATION/{fname}")

    print("=== HOÀN TẤT SINH TÀI LIỆU PHẦN 3 (13 TÀI LIỆU) ===")

if __name__ == "__main__":
    generate_part3()
