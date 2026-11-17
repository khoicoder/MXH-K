import os
import sys
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), fill_hex)
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('w:top', top), ('w:bottom', bottom), ('w:left', left), ('w:right', right)]:
        node = OxmlElement(m)
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def create_base_doc(title, doc_id, category, version="1.0.0", status="Approved for Architecture"):
    doc = Document()
    
    # Page setup A4
    for section in doc.sections:
        section.page_width = Inches(8.27)
        section.page_height = Inches(11.69)
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)
        
        # Header / Footer
        header = section.header
        hp = header.paragraphs[0]
        hp.text = f"Enterprise Social Network Platform | {category}"
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hp.runs[0].font.size = Pt(8.5)
        hp.runs[0].font.color.rgb = RGBColor(128, 128, 128)
        
        footer = section.footer
        fp = footer.paragraphs[0]
        fp.text = f"Document ID: {doc_id}  |  CONFIDENTIAL & PROPRIETARY  |  Version {version}"
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        fp.runs[0].font.size = Pt(8.5)
        fp.runs[0].font.color.rgb = RGBColor(128, 128, 128)

    # Document Header Box
    p_pre = doc.add_paragraph()
    r_pre = p_pre.add_run(f"SYSTEM SPECIFICATION / {category.upper()}")
    r_pre.font.size = Pt(9.5)
    r_pre.font.bold = True
    r_pre.font.color.rgb = RGBColor(30, 58, 138) # Navy Blue
    
    title_p = doc.add_paragraph()
    title_run = title_p.add_run(title)
    title_run.font.size = Pt(22)
    title_run.font.bold = True
    title_run.font.color.rgb = RGBColor(15, 23, 42) # Slate 900
    title_p.paragraph_format.space_after = Pt(12)
    
    # Metadata Table
    meta_table = doc.add_table(rows=5, cols=2)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_table.autofit = False
    
    metadata = [
        ("Document ID", doc_id),
        ("Version & Status", f"{version} ({status})"),
        ("Architectural Authority", "Senior Software Architecture & Engineering Team"),
        ("Target System", "Scalable Multi-Service Social Network Platform"),
        ("Last Updated", "November 2026")
    ]
    
    col_widths = [Inches(2.2), Inches(4.07)]
    for row_idx, (k, v) in enumerate(metadata):
        row = meta_table.rows[row_idx]
        cell_k, cell_v = row.cells[0], row.cells[1]
        cell_k.width = col_widths[0]
        cell_v.width = col_widths[1]
        
        set_cell_background(cell_k, "F1F5F9")
        set_cell_background(cell_v, "FFFFFF")
        set_cell_margins(cell_k, top=80, bottom=80, left=120, right=120)
        set_cell_margins(cell_v, top=80, bottom=80, left=120, right=120)
        
        pk = cell_k.paragraphs[0]
        rk = pk.add_run(k)
        rk.font.bold = True
        rk.font.size = Pt(9.5)
        rk.font.color.rgb = RGBColor(51, 65, 85)
        
        pv = cell_v.paragraphs[0]
        rv = pv.add_run(v)
        rv.font.size = Pt(9.5)
        rv.font.color.rgb = RGBColor(15, 23, 42)
        
    doc.add_paragraph().paragraph_format.space_after = Pt(14)
    return doc

def add_heading_1(doc, text):
    h = doc.add_heading(level=1)
    r = h.add_run(text)
    r.font.size = Pt(15)
    r.font.bold = True
    r.font.color.rgb = RGBColor(30, 58, 138)
    h.paragraph_format.space_before = Pt(14)
    h.paragraph_format.space_after = Pt(6)
    return h

def add_heading_2(doc, text):
    h = doc.add_heading(level=2)
    r = h.add_run(text)
    r.font.size = Pt(12.5)
    r.font.bold = True
    r.font.color.rgb = RGBColor(15, 23, 42)
    h.paragraph_format.space_before = Pt(10)
    h.paragraph_format.space_after = Pt(4)
    return h

def add_heading_3(doc, text):
    h = doc.add_heading(level=3)
    r = h.add_run(text)
    r.font.size = Pt(11)
    r.font.bold = True
    r.font.italic = True
    r.font.color.rgb = RGBColor(71, 85, 105)
    h.paragraph_format.space_before = Pt(6)
    h.paragraph_format.space_after = Pt(2)
    return h

def add_p(doc, text, bold_prefix="", italic=False):
    p = doc.add_paragraph()
    if bold_prefix:
        r_pre = p.add_run(bold_prefix)
        r_pre.font.bold = True
        r_pre.font.size = Pt(10)
        r_pre.font.color.rgb = RGBColor(15, 23, 42)
    r = p.add_run(text)
    r.font.size = Pt(10)
    r.font.italic = italic
    r.font.color.rgb = RGBColor(51, 65, 85)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.line_spacing = 1.15
    return p

def add_callout(doc, text, title="ARCHITECTURAL MANDATE"):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    c = tbl.rows[0].cells[0]
    c.width = Inches(6.27)
    set_cell_background(c, "EFF6FF") # Light blue tint
    set_cell_margins(c, top=120, bottom=120, left=160, right=160)
    
    p = c.paragraphs[0]
    r_tit = p.add_run(f"[{title}] ")
    r_tit.font.bold = True
    r_tit.font.size = Pt(9.5)
    r_tit.font.color.rgb = RGBColor(29, 78, 216)
    
    r_txt = p.add_run(text)
    r_txt.font.size = Pt(9.5)
    r_txt.font.color.rgb = RGBColor(30, 58, 138)
    doc.add_paragraph().paragraph_format.space_after = Pt(6)

def create_table_from_data(doc, headers, rows, col_widths=None):
    tbl = doc.add_table(rows=len(rows) + 1, cols=len(headers))
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    
    # Headers
    hdr_row = tbl.rows[0]
    for i, h in enumerate(headers):
        cell = hdr_row.cells[i]
        if col_widths and i < len(col_widths):
            cell.width = col_widths[i]
        set_cell_background(cell, "1E3A8A")
        set_cell_margins(cell, top=100, bottom=100, left=120, right=120)
        p = cell.paragraphs[0]
        r = p.add_run(h)
        r.font.bold = True
        r.font.size = Pt(9)
        r.font.color.rgb = RGBColor(255, 255, 255)
        
    for r_idx, row_data in enumerate(rows):
        row = tbl.rows[r_idx + 1]
        bg_col = "F8FAFC" if r_idx % 2 == 1 else "FFFFFF"
        for c_idx, val in enumerate(row_data):
            cell = row.cells[c_idx]
            if col_widths and c_idx < len(col_widths):
                cell.width = col_widths[c_idx]
            set_cell_background(cell, bg_col)
            set_cell_margins(cell, top=80, bottom=80, left=120, right=120)
            p = cell.paragraphs[0]
            r = p.add_run(str(val))
            r.font.size = Pt(9)
            r.font.color.rgb = RGBColor(30, 41, 59)
            
    doc.add_paragraph().paragraph_format.space_after = Pt(8)

print("Helper functions ready.")
