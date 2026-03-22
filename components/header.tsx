'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-300" 
      style={{ 
        background: 'rgba(13, 11, 8, 0.85)', 
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212, 255, 0, 0.2)' 
      }}
    >
      <nav className="w-full px-10 py-4 flex items-center justify-between">
        {/* Brand Logo - Simplified to single line, no box */}
        <Link href="/" className="transition-opacity hover:opacity-80">
          <span
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.4rem', 
              color: '#d4ff00', 
              letterSpacing: '2px',
              whiteSpace: 'nowrap'
            }}
          >
            THE TINY ROOM CONCERT
          </span>
        </Link>

        {/* Desktop Nav - Matching new brand typography */}
        <div className="hidden md:flex gap-10 items-center">
          {[['About', '/about'], ['Episodes', '/episodes'], ['Contact', '/contact']].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.3rem',
                letterSpacing: '2px',
                color: '#f0ece4',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#d4ff00';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#f0ece4';
              }}
            >
              {label}
            </Link>
          ))}
          
          <a
            href="https://instagram.com/thetinyroomconcert"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.2rem',
              letterSpacing: '2px',
              textDecoration: 'none',
              color: '#0d0b08',
              background: '#d4ff00',
              padding: '8px 22px',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              border: '2px solid #d4ff00',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#d4ff00';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#d4ff00';
              (e.currentTarget as HTMLAnchorElement).style.color = '#0d0b08';
            }}
          >
            INSTAGRAM ↗
          </a>
        </div>

        {/* Mobile Hamburger - Yellow for visibility on dark */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={{ border: '2px solid #d4ff00', padding: '8px', background: 'transparent' }}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="#d4ff00" strokeWidth={2} viewBox="0 0 24 24">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - Matching new dark theme */}
      {isOpen && (
        <div 
          style={{ 
            background: 'rgba(13, 11, 8, 0.98)', 
            borderTop: '1px solid rgba(212, 255, 0, 0.2)',
            height: '100vh',
            position: 'absolute',
            width: '100%',
          }}
        >
          <div className="px-8 py-12 flex flex-col gap-8">
            {[['About', '/about'], ['Episodes', '/episodes'], ['Contact', '/contact']].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2.5rem',
                  letterSpacing: '4px',
                  color: '#f0ece4',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://instagram.com/thetinyroomconcert"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2rem',
                letterSpacing: '3px',
                color: '#d4ff00',
                textDecoration: 'none',
                marginTop: '1rem'
              }}
            >
              INSTAGRAM ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
