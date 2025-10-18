'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import styles from './thankyou.module.css'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || 'Guest'
  const [qrCode, setQrCode] = useState('')
  const [showQR, setShowQR] = useState(false)

  useEffect(() => {
    // Generate QR code on the client side
    const generateQR = async () => {
      try {
        const QRCode = (await import('qrcode')).default
        const url = window.location.href
        const qrDataUrl = await QRCode.toDataURL(url, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        })
        setQrCode(qrDataUrl)
      } catch (err) {
        console.error('Error generating QR code:', err)
      }
    }

    generateQR()
  }, [])

  const handleDownloadQR = () => {
    if (qrCode) {
      const link = document.createElement('a')
      link.href = qrCode
      link.download = `thankyou-${name}-qr.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.logoContainer}>
            <img 
              src="/logo.jpg" 
              alt="Divine Mercy Church Logo" 
              className={styles.logo}
            />
          </div>
          <div className={styles.decorTop}>🚴‍♂️</div>
          <h1 className={styles.thankYou}>Thank You</h1>
          <h2 className={styles.name}>{name}!</h2>
          <p className={styles.message}>
            Thank you for participating in our cycling event! Your enthusiasm and spirit made this event truly special. 
            We hope you had an amazing time and look forward to seeing you at our next cycling adventure!
          </p>
          <div className={styles.decorBottom}>🏆</div>
        </div>

        <div className={styles.actions}>
          <button 
            onClick={() => setShowQR(!showQR)} 
            className={styles.button}
          >
            {showQR ? 'Hide QR Code' : 'Show QR Code'}
          </button>
          <button 
            onClick={handleCopyLink} 
            className={styles.buttonSecondary}
          >
            Copy Link
          </button>
        </div>

        {showQR && qrCode && (
          <div className={styles.qrSection}>
            <h3 className={styles.qrTitle}>Scan to share this card</h3>
            <div className={styles.qrContainer}>
              <img src={qrCode} alt="QR Code" className={styles.qrImage} />
            </div>
            <button onClick={handleDownloadQR} className={styles.downloadButton}>
              Download QR Code
            </button>
          </div>
        )}

        <a href="/" className={styles.homeLink}>
          ← Back to Home
        </a>
      </div>
    </main>
  )
}

export default function ThankYou() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}

