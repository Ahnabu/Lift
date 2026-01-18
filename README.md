# Brother's Lift Technology

A modern, full-featured website for a premier lift and elevator company in Bangladesh, showcasing comprehensive product catalogs, project galleries, and customer engagement features.

## 🌟 Overview

Brother's Lift Technology provides quality lifts and related industrial equipment for all types of properties, from personal family houses to high-rise commercial buildings. This website serves as the company's digital showroom and customer engagement platform.

## ✨ Features

### Product Showcases
- **Lift Solutions**: Passenger lifts, cargo lifts, capsule lifts, hospital lifts, escalators, and imported lifts
- **Industrial Equipment**: Forklifts, generators, HVAC systems
- **Renewable Energy**: Solar power solutions
- **Infrastructure**: Street lighting systems
- **Spare Parts**: Comprehensive spare parts catalog

### Interactive Features
- 🖼️ Dynamic image galleries with lightbox viewing
- 📱 Responsive design for all devices
- 🎨 Modern UI with smooth animations (Framer Motion)
- 📧 Contact form with email integration
- 🎯 Product detail pages with specifications
- 📸 Project showcase gallery
- 🔍 SEO optimized

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.4](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: 
  - Radix UI (Dialog, Navigation Menu, Hover Card)
  - Shadcn/ui components
- **Animation**: Framer Motion
- **Image Gallery**: Yet Another React Lightbox
- **Carousel**: Swiper.js & Embla Carousel
- **Form Handling**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Email**: Nodemailer
- **Analytics**: Vercel Analytics
- **Process Manager**: PM2 (ecosystem.config.cjs)

## 📋 Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd lift

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NODE_ENV=development

# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=recipient@example.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Refer to `EMAIL_SETUP.md` for detailed email configuration instructions.

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The development server uses Turbopack for faster builds and hot module replacement.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
lift/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes (contact form)
│   │   ├── products/          # Product category pages
│   │   ├── about-us/          # About page
│   │   ├── contact-us/        # Contact page
│   │   ├── projects/          # Projects showcase
│   │   └── ...
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn UI components
│   │   ├── product-details/  # Product detail components
│   │   └── ...
│   ├── data/                  # Product data and configurations
│   ├── services/              # API service functions
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   ├── types/                 # TypeScript type definitions
│   ├── schemas/               # Zod validation schemas
│   └── config/                # Site configuration
├── public/                    # Static assets
└── ...
```

## 🔧 Configuration

### Site Configuration

Edit `src/config/site.ts` to update:
- Company name and description
- Contact information
- Social media links
- Navigation structure

### Tailwind Configuration

Customize design in `tailwind.config.js` and global styles in `src/app/globals.css`.

## 📧 Email Setup

The contact form uses Nodemailer for email delivery. See `EMAIL_SETUP.md` for detailed setup instructions including:
- Gmail configuration
- App password generation
- Environment variable setup
- Testing procedures

## 🚢 Deployment

### Vercel (Recommended)

The easiest deployment option:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### PM2 (Self-hosted)

For self-hosted deployments using PM2:

```bash
# Build the project
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Monitor
pm2 monit

# View logs
pm2 logs
```

## 🎨 Customization

### Adding New Products

1. Add product data in `src/data/` directory
2. Create service file in `src/services/`
3. Add product detail component in `src/components/product-details/`
4. Create product page in `src/app/products/`

### Modifying Styles

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Use Tailwind utility classes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 📞 Contact

**Brother's Lift Technology**
- **Phone**: +8801920-883427
- **Email**: wahid2487@gmail.com
- **Address**: House # 447/C, Road # 08(3rd Floor), D.I.T Road, Malibagh, Dhaka-1217
- **Facebook**: [Property Lifts BD](https://www.facebook.com/Propertyliftsbd)
- **LinkedIn**: [Property Lifts](https://www.linkedin.com/company/property-lifts)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Note**: This is a production website for Brother's Lift Technology. For development queries, refer to the documentation or contact the development team.
