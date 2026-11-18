# -*- coding: utf-8 -*-
"""
Trình Thực Thi Cập Nhật Toàn Bộ 52 Tài Liệu Word (.docx) sang Tiếng Việt Chuẩn Doanh Nghiệp
Bổ sung đầy đủ:
1. Ghi chú Phân tích Nghiệp vụ (Ghi chú BA - Business Analyst Notes)
2. Hướng dẫn Người dùng & Vận hành (User & Operations Guide)
3. Bảng chú giải Thuật ngữ Kỹ thuật & Logic (Technical Glossary & Terminology)
Dựa trên toàn bộ các tính năng và bản vá lỗi thực tế đã triển khai trong hệ thống MXH-K.
"""

import os
import sys
import time

def run_all():
    start_time = time.time()
    print("================================================================================")
    print("BẮT ĐẦU QUY TRÌNH CHUYỂN ĐỔI TOÀN BỘ 52 TÀI LIỆU WORD SANG TIẾNG VIỆT CHUẨN BA")
    print("================================================================================")

    # Thêm thư mục hiện tại vào sys.path để import
    sys.path.insert(0, os.path.dirname(__file__))

    from docs_data_part1 import generate_part1
    from docs_data_part2 import generate_part2
    from docs_data_part3 import generate_part3
    from docs_data_part4 import generate_part4
    from docs_data_part5 import generate_part5

    generate_part1()
    generate_part2()
    generate_part3()
    generate_part4()
    generate_part5()

    print("\n--------------------------------------------------------------------------------")
    print("KIỂM TRA VÀ THỐNG KÊ DANH MỤC CÁC TÀI LIỆU WORD ĐÃ ĐƯỢC TẠO:")
    print("--------------------------------------------------------------------------------")
    
    total_docs = 0
    categories = {}
    for root, dirs, files in os.walk("docs"):
        for f in files:
            if f.endswith(".docx"):
                rel_path = os.path.relpath(os.path.join(root, f), "docs")
                cat = os.path.dirname(rel_path) or "ROOT"
                categories.setdefault(cat, []).append(f)
                total_docs += 1

    for cat, doc_list in sorted(categories.items()):
        print(f"[{cat}] ({len(doc_list)} tài liệu):")
        for doc_name in sorted(doc_list):
            file_size_kb = os.path.getsize(os.path.join("docs", cat if cat != "ROOT" else "", doc_name)) / 1024
            print(f"   - {doc_name} ({file_size_kb:.1f} KB)")

    elapsed = time.time() - start_time
    print("================================================================================")
    print(f"TỔNG CỘNG: Đã cập nhật thành công {total_docs} tài liệu Word hoàn chỉnh sang Tiếng Việt!")
    print(f"Thời gian thực thi: {elapsed:.2f} giây.")
    print("================================================================================")

if __name__ == "__main__":
    run_all()
