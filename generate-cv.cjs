const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

async function createCV() {
  console.log('Generating high-resolution profile photo for CV...');
  
  // Use the formal portrait image
  const profileBuffer = await sharp('src/assets/Profile.jpg')
    .resize(360, 360, { fit: 'cover' })
    .jpeg({ quality: 98 })
    .toBuffer();
    
  const photoBase64 = `data:image/jpeg;base64,${profileBuffer.toString('base64')}`;

  // Clean SVG icons for contact info (crisp vector rendering in print)
  const icons = {
    location: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    phone: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    mail: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    github: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    globe: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    external: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
  };

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shelema Ageri - Curriculum Vitae</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4;
      margin: 0;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      color: #1e293b;
      background: #ffffff;
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      font-size: 8.8pt;
      line-height: 1.36;
      overflow: hidden;
    }

    .cv-page {
      width: 210mm;
      height: 297mm;
      padding: 13mm 15mm 12mm 15mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Header Section */
    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid #0284c7;
    }

    .header-photo-container {
      flex-shrink: 0;
    }

    .header-photo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      border: 2.5px solid #0284c7;
      box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2);
    }

    .header-details {
      flex: 1;
    }

    .candidate-name {
      font-size: 21pt;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #0f172a;
      line-height: 1.1;
      margin-bottom: 3px;
    }

    .candidate-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: #0284c7;
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }

    .contact-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      font-size: 8pt;
      color: #475569;
      font-weight: 500;
    }

    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
    }

    .contact-item a {
      color: #0369a1;
      text-decoration: none;
      font-weight: 600;
    }

    /* Section Styling */
    .section {
      margin-top: 10px;
    }

    .section-title {
      font-size: 9.2pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 7px;
      margin-bottom: 6px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
    }

    .section-title::before {
      content: "";
      width: 3.5px;
      height: 11px;
      background: #0284c7;
      border-radius: 2px;
      display: inline-block;
    }

    /* Summary */
    .summary-text {
      font-size: 8.5pt;
      color: #334155;
      line-height: 1.45;
      text-align: justify;
    }

    /* Skills Grid */
    .skills-table {
      display: flex;
      flex-direction: column;
      gap: 3.5px;
      font-size: 8.2pt;
    }

    .skill-row {
      display: grid;
      grid-template-columns: 145px 1fr;
      align-items: baseline;
      gap: 10px;
    }

    .skill-category {
      font-weight: 700;
      color: #0f172a;
    }

    .skill-list {
      color: #334155;
    }

    /* Experience & Projects */
    .entry {
      margin-bottom: 8px;
    }

    .entry:last-child {
      margin-bottom: 0;
    }

    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 3px;
    }

    .entry-title {
      font-size: 9pt;
      font-weight: 700;
      color: #0f172a;
    }

    .entry-subtitle {
      font-size: 8.5pt;
      font-weight: 600;
      color: #0284c7;
    }

    .entry-meta {
      font-size: 8pt;
      font-weight: 600;
      color: #64748b;
      white-space: nowrap;
    }

    .bullet-list {
      list-style-type: none;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      gap: 3.5px;
      margin-top: 3px;
    }

    .bullet-item {
      font-size: 8.2pt;
      color: #334155;
      line-height: 1.38;
      position: relative;
      padding-left: 12px;
      text-align: justify;
    }

    .bullet-item::before {
      content: "•";
      position: absolute;
      left: 1px;
      top: -1px;
      color: #0284c7;
      font-size: 10pt;
    }

    .bullet-item strong {
      color: #0f172a;
    }

    /* Education */
    .edu-block {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.5pt;
    }

    .edu-degree {
      font-weight: 700;
      color: #0f172a;
    }

    .edu-school {
      color: #475569;
      font-weight: 600;
    }

    .edu-grade {
      font-weight: 700;
      color: #0284c7;
    }

    /* Tech Tags Pill */
    .tech-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.2pt;
      background: #f0fdf4;
      color: #15803d;
      border: 1px solid #bbf7d0;
      padding: 1px 6px;
      border-radius: 4px;
      font-weight: 600;
      display: inline-block;
      margin-left: 5px;
    }
  </style>
