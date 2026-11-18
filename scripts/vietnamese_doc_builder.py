# -*- coding: utf-8 -*-
"""
Mô-đun Khung định dạng & Tạo tài liệu Word Tiếng Việt Chuẩn Doanh nghiệp
Áp dụng: Khổ giấy A4, Phông chữ Times New Roman, Bảng biểu chuyên nghiệp, 
Callout cảnh báo, Bảng chú giải thuật ngữ tiếng Anh - tiếng Việt.
"""

import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor, Mm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

COLOR_NAVY = RGBColor(30, 58, 138)       # #1E3A8A - Tiêu đề chính
COLOR_SLATE_900 = RGBColor(15, 23, 42)    # #0F172A - Văn bản chính
COLOR_SLATE_700 = RGBColor(51, 65, 85)    # #334155 - Phụ đề
COLOR_MUTED = RGBColor(100, 116, 139)     # #64748B - Header/Footer/Ghi chú
COLOR_BORDER = "CBD5E1"                   # Xám viền bảng
COLOR_PRIMARY_BG = "1E3A8A"               # Nền tiêu đề bảng
COLOR_ZEBRA_BG = "F8FAFC"                 # Nền sọc chẵn
COLOR_CALLOUT_BG = "F1F5F9"               # Nền hộp ghi chú BA

def set_cell_background(cell, hex_color):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=120, bottom=120, left=180, right=180):
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

def create_vietnamese_base_doc(title, doc_id, category_name, version="2.0.0", status="Chính thức - Bản hành sản xuất"):
    doc = Document()
    
    # Thiết lập trang A4 chuẩn (210 x 297 mm)
    for section in doc.sections:
        section.page_width = Mm(210)
        section.page_height = Mm(297)
        section.top_margin = Mm(25)
        section.bottom_margin = Mm(25)
        section.left_margin = Mm(25)
        section.right_margin = Mm(25)
        
        # Header trang
        header = section.header
        hp = header.paragraphs[0]
        hp.text = f"NỀN TẢNG MẠNG XÃ HỘI PHÂN TÁN MXH-K  |  {category_name.upper()}"
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hp.runs[0].font.name = 'Times New Roman'
        hp.runs[0].font.size = Pt(8.5)
        hp.runs[0].font.color.rgb = COLOR_MUTED
        
        # Footer trang
        footer = section.footer
        fp = footer.paragraphs[0]
        fp.text = f"Mã tài liệu: {doc_id}  |  BẢO MẬT NỘI BỘ  |  Phiên bản {version}"
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        fp.runs[0].font.name = 'Times New Roman'
        fp.runs[0].font.size = Pt(8.5)
        fp.runs[0].font.color.rgb = COLOR_MUTED

    # Tiêu đề trên cùng (Category tag)
    p_pre = doc.add_paragraph()
    p_pre.paragraph_format.space_before = Pt(0)
    p_pre.paragraph_format.space_after = Pt(2)
    r_pre = p_pre.add_run(f"ĐẶC TẢ HỆ THỐNG / {category_name.upper()}")
    r_pre.font.name = 'Times New Roman'
    r_pre.font.size = Pt(9.5)
    r_pre.font.bold = True
    r_pre.font.color.rgb = COLOR_NAVY
    
    # Tiêu đề tài liệu chính
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(4)
    title_p.paragraph_format.space_after = Pt(12)
    title_run = title_p.add_run(title)
    title_run.font.name = 'Times New Roman'
    title_run.font.size = Pt(20)
    title_run.font.bold = True
    title_run.font.color.rgb = COLOR_SLATE_900
    
    # Bảng thông tin kiểm soát tài liệu (Metadata Table)
    meta_table = doc.add_table(rows=5, cols=2)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_table.autofit = False
    
    metadata = [
        ("Mã tài liệu (Document ID):", doc_id),
        ("Phiên bản & Trạng thái:", f"{version} ({status})"),
        ("Đơn vị phê duyệt & Chịu trách nhiệm:", "Hội đồng Kiến trúc Phần mềm & Phân tích Nghiệp vụ (SA & BA Team)"),
        ("Đối tượng áp dụng:", "Kỹ sư Backend, Frontend, Database, DevOps, QA/QC và Chuyên viên BA"),
        ("Ngày cập nhật hoàn tất:", "18/11/2026 (Đã tích hợp toàn bộ các bản vá lỗi sản xuất)")
    ]
    
    col_widths = [Mm(60), Mm(100)]
    for row_idx, (label, val) in enumerate(metadata):
        row = meta_table.rows[row_idx]
        for c_idx, cell in enumerate(row.cells):
            cell.width = col_widths[c_idx]
            set_cell_margins(cell, top=80, bottom=80, left=120, right=120)
            
        c0 = row.cells[0]
        set_cell_background(c0, "F1F5F9")
        p0 = c0.paragraphs[0]
        p0.paragraph_format.space_before = Pt(0)
        p0.paragraph_format.space_after = Pt(0)
        r0 = p0.add_run(label)
        r0.font.name = 'Times New Roman'
        r0.font.bold = True
        r0.font.size = Pt(9.5)
        r0.font.color.rgb = COLOR_SLATE_900
        
        c1 = row.cells[1]
        set_cell_background(c1, "FFFFFF" if row_idx % 2 == 0 else "F8FAFC")
        p1 = c1.paragraphs[0]
        p1.paragraph_format.space_before = Pt(0)
        p1.paragraph_format.space_after = Pt(0)
        r1 = p1.add_run(val)
        r1.font.name = 'Times New Roman'
        r1.font.size = Pt(9.5)
        r1.font.color.rgb = COLOR_SLATE_700

    doc.add_paragraph().paragraph_format.space_after = Pt(8)
    return doc

