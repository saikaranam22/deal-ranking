import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sourcing from '../components/Sourcing';
import Filter from '../components/Filter';
import Workflow from '../components/Workflow';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Sourcing />
      <Filter />
      <Workflow />
      <Footer />
    </main>
  );
}
