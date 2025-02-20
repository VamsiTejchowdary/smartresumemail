import { Resend } from "resend";
import { render } from "@react-email/render"; // Ensure this is correctly installed
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();
    
    console.log("Sending email to", email);

    // Define the email HTML template
    const emailHtml = `
      <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vamsi Tej Chowdary Dabbar - Full Stack Developer</title>
  <style>
    .experience-section {
        background-color: #f8fafc;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
    }
    .location {
        font-size: 14px;
        color: #64748b;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }
    .section-header {
        color: #2563eb;
        font-size: 20px;
        margin: 0 0 25px;
        padding-bottom: 10px;
        border-bottom: 2px solid #e2e8f0;
    }

    .experience {
        background: #ffffff;
        border-left: 4px solid #2563eb;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 0 8px 8px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        transition: transform 0.2s ease;
    }

    .experience:hover {
        transform: translateX(5px);
    }

    .job-title {
        font-size: 18px;
        font-weight: bold;
        color: #1f2937;
        margin-bottom: 5px;
    }

    .company {
        font-size: 16px;
        color: #2563eb;
        margin-bottom: 5px;
        font-weight: 500;
    }

    .duration {
        font-size: 14px;
        color: #64748b;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

    .duration:before {

        margin-right: 5px;
    }

    .skills {
        margin-top: 10px;
        font-size: 14px;
        color: #475569;
        background: #f1f5f9;
        padding: 8px 12px;
        border-radius: 6px;
        display: inline-block;
    }

    .skills:before {
        margin-right: 5px;
    }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, sans-serif;">
    <!-- Main Table Container -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9;">
        <tr>
    <td align="center" style="padding: 10px;">
        <!-- Content Table -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
                <td style="background: #2563eb; padding: 30px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td style="padding: 0px 0px 0px 0px; color: #ffffff;">
                                <h1 style="margin: 0 0px; font-size: 28px; font-weight: 700;">
                                    Vamsi Tej Chowdary Dabbar
                                    <img src="https://img.icons8.com/?size=100&id=99285&format=png&color=FFFFFF" alt="Verified" style="width: 24px; height: 24px; vertical-align: middle; margin-left: 8px;">
                                </h1>
                                <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">Full Stack Developer</p>
                                <div style="margin-top: 10px; display: flex; ">
                                    <span style="display: flex; align-items: center;">
                                        <img src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000" alt="Phone" style="width: 20px; height: 20px; margin-right: 10px;">
                                        <span style="font-size: 10px;">+1 (513) 266-2328</span>
                                      <span style="display: flex; align-items: center; margin: 0px 50px">
                                        <img src="https://img.icons8.com/?size=100&id=114326&format=png&color=000000" alt="University" style="width: 20px; height: 20px; margin-right: 8px;">
                                        <span style="font-size: 10px;">University Of Cincinnati</span>
                                        
                                    </span>
                                    
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

                    <!-- Intro -->
                    <tr>
                        <td style="padding: 30px;">
                            <p style="margin: 0 0 15px; font-size: 16px; line-height: 1.6; color: #1f2937;"><strong>Hi,</strong></p>
                            <p style="margin: 0 0 0px; font-size: 16px; line-height: 1.6; color: #1f2937;">I'm a Full Stack Developer with <strong> 3+ years of experience </strong>crafting scalable web applications. I specialize in <strong>.NET, C#, React, NodeJS, MongoDB and cloud technologies</strong>, with a passion for building efficient, user-centric solutions.</p>
                        </td>
                    </tr>
                  <tr>
    <td style="padding: 0 30px;">
        <div class="experience-section">
            <h2 class="section-header">Professional Experience</h2>
            
            <div class="experience">
                <div class="job-title">Founder</div>
                <div class="company">TeluguFilmInsights & FoodeAlert</div>
                <div class="duration">
                  <img src="https://img.icons8.com/?size=100&id=H0JqzxqGxPQm&format=png&color=000000" alt="Duration" style="width: 20px; height: 20px; margin-right: 5px;">Jun 2024 - Present</div>
              <div class="location">
                                        <img src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" alt="Location" style="width: 20px; height: 20px; margin-right: 5px;">
                                        India & United States
                                    </div>
                <div class="skills">
                  <img src="https://img.icons8.com/?size=100&id=20544&format=png&color=000000" alt="Webtools" style="width: 20px; height: 20px; margin-right: 5px;">React, NodeJS, Next.js, MongoDB</div>
            </div>

            <div class="experience">
                <div class="job-title">Tech Intern</div>
                <div class="company">TrueChoicePack</div>
                <div class="duration">
                  <img src="https://img.icons8.com/?size=100&id=H0JqzxqGxPQm&format=png&color=000000" alt="Duration" style="width: 20px; height: 20px; margin-right: 5px;">Nov 2024 - Present</div>
              <div class="location">
                                        <img src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" alt="Location" style="width: 20px; height: 20px; margin-right: 5px;">
                                        Cincinnati, 45220, Ohio, United States
                                    </div>  
              <div class="skills">
                <img src="https://img.icons8.com/?size=100&id=20544&format=png&color=000000" alt="Webtools" style="width: 20px; height: 20px; margin-right: 5px;">
                AWS, CloudWacth, AWS SNS, WordPress, Shopify</div>
            </div>

            <div class="experience">
                <div class="job-title">Associate Full-Stack Developer</div>
                <div class="company">West Pharmaceutical Services</div>
                <div class="duration">
                  <img src="https://img.icons8.com/?size=100&id=H0JqzxqGxPQm&format=png&color=000000" alt="Duration" style="width: 20px; height: 20px; margin-right: 5px;">Oct 2022 - July 2023</div>
              <div class="location">
                                        <img src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" alt="Location" style="width: 20px; height: 20px; margin-right: 5px;">
                                        Bengaluru, Karnataka, India
                                    </div>
                <div class="skills">
                  <img src="https://img.icons8.com/?size=100&id=20544&format=png&color=000000" alt="Webtools" style="width: 20px; height: 20px; margin-right: 5px;">
                  C#, .net, JQuery, SSMS, Azure, DevOps</div>
            </div>

            <div class="experience">
                <div class="job-title">Software Graduate Trainee </div>
                <div class="company">West Pharmaceutical Services</div>
                <div class="duration">
                  <img src="https://img.icons8.com/?size=100&id=H0JqzxqGxPQm&format=png&color=000000" alt="Duration" style="width: 20px; height: 20px; margin-right: 5px;">Jan 2022 - Sep 2022</div>
              <div class="location">
                                        <img src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" alt="Location" style="width: 20px; height: 20px; margin-right: 5px;">
                                        Bengaluru, Karnataka, India
                                    </div>
                <div class="skills">
                  <img src="https://img.icons8.com/?size=100&id=20544&format=png&color=000000" alt="Webtools" style="width: 20px; height: 20px; margin-right: 5px;">
                  C#, .net, JS, JQuery, SSMS</div>
            </div>

            <div class="experience">
                <div class="job-title">Software Developer Intern</div>
                <div class="company">Tech Citi Software</div>
                <div class="duration">
                  <img src="https://img.icons8.com/?size=100&id=H0JqzxqGxPQm&format=png&color=000000" alt="Duration" style="width: 20px; height: 20px; margin-right: 5px;">
                  Jan 2021 - Nov 2021</div>
              <div class="location">
                                        <img src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" alt="Location" style="width: 20px; height: 20px; margin-right: 5px;">
                                        Bengaluru, Karnataka, India
                                    </div>
                <div class="skills">
                  <img src="https://img.icons8.com/?size=100&id=20544&format=png&color=000000" alt="Webtools" style="width: 20px; height: 20px; margin-right: 5px;">
                  HTML, CSS, JS</div>
            </div>
        </div>
    </td>
</tr>
                  
                    <!-- Technical Expertise -->
                    <tr>
                        <td style="padding: 0 30px;">
                            <table width="100%" cellpadding="20" cellspacing="0" border="0" style="background-color: #f8fafc; border-radius: 8px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 20px; font-size: 20px; color: #2563eb;">Technical Expertise</h2>
                                        <table width="100%" cellpadding="10" cellspacing="0" border="0">
                                            <tr>
                                                <td width="50%" style="padding: 10px;">
                                                    <div style="background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                                                        <strong style="color: #1f2937;">Core Stack</strong>
                                                        <p style="margin: 5px 0 0; color: #4b5563; display: flex; align-items: center; gap: 8px;">
                                                            <img src="https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000" alt=".NET" style="width: 20px; height: 20px;">
                                                            <img src="https://img.icons8.com/?size=100&id=55205&format=png&color=000000" alt="C#" style="width: 20px; height: 20px;">
                                                            <img src="https://img.icons8.com/?size=100&id=58811&format=png&color=000000" alt="React" style="width: 20px; height: 20px;">
                                                          <img src="https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=000000" alt="Next" style="width: 20px; height: 20px;">
                                                            
                                                        </p>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding: 10px;">
                                                    <div style="background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                                                        <strong style="color: #1f2937;">Frontend</strong>
                                                        <p style="margin: 5px 0 0; color: #4b5563; display: flex; align-items: center; gap: 8px;">
                                                            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript" style="width: 20px; height: 20px;">
                                                            <img src="https://img.icons8.com/?size=100&id=101353&format=png&color=000000" alt="HTML5" style="width: 20px; height: 20px;">
                                                            <img src="https://img.icons8.com/?size=100&id=38272&format=png&color=000000" alt="CSS" style="width: 20px; height: 20px;">
                                                          <img src="https://img.icons8.com/?size=100&id=40253&format=png&color=000000" alt="Jquery" style="width: 20px; height: 20px;">
                                                          
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="50%" style="padding: 10px;">
                                                    <div style="background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                                                        <strong style="color: #1f2937;">Backend & DB</strong>
                                                        <p style="margin: 5px 0 0; color: #4b5563; display: flex; align-items: center; gap: 8px;">
                                                            <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" alt="Node.js" style="width: 20px; height: 20px;">
                                                            <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="Python" style="width: 20px; height: 20px;">
                                                          <img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="MongoDB" style="width: 20px; height: 20px;">
                                                            <img src="https://img.icons8.com/?size=100&id=102597&format=png&color=000000" alt="SQL" style="width: 20px; height: 20px;">
                                                            <img src="https://img.icons8.com/?size=100&id=SQEEoDcpUD6c&format=png&color=000000" alt="FireStore" style="width: 20px; height: 20px;">
                                                        </p>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding: 10px;">
                                                    <div style="background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                                                        <strong style="color: #1f2937;">Cloud & DevOps</strong>
                                                        <p style="margin: 5px 0 0; color: #4b5563; display: flex; align-items: center; gap: 8px;">
                                                            <img src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" alt="AWS" style="width: 20px; height: 20px;">
                                                            <img src="https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000" alt="Azure" style="width: 20px; height: 20px;">
                                                          <img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="Azure" style="width: 20px; height: 20px;">
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Projects -->
                    <tr>
                        <td style="padding: 0 30px;">
                            <table width="100%" cellpadding="20" cellspacing="0" border="0" style="background-color: #f8fafc; border-radius: 8px; margin-bottom: 30px;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 20px; font-size: 20px; color: #2563eb;">Featured Projects</h2>
                                        
                                        <!-- Project 1 -->
                                        <table width="100%" cellpadding="15" cellspacing="0" border="0" style="background: #ffffff; border-radius: 8px; margin-bottom: 15px; border: 1px solid #e2e8f0;">
                                            <tr>
                                                <td>
                                                    <h3 style="margin: 0 0 10px; color: #2563eb; font-size: 18px;">FoodieAlert</h3>
                                                    <p style="margin: 0 0 10px; color: #4b5563;">A real-time notification platform for food trucks featuring subscription models and live updates.</p>
                                                    <a href="https://www.linkedin.com/posts/vamsitejchowdary_foodiealert-startup-foodtech-activity-7292589116402081792-Jc4a" style="color: #2563eb; text-decoration: none; font-weight: 500;">View Project →</a>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Project 2 -->
                                        <table width="100%" cellpadding="15" cellspacing="0" border="0" style="background: #ffffff; border-radius: 8px; margin-bottom: 15px; border: 1px solid #e2e8f0;">
                                            <tr>
                                                <td>
                                                    <h3 style="margin: 0 0 10px; color: #2563eb; font-size: 18px;">Telugu Film Insights</h3>
                                                    <p style="margin: 0 0 10px; color: #4b5563;">Full-stack movie review platform with advanced user engagement features.</p>
                                                    <a href="https://telugufilminsights.com" style="color: #2563eb; text-decoration: none; font-weight: 500;">Visit Website →</a>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Project 3 -->
                                        <table width="100%" cellpadding="15" cellspacing="0" border="0" style="background: #ffffff; border-radius: 8px; margin-bottom: 15px; border: 1px solid #e2e8f0;">
                                            <tr>
                                                <td>
                                                    <h3 style="margin: 0 0 10px; color: #2563eb; font-size: 18px;">Flavor Nation Foods</h3>
                                                    <p style="margin: 0 0 10px; color: #4b5563;">SEO-optimized Shopify e-commerce platform with custom integrations.</p>
                                                    <a href="https://flavornationfoods.com" style="color: #2563eb; text-decoration: none; font-weight: 500;">Visit Website →</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Closing -->
                    <tr>
                        <td style="padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #1f2937;">I’ve collected enough “we regret to inform you…” emails to start a museum—how about we curate a <strong>“Let’s talk!”  </strong>instead?</p>
                            <p style="margin: 0; font-size: 16px; color: #2563eb; font-weight: 500;">Best regards,<br>Vamsi Tej Chowdary Dabbar </p>
                        </td>
                    </tr>

                    <!-- Social Links -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 30px; text-align: center;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center">
                                        <a href="https://github.com/VamsiTejchowdary" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; color: #1f2937; text-decoration: none; font-weight: 500;">
                                            <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="GitHub" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;">GitHub
                                        </a>
                                        <a href="https://vamsitejchowdary.com" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; color: #1f2937; text-decoration: none; font-weight: 500;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Portfolio" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;">Portfolio
                                        </a>
                                        <a href="https://www.linkedin.com/in/vamsitejchowdary/" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; color: #1f2937; text-decoration: none; font-weight: 500;">
                                            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;">LinkedIn
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        
    `;

    // Send the email using Resend API
    const data = await resend.emails.send({
      from: "Vamsi Tej Chowdary <recuriteme@vamsitejchowdary.com>",
      to: email,
      subject: "Full Stack Web Developer!",
      html: emailHtml,
      headers: {
        "Reply-To": "dabbarvy@mail.uc.edu"
      }
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}