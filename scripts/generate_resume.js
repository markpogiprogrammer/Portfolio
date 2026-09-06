const fs = require('fs');
const path = require('path');

// Read photo
const photoPath = path.join(__dirname, '..', 'public', 'assets', 'extracted_photo_1.jpg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoDataUri = `data:image/jpeg;base64,${photoBase64}`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SN1 MARK OLIVER R. QUIAZON - Resume</title>
<style>
  @page {
    size: letter;
    margin: 0.7in 0.8in 0.7in 0.8in;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Times New Roman', Times, Georgia, serif;
    font-size: 11pt;
    line-height: 1.25;
    color: #000;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page {
    page-break-after: always;
    height: 9.6in;
    max-height: 9.6in;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
  }
  .page:last-child {
    page-break-after: avoid;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 18pt;
  }
  .header-info {
    font-size: 11pt;
    line-height: 1.35;
  }
  .name {
    font-size: 11.5pt;
    font-weight: bold;
    margin-bottom: 2pt;
  }
  .email-link {
    color: #000;
    text-decoration: underline;
  }
  .photo-box {
    width: 1.35in;
    height: 1.35in;
    overflow: hidden;
  }
  .photo-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .section-title {
    font-size: 11pt;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 14pt;
    margin-bottom: 4pt;
  }
  .section-title:first-child {
    margin-top: 0;
  }
  .bold-title {
    font-weight: bold;
  }
  .circle-list {
    list-style-type: circle;
    margin-left: 24pt;
    margin-top: 1pt;
    margin-bottom: 3pt;
  }
  .circle-list li {
    margin-bottom: 1.5pt;
    line-height: 1.25;
  }
  .dash-list {
    list-style: none;
    padding-left: 0;
    margin-top: 1pt;
    margin-bottom: 4pt;
  }
  .dash-list li {
    margin-bottom: 2pt;
    line-height: 1.25;
  }
  .block {
    margin-bottom: 4pt;
  }
</style>
</head>
<body>

<!-- PAGE 1 -->
<div class="page">
  <div class="header-container">
    <div class="header-info">
      <div class="name">SN1 MARK OLIVER R. QUIAZON</div>
      <div>2121 Martinez St. Sta. Ana, Manila</div>
      <div>August 6, 2002</div>
      <div>(+63) 956 301 1120</div>
      <div><a href="mailto:markoliverquiazon@gmail.com" class="email-link">markoliverquiazon@gmail.com</a></div>
    </div>
    <div class="photo-box">
      <img src="${photoDataUri}" alt="Mark Oliver Quiazon" />
    </div>
  </div>

  <div class="section-title">EDUCATION</div>
  <div class="block">
    <div class="bold-title">De La Salle – College of Saint Benilde</div>
    <div>Taft Ave, Malate, Manila</div>
    <div>Bachelor of Science in Information Systems</div>
    <div>Aug 2022 – Present</div>
  </div>

  <div class="block" style="margin-top: 8pt;">
    <div class="bold-title">O.B. Montessori Center Inc.</div>
    <div>Pedro Gil, Sta. Ana, Manila</div>
    <div>2015 – 2021</div>
  </div>

  <div class="section-title" style="margin-top: 14pt;">WORK EXPERIENCES</div>
  <div class="block">
    <div style="margin-bottom: 2pt;">
      - <strong>Junior QA Tester</strong>, Circuit Solutions Inc., Unit B 14th Flr. Belvedere Tower, San Miguel Ave, Ortigas Center, Pasig, 1605 Metro Manila
    </div>
    <ul class="circle-list">
      <li>Fully Tested Workdesk Systems of multiple companies with features such as HRIS/Employee Management, Timekeeping, &amp; Payroll for both mobile and web.</li>
      <li>Fully Tested Real Estate buy-and-sell platform.</li>
      <li>Tested Car Parking System for Ayala Malls Vermosa, both software &amp; hardware.</li>
      <li>Briefly tested a mobile app for Health Assistance.</li>
      <li>Learned to use Playwright with Gemini CLI to test the workdesk system briefly.</li>
      <li>Documented bugs, issues &amp; blockers through Excel Sheets and Jira.</li>
      <li>Created User Wikis for Workdesk Systems.</li>
    </ul>
  </div>

  <div class="block" style="margin-top: 6pt;">
    <div>
      - <strong>OPERATIONS MANAGER</strong>, Quiazon Building Rental, G Tuazon St. Sampaloc, Manila, August 2020 –<br>Present
    </div>
  </div>
</div>

<!-- PAGE 2 -->
<div class="page">
  <div class="block">
    <ul class="circle-list" style="margin-top: 0;">
      <li>Address residents’ concerns and inquiries.</li>
      <li>Enforces the buildings policies.</li>
      <li>Distributes and collects the bills.</li>
      <li>Recording data, such as water and electricity consumption, into business database and computes the total bill for each resident.</li>
      <li>Reports any damages on the property.</li>
    </ul>
  </div>

  <div class="block" style="margin-top: 6pt;">
    <div style="margin-bottom: 2pt;">
      - <strong>VETERINARY ASSISTANT</strong>, MollyCoddle Animal Vaccination Services, October 2021 – March 2022
    </div>
    <ul class="circle-list">
      <li>Assists with pet vaccination.</li>
      <li>Address pet owners concerns and inquiries.</li>
    </ul>
  </div>

  <div class="section-title" style="margin-top: 12pt;">ACADEMIC PROJECTS</div>
  <div class="block">
    <div>- <strong>Bite Balance: Localized Nutrition Tracking System (Capstone Project)</strong></div>
    <div>De La Salle – College of Saint Benilde, January 2026 – March 2026</div>
    <div style="margin-bottom: 2pt;"><strong>Role:</strong> Researcher, Quality Assurance, and Concept Development</div>
    <ul class="circle-list">
      <li>Conducted research on Filipino dietary habits and existing nutrition tracking systems to support system design.</li>
      <li>Contributed to the conceptualization of core features, including culturally relevant food logging and user-friendly interface design.</li>
      <li>Performed quality assurance testing to identify system issues, ensuring functionality, accuracy, and usability.</li>
      <li>Evaluated system performance and provided recommendations for improvements based on user experience and testing results.</li>
    </ul>
  </div>

  <div class="section-title" style="margin-top: 12pt;">PERSONAL PROJECTS</div>
  <div class="block">
    <div style="margin-bottom: 3pt;">- <strong>Quiazon Building Rental App:</strong> An app that eliminates the repetitive input of data and automates the total bill of each resident with receipts. Also has tenant &amp; unit management.</div>
    <div>- <strong>Personal Link Website:</strong> A website that includes links to social media platforms for connections and opportunities.</div>
  </div>

  <div class="section-title" style="margin-top: 12pt;">CO-CURRICULAR ACTIVITIES</div>
  <div class="block">
    <div>- <strong>Google Developer Student Club Benilde</strong>, De La Salle – College of Saint Benilde, October 2022 – December 2023</div>
  </div>

  <div class="section-title" style="margin-top: 12pt;">EXTRA-CURRICULAR ACTIVITIES</div>
  <ul class="dash-list">
    <li>- <strong>Basketball Varsity</strong>, O.B. Montessori Center Inc., August 2017 – November 2019</li>
    <li>- <strong>Debate Club</strong>, O.B. Montessori Center Inc., October 2018 – Sept 2019</li>
    <li>- <strong>Content Creation</strong>, MollyCoddle Animal Vaccination Services, October 2021 – March 2022</li>
    <li>- <strong>Benilde Fun Run</strong>, De La Salle – College of Saint Benilde, May 19, 2024</li>
    <li>- <strong>Basketball Men’s League</strong>, Jose Lito Basketball League, October 23 – December 13, 2024</li>
  </ul>
</div>

<!-- PAGE 3 -->
<div class="page">
  <ul class="dash-list" style="margin-bottom: 10pt;">
    <li>- <strong>Social Media Content Creator</strong>, Tiktok &amp; Instagram, December 19, 2024 – Present</li>
  </ul>

  <div class="section-title">COMMUNITY ENGAGEMENT</div>
  <ul class="dash-list" style="margin-bottom: 10pt;">
    <li>- <strong>Free Anti-Rabies Shot for Pets</strong>, MollyCoddle Animal Vaccination Services, Brgy. 892, Sta. Ana Manila, November 2021</li>
    <li>- <strong>Volunteer</strong>, Alpha Kawanggawa sa Eskwela, Pililia, Rizal, May 22, 2021</li>
    <li>- <strong>Volunteer</strong>, Operation Tuli and Bunot Ngipin, Camp General Emilio Aguinaldo High School, Bonnie Serrano, Quezon City, July 2028, 2024</li>
    <li>- <strong>Annual Christmas Feeding Program</strong> in Metro Manila</li>
  </ul>

  <div class="section-title">CERTIFICATIONS ACHIEVED</div>
  <div class="block" style="margin-bottom: 10pt;">
    <div>- <strong>Amazon Web Services Academy</strong>, AWS Cloud Foundations, August 3, 2023</div>
  </div>

  <div class="section-title">MILITARY TRAININGS</div>
  <div class="block" style="margin-bottom: 10pt;">
    <div>- <strong>Basic Citizen Military Course Class 02 -2022</strong></div>
    <div style="padding-left: 10pt;">Marine Base Ternate Cavite, May 23 – May 28, 2022</div>
  </div>

  <div class="section-title">TECHNICAL SKILLS</div>
  <ul class="dash-list" style="margin-bottom: 10pt;">
    <li>- <strong>Programming Languages:</strong> C#, SQL, Python, Javascript, HTML5, CSS3, Typescript</li>
    <li>- <strong>Framework &amp; Libraries:</strong> React.js, Node.js</li>
    <li>- <strong>Database &amp; Tools:</strong> SQL Management, AntiGravity IDE, VS Code, Jira, Github, Supabase, Netlify/Vercel</li>
    <li>- <strong>Traditional Skills:</strong> UI/UX Design, Figma, Data Reconciliation, Test Case Design, Documentation</li>
    <li>- <strong>Manual Testing:</strong> Smoke, Sanity, Regression, Black Box, Spot, E2E</li>
    <li>- <strong>Automation Testing:</strong> Playwright with Gemini CLI (Amateur), Postman (Amateur)</li>
  </ul>

  <div class="section-title">SOFT SKILLS</div>
  <ul class="dash-list">
    <li>- Oral and Written Communication in English and Filipino</li>
    <li>- Social Service Skills</li>
    <li>- Adaptability Skills</li>
    <li>- Public Speaking Skills</li>
    <li>- Photo and Video Editing Skills</li>
    <li>- Time Management</li>
    <li>- Discipline</li>
    <li>- Strong work ethic and reliability</li>
    <li>- Perseverance</li>
  </ul>
</div>

<!-- PAGE 4 -->
<div class="page">
  <div class="section-title" style="margin-top: 0;">CHARACTER REFERENCE</div>

  <div class="block" style="margin-top: 14pt;">
    <div class="bold-title">DMD Francine Jane Ruiz</div>
    <div>Doctor of Dental Medicine</div>
    <div>(+63) 977 842 3970</div>
  </div>

  <div class="block" style="margin-top: 14pt;">
    <div class="bold-title">DVM Irah Pearl Acierto</div>
    <div>Mollycoddle Vaccination Services Doctor of Veterinary Medicine</div>
    <div>(+97) 156 821 9866</div>
  </div>

  <div class="block" style="margin-top: 14pt;">
    <div class="bold-title">MAJ Leemuel Manicdo (INF) PA</div>
    <div>Philippine Army Supervisor</div>
    <div>(+63) 908 890</div>
  </div>
</div>

</body>
</html>
`;

const htmlFilePath = path.join(__dirname, '..', 'public', 'resume_export.html');
fs.writeFileSync(htmlFilePath, html);
console.log('HTML written to:', htmlFilePath);