def add_heading_1(doc, text):
    h = doc.add_heading(level=1)
    h.paragraph_format.keep_with_next = True
    h.paragraph_format.space_before = Pt(14)
    h.paragraph_format.space_after = Pt(4)
    run = h.add_run(text)
    run.font.name = 'Times New Roman'
    run.font.size = Pt(14)
    run.font.bold = True
    run.font.color.rgb = COLOR_NAVY
    return h

def add_heading_2(doc, text):
    h = doc.add_heading(level=2)
    h.paragraph_format.keep_with_next = True
    h.paragraph_format.space_before = Pt(10)
    h.paragraph_format.space_after = Pt(3)
    run = h.add_run(text)
    run.font.name = 'Times New Roman'
    run.font.size = Pt(12)
    run.font.bold = True
    run.font.color.rgb = RGBColor(14, 116, 144) # Cyan 700
    return h

def add_heading_3(doc, text):
    h = doc.add_heading(level=3)
    h.paragraph_format.keep_with_next = True
    h.paragraph_format.space_before = Pt(8)
    h.paragraph_format.space_after = Pt(2)
    run = h.add_run(text)
    run.font.name = 'Times New Roman'
    run.font.size = Pt(11)
    run.font.bold = True
    run.font.color.rgb = COLOR_SLATE_900
    return h

def add_p(doc, text, bold_prefix="", italic_note=""):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.line_spacing = 1.15
    
    if bold_prefix:
        r_prefix = p.add_run(bold_prefix + " ")
        r_prefix.font.name = 'Times New Roman'
        r_prefix.font.size = Pt(10.5)
        r_prefix.font.bold = True
        r_prefix.font.color.rgb = COLOR_SLATE_900
        
    r_body = p.add_run(text)
    r_body.font.name = 'Times New Roman'
    r_body.font.size = Pt(10.5)
    r_body.font.color.rgb = COLOR_SLATE_900
    
    if italic_note:
        r_note = p.add_run(" " + italic_note)
        r_note.font.name = 'Times New Roman'
        r_note.font.size = Pt(9.5)
        r_note.font.italic = True
        r_note.font.color.rgb = COLOR_MUTED
    return p

def add_bullet(doc, text, bold_term=""):
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.line_spacing = 1.15
    if bold_term:
        r_term = p.add_run(bold_term + ": ")
        r_term.font.name = 'Times New Roman'
        r_term.font.size = Pt(10.5)
        r_term.font.bold = True
        r_term.font.color.rgb = COLOR_SLATE_900
    r_text = p.add_run(text)
    r_text.font.name = 'Times New Roman'
    r_text.font.size = Pt(10.5)
    r_text.font.color.rgb = COLOR_SLATE_900
    return p

