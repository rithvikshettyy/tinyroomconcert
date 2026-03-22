import Header from '@/components/header'
import Footer from '@/components/footer'
import Concerts from '@/components/concerts'

export default function EpisodesPage() {
  return (
    <main style={{ background: '#f5f3ee' }}>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <Concerts />
      </div>
      <Footer />
    </main>
  )
}
