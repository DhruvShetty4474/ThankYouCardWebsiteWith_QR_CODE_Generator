# Ride of Reflections - Thank You Card Generator

A beautiful Next.js application for the Divine Mercy Church's cycling event that generates personalized thank you cards with QR code sharing functionality.

## 🚴‍♀️ About

This application was created for the **"Ride of Reflections: A Journey of Faith, Fun and Fellowship"** cycling event organized by Divine Mercy Church. It allows event participants to receive personalized thank you cards and share them with others.

## ✨ Features

- 📝 **Name Entry Form**: Simple form for participants to enter their name
- 💳 **Personalized Thank You Cards**: Beautiful cards with cycling-themed design
- 🏛️ **Church Logo**: Divine Mercy Church logo prominently displayed
- 📱 **Static QR Code**: Pre-generated QR code that takes users to the form
- 🎯 **Dynamic QR Code**: Each participant gets their own shareable QR code
- 🎨 **Modern Design**: Responsive design with cycling-themed animations
- ⚡ **Fast Performance**: Built with Next.js 14 and TypeScript

## 🚀 Live Website

**Visit**: [https://cyclingevent.vercel.app](https://cyclingevent.vercel.app)

## 📋 How It Works

### For Event Participants
1. **Scan QR Code**: Participants scan the static QR code at the event
2. **Enter Name**: They're taken to the form page and enter their name
3. **View Card**: They see their personalized thank you card with cycling theme
4. **Share**: They can generate their own QR code to share their card

### For Event Organizers
- **Static QR**: Pre-generated QR code links to the form page
- **Easy Setup**: Simple deployment to Vercel
- **Professional Design**: Church branding with cycling event theme

## 🛠️ Technical Details

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **QR Code Generation**: qrcode library
- **Styling**: CSS Modules
- **Deployment**: Vercel

### Project Structure
```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (name entry form)
│   ├── page.module.css     # Home page styles
│   ├── globals.css         # Global styles
│   └── thankyou/
│       ├── page.tsx        # Thank you card page
│       └── thankyou.module.css  # Thank you card styles
├── public/
│   ├── logo.png            # Divine Mercy Church logo
│   └── static-qr.png       # Static QR code (generated)
├── generate-static-qr.js   # Script to generate static QR
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Design Features

### Thank You Card
- **Church Logo**: Divine Mercy Church logo in circular container
- **Cycling Theme**: 🚴‍♀️ and 🏆 emojis with animations
- **Personalized Message**: Heartfelt cycling event thank you message
- **Professional Layout**: Clean, modern design with proper typography

### Responsive Design
- **Desktop**: Full-featured layout with larger elements
- **Mobile**: Optimized for mobile devices
- **Cross-browser**: Works on all modern browsers

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Generate Static QR Code
```bash
# Update the URL in generate-static-qr.js
# Run the script
node generate-static-qr.js

# Find your QR code at public/static-qr.png
```

## 📱 QR Code System

### Static QR Code (Event Organizers)
- **Purpose**: Takes participants to the name entry form
- **Usage**: Print on posters, flyers, or display at event
- **Generated**: Using `generate-static-qr.js` script

### Dynamic QR Code (Participants)
- **Purpose**: Takes others to that person's specific thank you card
- **Usage**: Participants can share their personalized card
- **Generated**: Automatically when they view their thank you card

## 🎯 Event Information

**Event Name**: Ride of Reflections  
**Theme**: A Journey of Faith, Fun and Fellowship  
**Organizer**: Divine Mercy Church  
**Purpose**: Cycling event with spiritual reflection and community building

## 📄 License

MIT License - Feel free to use this project for your own events!

## 🤝 Contributing

This project was created specifically for the Divine Mercy Church cycling event. For modifications or customizations, please contact the development team.

---

**Made with ❤️ for the Divine Mercy Church Cycling Community**

