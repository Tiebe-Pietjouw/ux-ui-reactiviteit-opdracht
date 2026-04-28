import os
from pypdf import PdfReader
base = r"C:\Users\pietj\Downloads\02_Next_starterkit_Pages_Components-main"
for i in [1,2,3]:
    pdf_path = os.path.join(base, "public", "articles", f"article{i}.pdf")
    out_path = os.path.join(base, f"article{i}_extracted.txt")
    reader = PdfReader(pdf_path)
    parts = []
    for p in reader.pages:
        parts.append(p.extract_text() or "")
    text = "\n\n".join(parts)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"wrote {out_path} ({len(text)} chars)")