def add_callout(doc, title, text):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    cell = table.rows[0].cells[0]
    cell.width = Mm(160)
    set_cell_margins(cell, top=140, bottom=140, left=180, right=180)
    set_cell_background(cell, COLOR_CALLOUT_BG)
    
    # Đặt viền trái màu xanh Navy dày
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = parse_xml(f'''
        <w:tcBorders {nsdecls("w")}>
            <w:top w:val="none"/>
            <w:left w:val="single" w:sz="36" w:space="0" w:color="1E3A8A"/>
            <w:bottom w:val="none"/>
            <w:right w:val="none"/>
        </w:tcBorders>
    ''')
    tcPr.append(tcBorders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    r_t = p.add_run(f"📌 {title.upper()}\n")
    r_t.font.name = 'Times New Roman'
    r_t.font.size = Pt(10)
    r_t.font.bold = True
    r_t.font.color.rgb = COLOR_NAVY
    
    r_b = p.add_run(text)
    r_b.font.name = 'Times New Roman'
    r_b.font.size = Pt(10)
    r_b.font.color.rgb = COLOR_SLATE_900
    
    doc.add_paragraph().paragraph_format.space_after = Pt(6)

def add_styled_table(doc, headers, data, col_widths=None):
    table = doc.add_table(rows=len(data) + 1, cols=len(headers))
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    # Thiết lập tiêu đề bảng (Header)
    hdr_row = table.rows[0]
    for idx, heading in enumerate(headers):
        cell = hdr_row.cells[idx]
        if col_widths and idx < len(col_widths):
            cell.width = Mm(col_widths[idx])
        set_cell_margins(cell, top=120, bottom=120, left=140, right=140)
        set_cell_background(cell, COLOR_PRIMARY_BG)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        run = p.add_run(heading)
        run.font.name = 'Times New Roman'
        run.font.bold = True
        run.font.size = Pt(9.5)
        run.font.color.rgb = RGBColor(255, 255, 255)
        
    # Thiết lập các hàng dữ liệu
    for row_idx, row_data in enumerate(data):
        row = table.rows[row_idx + 1]
        bg_color = "FFFFFF" if row_idx % 2 == 0 else COLOR_ZEBRA_BG
        for col_idx, cell_value in enumerate(row_data):
            cell = row.cells[col_idx]
            if col_widths and col_idx < len(col_widths):
                cell.width = Mm(col_widths[col_idx])
            set_cell_margins(cell, top=100, bottom=100, left=140, right=140)
            set_cell_background(cell, bg_color)
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            run = p.add_run(str(cell_value))
            run.font.name = 'Times New Roman'
            run.font.size = Pt(9.5)
            run.font.color.rgb = COLOR_SLATE_900

    doc.add_paragraph().paragraph_format.space_after = Pt(8)

def add_ba_notes_section(doc, business_goal, user_flow_items, acceptance_criteria_items, implemented_fixes_items):
    add_heading_1(doc, "Ghi chú Phân tích Nghiệp vụ (Ghi chú BA - Business Analyst Notes)")
    add_p(doc, "Mục này phân tích chi tiết yêu cầu nghiệp vụ, trải nghiệm hành trình người dùng và các tiêu chuẩn kiểm thử chấp nhận được đối soát trực tiếp từ thực tế triển khai của hệ thống MXH-K.")
    
    add_heading_2(doc, "1. Mục tiêu Nghiệp vụ & Giá trị Cốt lõi (Business Goals)")
    add_p(doc, business_goal)
    
    add_heading_2(doc, "2. Luồng Nghiệp vụ & Trải nghiệm Người dùng (Business Workflow)")
    for item in user_flow_items:
        add_bullet(doc, item[1], bold_term=item[0])
        
    add_heading_2(doc, "3. Tiêu chuẩn Nghiệm thu Chức năng (Acceptance Criteria - AC)")
    for ac in acceptance_criteria_items:
        add_bullet(doc, ac[1], bold_term=ac[0])
        
    add_heading_2(doc, "4. Các điểm Cải tiến & Sửa lỗi Thực tế (Implemented System Fixes)")
    for fix in implemented_fixes_items:
        add_bullet(doc, fix[1], bold_term=fix[0])

def add_user_operations_guide(doc, user_instructions, admin_instructions, troubleshooting_items):
    add_heading_1(doc, "Hướng dẫn Người dùng & Vận hành Hệ thống (User & Operations Guide)")
    add_p(doc, "Tài liệu hướng dẫn thao tác thực tế dành cho Người dùng cuối (End-User) và Đội ngũ Vận hành kỹ thuật (System Administrators & DevOps).")
    
    add_heading_2(doc, "1. Hướng dẫn Thao tác Người dùng Cuối (End-User Guide)")
    for step in user_instructions:
        add_bullet(doc, step[1], bold_term=step[0])
        
    add_heading_2(doc, "2. Hướng dẫn Vận hành & Cấu hình Kỹ thuật (Operations & Configuration)")
    for op in admin_instructions:
        add_bullet(doc, op[1], bold_term=op[0])
        
    add_heading_2(doc, "3. Xử lý Sự cố & Tình huống Thường gặp (Troubleshooting & FAQs)")
    for ts in troubleshooting_items:
        add_bullet(doc, ts[1], bold_term=ts[0])

def add_technical_glossary(doc, glossary_items):
    add_heading_1(doc, "Bảng chú giải Thuật ngữ Kỹ thuật & Logic (Technical Glossary)")
    add_p(doc, "Những từ ngữ tiếng Anh mang tính logic, ngữ nghĩa kỹ thuật nền tảng không thể thay thế hoặc nếu dịch thô sẽ làm sai lệch bản chất kỹ thuật được giữ nguyên kèm phần giải nghĩa chi tiết ngữ cảnh:")
    
    headers = ["Thuật ngữ Tiếng Anh", "Khái niệm Tiếng Việt", "Giải thích Ngữ cảnh Kỹ thuật trong Hệ thống MXH-K"]
    col_widths = [45, 45, 70]
    add_styled_table(doc, headers, glossary_items, col_widths)

def save_document(doc, relative_path):
    target_path = os.path.join("docs", relative_path)
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    doc.save(target_path)
    print(f" -> Đã tạo thành công: {target_path}")
