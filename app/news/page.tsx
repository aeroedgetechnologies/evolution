import Link from 'next/link';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  image: string;
  desc: string;
}

const newsItems: NewsItem[] = [
  {
    slug: 'lm5000-shipping-containers',
    title: 'Refurbishment LM5000 shipping containers',
    date: 'Jul 10, 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    desc: 'Our workshop completed the refurbishment of LM5000 shipping containers for global delivery.'
  },
  {
    slug: 'lm5000-ready-for-transport',
    title: 'Energy World Workshop – LM5000 ready for transport to the customer',
    date: 'Jul 3, 2025',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    desc: 'LM5000 unit is ready for transport after a successful overhaul and testing.'
  },
  {
    slug: 'two-lm5000-left-workshop',
    title: 'Energy World Workshop – 2 LM5000 gas turbines left our Workshop within 1 week!',
    date: 'Jun 26, 2025',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    desc: 'After a major overhaul, 2 LM5000 gas turbines left our Workshop within 1 week.'
  },
  {
    slug: 'we-are-hiring',
    title: 'We are hiring!',
    date: 'Jun 10, 2025',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    desc: 'Join our team of experts and help shape the future of energy solutions.'
  },
  {
    slug: 'annual-safety-training',
    title: 'Annual Safety Training Completed',
    date: 'May 28, 2025',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    desc: 'Our engineers completed the annual safety training for field operations.'
  },
  {
    slug: 'new-epc-project',
    title: 'New EPC Project Awarded',
    date: 'May 10, 2025',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    desc: 'Energy World has been awarded a new EPC project in the Middle East.'
  },
];

export default async function NewsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '2.5rem auto', padding: '2rem 1rem' }}>
      <h1 style={{ color: '#20539b', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>News & Downloads</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
        {newsItems.map((item) => (
          <div key={item.slug} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', width: 320, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <Link href={`/news/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
              <div style={{ padding: '1.2rem' }}>
                <div style={{ color: '#20539b', fontWeight: 700, fontSize: '1.08rem', marginBottom: 8 }}>{item.title}</div>
                <div style={{ color: '#888', fontSize: '0.98rem', marginBottom: 8 }}>{item.date}</div>
                <div style={{ color: '#222', fontSize: '1rem' }}>{item.desc}</div>
                <div style={{ color: '#20539b', fontWeight: 600, marginTop: 12, fontSize: '1rem' }}>read more</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 