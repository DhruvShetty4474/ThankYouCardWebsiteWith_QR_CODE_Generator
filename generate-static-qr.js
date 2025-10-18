const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Change this to your deployed Vercel URL after deployment
const YOUR_WEBSITE_URL = 'https://cyclingevent.vercel.app';

async function generateStaticQR() {
  try {
    const publicDir = path.join(__dirname, 'public');
    
    // Create public directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate QR code
    await QRCode.toFile(
      path.join(publicDir, 'static-qr.png'),
      YOUR_WEBSITE_URL,
      {
        width: 800,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      }
    );

    console.log('✅ Static QR code generated successfully!');
    console.log(`📁 Location: ${path.join(publicDir, 'static-qr.png')}`);
    console.log(`🔗 QR Code links to: ${YOUR_WEBSITE_URL}`);
    console.log('\n📝 Next steps:');
    console.log('1. The QR code has been saved to the public folder');
    console.log('2. You can now print or share this QR code');
    console.log('3. Anyone scanning it will be taken to your form page');
  } catch (error) {
    console.error('❌ Error generating QR code:', error);
  }
}

generateStaticQR();

