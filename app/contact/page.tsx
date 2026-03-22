import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export default function ContactPage() {
  const headingStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(60px, 12vw, 150px)',
    lineHeight: 0.85,
    color: '#d4ff00',
    letterSpacing: '2px',
    marginBottom: '2rem',
  }

  return (
    <main style={{ background: '#0d0b08', minHeight: '100vh' }}>
      <Header />

      {/* ── Contact Hero ── */}
      <section
        style={{
          minHeight: '80vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 24px 80px',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/img8.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark Moody Overlay */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(13, 11, 8, 0.7)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
          <h1 style={headingStyle}>WANT TO<br />PLAY?</h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#f0ece4',
            fontSize: '1.25rem',
            lineHeight: 1.6,
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Whether you&apos;re an artist looking for a stage or a fan wanting to attend, we&apos;re always listening.
          </p>
        </div>
      </section>

      {/* ── Contact Form Section ── */}
      <div style={{ background: '#0d0b08', position: 'relative', zIndex: 5, marginTop: '-5vh' }}>
        <Contact />
      </div>

      {/* ── Visual Closer ── */}
      <section style={{ height: '400px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/img7.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.5) brightness(0.7)'
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, #0d0b08, transparent, #0d0b08)'
        }} />
      </section>

      <Footer />
    </main>
  )
}
