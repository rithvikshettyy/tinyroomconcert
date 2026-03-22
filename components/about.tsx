'use client'

export default function About() {
  const features = [
    { icon: '♪', title: 'Live Performances', desc: 'Intimate concerts by talented independent artists in a cozy living room.' },
    { icon: '◆', title: 'Cold Beer', desc: 'Quality drinks in a truly relaxed, no-pretense setting.' },
    { icon: '●', title: 'Community', desc: 'Meet music lovers and creative minds who actually care.' },
    { icon: '◊', title: 'Authentic Stories', desc: 'Real connections through music in its purest, most honest form.' },
  ]

  return (
    <section id="about" style={{ background: '#eeeae1', padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <span
            className="stamp font-special"
            style={{ color: '#111', fontSize: '0.6rem', letterSpacing: '0.25em', transform: 'rotate(-2deg)' }}
          >
            About
          </span>
          <div className="divider-scrawl" style={{ flex: 1 }} />
        </div>

        <h2
          className="font-marker"
          style={{
            fontSize: 'clamp(48px, 9vw, 100px)',
            lineHeight: 0.95,
            color: '#111',
            letterSpacing: '-1px',
            marginBottom: '3rem',
          }}
        >
          The Tiny<br />Room.
        </h2>

        {/* Two column description */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <h3 className="font-marker" style={{ fontSize: '1.5rem', color: '#111', marginBottom: '1rem' }}>
              The Space
            </h3>
            <p className="font-special" style={{ color: '#333', lineHeight: 1.75, fontSize: '1rem', marginBottom: '1rem' }}>
              A cozy villa transformed into an intimate concert venue. Warm lighting, carefully curated acoustics, and a crowd small enough that you can actually hear the artist breathe.
            </p>
            <p className="font-special" style={{ color: '#555', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Every corner designed for real connection — between artists and audience, between strangers who leave as friends.
            </p>
          </div>
          <div>
            <h3 className="font-marker" style={{ fontSize: '1.5rem', color: '#111', marginBottom: '1rem' }}>
              The Vibe
            </h3>
            <p className="font-special" style={{ color: '#333', lineHeight: 1.75, fontSize: '1rem', marginBottom: '1rem' }}>
              Cold beer. Warm conversations. Live music that matters. No pretense, no barriers — just raw, authentic moments.
            </p>
            <p className="font-special" style={{ color: '#555', lineHeight: 1.75, fontSize: '0.95rem' }}>
              We celebrate independent artists and give them a platform in a city that moves too fast to stop and listen.
            </p>
          </div>
        </div>

        {/* Real photo strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4px',
            marginBottom: '3.5rem',
            border: '2.5px solid #111',
          }}
        >
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img
              src="/img2.jpeg"
              alt="Artists performing at The Tiny Room Concert"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(1.05)' }}
            />
          </div>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img
              src="/img3.jpeg"
              alt="The vibe at The Tiny Room Concert"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(1.05)' }}
            />
          </div>
        </div>

        {/* Feature grid */}
        <div style={{ borderTop: '2.5px solid #111', paddingTop: '3rem' }}>
          <h3 className="font-marker" style={{ fontSize: '1.8rem', color: '#111', marginBottom: '2rem' }}>
            What Happens Here
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {features.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{ padding: '1.5rem', border: '2.5px solid #111', background: '#f5f3ee', cursor: 'default' }}
              >
                <div className="font-marker" style={{ fontSize: '1.8rem', color: '#111', marginBottom: '0.75rem' }}>
                  {item.icon}
                </div>
                <h4 className="font-marker" style={{ fontSize: '1.1rem', color: '#111', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p className="font-special" style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
