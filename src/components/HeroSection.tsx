import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Brain, BarChart3, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Learning </span>
                with AI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload documents, generate assessments, track progress, and receive personalized study recommendations powered by artificial intelligence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elevated text-lg px-8 py-6">
                <Upload className="h-5 w-5 mr-2" />
                Upload Documents
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-muted transition-smooth">
                View Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <Card className="p-4 text-center shadow-card hover:shadow-elevated transition-smooth">
                <Upload className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Smart Upload</p>
              </Card>
              <Card className="p-4 text-center shadow-card hover:shadow-elevated transition-smooth">
                <Brain className="h-8 w-8 mx-auto mb-2 text-accent" />
                <p className="text-sm font-medium">AI Analysis</p>
              </Card>
              <Card className="p-4 text-center shadow-card hover:shadow-elevated transition-smooth">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-info" />
                <p className="text-sm font-medium">Progress Tracking</p>
              </Card>
              <Card className="p-4 text-center shadow-card hover:shadow-elevated transition-smooth">
                <Sparkles className="h-8 w-8 mx-auto mb-2 text-academic-purple" />
                <p className="text-sm font-medium">Recommendations</p>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="AI-powered learning platform interface" 
              className="relative rounded-3xl shadow-hero w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};