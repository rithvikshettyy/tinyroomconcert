'use client'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px',
        backgroundImage: 'url(/img1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      {/* Light overlay to keep it bright but ensure text pop, similar to the latest screenshot */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Bold Brand Headline in Neon Yellow Bebas Neue */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(50px, 12vw, 130px)',
            lineHeight: 0.85,
            color: '#d4ff00',
            letterSpacing: '2px',
            marginBottom: '2rem',
            // Subtle dark stroke/shadow as seen in the screenshot for readability
            textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
          }}
        >
          THE TINY<br />ROOM<br />CONCERT
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            color: '#ffffff',
            lineHeight: 1.6,
            fontWeight: 500,
            letterSpacing: '0.02em',
            maxWidth: '650px',
            margin: '0 auto 3.5rem',
            opacity: 0.95,
          }}
        >
          A tiny living room turned concert space.<br />
          Intimate gigs · Independent artists<br />
          Music, stories &amp; presence.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/episodes"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              display: 'inline-block',
              padding: '14px 48px',
              background: '#111',
              color: '#d4ff00',
              fontSize: '1.5rem',
              textDecoration: 'none',
              letterSpacing: '2px',
              border: '2.5px solid #111',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#d4ff00';
              (e.currentTarget as HTMLAnchorElement).style.color = '#111';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#111';
              (e.currentTarget as HTMLAnchorElement).style.color = '#d4ff00';
            }}
          >
            EXPLORE GIGS ↗
          </a>
          <a
            href="https://instagram.com/thetinyroomconcert"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              display: 'inline-block',
              padding: '14px 48px',
              background: 'transparent',
              color: '#f5f3ee',
              fontSize: '1.5rem',
              textDecoration: 'none',
              letterSpacing: '2px',
              border: '2.5px solid #f5f3ee',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#f5f3ee';
              (e.currentTarget as HTMLAnchorElement).style.color = '#111';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#f5f3ee';
            }}
          >
            FOLLOW US ↗
          </a>
        </div>
      </div>
    </section>
  )
}
