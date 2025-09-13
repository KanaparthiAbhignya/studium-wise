import { Button } from "@/components/ui/button";
import { BookOpen, Brain, FileText, TrendingUp } from "lucide-react";

export const StudyHeader = () => {
  return (
    <header className="bg-card border-b border-border shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-hero">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">StudyAI</h1>
              <p className="text-sm text-muted-foreground">Personalized Learning Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <FileText className="h-4 w-4 mr-2" />
              Documents
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <BookOpen className="h-4 w-4 mr-2" />
              Study
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <TrendingUp className="h-4 w-4 mr-2" />
              Analytics
            </Button>
          </nav>
          
          <Button className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elevated">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};