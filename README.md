# Thank You Card Generator

A beautiful Next.js application that generates personalized thank you cards with QR code sharing functionality.

## Features

- 📝 Name input form on the home page
- 💳 Personalized thank you card generation
- 📱 **Static QR Code**: Takes users to the home page (name entry form)
- 🎯 **Dynamic QR Code**: Takes users to personalized thank you cards
- 🎨 Modern and responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## How It Works

### For Users
1. **Scan QR Code**: Users scan your static QR code
2. **Enter Name**: They're taken to the form page and enter their name
3. **View Card**: They click "OK" and see their personalized thank you card
4. **Share**: They can click "Show QR Code" to get their own unique shareable link

### Static QR Code (Admin Only)
You (the admin) generate ONE static QR code that links to your home page:
1. Deploy your site to Vercel
2. Update the URL in `generate-static-qr.js`
3. Run `node generate-static-qr.js`
4. Print the QR code from `public/static-qr.png`
5. Anyone scanning it will be taken to the form page

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Method 2: Using GitHub (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy automatically

## Generate Your Static QR Code

After deploying to Vercel:

1. **Get your Vercel URL** (e.g., `https://your-app-name.vercel.app`)

2. **Update the script**:
   - Open `generate-static-qr.js`
   - Replace `'https://your-app-name.vercel.app'` with your actual Vercel URL

3. **Generate the QR code**:
```bash
node generate-static-qr.js
```

4. **Find your QR code**:
   - Location: `public/static-qr.png`
   - This QR code links to your form page
   - Print it, share it, use it anywhere!

5. **Users scan it** → Taken to form page → Enter name → See thank you card

## Environment

No environment variables are required for basic functionality.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **QR Code**: qrcode library
- **Styling**: CSS Modules
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (name input)
│   ├── page.module.css     # Home page styles
│   ├── globals.css         # Global styles
│   └── thankyou/
│       ├── page.tsx        # Thank you card page (dynamic QR)
│       └── thankyou.module.css  # Thank you page styles
├── public/
│   └── static-qr.png       # Your static QR code (generated)
├── generate-static-qr.js   # Script to generate your QR code
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Customization

- Modify colors in CSS files to match your brand
- Update the thank you message in `app/thankyou/page.tsx`
- Add more fields to the form in `app/page.tsx`
- Customize QR code styling in the QR generation options

## License

MIT