</head>
<body>
  <div class="cv-page">
    <!-- Header -->
    <header class="header">
      <div class="header-photo-container">
        <img src="${photoBase64}" alt="Shelema Ageri" class="header-photo">
      </div>
      <div class="header-details">
        <h1 class="candidate-name">Shelema Ageri</h1>
        <div class="candidate-title">Full Stack MERN Developer | Computer Science Student</div>
        <div class="contact-grid">
          <span class="contact-item">${icons.location} Addis Ababa, Ethiopia</span>
          <span class="contact-item">${icons.phone} <a href="tel:0974007772" style="color: inherit;">0974007772</a></span>
          <span class="contact-item">${icons.mail} <a href="mailto:shelemaagari@gmail.com">shelemaagari@gmail.com</a></span>
          <span class="contact-item">${icons.github} <a href="https://github.com/Shelema-bot" target="_blank">github.com/Shelema-bot</a></span>
          <span class="contact-item">${icons.globe} <a href="https://shelema-bot.github.io/portfolio/" target="_blank">shelema-bot.github.io/portfolio</a></span>
        </div>
      </div>
    </header>

    <!-- Professional Summary -->
    <section class="section">
      <h2 class="section-title">Professional Summary</h2>
      <p class="summary-text">
        Motivated third-year Computer Science student at Haramaya University with strong proficiency in full-stack web development. Experienced in building responsive, feature-rich web applications using React, Node.js, Express.js, and MongoDB. Proven capability in delivering comprehensive digital solutions, highlighted by a full-stack E-Commerce platform featuring secure authentication, RESTful APIs, payment integration (Chapa), and administrative dashboards. Eager to bring technical problem-solving skills and a growth mindset to a dynamic software engineering team.
      </p>
    </section>

    <!-- Technical Skills -->
    <section class="section">
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-table">
        <div class="skill-row">
          <span class="skill-category">Frontend Technologies:</span>
          <span class="skill-list">React, HTML5, CSS3, JavaScript, Responsive Web Design, React Router, Axios</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">Backend & APIs:</span>
          <span class="skill-list">Node.js, Express.js, RESTful APIs, Custom Middleware</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">Database & Storage:</span>
          <span class="skill-list">MongoDB, Mongoose, Multer (File Uploads)</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">Authentication & Payments:</span>
          <span class="skill-list">JSON Web Tokens (JWT), Chapa Payment Gateway</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">Development & Tools:</span>
          <span class="skill-list">Git, GitHub, VS Code, Postman (API Testing & Verification)</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">Creative Skills:</span>
          <span class="skill-list">Video Editing & Digital Content Creation</span>
        </div>
      </div>
    </section>

    <!-- Professional Experience -->
    <section class="section">
      <h2 class="section-title">Professional Experience / Industrial Practice</h2>
      <div class="entry">
        <div class="entry-header">
          <div>
            <span class="entry-title">OICT Solutions</span>
            <span style="color: #64748b;"> — Addis Ababa, Ethiopia</span>
          </div>
          <span class="entry-meta">Software Development Team Member</span>
        </div>
        <ul class="bullet-list">
          <li class="bullet-item">Contributed to web application development and full-stack software engineering tasks in a team environment.</li>
          <li class="bullet-item">Utilized <strong>React, Node.js, Express.js, and MongoDB</strong> to develop, integrate, and test RESTful APIs.</li>
          <li class="bullet-item">Participated in debugging, user authentication workflows, database integration, and frontend-backend connectivity.</li>
          <li class="bullet-item">Conducted API testing and validation using <strong>Postman</strong> and managed code version control via <strong>Git/GitHub</strong>.</li>
        </ul>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section">
      <h2 class="section-title">Featured Projects</h2>
      <div class="entry">
        <div class="entry-header">
          <div>
            <span class="entry-title">Tech & Electronics E-Commerce Platform</span>
            <span class="tech-pill">MERN Stack • JWT • Chapa API • Multer</span>
          </div>
          <span class="entry-meta"><a href="https://github.com/Shelema-bot" target="_blank" style="color: #0369a1; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 3px;">GitHub Code ${icons.external}</a></span>
        </div>
        <ul class="bullet-list">
          <li class="bullet-item">Engineered a full-stack e-commerce application tailored for browsing, managing, and purchasing tech electronic products.</li>
          <li class="bullet-item">Developed secure user registration, login authentication, customer profiles, and <strong>role-based access control</strong> (Customer vs. Administrator).</li>
          <li class="bullet-item">Implemented product cataloging, category management, inventory handling, dynamic shopping carts, and order history tracking.</li>
          <li class="bullet-item">Integrated local image handling with <strong>Multer</strong> and processed secure online transactions via the <strong>Chapa payment gateway</strong>.</li>
          <li class="bullet-item">Designed a comprehensive <strong>Admin Dashboard</strong> to oversee inventory, track user orders, monitor payments, and manage platform analytics.</li>
        </ul>
      </div>
    </section>

    <!-- Education -->
    <section class="section" style="margin-bottom: 2px;">
      <h2 class="section-title">Education</h2>
      <div class="edu-block">
        <div>
          <span class="edu-degree">BSc in Computer Science</span>
          <span class="edu-school"> — Haramaya University</span>
        </div>
        <div>
          <span class="edu-grade">Academic Standing: Above 75%</span>
        </div>
      </div>
    </section>
  </div>
</body>
</html>`;

  fs.writeFileSync('cv-template.html', htmlContent);
  console.log('Successfully updated cv-template.html');

  // Convert to PDF using Microsoft Edge headless
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const htmlPath = path.resolve('cv-template.html');
  const outputPath = path.resolve('public/Shelema_Ageri_CV.pdf');
  const distPath = path.resolve('dist/Shelema_Ageri_CV.pdf');

  console.log('Rendering single-page PDF with Edge headless...');
  const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf-no-header --print-to-pdf="${outputPath}" "file://${htmlPath.replace(/\\/g, '/')}"`;
  
  execSync(cmd);
  console.log('PDF generated at:', outputPath);

  // Copy to dist if dist exists
  if (fs.existsSync('dist')) {
    fs.copyFileSync(outputPath, distPath);
    console.log('Copied updated PDF to dist/Shelema_Ageri_CV.pdf');
  }
}

createCV().catch(err => {
  console.error(err);
  process.exit(1);
});
