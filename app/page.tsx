import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyValorum from '../components/WhyValorum';
import WorkflowSteps from '../components/WorkflowSteps';
import DealInbox from '../components/DealInbox';
import FundOverview from '../components/FundOverview';
import KPIPulse from '../components/KPIPulse';
import LPLetter from '../components/LPLetter';
import OnboardingQuestions from '../components/OnboardingQuestions';
import WhoUsesValorum from '../components/WhoUsesValorum';
import Integrations from '../components/Integrations';
import ProofPromises from '../components/ProofPromises';
import Sourcing from '../components/Sourcing';
import Filter from '../components/Filter';
import Workflow from '../components/Workflow';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyValorum />
      <WorkflowSteps />
      <DealInbox />
      <FundOverview />
      <KPIPulse />
      <LPLetter />
      <OnboardingQuestions />
      <WhoUsesValorum />
      <Integrations />
      <ProofPromises />
      <Sourcing />
      <Filter />
      <Workflow />
      <Footer />
    </main>
  );
}
