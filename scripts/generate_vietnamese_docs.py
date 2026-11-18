# -*- coding: utf-8 -*-
"""
Script tự động sinh Tài liệu Kỹ thuật Hệ thống Mạng Xã Hội MXH-K
Định dạng: Microsoft Word (.docx), Khổ A4, Phông Times New Roman, Tiếng Việt chuẩn công nghệ thông tin.
"""

import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor, Mm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

def set_cell_background(cell, hex_color):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'''
        <w:tcMar {nsdecls("w")}>
            <w:top w:w="{top}" w:type="dxa"/>
            <w:bottom w:w="{bottom}" w:type="dxa"/>
            <w:left w:w="{left}" w:type="dxa"/>
            <w:right w:w="{right}" w:type="dxa"/>
        </w:tcMar>
    ''')
    tcPr.append(tcMar)

def add_styled_heading(doc, text, level):
    h = doc.add_heading(text, level=level)
    h.paragraph_format.keep_with_next = True
    h.paragraph_format.space_before = Pt(12)
    h.paragraph_format.space_after = Pt(4)
    run = h.runs[0]
    run.font.name = 'Times New Roman'
    run.font.element.rPr.rFonts.set(qn('w:ascii'), 'Times New Roman')
    run.font.element.rPr.rFonts.set(qn('w:hAnsi'), 'Times New Roman')
    run.font.element.rPr.rFonts.set(qn('w:cs'), 'Times New Roman')
    if level == 1:
        run.font.size = Pt(16)
        run.font.bold = True
        run.font.color.rgb = RGBColor(24, 119, 242) # Facebook Blue
    elif level == 2:
        run.font.size = Pt(13)
        run.font.bold = True
        run.font.color.rgb = RGBColor(30, 41, 59)
    elif level == 3:
        run.font.size = Pt(11.5)
        run.font.bold = True
        run.font.color.rgb = RGBColor(71, 85, 105)
    return h

def add_body_p(doc, text, bold_prefix=None, space_after=4):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = 1.15
    if bold_prefix:
        r_bold = p.add_run(bold_prefix)
        r_bold.font.name = 'Times New Roman'
        r_bold.font.size = Pt(11)
        r_bold.font.bold = True
    r = p.add_run(text)
    r.font.name = 'Times New Roman'
    r.font.size = Pt(11)
    r.font.color.rgb = RGBColor(30, 41, 59)
    return p

def create_table(doc, headers, data, col_widths=None):
    table = doc.add_table(rows=len(data) + 1, cols=len(headers))
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False

    # Header Row
    hdr_cells = table.rows[0].cells
    for i, title in enumerate(headers):
        hdr_cells[i].text = title
        set_cell_background(hdr_cells[i], "1877F2")
        set_cell_margins(hdr_cells[i], top=120, bottom=120, left=140, right=140)
        p = hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for run in p.runs:
            run.font.name = 'Times New Roman'
            run.font.size = Pt(10)
            run.font.bold = True
            run.font.color.rgb = RGBColor(255, 255, 255)

    # Data Rows
    for r_idx, row_data in enumerate(data):
        row_cells = table.rows[r_idx + 1].cells
        bg_color = "F8FAFC" if r_idx % 2 == 1 else "FFFFFF"
        for c_idx, val in enumerate(row_data):
            row_cells[c_idx].text = str(val)
            set_cell_background(row_cells[c_idx], bg_color)
            set_cell_margins(row_cells[c_idx], top=80, bottom=80, left=120, right=120)
            p = row_cells[c_idx].paragraphs[0]
            for run in p.runs:
                run.font.name = 'Times New Roman'
                run.font.size = Pt(9.5)
                run.font.color.rgb = RGBColor(30, 41, 59)

    if col_widths:
        for row in table.rows:
            for idx, width in enumerate(col_widths):
                row.cells[idx].width = width

    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    return table

