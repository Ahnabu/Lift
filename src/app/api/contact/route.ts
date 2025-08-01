import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/schemas/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body);
    
    // Create a transporter using Gmail SMTP
    // You'll need to set up App Password for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content for you (the business)
    const businessEmailContent = `
      <h2>New Contact Form Submission - Property Lifts</h2>
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h3 style="color: #f97316;">Contact Details</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Message:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${validatedData.message}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Submitted At:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
        <br>
        <p style="color: #666; font-size: 14px;">
          This email was sent from the Property Lifts contact form on your website.
        </p>
      </div>
    `;

    // Email content for the customer (auto-reply)
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
        <div style="background-color: #f97316; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Property Lifts</h1>
          <p style="margin: 5px 0 0 0;">Quality Lifts for All Properties</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #f97316;">Thank You for Contacting Us!</h2>
          
          <p>Dear ${validatedData.name},</p>
          
          <p>Thank you for reaching out to Property Lifts. We have received your inquiry and our team will review your message carefully.</p>
          
          <div style="background-color: white; padding: 15px; border-left: 4px solid #f97316; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #f97316;">Your Message Summary:</h3>
            <p style="margin: 0;"><strong>Name:</strong> ${validatedData.name}</p>
            <p style="margin: 0;"><strong>Email:</strong> ${validatedData.email}</p>
            <p style="margin: 0;"><strong>Phone:</strong> ${validatedData.phone}</p>
            <p style="margin: 0;"><strong>Message:</strong> ${validatedData.message}</p>
          </div>
          
          <p><strong>What happens next?</strong></p>
          <ul>
            <li>Our expert team will review your inquiry within 24 hours</li>
            <li>We'll contact you via phone or email to discuss your requirements</li>
            <li>If needed, we'll schedule a consultation or site visit</li>
            <li>We'll provide you with a detailed quote and solution</li>
          </ul>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #856404;">Need Immediate Assistance?</h4>
            <p style="margin: 0;">For urgent matters, please call us directly:</p>
            <p style="margin: 5px 0 0 0; font-weight: bold;">📞 Emergency: +09613737777</p>
            <p style="margin: 5px 0 0 0; font-weight: bold;">📞 General: +0800-7777777</p>
          </div>
          
          <p>Best regards,<br>
          <strong>Property Lifts Team</strong><br>
          PRAN Center, 105 Middle Badda, Dhaka-1212<br>
          Email: mktg980@prangroup.com</p>
        </div>
        
        <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">© 2025 Property Lifts. All rights reserved.</p>
          <p style="margin: 5px 0 0 0;">Best Lift Company in Bangladesh</p>
        </div>
      </div>
    `;

    // Send email to business
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'horairaabu013025@gmail.com',
      subject: `New Contact Form Submission from ${validatedData.name} - Property Lifts`,
      html: businessEmailContent,
      replyTo: validatedData.email,
    });

    // Send auto-reply to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: validatedData.email,
      subject: 'Thank you for contacting Property Lifts - We\'ll be in touch soon!',
      html: customerEmailContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We\'ll get back to you soon!',
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Please check your form data and try again.',
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    );
  }
}
