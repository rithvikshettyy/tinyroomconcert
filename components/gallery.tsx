'use client'

import React from 'react'

const photos = [
  { id: 1, src: '/img2.jpeg', alt: 'The Palm Lume performance' },
  { id: 2, src: '/img3.jpeg', alt: 'Crowd energy' },
  { id: 3, src: '/img4.jpeg', alt: 'Intimate artist moments' },
  { id: 4, src: '/img5.jpeg', alt: 'The living room set' },
]

export default function Gallery() {
  return (
    <section style={{ background: '#0d0b08', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(48px, 8vw, 80px)',
            color: '#d4ff00',
            marginBottom: '4rem',
            letterSpacing: '2px'
          }}
        >
          THE ROOM. THE VIBE.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', border: '2px solid #111', background: '#111' }}>
          {photos.map(photo => (
            <div key={photo.id} style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(1) contrast(1.1)',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0) contrast(1)';
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) contrast(1.1)';
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
