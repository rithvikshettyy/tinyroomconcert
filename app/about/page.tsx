import Header from '@/components/header'
import Footer from '@/components/footer'

const headingStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  color: '#d4ff00',
  letterSpacing: '2px',
  lineHeight: 1,
  marginBottom: '2rem',
  fontSize: 'clamp(56px, 11vw, 130px)',
}

const bodyStyle = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#f0ece4',
  lineHeight: 1.85,
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
}

const accentStyle = {
  ...bodyStyle,
  color: '#d4ff00',
}

const overlayDark = {
  position: 'absolute' as const,
  inset: 0,
  background: 'rgba(10, 8, 4, 0.80)',
}

export default function AboutPage() {
  return (
    <main style={{ background: '#0d0b08' }}>
      <Header />

      {/* ── WHO ARE WE ── */}
      <section
        style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 24px 80px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/img4.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div style={overlayDark} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={headingStyle}>WHO ARE WE?</h1>
          <p style={{ ...bodyStyle, maxWidth: '560px', margin: '0 auto 1.25rem' }}>
            We&apos;re a tiny living room that turns into a concert.
            A space for artists, listeners, and stories to meet.
            No big stages. No noise. Just music, people, and presence.
          </p>
          <p style={accentStyle}>
            and it&apos;s invite-only —<br />now we&apos;re acquainted ;)
          </p>
        </div>
      </section>

      {/* ── WHY THIS SPACE ── */}
      <section
        style={{
          minHeight: '85vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          overflow: 'hidden',
          background: '#100e08',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/img3.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            opacity: 0.15,
          }}
        />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={headingStyle}>WHY THIS SPACE?</h2>
          <p style={{ ...bodyStyle, marginBottom: '1.25rem' }}>
            Made for those who prefer depth over volume.
            A calm weekend escape for people who enjoy music, ideas,
            and meeting others without shouting over sound.
          </p>
          <p style={accentStyle}>
            No blaring speakers. No crowd pressure.<br />
            Just a room, a rhythm, and shared stillness.
          </p>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section
        style={{
          minHeight: '90vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/img2.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div style={overlayDark} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={headingStyle}>WHAT TO EXPECT?</h2>
          {[
            'A living room, not a venue. Each gathering takes place in a different home, as we move between thoughtfully chosen spaces.',
            'Intimate performances by artists across genres — music you can actually listen to.',
            'A chance to meet people from different backgrounds and mindsets, without pressure to socialise.',
            'Click cute pictures with your loved ones or the ones you just met.',
          ].map((line, i) => (
            <p key={i} style={{ ...bodyStyle, marginBottom: '1rem' }}>{line}</p>
          ))}
          <p style={{ ...accentStyle, marginBottom: '0.5rem' }}>BYOB, relaxed evenings, unhurried time.</p>
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            color: '#d4ff00',
            letterSpacing: '2px',
            marginTop: '1.5rem',
          }}>
            Come as you are. Leave a little lighter. Feel free to stay.
          </p>
        </div>
      </section>

      {/* ── THE IDEOLOGY ── */}
      <section
        style={{
          minHeight: '90vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/img5.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div style={{ ...overlayDark, background: 'rgba(8, 6, 2, 0.87)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '720px', margin: '0 auto 0 max(6vw, 24px)' }}>
          <h2 style={headingStyle}>THE IDEOLOGY</h2>
          {[
            'This idea was born while working in event management, where we saw how many people had outgrown club culture — the same noise, the same crowds, the same barriers to connection.',
            'For introverts, thinkers, and listeners, there was rarely space to talk, breathe, or simply be.',
            'We curate a rotating roster of artists across genres, so you can discover new music in a relaxed, intimate setting.',
            'Our concerts offer a safe space to unwind, chit-chat, listen closely, and enjoy your hobbies at your own pace.',
            'And with it being BYOB, everything\'s already sorted.',
            'Want to perform? You\'re welcome too — just let us know beforehand. This space is open to all.',
          ].map((line, i) => (
            <p key={i} style={{ ...bodyStyle, marginBottom: '1.1rem', opacity: 0.92 }}>{line}</p>
          ))}
        </div>
      </section>

      {/* Photo strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3px',
          background: '#0d0b08',
        }}
      >
        {['/img2.jpeg', '/img3.jpeg', '/img5.jpeg'].map((src) => (
          <div key={src} style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img
              src={src}
              alt="The Tiny Room Concert"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) contrast(1.05)' }}
            />
          </div>
        ))}
      </div>

      <Footer />
    </main>
  )
}
