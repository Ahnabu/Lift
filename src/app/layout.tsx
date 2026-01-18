import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Brother's Lift Technology",
    "Lift Company Bangladesh",
    "Elevator Installation",
    "Generator Solutions",
    "HVAC Systems",
    "Best Lift Company",
    "Dhaka Lifts",
    "Bangladesh Elevators",
    "Lift Maintenance",
    "Commercial Elevators",
    "Residential Elevators",
    "Industrial Elevators",
    "Lift Modernization",
    "Lift Repair Services",
    "Energy-Efficient Lifts",
    "Custom Elevator Solutions",
    "Lift Safety Systems",  
    "Lift Parts and Accessories",
    "Lift Consultancy",
    "Lift Design Services",
    "Lift Industry Experts",
    "Lift Technology Innovations",
    "Lift System Integration",  
    "Lift Automation",
    "Lift Performance Optimization",
    "Lift Compliance and Standards",
    "Lift Project Management",
    "Lift Upgrades",
    "Lift Troubleshooting",
    "Lift Emergency Services",
    "Lift Customer Support",
    "Lift Installation Experts",
    "Lift Service Contracts",
    'Lifts in Bangladesh',
    'Lift Services Dhaka',
    
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@abu_horaira, @habibur_rahman",
  },
  icons: {
    icon: "https://res.cloudinary.com/brotherslift/image/upload/v1759174303/favicon-removebg-preview_glnxnv.png",
    shortcut:
      "https://res.cloudinary.com/brotherslift/image/upload/v1759174303/favicon-removebg-preview_glnxnv.png",
    apple:
      "https://res.cloudinary.com/brotherslift/image/upload/v1759174303/favicon-removebg-preview_glnxnv.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
