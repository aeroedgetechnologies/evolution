import { notFound } from 'next/navigation';

const newsItems = [
  {
    slug: 'lm5000-shipping-containers',
    title: 'Refurbishment LM5000 shipping containers',
    date: 'Jul 10, 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    desc: 'Our workshop completed the refurbishment of LM5000 shipping containers for global delivery. This project involved a full overhaul, repainting, and certification for international transport. The containers are now ready for use in the next phase of the project.'
  },
  {
    slug: 'lm5000-ready-for-transport',
    title: 'MFS Workshop – LM5000 ready for transport to the customer',
    date: 'Jul 3, 2025',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
    desc: 'LM5000 unit is ready for transport after a successful overhaul and testing. Our team ensured all quality checks were passed and the unit is now on its way to the customer.'
  },
  {
    slug: 'two-lm5000-left-workshop',
    title: 'MFS Workshop – 2 LM5000 gas turbines left our Workshop within 1 week!',
    date: 'Jun 26, 2025',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
    desc: 'After a major overhaul, 2 LM5000 gas turbines left our Workshop within 1 week. This achievement highlights our team’s efficiency and expertise.'
  },
  {
    slug: 'we-are-hiring',
    title: 'We are hiring!',
    date: 'Jun 10, 2025',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80',
    desc: 'Join our team of experts and help shape the future of energy solutions. We are looking for engineers, technicians, and project managers.'
  },
  {
    slug: 'annual-safety-training',
    title: 'Annual Safety Training Completed',
    date: 'May 28, 2025',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
    desc: 'Our engineers completed the annual safety training for field operations. Safety is our top priority at Energy World.'
  },
  {
    slug: 'new-epc-project',
    title: 'New EPC Project Awarded',
    date: 'May 10, 2025',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    desc: 'Energy World has been awarded a new EPC project in the Middle East. This project will further strengthen our presence in the region.'
  },
];

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default function Page(props: any) {
  const slug = props?.params?.slug;
  const news = newsItems.find((n) => n.slug === slug);
  if (!news) return notFound();
  return (
    <div style={{ maxWidth: 900, margin: '2.5rem auto', padding: '2rem 1rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
      <h1 style={{ color: '#20539b', fontWeight: 800, margin: '1.5rem 0 1rem 0' }}>{news.title}</h1>
      <div style={{ color: '#888', fontSize: '1rem', marginBottom: 16 }}>{news.date}</div>
      <img src={news.image} alt={news.title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 8, marginBottom: 24 }} />
      <div style={{ color: '#222', fontSize: '1.13rem', lineHeight: 1.7 }}>{news.desc}</div>
    </div>
  );
} 