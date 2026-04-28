const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

(async () => {
  const base = process.cwd();
  for (const i of [1,2,3]) {
    const pdfPath = path.join(base, 'public', 'articles', `article${i}.pdf`);
    const outPath = path.join(base, `article${i}_extracted.txt`);
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    fs.writeFileSync(outPath, data.text || '', 'utf8');
    console.log(`wrote ${outPath} (${(data.text || '').length} chars)`);
  }
})();
