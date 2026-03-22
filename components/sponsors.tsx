'use client'

import Image from 'next/image'

export default function Sponsors() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '140px 24px',
        overflow: 'hidden',
        backgroundImage: 'url(/beer1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark Overlay for branding contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(13, 11, 8, 0.9)',
          zIndex: 1
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(40px, 6vw, 64px)',
            color: '#d4ff00',
            marginBottom: '4rem',
            letterSpacing: '2px'
          }}
        >
          CORE PARTNERS.
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4rem',
          flexWrap: 'wrap'
        }}>
          {/* Main Sponsor: Beer */}
          <div style={{ textAlign: 'center' }}>
            <Image
              src="/sponsor1.png"
              alt="Official Beer Sponsor"
              width={220}
              height={100}
              style={{
                maxWidth: '220px',
                height: 'auto',
                display: 'block',
                margin: '0 auto 1.5rem',
                filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))'
              }}
            />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(255, 255, 255, 0.8)',
              letterSpacing: '0.2rem',
              display: 'block'
            }}>
              OFFICIAL BEER PARTNER
            </span>
          </div>

          <div 
            className="hidden md:block"
            style={{
              width: '1px',
              height: '100px',
              background: 'rgba(212, 255, 0, 0.2)',
            }} 
          />

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.5rem',
              color: 'rgba(255, 255, 255, 0.4)',
              letterSpacing: '2px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              padding: '16px 40px'
            }}>
              YOUR BRAND?
            </div>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '0.15rem',
              display: 'block',
              marginTop: '1.5rem'
            }}>
              BECOME A PARTNER
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
