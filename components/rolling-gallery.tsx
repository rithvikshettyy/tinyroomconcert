'use client'

import React from 'react'

const photos = [
  '/img1.jpeg', '/img2.jpeg', '/img3.jpeg', '/img4.jpeg', '/img9.jpg',
  '/img5.jpeg', '/img6.jpg', '/img7.jpg', '/img8.jpg', '/img10.jpg'
]

export default function RollingGallery() {
  return (
    <section style={{ background: '#0d0b08', padding: '60px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Texturey paper grain overlay */}
      <div className="paper-texture opacity-10 pointer-events-none" />

      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.2rem',
          color: 'rgba(212, 255, 0, 0.4)',
          textAlign: 'center',
          letterSpacing: '0.4rem',
          marginBottom: '3rem'
        }}
      >
        MOMENTS IN MOTION
      </h2>

      <div className="marquee">
        <div className="marquee-content">
          {[...photos, ...photos].map((src, i) => (
            <div key={i} className="marquee-item" style={{ aspectRatio: '16/9', height: '250px', overflow: 'hidden' }}>
              <img
                src={src}
                alt="Concert moment"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(0.2) contrast(1.1)',
                  transition: 'filter 0.3s ease'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0) contrast(1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0.2) contrast(1.1)'; }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .marquee-content {
          display: flex;
          gap: 20px;
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .marquee-item {
          flex-shrink: 0;
          border: 1px solid rgba(212, 255, 0, 0.1);
          border-radius: 2px;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }
        .marquee:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
