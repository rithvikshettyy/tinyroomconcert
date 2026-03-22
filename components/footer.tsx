'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerItemStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    color: 'rgba(245,243,238,0.6)',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
  }

  const headingStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.25rem',
    color: '#d4ff00',
    letterSpacing: '2px',
    marginBottom: '1rem',
  }

  return (
    <footer style={{ background: '#111', color: '#f5f3ee', padding: '100px 24px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '80px' }}>
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '2rem',
              color: '#d4ff00',
              marginBottom: '1rem',
              letterSpacing: '2px'
            }}>
              THE TINY ROOM CONCERT.
            </div>
            <p style={{ ...footerItemStyle, color: 'rgba(245,243,238,0.8)' }}>
              An intimate concert series in the hearts of cities.
            </p>
          </div>
          <div>
            <h4 style={headingStyle}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="/about" style={{ ...footerItemStyle, textDecoration: 'none' }}>About</a>
              <a href="/episodes" style={{ ...footerItemStyle, textDecoration: 'none' }}>Episodes</a>
              <a href="/contact" style={{ ...footerItemStyle, textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
          <div>
            <h4 style={headingStyle}>Socials</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="https://instagram.com/thetinyroomconcert" target="_blank" rel="noopener noreferrer" style={{ ...footerItemStyle, textDecoration: 'none' }}>Instagram</a>
              <a href="#" style={{ ...footerItemStyle, textDecoration: 'none' }}>Twitter</a>
              <a href="#" style={{ ...footerItemStyle, textDecoration: 'none' }}>YouTube</a>
            </div>
          </div>
          <div>
            <h4 style={headingStyle}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="#" style={{ ...footerItemStyle, textDecoration: 'none' }}>Terms</a>
              <a href="#" style={{ ...footerItemStyle, textDecoration: 'none' }}>Privacy</a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(245,243,238,0.1)',
          paddingTop: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ ...footerItemStyle, marginBottom: 0 }}>© {currentYear} The Tiny Room Concert</p>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            color: 'rgba(245,243,238,0.4)'
          }}>
            MUMBAI EST. 2024
          </div>
        </div>
      </div>
    </footer>
  )
}
