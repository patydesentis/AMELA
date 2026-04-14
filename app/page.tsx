import { Navbar } from "./components/landing/Navbar";
import { HeroSection } from "./components/landing/HeroSection";
import { ProblemSection } from "./components/landing/ProblemSection";
import { AudienceSection } from "./components/landing/AudienceSection";
import { ProgramSection } from "./components/landing/ProgramSection";
import { ProposalSection } from "./components/landing/ProposalSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8] font-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <AudienceSection />
        <ProgramSection />
        <ProposalSection />
      </main>
    </div>
  );
}
