# -*- coding: utf-8 -*-
"""
Dữ liệu sinh tài liệu Phần 2:
- 03_BACKEND_SERVICES (10 tài liệu đặc tả kỹ thuật vi dịch vụ)
"""

from vietnamese_doc_builder import (
    create_vietnamese_base_doc, add_heading_1, add_heading_2, add_heading_3,
    add_p, add_bullet, add_callout, add_styled_table,
    add_ba_notes_section, add_user_operations_guide, add_technical_glossary,
    save_document
)

def generate_part2():
    print("=== BẮT ĐẦU SINH TÀI LIỆU PHẦN 2 (10 DỊCH VỤ BACKEND) ===")

    # 1. Auth Service
    doc1 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Xác Thực (Auth Service)",
        doc_id="DOC-03-AUTH-001",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc1, "1. Mục đích & Ranh giới Dịch vụ")
    add_p(doc1, "Dịch vụ Xác thực (Auth Service) chịu trách nhiệm toàn bộ về định danh tài khoản, quản lý phiên đăng nhập và bảo vệ dữ liệu xác thực cho toàn bộ mạng xã hội.")
    add_bullet(doc1, "Đăng ký tài khoản nội bộ và xác thực mật khẩu an toàn với thuật toán Argon2id / Bcrypt.", "Đăng ký & Đăng nhập")
    add_bullet(doc1, "Tích hợp đăng nhập một chạm Google OAuth 2.0 (SSO) qua Authorization Code Grant.", "Google OAuth")
    add_bullet(doc1, "Phát hành và thu hồi cặp mã thông báo JWT (Access Token thời hạn 15 phút, Refresh Token thời hạn 7 ngày).", "Quản lý Token")
    add_bullet(doc1, "Lưu trữ phiên trong cơ sở dữ liệu auth_db và đồng bộ phiên đăng xuất tức thì qua Redis.", "Quản lý Phiên")

    add_ba_notes_section(
        doc1,
        business_goal="Cung cấp quy trình đăng ký và đăng nhập thuận tiện, không ma sát (frictionless) cho người dùng nhưng vẫn đảm bảo tiêu chuẩn an ninh cấp độ ngân hàng.",
        user_flow_items=[
            ("Đăng nhập Google", "Người dùng nhấp vào 'Đăng nhập với Google', hệ thống mở cửa sổ xác thực tài khoản Google, sau khi chấp thuận lập tức chuyển hướng về trang chủ đã đăng nhập."),
            ("Đăng ký tài khoản mới", "Điền thông tin hợp lệ, hệ thống tạo tài khoản trong auth_db và đồng thời khởi tạo hồ sơ người dùng trong user_db.")
        ],
        acceptance_criteria_items=[
            ("AC-AUTH-01", "Nếu email Google đã tồn tại trong hệ thống, tự động liên kết tài khoản mà không báo lỗi trùng lặp."),
            ("AC-AUTH-02", "Khi đăng xuất, Refresh Token tương ứng phải bị thu hồi ngay lập tức trong cơ sở dữ liệu và danh sách đen Redis.")
        ],
        implemented_fixes_items=[
            ("Khắc phục lỗi Google Auth 500", "Bổ sung nạp biến môi trường dotenv cho API Gateway và xử lý lỗi ngắt kết nối Redis, giúp đăng nhập qua Google OAuth trên Cloudflare Tunnel hoạt động 100% ổn định.")
        ]
    )
    add_user_operations_guide(
        doc1,
        user_instructions=[
            ("Đăng nhập nhanh", "Bấm nút 'Tiếp tục với Google' trên màn hình đăng nhập để đăng nhập chỉ với một thao tác bấm chuột.")
        ],
        admin_instructions=[
            ("Cấu hình Google Client ID/Secret", "Cấu hình chính xác trong tệp .env và cập nhật Authorized redirect URIs trên Google Cloud Console mỗi khi thay đổi domain.")
        ],
        troubleshooting_items=[
            ("Lỗi Request failed with status code 500", "Xác nhận Backend API Gateway đang chạy và domain Cloudflare Tunnel đã được thêm vào Google Cloud Console.")
        ]
    )
    add_technical_glossary(doc1, [
        ("OAuth 2.0 Authorization Code", "Luồng mã cấp quyền OAuth 2.0", "Giao thức xác thực bảo mật chuẩn công nghiệp cho phép bên thứ ba xác thực người dùng mà không cần biết mật khẩu của họ."),
        ("Token Rotation", "Cơ chế xoay vòng mã thông báo", "Mỗi khi sử dụng Refresh Token để lấy Access Token mới, một Refresh Token mới cũng được sinh ra và mã cũ bị hủy để chống giả mạo.")
    ])
    save_document(doc1, "03_BACKEND_SERVICES/Auth_Service_Specification.docx")

    # 2. Feed Service
    doc2 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Bảng Tin (Feed Service)",
        doc_id="DOC-03-FEED-002",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc2, "1. Mục đích & Cơ chế Phân Phối Bảng Tin")
    add_p(doc2, "Feed Service chịu trách nhiệm tổng hợp, xếp hạng và phân phối dòng bài viết đến bảng tin của từng người dùng với độ trễ phản hồi cực thấp.")
    add_bullet(doc2, "Bảng tin cá nhân hóa (Personalized Feed): Tổng hợp bài viết từ danh sách bạn bè và những người đang theo dõi.", "Bảng tin cá nhân")
    add_bullet(doc2, "Bảng tin công khai (Public Guest Feed): Cho phép khách vãng lai chưa đăng nhập vẫn có thể khám phá các bài viết công khai.", "Bảng tin khách")
    add_bullet(doc2, "Bộ nhớ đệm phân tầng Redis (TTL 30 giây) kèm cơ chế tự động làm sạch (Invalidate Cache) khi có bài đăng mới.", "Tối ưu hóa đệm")
    add_bullet(doc2, "Cơ chế dự phòng (Fallback): Nếu Redis gặp sự cố, dịch vụ tự động truy vấn trực tiếp cơ sở dữ liệu post_db, đảm bảo không bao giờ gián đoạn dữ liệu.", "Dự phòng dữ liệu")

    add_ba_notes_section(
        doc2,
        business_goal="Tối đa hóa thời gian người dùng lưu lại trên mạng xã hội bằng cách mang đến bảng tin trực quan, cập nhật tức thì bài viết mới của bạn bè và cộng đồng.",
        user_flow_items=[
            ("Cuộn bảng tin liên tục", "Người dùng lướt màn hình xuống dưới, hệ thống tự động tải thêm bài viết tiếp theo (Infinite Scroll) bằng phân trang con trỏ (Cursor-based Pagination).")
        ],
        acceptance_criteria_items=[
            ("AC-FEED-01", "Thời gian phản hồi bảng tin từ Redis Cache phải dưới 30ms."),
            ("AC-FEED-02", "Khi người dùng đăng bài viết mới, bài viết đó phải xuất hiện ngay lập tức trên đầu bảng tin của chính họ.")
        ],
        implemented_fixes_items=[
            ("Loại bỏ hoàn toàn Mock Demo Posts", "Đã xóa toàn bộ mã nguồn gán dữ liệu giả lập 'Nguyễn Thành Nam', 'Trần Mai Phương', chuyển sang truy xuất 100% dữ liệu thực từ PostgreSQL."),
            ("Hỗ trợ Guest Feed", "Cho phép API GET /api/feed chạy thành công đối với người dùng chưa đăng nhập mà không trả về lỗi 401 Unauthorized.")
        ]
    )
    add_user_operations_guide(
        doc2,
        user_instructions=[
            ("Làm mới bảng tin", "Kéo nhẹ trang từ trên xuống dưới trên điện thoại hoặc bấm F5 trên máy tính để cập nhật bài viết mới nhất.")
        ],
        admin_instructions=[
            ("Xóa thủ công Redis Cache", "Kết nối vào Redis container và chạy lệnh 'redis-cli -p 6380 DEL feed:public' để dọn sạch bộ nhớ đệm nếu cần.")
        ],
        troubleshooting_items=[
            ("Bảng tin không tải được bài", "Kiểm tra xem cổng 4000 của API Gateway và cổng 6380 của Redis có đang kết nối ổn định hay không.")
        ]
    )
    add_technical_glossary(doc2, [
        ("Fan-out on Write", "Phát tán dữ liệu khi ghi", "Mô hình khi người dùng đăng bài, bài viết sẽ được lập tức đẩy vào bảng tin của tất cả bạn bè."),
        ("Cursor-based Pagination", "Phân trang theo con trỏ", "Phương pháp phân trang dựa vào mốc thời gian hoặc ID của bản ghi cuối cùng, tránh lỗi trùng lặp dữ liệu khi danh sách có thêm bài mới."),
        ("Time-to-Live (TTL)", "Thời gian tồn tại của dữ liệu đệm", "Khoảng thời gian một bản ghi dữ liệu được phép tồn tại trong bộ nhớ đệm Redis trước khi tự động hết hạn.")
    ])
    save_document(doc2, "03_BACKEND_SERVICES/Feed_Service_Specification.docx")

    # 3. Interaction Service
    doc3 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Tương Tác Xã Hội (Interaction Service)",
        doc_id="DOC-03-INTERACT-003",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc3, "1. Mục đích & Kiến trúc Xử lý Tương tác")
    add_p(doc3, "Interaction Service quản lý toàn bộ các hành vi bày tỏ cảm xúc (Reactions) và thảo luận bình luận (Comments) trên bài viết theo thời gian thực.")
    add_bullet(doc3, "Hỗ trợ 6 loại cảm xúc: LIKE, LOVE, HAHA, WOW, SAD, ANGRY với tính năng chuyển đổi cảm xúc mượt mà.", "Cảm xúc")
    add_bullet(doc3, "Bình luận đa cấp độ: Cho phép trả lời bình luận (Reply Comments) với độ sâu phân cấp rõ ràng.", "Bình luận")
    add_bullet(doc3, "Đồng bộ hóa Socket.IO thời gian thực: Cập nhật số lượng thích và nội dung bình luận tức thời cho tất cả người dùng đang xem bài viết.", "Thời gian thực")
    add_bullet(doc3, "Lưu trữ bền vững trong cơ sở dữ liệu interact_db, có ràng buộc duy nhất (postId, userId) chống trùng lặp.", "Toàn vẹn dữ liệu")

    add_ba_notes_section(
        doc3,
        business_goal="Thúc đẩy tính tương tác và gắn kết cộng đồng bằng phản hồi trực quan ngay tức khắc khi người dùng bày tỏ cảm xúc hoặc để lại ý kiến bình luận.",
        user_flow_items=[
            ("Thả tim tức thì", "Người dùng bấm nút Thích, icon lập tức chuyển màu và số lượng thích nhảy tăng lên ngay trên màn hình mà không cần tải lại trang.")
        ],
        acceptance_criteria_items=[
            ("AC-INT-01", "Một người dùng chỉ có duy nhất một trạng thái cảm xúc trên một bài viết tại một thời điểm."),
            ("AC-INT-02", "Khi có bình luận mới, tất cả người dùng đang mở bài viết đều nhìn thấy bình luận đó trong vòng dưới 1 giây.")
        ],
        implemented_fixes_items=[
            ("Lưu trữ tương tác thật", "Khắc phục hiện tượng mất lượt like/comment khi restart, toàn bộ tương tác hiện được ghi nhận vào bảng reactions và comments của PostgreSQL."),
            ("Kích hoạt phát sóng Socket.IO", "Sửa đổi tương tác để phát sóng các sự kiện reaction_updated và comment_added qua Socket.IO Gateway.")
        ]
    )
    add_user_operations_guide(
        doc3,
        user_instructions=[
            ("Bày tỏ cảm xúc", "Nhấp vào nút 'Thích' hoặc rê chuột/nhấn giữ trên điện thoại để chọn cảm xúc yêu thích."),
            ("Viết bình luận", "Nhập nội dung vào ô bình luận dưới bài viết và nhấn phím Enter hoặc nút Gửi.")
        ],
        admin_instructions=[
            ("Kiểm tra sự kiện Socket", "Theo dõi log của API Gateway để xác nhận các sự kiện 'join_post' và 'reaction_updated' hoạt động bình thường.")
        ],
        troubleshooting_items=[
            ("Lượt thích không tăng", "Kiểm tra xem phiên đăng nhập của bạn còn hiệu lực hay không bằng cách làm mới trang.")
        ]
    )
    add_technical_glossary(doc3, [
        ("Realtime Synchronization", "Đồng bộ hóa thời gian thực", "Kỹ thuật đảm bảo mọi thay đổi dữ liệu trên máy chủ được cập nhật tức thì xuống toàn bộ các trình duyệt máy khách đang kết nối."),
        ("Unique Constraint", "Ràng buộc duy nhất", "Quy tắc cơ sở dữ liệu đảm bảo không thể tồn tại hai hàng có cùng giá trị cặp khóa chỉ định (postId, userId).")
    ])
    save_document(doc3, "03_BACKEND_SERVICES/Interaction_Service_Specification.docx")

    # 4. Media Service
    doc4 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Đa Phương Tiện (Media Service)",
        doc_id="DOC-03-MEDIA-004",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc4, "1. Mục đích & Quản lý Tệp tin Đa phương tiện")
    add_p(doc4, "Media Service đảm nhận việc nhận diện, kiểm tra tính hợp lệ, tối ưu hóa và lưu trữ các tệp hình ảnh, video của người dùng.")
    add_bullet(doc4, "Hỗ trợ tải lên hình ảnh từ máy tính cá nhân hoặc điện thoại di động thông qua giao thức multipart/form-data.", "Tải ảnh máy tính")
    add_bullet(doc4, "Lưu trữ tệp tin trên ổ đĩa cục bộ bền vững tại thư mục uploads/ với tên tệp ngẫu nhiên chống trùng lặp.", "Lưu trữ đĩa cứng")
    add_bullet(doc4, "Cung cấp tệp tin ảnh tĩnh qua đường dẫn tĩnh /api/uploads/... với tốc độ phản hồi cao.", "Phục vụ tệp tĩnh")
    add_bullet(doc4, "Tương thích với kiến trúc lưu trữ đám mây tương thích S3 (MinIO) cho môi trường triển khai quy mô lớn.", "Khả năng mở rộng")

    add_ba_notes_section(
        doc4,
        business_goal="Cho phép người dùng tự do cá nhân hóa hồ sơ cá nhân và làm phong phú nội dung bài viết bằng hình ảnh đời thực của chính mình.",
        user_flow_items=[
            ("Đăng ảnh bài viết", "Người dùng nhấp vào biểu tượng ảnh, mở hộp thoại chọn tệp của máy tính/điện thoại, chọn ảnh và ảnh được hiển thị xem trước trước khi đăng."),
            ("Đổi ảnh đại diện", "Vào trang cá nhân, nhấp vào biểu tượng máy ảnh trên avatar, chọn ảnh mới từ máy tính và lưu thành công.")
        ],
        acceptance_criteria_items=[
            ("AC-MED-01", "Chỉ chấp nhận các định dạng ảnh an toàn: JPEG, PNG, WebP, GIF; dung lượng tối đa 50MB."),
            ("AC-MED-02", "Ảnh sau khi tải lên phải có thể truy cập được ngay lập tức thông qua đường dẫn URL hợp lệ.")
        ],
        implemented_fixes_items=[
            ("Bổ sung chức năng Upload ảnh cục bộ", "Phát triển endpoint POST /api/media/upload và cấu hình NestJS ServeStaticModule để phục vụ thư mục uploads/ ra ngoài qua /api/uploads/.")
        ]
    )
    add_user_operations_guide(
        doc4,
        user_instructions=[
            ("Tải ảnh từ máy", "Trong khung soạn thảo bài viết, nhấp vào ô 'Hình ảnh', chọn tệp ảnh từ ổ đĩa máy tính của bạn và nhấn Mở (Open).")
        ],
        admin_instructions=[
            ("Sao lưu thư mục ảnh", "Kịch bản backup-db.ps1 sẽ tự động sao chép toàn bộ thư mục uploads/ vào gói sao lưu dự phòng.")
        ],
        troubleshooting_items=[
            ("Lỗi ảnh không hiển thị", "Kiểm tra xem thư mục uploads/ tại thư mục gốc có quyền đọc ghi đầy đủ hay không.")
        ]
    )
    add_technical_glossary(doc4, [
        ("Multipart/form-data", "Dữ liệu biểu mẫu đa phần", "Chuẩn mã hóa HTTP cho phép truyền tải dữ liệu tệp tin nhị phân (hình ảnh, video) cùng với dữ liệu biểu mẫu văn bản."),
        ("Static Asset Serving", "Phục vụ tệp tài nguyên tĩnh", "Cơ chế máy chủ trả trực tiếp tệp tin nhị phân từ ổ cứng về trình duyệt với tiêu đề bộ nhớ đệm (Cache-Control) tối ưu.")
    ])
    save_document(doc4, "03_BACKEND_SERVICES/Media_Service_Specification.docx")

    # 5. Notification Service
    doc5 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Thông Báo Đẩy (Notification Service)",
        doc_id="DOC-03-NOTIF-005",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc5, "1. Mục đích & Cơ chế Kích hoạt Thông báo")
    add_p(doc5, "Notification Service theo dõi và phát đi các thông báo quan trọng đến người dùng khi có sự kiện xã hội xảy ra liên quan đến họ.")
    add_bullet(doc5, "Thông báo khi có người thả cảm xúc lên bài viết của người dùng.", "Tương tác cảm xúc")
    add_bullet(doc5, "Thông báo khi có người bình luận hoặc phản hồi bình luận của người dùng.", "Bình luận bài viết")
    add_bullet(doc5, "Thông báo khi nhận được lời mời kết bạn từ người dùng khác.", "Kết nối bạn bè")
    add_bullet(doc5, "Đẩy thông báo tức thì qua WebSockets và lưu trữ lịch sử thông báo trong cơ sở dữ liệu notif_db.", "Phát sóng & Lưu trữ")

    add_ba_notes_section(
        doc5,
        business_goal="Gia tăng tỷ lệ giữ chân người dùng (Retention Rate), kích thích người dùng quay lại tương tác thường xuyên mỗi khi có người nhắc tới họ.",
        user_flow_items=[
            ("Chuông thông báo", "Người dùng đang duyệt web, bất ngờ chuông thông báo nổi chấm đỏ kèm âm thanh nhẹ báo có bạn bè vừa thích bài viết.")
        ],
        acceptance_criteria_items=[
            ("AC-NOTIF-01", "Người tự tương tác vào bài viết của chính mình sẽ KHÔNG bị kích hoạt gửi thông báo cho chính họ."),
            ("AC-NOTIF-02", "Nhấp vào thông báo sẽ đánh dấu đã đọc (isRead = true) và điều hướng trực tiếp đến bài viết liên quan.")
        ],
        implemented_fixes_items=[
            ("Sửa lỗi thông báo tương tác & kết bạn", "Cập nhật logic Notification Service tự động kích hoạt thông báo khi nhận sự kiện thả cảm xúc, bình luận hoặc gửi lời mời kết bạn.")
        ]
    )
    add_user_operations_guide(
        doc5,
        user_instructions=[
            ("Xem danh sách thông báo", "Nhấp chuột vào biểu tượng quả chuông ở thanh điều hướng trên cùng để xem danh sách các thông báo mới nhất.")
        ],
        admin_instructions=[
            ("Theo dõi sự kiện thông báo", "Kiểm tra log của notif_service để xác định các bản ghi thông báo mới được lưu vào notif_db.")
        ],
        troubleshooting_items=[
            ("Không thấy thông báo", "Đảm bảo bạn đang kiểm tra tương tác từ hai tài khoản người dùng khác nhau.")
        ]
    )
    add_technical_glossary(doc5, [
        ("Push Notification", "Thông báo đẩy", "Thông điệp được máy chủ chủ động gửi trực tiếp đến thiết bị người dùng mà không cần người dùng yêu cầu trước."),
        ("Event Filter", "Bộ lọc sự kiện", "Quy tắc kiểm tra nghiệp vụ ngăn chặn việc gửi các thông báo không cần thiết hoặc trùng lặp.")
    ])
    save_document(doc5, "03_BACKEND_SERVICES/Notification_Service_Specification.docx")

    # 6. Post Service
    doc6 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Bài Viết (Post Service)",
        doc_id="DOC-03-POST-006",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc6, "1. Mục đích & Quản lý Vòng đời Bài Viết")
    add_p(doc6, "Post Service là trái tim của mạng xã hội, quản lý việc khởi tạo, cập nhật, gắn thẻ hashtag và xóa bỏ các ấn phẩm bài viết.")
    add_bullet(doc6, "Lưu trữ nội dung văn bản, danh sách thẻ hashtag và danh sách liên kết hình ảnh trong post_db.", "Nội dung & Đa phương tiện")
    add_bullet(doc6, "Phân quyền xóa bài: Chỉ duy nhất tác giả của bài viết mới có quyền thực hiện xóa bài viết đó.", "Bảo vệ tác giả")
    add_bullet(doc6, "Tự động phân tích hashtag từ nội dung bài viết và lưu vào bảng hashtags độc lập.", "Quản lý thẻ")
    add_bullet(doc6, "Xóa bỏ bộ đệm bảng tin liên quan ngay khi bài viết bị chỉnh sửa hoặc gỡ bỏ.", "Đồng bộ hóa")

    add_ba_notes_section(
        doc6,
        business_goal="Cung cấp công cụ chia sẻ thông tin mạnh mẽ, trực quan, bảo vệ quyền sở hữu nội dung của tác giả trên không gian mạng.",
        user_flow_items=[
            ("Tạo bài viết mới", "Soạn thảo bài viết, đính kèm ảnh, gắn thẻ hashtag và bấm đăng."),
            ("Xóa bài viết", "Tác giả bấm vào menu bài viết và chọn 'Xóa bài viết'.")
        ],
        acceptance_criteria_items=[
            ("AC-POST-01", "Mọi bài viết sau khi tạo phải tồn tại vĩnh viễn trong cơ sở dữ liệu post_db cho đến khi tác giả chủ động xóa."),
            ("AC-POST-02", "Người dùng khác cố tình gọi API xóa bài viết của người khác phải nhận mã phản hồi lỗi 403 Forbidden.")
        ],
        implemented_fixes_items=[
            ("Lưu trữ bài viết vĩnh viễn", "Đã kết nối hoàn chỉnh cơ chế ghi bài viết xuống PostgreSQL, vô hiệu hóa bộ nhớ đệm bảng tin ngay khi bài được tạo."),
            ("Kiểm tra phân quyền xóa bài", "Bổ sung kiểm tra chặt chẽ quyền tác giả trong PostService.deletePost().")
        ]
    )
    add_user_operations_guide(
        doc6,
        user_instructions=[
            ("Soạn thảo bài đăng", "Nhấp vào ô 'Bạn đang nghĩ gì thế?' tại trang chủ, nhập nội dung, chọn ảnh và bấm 'Đăng bài'.")
        ],
        admin_instructions=[
            ("Kiểm thử phân quyền", "Chạy kịch bản 'node tests/persistence-e2e.test.js' để kiểm tra tự động quyền tác giả và độ bền vững dữ liệu.")
        ],
        troubleshooting_items=[
            ("Báo lỗi 'Không có quyền xóa'", "Xác nhận bạn đang đăng nhập đúng tài khoản đã đăng bài viết này.")
        ]
    )
    add_technical_glossary(doc6, [
        ("Owner Authorization", "Phân quyền theo quyền sở hữu", "Quy tắc bảo mật đảm bảo chỉ người tạo ra bản ghi mới có quyền thay đổi hoặc tiêu hủy bản ghi đó."),
        ("Hashtag Parsing", "Bóc tách thẻ hashtag", "Thuật toán biểu thức chính quy (Regex) tự động trích xuất các từ bắt đầu bằng dấu '#' trong nội dung bài viết.")
    ])
    save_document(doc6, "03_BACKEND_SERVICES/Post_Service_Specification.docx")

    # 7. Reels Service
    doc7 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Video Ngắn (Reels Service)",
        doc_id="DOC-03-REELS-007",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc7, "1. Mục đích & Trải nghiệm Video Dọc")
    add_p(doc7, "Reels Service cung cấp trải nghiệm giải trí video dạng ngắn với tỷ lệ chuẩn 9:16 tối ưu hóa cho màn hình điện thoại di động.")
    add_bullet(doc7, "Phân phối luồng video ngắn với cơ chế nạp trước đoạn đệm (Buffering & Preloading).", "Tối ưu phát video")
    add_bullet(doc7, "Hỗ trợ tương tác thả tim, bình luận và chia sẻ ngay trên giao diện video.", "Tương tác trực tiếp")
    add_bullet(doc7, "Giao diện cuộn dọc cảm ứng mượt mà (Snap Scrolling) tương thích mọi thiết bị.", "Trải nghiệm cảm ứng")

    add_ba_notes_section(
        doc7,
        business_goal="Bắt kịp xu hướng tiêu thụ nội dung nhanh của người dùng trẻ tuổi, gia tăng thời lượng xem video trên nền tảng.",
        user_flow_items=[
            ("Lướt Reels", "Chuyển sang mục Reels trên thanh điều hướng, video tự động phát toàn màn hình; vuốt lên để chuyển sang video tiếp theo.")
        ],
        acceptance_criteria_items=[
            ("AC-REEL-01", "Video hiển thị tràn viền chuẩn 9:16 trên điện thoại di động, không bị méo hình hoặc đen viền bất hợp lý."),
            ("AC-REEL-02", "Âm thanh có nút bật/tắt tiện dụng và ghi nhớ tùy chọn của người dùng.")
        ],
        implemented_fixes_items=[
            ("Tối ưu giao diện Reels Mobile", "Thiết kế lại trang Reels với modal bình luận dạng Bottom Sheet và thanh công cụ cảm ứng chuẩn 44×44px.")
        ]
    )
    add_user_operations_guide(
        doc7,
        user_instructions=[
            ("Xem Reels", "Bấm vào biểu tượng 'Reels' trên thanh điều hướng dưới cùng của điện thoại hoặc thanh menu máy tính.")
        ],
        admin_instructions=[
            ("Quản lý tệp video", "Video ngắn được lưu trữ trong media_db và nạp qua CDN hoặc máy chủ tĩnh.")
        ],
        troubleshooting_items=[
            ("Video không tự phát", "Một số trình duyệt yêu cầu tương tác chạm đầu tiên của người dùng để bật âm thanh tự động.")
        ]
    )
    add_technical_glossary(doc7, [
        ("9:16 Aspect Ratio", "Tỷ lệ khung hình 9:16", "Tỷ lệ chuẩn cho định dạng video dọc tối ưu hóa trên điện thoại thông minh."),
        ("Snap Scrolling", "Cuộn cố định điểm dừng", "Hiệu ứng CSS/JS giúp màn hình tự động hút và dừng lại chính xác tại vị trí của từng video khi người dùng dừng vuốt.")
    ])
    save_document(doc7, "03_BACKEND_SERVICES/Reels_Service_Specification.docx")

    # 8. Search Service
    doc8 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Tìm Kiếm & Tra Cứu (Search Service)",
        doc_id="DOC-03-SEARCH-008",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc8, "1. Mục đích & Thuật toán Tra cứu Dữ liệu")
    add_p(doc8, "Search Service cung cấp khả năng tìm kiếm nhanh chóng người dùng thật và bài viết theo từ khóa trong toàn bộ cơ sở dữ liệu.")
    add_bullet(doc8, "Tìm kiếm người dùng thật theo họ tên, username hoặc địa chỉ email với thuật toán so khớp không phân biệt hoa thường (ILIKE).", "Tìm kiếm người dùng")
    add_bullet(doc8, "Tìm kiếm bài viết theo từ khóa nội dung và thẻ phân loại #hashtag.", "Tìm kiếm bài viết")
    add_bullet(doc8, "Tự động phân trang kết quả tìm kiếm và xếp hạng độ liên quan.", "Phân trang kết quả")

    add_ba_notes_section(
        doc8,
        business_goal="Giúp người dùng dễ dàng tìm thấy bạn bè thân thiết, đồng nghiệp và các chủ đề thảo luận mà mình quan tâm.",
        user_flow_items=[
            ("Tìm kiếm bạn bè", "Gõ tên người cần tìm vào thanh tìm kiếm ở đầu trang, hệ thống lập tức hiển thị danh sách người dùng tương ứng kèm avatar và nút kết bạn.")
        ],
        acceptance_criteria_items=[
            ("AC-SRCH-01", "Kết quả tìm kiếm người dùng phải được lấy trực tiếp từ dữ liệu tài khoản thật trong cơ sở dữ liệu, không được dùng dữ liệu giả lập."),
            ("AC-SRCH-02", "Thời gian trả kết quả tìm kiếm phải dưới 150ms đối với kho dữ liệu hàng trăm nghìn người.")
        ],
        implemented_fixes_items=[
            ("Nâng cấp tìm kiếm người dùng thật", "Kết nối Search Service trực tiếp vào bảng users và profiles thật của PostgreSQL, loại bỏ các kết quả mock tĩnh.")
        ]
    )
    add_user_operations_guide(
        doc8,
        user_instructions=[
            ("Sử dụng tìm kiếm", "Nhấp vào thanh 'Tìm kiếm trên MXH-K' ở góc trên màn hình, nhập từ khóa và nhấn Enter.")
        ],
        admin_instructions=[
            ("Tối ưu chỉ mục tìm kiếm", "Đảm bảo chỉ mục B-Tree và GIN đã được tạo đầy đủ trên các trường name và email.")
        ],
        troubleshooting_items=[
            ("Không tìm thấy người dùng", "Kiểm tra lại tính chính xác của từ khóa hoặc thử tìm bằng địa chỉ email.")
        ]
    )
    add_technical_glossary(doc8, [
        ("Case-insensitive ILIKE", "So khớp không phân biệt hoa thường", "Phép toán tìm kiếm chuỗi ký tự trong PostgreSQL bỏ qua sự khác nhau giữa chữ in hoa và chữ thường."),
        ("Full-text Search", "Tìm kiếm toàn văn", "Kỹ thuật phân tích cú pháp ngôn ngữ tự nhiên để tìm kiếm từ khóa bên trong các đoạn văn bản dài.")
    ])
    save_document(doc8, "03_BACKEND_SERVICES/Search_Service_Specification.docx")

    # 9. Social Graph Service
    doc9 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Đồ Thị Xã Hội (Social Graph Service)",
        doc_id="DOC-03-SOCIAL-009",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc9, "1. Mục đích & Quản lý Mối Quan hệ Xã hội")
    add_p(doc9, "Social Graph Service quản trị toàn bộ mạng lưới kết nối giữa các thực thể người dùng trên nền tảng.")
    add_bullet(doc9, "Mối quan hệ bạn bè hai chiều (Bidirectional Friendship): Yêu cầu quy trình gửi lời mời, chấp nhận hoặc từ chối.", "Quan hệ bạn bè")
    add_bullet(doc9, "Mối quan hệ theo dõi một chiều (Unidirectional Follow): Cho phép theo dõi bài viết của người nổi tiếng mà không cần kết bạn hai chiều.", "Theo dõi")
    add_bullet(doc9, "Chặn người dùng (Blocking): Ngăn chặn triệt để mọi liên lạc và khả năng nhìn thấy nội dung của nhau.", "Bảo vệ cá nhân")
    add_bullet(doc9, "Gợi ý kết bạn dựa trên phân tích người dùng thật trong cơ sở dữ liệu social_db.", "Gợi ý kết nối")

    add_ba_notes_section(
        doc9,
        business_goal="Xây dựng mạng lưới liên kết xã hội vững chắc, mô phỏng chính xác các mối quan hệ đời thực giữa những người dùng.",
        user_flow_items=[
            ("Khám phá bạn bè thật", "Truy cập mục 'Bạn bè', xem danh sách những người dùng thực tế trên hệ thống và nhấn 'Thêm bạn bè'.")
        ],
        acceptance_criteria_items=[
            ("AC-SOC-01", "Danh sách bạn bè gợi ý phải hiển thị người dùng thật từ cơ sở dữ liệu, có đầy đủ tên và ảnh đại diện thật."),
            ("AC-SOC-02", "Khi gửi lời mời kết bạn, bên nhận phải lập tức nhận được thông báo đẩy thời gian thực.")
        ],
        implemented_fixes_items=[
            ("Nâng cấp trang Bạn bè thấy người dùng thật", "Loại bỏ hoàn toàn danh sách bạn bè mẫu tĩnh, truy vấn trực tiếp bảng users để hiển thị danh sách người dùng thật.")
        ]
    )
    add_user_operations_guide(
        doc9,
        user_instructions=[
            ("Kết bạn", "Vào mục 'Bạn bè' trên thanh điều hướng, nhấp 'Thêm bạn bè' bên cạnh người dùng bạn muốn kết nối.")
        ],
        admin_instructions=[
            ("Kiểm tra bảng quan hệ", "Kiểm tra dữ liệu trong bảng friendships của cơ sở dữ liệu social_db để theo dõi số lượng cặp bạn bè.")
        ],
        troubleshooting_items=[
            ("Không thấy nút kết bạn", "Nếu người đó đã là bạn bè của bạn, nút sẽ chuyển sang trạng thái 'Bạn bè' hoặc 'Hủy kết bạn'.")
        ]
    )
    add_technical_glossary(doc9, [
        ("Bidirectional Relationship", "Quan hệ hai chiều", "Mối quan hệ đòi hỏi sự đồng thuận của cả hai bên (ví dụ: Quan hệ bạn bè)."),
        ("Unidirectional Relationship", "Quan hệ một chiều", "Mối quan hệ không đòi hỏi sự đồng thuận của bên được theo dõi (ví dụ: Theo dõi - Follow).")
    ])
    save_document(doc9, "03_BACKEND_SERVICES/Social_Graph_Service_Specification.docx")

    # 10. User Service
    doc10 = create_vietnamese_base_doc(
        title="Đặc Tả Kỹ Thuật Vi Dịch Vụ Hồ Sơ Người Dùng (User Service)",
        doc_id="DOC-03-USER-010",
        category_name="03_BACKEND_SERVICES"
    )
    add_heading_1(doc10, "1. Mục đích & Quản lý Hồ sơ Cá nhân")
    add_p(doc10, "User Service quản lý toàn diện thông tin cá nhân, ảnh đại diện, ảnh bìa và cài đặt người dùng.")
    add_bullet(doc10, "Quản lý thông tin định danh: Họ tên, tiểu sử, ngày sinh, giới tính, địa chỉ sinh sống.", "Thông tin cá nhân")
    add_bullet(doc10, "Cập nhật ảnh đại diện (Avatar) và ảnh bìa (Cover Photo) tải lên từ máy tính cá nhân.", "Hình ảnh đại diện")
    add_bullet(doc10, "Truy xuất danh sách bài viết riêng của người dùng trên trang cá nhân của họ.", "Dòng thời gian cá nhân")
    add_bullet(doc10, "Đồng bộ thông tin người dùng với các dịch vụ khác qua API GET /api/users/me và /api/users/batch.", "Đồng bộ hóa")

    add_ba_notes_section(
        doc10,
        business_goal="Cung cấp không gian thể hiện bản sắc cá nhân độc đáo cho mỗi thành viên trong cộng đồng mạng xã hội.",
        user_flow_items=[
            ("Tùy biến trang cá nhân", "Người dùng vào trang cá nhân, bấm cập nhật avatar bằng ảnh từ máy tính, chỉnh sửa tiểu sử và lưu thành công.")
        ],
        acceptance_criteria_items=[
            ("AC-USR-01", "Ảnh đại diện mới cập nhật phải hiển thị đồng bộ ngay lập tức trên thanh điều hướng, các bài viết đã đăng và các bình luận."),
            ("AC-USR-02", "Tên hiển thị phải hỗ trợ đầy đủ ký tự tiếng Việt có dấu chuẩn Unicode.")
        ],
        implemented_fixes_items=[
            ("Hỗ trợ cập nhật Avatar từ ảnh máy tính", "Liên kết Media Service với User Service để cho phép người dùng upload ảnh đại diện trực tiếp từ ổ cứng máy tính.")
        ]
    )
    add_user_operations_guide(
        doc10,
        user_instructions=[
            ("Đổi ảnh đại diện", "Nhấp vào ảnh đại diện của bạn ở góc trên bên phải để vào Trang cá nhân, nhấp vào biểu tượng camera trên avatar để chọn ảnh mới.")
        ],
        admin_instructions=[
            ("Kiểm tra bảng hồ sơ", "Truy vấn bảng profiles trong user_db để kiểm tra các thông tin cập nhật mới nhất.")
        ],
        troubleshooting_items=[
            ("Avatar chưa đổi ngay", "Nhấn tổ hợp phím Ctrl + F5 để trình duyệt xóa bộ nhớ đệm ảnh cũ.")
        ]
    )
    add_technical_glossary(doc10, [
        ("Unicode UTF-8", "Chuẩn mã hóa ký tự UTF-8", "Chuẩn mã hóa quốc tế hỗ trợ đầy đủ tiếng Việt có dấu và toàn bộ các biểu tượng cảm xúc (Emojis)."),
        ("Profile Cache", "Bộ nhớ đệm hồ sơ", "Cơ chế lưu tạm thông tin cơ bản của người dùng để giảm tải truy vấn vào cơ sở dữ liệu.")
    ])
    save_document(doc10, "03_BACKEND_SERVICES/User_Service_Specification.docx")

    print("=== HOÀN TẤT SINH TÀI LIỆU PHẦN 2 (10 DỊCH VỤ BACKEND) ===")

if __name__ == "__main__":
    generate_part2()