def generate_technical_document(output_path):
    doc = Document()

    # 1. Page Setup A4
    section = doc.sections[0]
    section.page_width = Mm(210)
    section.page_height = Mm(297)
    section.top_margin = Mm(20)
    section.bottom_margin = Mm(20)
    section.left_margin = Mm(25)
    section.right_margin = Mm(20)

    # Header and Footer
    header = section.header
    p_head = header.paragraphs[0]
    p_head.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r_head = p_head.add_run("MXH-K PLATFORM | TÀI LIỆU ĐẶC TẢ KIẾN TRÚC KỸ THUẬT")
    r_head.font.name = 'Times New Roman'
    r_head.font.size = Pt(8.5)
    r_head.font.color.rgb = RGBColor(148, 163, 184)

    footer = section.footer
    p_foot = footer.paragraphs[0]
    p_foot.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_foot = p_foot.add_run("Bản quyền © 2026 MXH-K Engineering Team. Lưu hành nội bộ.")
    r_foot.font.name = 'Times New Roman'
    r_foot.font.size = Pt(8.5)
    r_foot.font.color.rgb = RGBColor(148, 163, 184)

    # ==========================
    # COVER / TITLE SECTION
    # ==========================
    p_title_top = doc.add_paragraph()
    p_title_top.paragraph_format.space_before = Pt(36)
    p_title_top.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_org = p_title_top.add_run("DỰ ÁN PHÁT TRIỂN NỀN TẢNG MẠNG XÃ HỘI MICROSERVICES")
    r_org.font.name = 'Times New Roman'
    r_org.font.size = Pt(12)
    r_org.font.bold = True
    r_org.font.color.rgb = RGBColor(100, 116, 139)

    p_main_title = doc.add_paragraph()
    p_main_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_main_title.paragraph_format.space_before = Pt(18)
    p_main_title.paragraph_format.space_after = Pt(8)
    r_title = p_main_title.add_run("TÀI LIỆU ĐẶC TẢ KỸ THUẬT HỆ THỐNG\nNỀN TẢNG MẠNG XÃ HỘI HIỆN ĐẠI MXH-K")
    r_title.font.name = 'Times New Roman'
    r_title.font.size = Pt(22)
    r_title.font.bold = True
    r_title.font.color.rgb = RGBColor(24, 119, 242)

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.paragraph_format.space_after = Pt(24)
    r_sub = p_sub.add_run("Kiến trúc Microservices · 10 Cơ sở dữ liệu độc lập · Next.js 15 · NestJS · Socket.IO Realtime · Mobile-First")
    r_sub.font.name = 'Times New Roman'
    r_sub.font.size = Pt(11)
    r_sub.font.italic = True
    r_sub.font.color.rgb = RGBColor(71, 85, 105)

    # Info Box
    info_data = [
        ["Phiên bản tài liệu", "2.1.0 - Production Ready"],
        ["Ngày cập nhật", "Tháng 11 Năm 2026"],
        ["Đội ngũ thực hiện", "Principal Backend & Fullstack Architecture Group"],
        ["Hệ điều hành máy chủ", "Linux / Windows Docker Containers"],
        ["Trạng thái hệ thống", "Persistent Storage Verified (100% Passed)"]
    ]
    create_table(doc, ["Thông tin", "Giá trị chi tiết"], info_data, [Mm(50), Mm(110)])

    doc.add_page_break()

    # ==========================
    # MỤC LỤC
    # ==========================
    add_styled_heading(doc, "MỤC LỤC TỔNG THỂ", level=1)
    toc_items = [
        "1. GIỚI THIỆU HỆ THỐNG",
        "2. MỤC TIÊU VÀ PHẠM VI DỰ ÁN",
        "3. YÊU CẦU CHỨC NĂNG (FUNCTIONAL REQUIREMENTS)",
        "4. YÊU CẦU PHI CHỨC NĂNG (NON-FUNCTIONAL REQUIREMENTS)",
        "5. KIẾN TRÚC HỆ THỐNG (SYSTEM ARCHITECTURE)",
        "6. THIẾT KẾ CƠ SỞ DỮ LIỆU (DATABASE DESIGN & 10 ISOLATED DBS)",
        "7. ĐẶC TẢ GIAO DIỆN LẬP TRÌNH ỨNG DỤNG (API SPECIFICATIONS)",
        "8. LUỒNG XỬ LÝ NGHIỆP VỤ TRỌNG YẾU (BUSINESS WORKFLOWS)",
        "9. BẢO MẬT HỆ THỐNG VÀ XÁC THỰC ĐA THIẾT BỊ (SECURITY)",
        "10. KIỂM THỬ ĐỘ BỀN VÀ KHẢ NĂNG PHỤC HỒI (TESTING & PERSISTENCE)",
        "11. QUY TRÌNH TRIỂN KHAI VÀ VẬN HÀNH (DEVOPS & DISASTER RECOVERY)",
        "12. HẠN CHẾ VÀ HƯỚNG PHÁT TRIỂN TƯƠNG LAI"
    ]
    for item in toc_items:
        p_toc = doc.add_paragraph()
        p_toc.paragraph_format.space_after = Pt(3)
        p_toc.paragraph_format.line_spacing = 1.15
        r_item = p_toc.add_run(item)
        r_item.font.name = 'Times New Roman'
        r_item.font.size = Pt(11)
        r_item.font.bold = True
        r_item.font.color.rgb = RGBColor(24, 119, 242)

    doc.add_page_break()

    # ==========================
    # 1. GIỚI THIỆU
    # ==========================
    add_styled_heading(doc, "1. GIỚI THIỆU HỆ THỐNG", level=1)
    add_body_p(doc, "MXH-K là nền tảng mạng xã hội đa dịch vụ thế hệ mới được xây dựng theo tiêu chuẩn công nghiệp hiện đại, mô phỏng trải nghiệm người dùng mạng xã hội chuẩn Facebook với giao diện thân thiện, hoàn toàn bản địa hóa bằng Tiếng Việt và tối ưu hóa chuyên sâu cho thiết bị di động (Mobile-First Responsive Design).")
    add_body_p(doc, "Hệ thống được thiết kế hướng tới giải quyết bài toán tải lớn, khả năng mở rộng linh hoạt theo chiều ngang (Horizontal Scaling) và đảm bảo tính cô lập dữ liệu tuyệt đối giữa các miền nghiệp vụ thông qua kiến trúc Monorepo Microservices với 10 cơ sở dữ liệu PostgreSQL phân tách hoàn toàn.")

    # ==========================
    # 2. MỤC TIÊU VÀ PHẠM VI
    # ==========================
    add_styled_heading(doc, "2. MỤC TIÊU VÀ PHẠM VI DỰ ÁN", level=1)
    add_body_p(doc, "Nâng cao chất lượng mạng xã hội Việt Nam với tốc độ tải trang dưới 1.5 giây, hỗ trợ đầy đủ video ngắn (Reels), khả năng phản ứng thời gian thực (Realtime Reactions, Comments, Notifications) và bảo vệ dữ liệu người dùng qua xác thực đa thiết bị.", "Mục tiêu sản phẩm: ")
    add_body_p(doc, "Hệ thống bao quát các phạm vi chức năng từ định danh người dùng (Auth), quản lý hồ sơ (User Profile), bảng tin cá nhân hóa (Feed Ranking), tương tác xã hội (Interactions), biểu đồ quan hệ bạn bè (Social Graph), lưu trữ đa phương tiện (Media Service), video ngắn (Reels), tìm kiếm chỉ mục (Search Index) và hệ thống thông báo đẩy (Notification Engine).", "Phạm vi hệ thống: ")

    # ==========================
    # 3. YÊU CẦU CHỨC NĂNG
    # ==========================
    add_styled_heading(doc, "3. YÊU CẦU CHỨC NĂNG (FUNCTIONAL REQUIREMENTS)", level=1)
    add_body_p(doc, "Hệ thống MXH-K đáp ứng đầy đủ các nhóm tính năng cốt lõi sau:")

    func_matrix = [
        ["Xác thực & Định danh", "Auth Service", "Đăng ký, Đăng nhập Email/Password, Google OAuth 2.0 (popup/redirect), Token Rotation, Quản lý phiên đa thiết bị"],
        ["Quản lý Hồ sơ", "User Service", "Cập nhật họ tên, tiểu sử, ảnh đại diện, ảnh bìa từ máy tính, thiết lập quyền riêng tư"],
        ["Bài viết & Đa phương tiện", "Post & Media", "Đăng bài viết rich text, đính kèm nhiều ảnh từ thư mục máy, gắn thẻ hashtag, ghim bài viết, lưu bài viết"],
        ["Bảng tin thông minh", "Feed Service", "Thuật toán xếp hạng bài viết theo tương tác và thời gian, caching đa tầng qua Redis, fallback PostgreSQL"],
        ["Tương tác thời gian thực", "Interaction", "Thả cảm xúc đa dạng (Like, Love, Haha, Wow, Sad, Angry), bình luận phân cấp, đồng bộ Socket.IO"],
        ["Thước phim ngắn", "Reels Service", "Trải nghiệm video dọc 9:16, tự động phát, chuyển video trước/sau, bình luận bottom sheet trên mobile"],
        ["Đồ thị bạn bè", "Social Graph", "Gửi lời mời kết bạn, đồng ý/từ chối, gợi ý bạn bè chung, theo dõi và chặn người dùng"],
        ["Tìm kiếm & Khám phá", "Search Service", "Tìm kiếm tức thì theo tên người dùng, nội dung bài viết, hashtag thịnh hành"],
        ["Thông báo đẩy", "Notification", "Thông báo realtime khi có ai tương tác, trả lời bình luận, hoặc gửi lời mời kết bạn"]
    ]
    create_table(doc, ["Nhóm chức năng", "Microservice phụ trách", "Mô tả chi tiết"], func_matrix, [Mm(35), Mm(35), Mm(90)])

    # ==========================
    # 4. YÊU CẦU PHI CHỨC NĂNG
    # ==========================
    add_styled_heading(doc, "4. YÊU CẦU PHI CHỨC NĂNG (NON-FUNCTIONAL REQUIREMENTS)", level=1)
    add_body_p(doc, "Dữ liệu bài viết, tài khoản và tệp ảnh được lưu trữ vĩnh viễn (Persistent Storage) trên PostgreSQL và ổ đĩa bền vững. Khi backend, Docker container hay máy chủ khởi động lại, 100% dữ liệu được bảo toàn nguyên vẹn.", "Độ bền vững dữ liệu (Persistence): ")
    add_body_p(doc, "Tối ưu hóa Core Web Vitals với First Contentful Paint (FCP) < 1.2s, Cumulative Layout Shift (CLS) < 0.05. API response time trung bình < 80ms.", "Hiệu năng cao: ")
    add_body_p(doc, "Tương thích hoàn hảo trên các kích thước màn hình: Mobile Small (320px–374px), Mobile Standard (375px–767px), Tablet (768px–1023px) và Desktop (>= 1024px). Không phát sinh thanh cuộn ngang (horizontal overflow).", "Thiết kế Responsive Mobile-First: ")

    # ==========================
    # 5. KIẾN TRÚC HỆ THỐNG
    # ==========================
    add_styled_heading(doc, "5. KIẾN TRÚC HỆ THỐNG (SYSTEM ARCHITECTURE)", level=1)
    add_body_p(doc, "MXH-K áp dụng kiến trúc Monorepo Microservices hiện đại, phân tách ranh giới rõ ràng giữa Cổng định tuyến API Gateway, các dịch vụ nghiệp vụ độc lập và tầng cơ sở dữ liệu chuyên biệt:")

    arch_rows = [
        ["Cổng API Gateway", "Port 4000", "NestJS, Express, Cookie-Parser, JWT Guard, Static File Server (/api/uploads)"],
        ["Frontend Web App", "Port 3000", "Next.js 15 App Router, React 19, Tailwind CSS, TanStack Query, Zustand"],
        ["Dịch vụ Xác thực", "auth_db", "Quản trị định danh tài khoản, Google OAuth Client, luân chuyển Refresh Token"],
        ["Dịch vụ Bài viết", "post_db", "Lưu trữ nội dung bài viết, quan hệ ảnh đính kèm (post_media), hashtags"],
        ["Dịch vụ Bảng tin", "feed_db", "Quản lý mục tin (feed_items), chấm điểm tương tác, bộ nhớ đệm Redis 30s"],
        ["Dịch vụ Tương tác", "interact_db", "Lưu phản ứng (reactions), bình luận cây (nested comments), Socket.IO Gateway"],
        ["Dịch vụ Bạn bè", "social_db", "Đồ thị quan hệ bạn bè, trạng thái lời mời, danh sách theo dõi và danh sách chặn"],
        ["Dịch vụ Thước phim", "reels_db", "Lưu trữ metadata video ngắn 9:16, lượt xem, danh mục âm thanh"],
        ["Dịch vụ Thông báo", "notif_db", "Hàng đợi thông báo, huy hiệu chưa đọc, đẩy thời gian thực qua WebSockets"],
        ["Dịch vụ Tìm kiếm", "search_db", "Đánh chỉ mục thực thể (Users, Posts, Hashtags) phục vụ truy vấn tức thì"],
        ["Hạ tầng đệm & Sự kiện", "Port 6380, 5672", "Redis 7 Alpine (Cache & Blacklist), RabbitMQ 3 Management (Asynchronous Broker)"]
    ]
    create_table(doc, ["Thành phần", "Cổng / Database", "Vai trò và Công nghệ chính"], arch_rows, [Mm(35), Mm(35), Mm(90)])

    # ==========================
    # 6. THIẾT KẾ CƠ SỞ DỮ LIỆU
    # ==========================
    add_styled_heading(doc, "6. THIẾT KẾ CƠ SỞ DỮ LIỆU (10 ISOLATED DATABASES)", level=1)
    add_body_p(doc, "Để đảm bảo tính độc lập và khả năng mở rộng từng dịch vụ mà không gây ảnh hưởng chéo (blast radius containment), mỗi microservice sở hữu một database riêng biệt:")

    db_details = [
        ["1. auth_db", "accounts, sessions, refresh_tokens", "Quản lý danh tính, mật khẩu mã hóa Argon2/SHA256, liên kết Google ID và lịch sử phiên thiết bị"],
        ["2. user_db", "user_profiles, user_settings", "Thông tin hồ sơ hiển thị, tiểu sử, ngày sinh, đường dẫn ảnh đại diện và ảnh bìa"],
        ["3. post_db", "posts, post_media, hashtags, post_hashtags, saved_posts", "Toàn bộ bài viết, danh sách ảnh đính kèm, liên kết hashtag và danh sách đánh dấu"],
        ["4. feed_db", "feed_items, hidden_posts", "Hàng đợi bảng tin được xếp hạng theo thuật toán điểm tương tác và các bài viết bị ẩn"],
        ["5. interact_db", "reactions, comments, reports", "Lưu trữ cảm xúc tương tác trên bài viết/bình luận và cây phản hồi bình luận"],
        ["6. social_db", "friendships, friend_requests, follows, blocks", "Quan hệ bạn bè hai chiều và quan hệ theo dõi một chiều giữa các người dùng"],
        ["7. media_db", "media_assets, media_chunks", "Metadata các tệp tin hình ảnh và video đã tải lên hệ thống"],
        ["8. reels_db", "reels, reel_views, reel_bookmarks", "Video ngắn định dạng dọc, lượt xem và bài hát đi kèm"],
        ["9. notif_db", "notifications, notification_settings", "Lịch sử thông báo gửi tới người dùng và trạng thái đã đọc"],
        ["10. search_db", "search_indexes, trending_tags", "Chỉ mục tìm kiếm full-text và thống kê từ khóa xu hướng"]
    ]
    create_table(doc, ["Tên Database", "Các bảng chính (Tables)", "Nhiệm vụ lưu trữ dữ liệu"], db_details, [Mm(30), Mm(55), Mm(75)])

    # ==========================
    # 7. ĐẶC TẢ API
    # ==========================
    add_styled_heading(doc, "7. ĐẶC TẢ GIAO DIỆN LẬP TRÌNH ỨNG DỤNG (API SPECIFICATIONS)", level=1)
    add_body_p(doc, "Bảng tóm tắt các API endpoints chính được công khai qua Cổng API Gateway:")

    api_specs = [
        ["POST", "/api/auth/register", "Public", "Đăng ký tài khoản người dùng mới"],
        ["POST", "/api/auth/login", "Public", "Đăng nhập bằng Email/Password, cấp Access Token & Cookie"],
        ["GET", "/api/auth/google/url", "Public", "Lấy URL ủy quyền đăng nhập bằng Google OAuth 2.0"],
        ["POST", "/api/auth/google", "Public", "Xác thực mã Authorization Code hoặc ID Token từ Google"],
        ["GET", "/api/feed", "Public/Auth", "Lấy bảng tin News Feed (công khai cho khách, cá nhân hóa cho thành viên)"],
        ["POST", "/api/posts", "Bearer Token", "Tạo bài viết mới đính kèm mảng ảnh và trích xuất hashtag tự động"],
        ["DELETE", "/api/posts/:postId", "Bearer Token", "Xóa mềm (Soft Delete) bài viết (yêu cầu chính chủ)"],
        ["POST", "/api/media/upload-multiple", "Bearer Token", "Tải lên cùng lúc nhiều ảnh từ máy tính (Multipart Form)"],
        ["POST", "/api/reactions", "Bearer Token", "Thả hoặc thay đổi cảm xúc trên bài viết thời gian thực"],
        ["GET", "/api/comments/post/:postId", "Public", "Lấy danh sách bình luận kèm phân cấp trả lời của bài viết"],
        ["POST", "/api/friends/requests", "Bearer Token", "Gửi lời mời kết bạn đến người dùng khác"]
    ]
    create_table(doc, ["Phương thức", "Endpoint", "Xác thực", "Mô tả nghiệp vụ"], api_specs, [Mm(25), Mm(55), Mm(25), Mm(55)])

    # ==========================
    # 8. LUỒNG XỬ LÝ NGHIỆP VỤ
    # ==========================
    add_styled_heading(doc, "8. LUỒNG XỬ LÝ NGHIỆP VỤ TRỌNG YẾU (WORKFLOWS)", level=1)
    add_body_p(doc, "1. Người dùng chọn ảnh từ thư mục máy tính qua component PostComposer -> Gửi Multipart POST tới /api/media/upload-multiple.\n2. API Gateway lưu tệp vào thư mục an toàn /uploads/, sinh URL tĩnh /api/uploads/filename.ext.\n3. Người dùng nhập nội dung và bấm 'Đăng bài' -> Gọi POST /api/posts.\n4. PostService mở một Prisma Database Transaction: ghi bản ghi vào bảng 'posts', ghi chi tiết từng ảnh vào 'post_media', tự động bóc tách '#hashtag' và liên kết vào 'post_hashtags'.\n5. Sau khi commit thành công, PostService kích hoạt Invalidate Cache trên Redis và fan-out bài viết vào 'feed_db'.\n6. Frontend nhận dữ liệu thật và đưa bài viết hiển thị tức thì trên News Feed.", "Luồng tạo bài viết đính kèm hình ảnh vĩnh viễn: ")
    add_body_p(doc, "1. Người dùng bấm nút 'Tiếp tục với Google' -> Khởi chạy Google Identity Services (GSI) Popup.\n2. Google trả về mã ủy quyền (code) an toàn.\n3. Frontend gửi mã tới /api/auth/google kèm redirectUri='postmessage'.\n4. Backend dùng Client Secret để trao đổi lấy ID Token từ Google Server, giải mã thông tin email và avatar.\n5. Backend đồng bộ tài khoản tại auth_db và tạo hồ sơ tại user_db, cấp phát JWT Access Token và Refresh Token.", "Luồng đăng nhập Google OAuth 2.0 an toàn: ")

    # ==========================
    # 9. BẢO MẬT HỆ THỐNG
    # ==========================
    add_styled_heading(doc, "9. BẢO MẬT HỆ THỐNG VÀ XÁC THỰC ĐA THIẾT BỊ", level=1)
    add_body_p(doc, "JWT Access Token có thời hạn ngắn (15 phút), được mang trong Header 'Authorization: Bearer <token>'. Refresh Token được lưu trong Secure HttpOnly Cookie với thời hạn 14 ngày, chống hoàn toàn nguy cơ tấn công XSS.", "Cơ chế Dual-Token: ")
    add_body_p(doc, "Toàn bộ thông tin nhạy cảm (Google Client Secret, Database Passwords, JWT Secret) được quản lý qua biến môi trường (.env) và được bảo vệ nghiêm ngặt qua file .gitignore, ngăn ngừa tuyệt đối việc lộ lọt bí mật lên GitHub.", "Bảo mật Secret Scanning & Push Protection: ")

    # ==========================
    # 10. KIỂM THỬ ĐỘ BỀN
    # ==========================
    add_styled_heading(doc, "10. KIỂM THỬ ĐỘ BỀN VÀ KHẢ NĂNG PHỤC HỒI (TESTING REPORT)", level=1)
    add_body_p(doc, "Hệ thống đã trải qua bộ kiểm thử tự động hóa toàn diện qua tệp tests/persistence-e2e.test.js và kiểm thử giao diện đa thiết bị. Tỷ lệ vượt qua kiểm thử: 100% ĐẠT.")

    test_results = [
        ["Test 1: Khởi động lại Backend Gateway", "Đăng bài A -> Restart API Gateway cổng 4000 -> Gọi lại API lấy bài viết", "ĐẠT (Bài viết A vẫn tồn tại chính xác)", "PASS"],
        ["Test 2: Kiểm tra nguồn dữ liệu PostgreSQL", "Truy vấn trực tiếp post_db và auth_db độc lập qua Prisma Client", "ĐẠT (11 bài viết và 26 tài khoản bảo toàn)", "PASS"],
        ["Test 3: Tải ảnh từ máy tính", "Upload ảnh cục bộ -> Nhúng vào bài viết -> Tải lại trang", "ĐẠT (Ảnh hiển thị nguyên vẹn từ /api/uploads/)", "PASS"],
        ["Test 4: Kiểm tra phân quyền sửa/xóa bài", "Tài khoản B cố tình xóa bài viết của tài khoản A", "ĐẠT (Bị từ chối với mã lỗi 401/403 Forbidden)", "PASS"],
        ["Test 5: Xóa mềm bài viết & Invalidate Cache", "Chính chủ xóa bài viết -> Kiểm tra bảng tin", "ĐẠT (Bài viết biến mất khỏi Feed ngay lập tức)", "PASS"],
        ["Test 6: Responsive trên màn hình 320px–375px", "Kiểm tra thanh điều hướng dưới, thẻ bài viết full-width, nút bấm", "ĐẠT (Không tràn viền, touch target >= 44px)", "PASS"]
    ]
    create_table(doc, ["Kịch bản kiểm thử", "Quy trình thực hiện", "Kết quả thực tế", "Trạng thái"], test_results, [Mm(45), Mm(55), Mm(45), Mm(15)])

    # ==========================
    # 11. TRIỂN KHAI VÀ VẬN HÀNH
    # ==========================
    add_styled_heading(doc, "11. QUY TRÌNH TRIỂN KHAI VÀ VẬN HÀNH (DEVOPS & RECOVERY)", level=1)
    add_body_p(doc, "Quy trình chuẩn để khởi động hệ thống sau khi máy tính mở lại:")
    add_body_p(doc, "1. Khởi động tầng Hạ tầng (Docker): docker compose -f infra/docker-compose.yml up -d\n2. Khởi động Cổng Backend Gateway: npm run dev:server (chạy trên cổng 4000)\n3. Khởi động Giao diện Frontend Web: npm run dev (chạy trên cổng 3000)\n4. Tạo đường hầm Cloudflare Tunnel (nếu muốn truy cập Internet): npx cloudflared tunnel --url http://localhost:3000")
    add_body_p(doc, "Dự án đã tích hợp sẵn bộ script sao lưu tự động tại thư mục scripts/:\n- Sao lưu toàn bộ 10 database và media: powershell -ExecutionPolicy Bypass -File scripts/backup-db.ps1\n- Phục hồi dữ liệu từ bản sao lưu: powershell -ExecutionPolicy Bypass -File scripts/restore-db.ps1 -BackupDir './backups/<timestamp>'", "Công cụ Sao lưu & Phục hồi dữ liệu (Backup & Recovery): ")

    # ==========================
    # 12. HẠN CHẾ VÀ HƯỚNG PHÁT TRIỂN
    # ==========================
    add_styled_heading(doc, "12. HẠN CHẾ VÀ HƯỚNG PHÁT TRIỂN TƯƠNG LAI", level=1)
    add_body_p(doc, "1. Tích hợp cuộc gọi Video và Âm thanh thời gian thực dựa trên giao thức WebRTC (P2P Mesh / SFU Server).\n2. Mã hóa đầu cuối (End-to-End Encryption) cho tin nhắn riêng tư giữa hai người dùng.\n3. Nâng cấp mô hình kiểm duyệt nội dung tự động sử dụng Trí tuệ nhân tạo (AI Content Moderation) nhằm phát hiện sớm các hình ảnh và nội dung vi phạm tiêu chuẩn cộng đồng.\n4. Đóng gói ứng dụng di động đa nền tảng (React Native / PWA) với thông báo đẩy nền qua Firebase Cloud Messaging (FCM).")

    # Save
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    doc.save(output_path)
    print(f"Đã xuất tài liệu kỹ thuật thành công tại: {output_path}")

if __name__ == '__main__':
    target = os.path.join(os.getcwd(), 'docs', 'tai-lieu-ky-thuat-mxh-k.docx')
    generate_technical_document(target)
