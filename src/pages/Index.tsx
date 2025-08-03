import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { QuestBoard } from "@/components/ui/quest-board";
import { SkillTreePreview } from "@/components/ui/skill-tree-preview";
import { CTASection } from "@/components/ui/cta-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <QuestBoard />
      <SkillTreePreview />
      <CTASection />
    </div>
  );
};

export default Index;
