'use client'

export default function Concerts() {
  const episodes = [
    {
      id: 1,
      title: '14th MARCH, 2026',
      artist: 'Varun Sondur, Soham Swamy & Sumit Waychal',
      image: '/img4.jpeg',
    },
    {
      id: 2,
      title: '07th FEBRUARY, 2026',
      artist: 'Anushka Ahire, Vedant Tawade & Balamurgan Thevar',
      image: '/img5.jpeg',
    },
  ]

  const headingStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    color: '#111',
    letterSpacing: '2px',
    lineHeight: 0.95,
    marginBottom: '3rem',
    fontSize: 'clamp(48px, 9vw, 100px)',
  }

  const labelStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '0.9rem',
    letterSpacing: '0.2em',
    color: '#111',
    background: '#d4ff00',
    padding: '4px 12px',
    border: '2px solid #111',
  }

  return (
    <section id="concerts" style={{ background: '#f5f3ee', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <span style={labelStyle}>Episodes</span>
          <div className="divider-scrawl" style={{ flex: 1 }} />
        </div>

        <h2 style={headingStyle}>
          Recent<br />Gigs.
        </h2>

        {/* Episode grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: '1px',
            marginBottom: '4rem',
            background: '#111',
            border: '1px solid #111',
          }}
        >
          {episodes.map((ep) => (
            <a
              key={ep.id}
              href="/episodes"
              style={{
                position: 'relative',
                aspectRatio: '1/1',
                display: 'block',
                overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              <img
                src={ep.image}
                alt={ep.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease, filter 0.4s ease',
                  filter: 'grayscale(1) contrast(1.1)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0) contrast(1.05)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) contrast(1.1)';
                }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17,17,17,0.95) 0%, transparent 65%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '2rem',
                    color: '#d4ff00',
                    marginBottom: '4px',
                    letterSpacing: '1px'
                  }}
                >
                  {ep.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: 'rgba(245,243,238,0.85)',
                    letterSpacing: '0.05em'
                  }}
                >
                  {ep.artist}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#555', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 500 }}>
            Follow us for every new episode drop
          </p>
          <a
            href="https://instagram.com/thetinyroomconcert"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-12"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              display: 'inline-block',
              paddingTop: '16px',
              paddingBottom: '16px',
              border: '2px solid #111',
              color: '#111',
              fontSize: 'clamp(1rem, 5vw, 1.5rem)',
              textDecoration: 'none',
              letterSpacing: '2px',
              background: '#d4ff00',
              transition: 'all 0.3s ease',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#111'
                ; (e.currentTarget as HTMLAnchorElement).style.color = '#d4ff00'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#d4ff00'
                ; (e.currentTarget as HTMLAnchorElement).style.color = '#111'
            }}
          >
            @thetinyroomconcert ↗
          </a>
        </div>
      </div>
    </section>
  )
}
