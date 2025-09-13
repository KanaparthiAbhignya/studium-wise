import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  BarChart3, 
  Clock, 
  Target,
  Trophy,
  BookOpen,
  Brain,
  Calendar
} from "lucide-react";

export const AnalyticsDashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Study <span className="bg-gradient-secondary bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your learning progress with detailed analytics and personalized insights.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {/* Performance Metrics */}
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">94%</div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-lg mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">42h</div>
              <div className="text-sm text-muted-foreground">Study Time</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-academic-green rounded-lg mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">24</div>
              <div className="text-sm text-muted-foreground">Documents</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-academic-purple rounded-lg mx-auto mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">156</div>
              <div className="text-sm text-muted-foreground">Concepts Learned</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Progress Chart */}
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Mathematics</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Physics</span>
                  <span className="text-muted-foreground">72%</span>
                </div>
                <Progress value={72} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Chemistry</span>
                  <span className="text-muted-foreground">91%</span>
                </div>
                <Progress value={91} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Biology</span>
                  <span className="text-muted-foreground">78%</span>
                </div>
                <Progress value={78} className="h-3" />
              </div>
            </CardContent>
          </Card>
          
          {/* Study Schedule */}
          <Card className="shadow-card hover:shadow-elevated transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2 text-accent" />
                Weekly Study Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{day}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-smooth"
                          style={{ width: `${Math.random() * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">
                        {Math.floor(Math.random() * 4)}h
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Achievement Cards */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Recent Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-elevated transition-smooth border-l-4 border-l-success">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Target className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="font-medium">Goal Achieved</p>
                    <p className="text-sm text-muted-foreground">Completed weekly study target</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elevated transition-smooth border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Score Milestone</p>
                    <p className="text-sm text-muted-foreground">Reached 90% average score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elevated transition-smooth border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Brain className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Learning Streak</p>
                    <p className="text-sm text-muted-foreground">7 days of consistent study</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};