'use client'

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "ADITI S.",
      text: "Literally the only concert where I actually felt the music. No cellphones in the air, just pure presence. A core memory.",
      role: "Attendee, Ep 1"
    },
    {
      id: 2,
      name: "Arjun S.",
      text: "As a musician, performing in a living room is terrifying and beautiful. There's nowhere to hide, and that's why it works.",
      role: "Musician"
    },
    {
      id: 3,
      name: "SHRADHA M.",
      text: "The energy in that tiny room was bigger than any stadium I've been to. Can't wait for the next drop.",
      role: "Attendee, Ep 3"
    }
  ]

  return (
    <section style={{ background: '#0d0b08', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Texturey paper grain overlay */}
      <div className="paper-texture opacity-10 pointer-events-none" />

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(48px, 8vw, 80px)',
            color: '#d4ff00',
            marginBottom: '4rem',
            letterSpacing: '2px'
          }}
        >
          WHAT THEY&apos;RE SAYING.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
          {reviews.map(review => (
            <div key={review.id} style={{ textAlign: 'left', borderTop: '1px solid rgba(212, 255, 0, 0.2)', paddingTop: '2rem' }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.25rem',
                  color: '#f5f3ee',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic'
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.3rem',
                  color: '#d4ff00',
                  display: 'block',
                  letterSpacing: '1px'
                }}>
                  {review.name}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.85rem',
                  color: 'rgba(245, 243, 238, 0.6)',
                  letterSpacing: '0.05em'
                }}>
                  {review.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
