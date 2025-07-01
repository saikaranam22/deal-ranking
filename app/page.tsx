import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sourcing from '../components/Sourcing';
import Filter from '../components/Filter';
import Workflow from '../components/Workflow';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Sourcing />
      <Filter />
      <Workflow />
      <Pricing />
      <Footer />
    </main>
  );
}
