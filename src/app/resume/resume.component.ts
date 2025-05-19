// resume.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  template: `
    <div class="notebook">
      <button id="downloadBtn" (click)="downloadResume()">
        Download Resume
      </button>

      <body>
        <div id="resumeContent">
          <!-- Your resume content here -->
          <div class="section">
            <h2>Objective</h2>
            <p>
              To contribute to a company where my expertise will contribute to
              the company's success.
            </p>
          </div>
          <div class="section">
            <h2>Education</h2>
            <p>Working on 3rd Bachelor's degree</p>
            <p>
              <strong>B.S in Web Development</strong><br />
              Graduation Date: July 2025
            </p>
          </div>
          <div class="section">
            <h2>Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>PHP</li>
              <li>OpenShift</li>
              <li>BigQuery</li>
              <li>MongoDB</li>
              <li>APIs</li>
              <li>Vendor Applications</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>...And more</li>
            </ul>
          </div>

          <div class="section">
            <h2>Volunteer Experience</h2>
            <ul>
              <li>Public Schools</li>
              <li>Rescue Mission</li>
              <li>Feeding America</li>
              <li>Ronald McDonald House</li>
              <li>County Parks Volunteer Program</li>
              <li>Churches</li>

            </ul>
          </div>
        </div>
      </body>
    </div>
  `,
  styles: [
    `
      body {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        line-height: 1.6;
      }
      h1,
      h2 {
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
      }
      ul {
        margin-top: 0;
      }
      .section {
        margin-bottom: 20px;
      }
      #downloadBtn {
        margin-bottom: 20px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
      }
    `,
  ],
})
export class ResumeComponent {
  downloadResume() {
    const resumeContent = document.getElementById('resumeContent')?.innerHTML;
    if (resumeContent) {
      const htmlContent = `
        <html>
          <head>
            <title>My Resume</title>
            <style>
              body {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                line-height: 1.6;
                font-family: Arial, sans-serif;
              }
              h2 {
                border-bottom: 1px solid #ccc;
                padding-bottom: 5px;
              }
              ul {
                margin-top: 0;
              }
              .section {
                margin-bottom: 20px;
              }
            </style>
          </head>
          <body>
            <div>${resumeContent}</div>
          </body>
        </html>
      `;
      // Create a Blob with the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);

      // Create a link element and trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.html';
      a.click();

      // Cleanup
      URL.revokeObjectURL(url);
    }
  }
}
