# PDF Embedding Setup Instructions

## How to Add Your PDFs

Your article pages are now set up to embed PDFs. Follow these steps to display your articles:

### Step 1: Create the PDFs Folder
1. Open your project folder: `c:\Users\pietj\Downloads\02_Next_starterkit_Pages_Components-main`
2. Navigate to: `public/`
3. Create a new folder called `articles`
   - Path should be: `public/articles/`

### Step 2: Add Your PDF Files
Place your PDF files in the `public/articles/` folder with these exact names:

- **article1.pdf** - "Was het verzet van Dario Amodei tegen minister Hegseth..."
- **article2.pdf** - "Vibecoding - zo maak je in enkele minuten..."
- **article3.pdf** - Your third article (any name, but rename it to `article3.pdf`)

### Folder Structure
```
public/
  articles/
    article1.pdf
    article2.pdf
    article3.pdf
```

### Step 3: Test It
1. Run `npm run dev` 
2. Visit `http://localhost:3000`
3. Click on any article card to view the PDF

---

## What's Already Configured

✅ **Article 1**: `/article1` → displays `article1.pdf`
✅ **Article 2**: `/article2` → displays `article2.pdf`
✅ **Article 3**: `/article3` → displays `article3.pdf`
✅ **Home Page**: Shows article preview cards linking to each PDF
✅ **Navigation**: GlobalNavbar links to all 3 articles

---

## Notes

- PDFs will display at full width with 90vh height (adjustable)
- The original PDF layout and styling will be preserved exactly
- PDFs are responsive on mobile devices
- Each article has a title displayed above the PDF viewer

---

## File Locations Changed
- `app/article1/page.tsx` - Now uses PDFViewer component
- `app/article2/page.tsx` - Now uses PDFViewer component
- `app/article3/page.tsx` - Now uses PDFViewer component
- `components/PDFViewer.tsx` - New component for embedding PDFs
- `app/page.tsx` - Updated with correct article info

Enjoy! 🎉
