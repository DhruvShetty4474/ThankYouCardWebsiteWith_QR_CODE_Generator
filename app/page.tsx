'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      router.push(`/thankyou?name=${encodeURIComponent(name.trim())}`)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.subtitle}>Please enter your name to continue</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={styles.input}
            required
            maxLength={50}
          />
          <button type="submit" className={styles.button}>
            OK
          </button>
        </form>
      </div>
    </main>
  )
}

