import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Brain, 
  TrendingUp, 
  Clock, 
  Target, 
  BookOpen,
  Upload,
  CheckCircle2
} from "lucide-react";

export const StudyDashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Study <span className="bg-gradient-secondary bg-clip-text text-transparent">Command Center</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your learning progress, manage documents, and get AI-powered insights all in one place.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Upload className="h-5 w-5 mr-2 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth">
                <FileText className="h-4 w-4 mr-2" />
                Upload New Document
              </Button>
              <Button variant="outline" className="w-full hover:bg-muted transition-smooth">
                <Brain className="h-4 w-4 mr-2" />
                Generate Assessment
              </Button>
              <Button variant="outline" className="w-full hover:bg-muted transition-smooth">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
          
          {/* Progress Overview */}
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Target className="h-5 w-5 mr-2 text-accent" />
                Study Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Weekly Goal</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Documents Read</span>
                  <span className="font-medium">12/15</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Assessments</span>
                  <span className="font-medium">8/10</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Activity */}
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Clock className="h-5 w-5 mr-2 text-info" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Completed Math Assessment</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Uploaded Physics Notes</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Started History Review</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="text-center p-6 shadow-card hover:shadow-elevated transition-smooth">
            <div className="text-3xl font-bold text-primary mb-2">24</div>
            <div className="text-sm text-muted-foreground">Documents Processed</div>
          </Card>
          <Card className="text-center p-6 shadow-card hover:shadow-elevated transition-smooth">
            <div className="text-3xl font-bold text-accent mb-2">18</div>
            <div className="text-sm text-muted-foreground">Assessments Created</div>
          </Card>
          <Card className="text-center p-6 shadow-card hover:shadow-elevated transition-smooth">
            <div className="text-3xl font-bold text-info mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </Card>
          <Card className="text-center p-6 shadow-card hover:shadow-elevated transition-smooth">
            <div className="text-3xl font-bold text-academic-purple mb-2">156</div>
            <div className="text-sm text-muted-foreground">Study Hours</div>
          </Card>
        </div>
      </div>
    </section>
  );
};