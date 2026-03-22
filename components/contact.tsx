'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const inputStyle = {
    fontFamily: "'DM Sans', sans-serif",
    width: '100%',
    padding: '1.25rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(212, 255, 0, 0.1)',
    color: '#f0ece4',
    fontSize: '1rem',
    borderRadius: '0',
    transition: 'all 0.3s ease',
  }

  const labelStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.2rem',
    letterSpacing: '1px',
    color: 'rgba(212, 255, 0, 0.8)',
    display: 'block',
    marginBottom: '0.5rem',
  }

  const headingStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(56px, 12vw, 130px)',
    lineHeight: 0.9,
    color: '#d4ff00',
    letterSpacing: '2px',
    marginBottom: '3rem',
  }

  return (
    <section id="contact" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <span style={{ 
            fontFamily: "'Bebas Neue', sans-serif", 
            fontSize: '0.9rem', 
            letterSpacing: '0.2rem', 
            background: '#d4ff00', 
            padding: '4px 12px', 
            border: '2px solid #111',
            color: '#111'
          }}>
            TALK TO US
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(212, 255, 0, 0.2)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
          <div>
            <h2 style={headingStyle}>GET IN<br />TOUCH.</h2>
            <div style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              color: '#f0ece4', 
              lineHeight: 1.8, 
              fontSize: '1.1rem' 
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Found a cozy space we should check out? Or maybe you&apos;re an independent artist looking for an intimate stage?
              </p>
              <p style={{ marginBottom: '2.5rem' }}>
                Drop us a message and become part of the community.
              </p>
              <div style={{ 
                fontFamily: "'Bebas Neue', sans-serif", 
                fontSize: '1.5rem', 
                letterSpacing: '1px', 
                color: '#d4ff00' 
              }}>
                <a href="mailto:thetinyroomconcert@gmail.com" style={{ color: '#d4ff00', textDecoration: 'none', borderBottom: '3px solid rgba(212, 255, 0, 0.4)' }}>
                  THE TINYROOMCONCERT@GMAIL.COM ↗
                </a>
              </div>
            </div>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text"
                placeholder="Full Name"
                style={inputStyle}
                onFocus={e => { 
                  (e.target as HTMLInputElement).style.boxShadow = '6px 6px 0 #d4ff00';
                  (e.target as HTMLInputElement).style.borderColor = '#d4ff00';
                }}
                onBlur={e => { 
                  (e.target as HTMLInputElement).style.boxShadow = 'none';
                  (e.target as HTMLInputElement).style.borderColor = 'rgba(212, 255, 0, 0.1)';
                }}
              />
            </div>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                placeholder="hello@example.com"
                style={inputStyle}
                onFocus={e => { 
                  (e.target as HTMLInputElement).style.boxShadow = '6px 6px 0 #d4ff00';
                  (e.target as HTMLInputElement).style.borderColor = '#d4ff00';
                }}
                onBlur={e => { 
                  (e.target as HTMLInputElement).style.boxShadow = 'none';
                  (e.target as HTMLInputElement).style.borderColor = 'rgba(212, 255, 0, 0.1)';
                }}
              />
            </div>
            <div>
              <label style={labelStyle}>Your Message</label>
              <textarea
                rows={5}
                placeholder="What's on your mind?"
                style={inputStyle}
                onFocus={e => { 
                  (e.target as HTMLTextAreaElement).style.boxShadow = '6px 6px 0 #d4ff00';
                  (e.target as HTMLTextAreaElement).style.borderColor = '#d4ff00';
                }}
                onBlur={e => { 
                  (e.target as HTMLTextAreaElement).style.boxShadow = 'none';
                  (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(212, 255, 0, 0.1)';
                }}
              />
            </div>
            <button
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                background: '#d4ff00',
                color: '#111',
                padding: '1.25rem',
                fontSize: '1.5rem',
                border: '2px solid #d4ff00',
                cursor: 'pointer',
                letterSpacing: '2px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.color = '#d4ff00';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#d4ff00';
                (e.currentTarget as HTMLButtonElement).style.color = '#111';
              }}
            >
              SEND MESSAGE ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
