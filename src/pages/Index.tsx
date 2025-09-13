import { StudyHeader } from "@/components/StudyHeader";
import { HeroSection } from "@/components/HeroSection";
import { StudyDashboard } from "@/components/StudyDashboard";
import { DocumentProcessor } from "@/components/DocumentProcessor";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import IntegratedStudySystem from "@/components/IntegratedStudySystem";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StudyHeader />
      <HeroSection />
      <StudyDashboard />
      <IntegratedStudySystem />
      <DocumentProcessor />
      <AnalyticsDashboard />
    </div>
  );
};

export default Index;
