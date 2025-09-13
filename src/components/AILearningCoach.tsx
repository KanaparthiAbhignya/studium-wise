import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Coffee, Car, Utensils, Moon, Zap, Target, TrendingUp, Clock } from 'lucide-react';

interface CoachOutput {
  notification: string;
  habitTip: string;
  motivation: string;
}

interface RoutineAnchor {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  timeOfDay: string;
}

const routineAnchors: RoutineAnchor[] = [
  {
    id: 'coffee',
    name: 'Coffee Break',
    icon: <Coffee className="w-5 h-5" />,
    description: 'Morning energy boost learning',
    timeOfDay: '7-10 AM'
  },
  {
    id: 'commute',
    name: 'Commute',
    icon: <Car className="w-5 h-5" />,
    description: 'Travel time optimization',
    timeOfDay: '8-9 AM, 5-6 PM'
  },
  {
    id: 'lunch',
    name: 'Lunch Break',
    icon: <Utensils className="w-5 h-5" />,
    description: 'Midday knowledge snack',
    timeOfDay: '12-1 PM'
  },
  {
    id: 'evening',
    name: 'Evening Wind-down',
    icon: <Moon className="w-5 h-5" />,
    description: 'Relaxed reflection learning',
    timeOfDay: '7-9 PM'
  }
];

const AILearningCoach: React.FC = () => {
  const [selectedAnchor, setSelectedAnchor] = useState<string>('coffee');
  const [currentStreak, setCurrentStreak] = useState(7);
  const [multiplier, setMultiplier] = useState(1.4);
  const [coachOutput, setCoachOutput] = useState<CoachOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCoachingAdvice = async (anchorId: string) => {
    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const anchor = routineAnchors.find(a => a.id === anchorId);
    const outputs: Record<string, CoachOutput> = {
      coffee: {
        notification: "Perfect coffee moment! Try the 5-minute Spanish vocabulary flash cards while your espresso brews.",
        habitTip: "Stack learning with the coffee ritual - review yesterday's notes while the machine heats up.",
        motivation: `🔥 Day ${currentStreak} streak! Your consistency is building neural pathways stronger than caffeine builds energy.`
      },
      commute: {
        notification: "Transform this commute into a knowledge journey - listen to a 10-minute economics podcast episode.",
        habitTip: "Download offline content the night before to eliminate decision fatigue during travel time.",
        motivation: `⚡ ${currentStreak} days strong! Your commute learning is compounding - you're gaining 50+ hours of knowledge yearly.`
      },
      lunch: {
        notification: "Fuel your brain with your body - try a quick Python coding challenge while eating that sandwich.",
        habitTip: "Keep learning bite-sized: pair each meal type with a specific subject to automate your learning stack.",
        motivation: `🎯 Streak level ${currentStreak}! Your lunchtime learning is like compound interest - small daily gains, massive yearly growth.`
      },
      evening: {
        notification: "Wind down with active recall - test yourself on today's chemistry concepts using spaced repetition.",
        habitTip: "Evening = reflection time. Review what worked today and set tomorrow's micro-learning intention.",
        motivation: `🌙 ${currentStreak} consecutive days! Your evening ritual is rewiring your brain for long-term retention while you relax.`
      }
    };
    
    setCoachOutput(outputs[anchorId]);
    setIsGenerating(false);
  };

  useEffect(() => {
    generateCoachingAdvice(selectedAnchor);
  }, [selectedAnchor, currentStreak]);

  const adjustStreak = (change: number) => {
    const newStreak = Math.max(0, Math.min(365, currentStreak + change));
    setCurrentStreak(newStreak);
    setMultiplier(Math.round((1 + (newStreak * 0.05)) * 10) / 10);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          AI Learning Coach
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Integrate micro-learning into your daily routines using behavioral science and habit stacking.
          Build consistent study habits that stick.
        </p>
      </div>

      {/* Streak & Multiplier Display */}
      <Card className="border-2 border-academic-blue/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-primary">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Current Streak</h3>
                <p className="text-muted-foreground">Building consistency daily</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-academic-blue">{currentStreak}</div>
              <div className="text-sm text-muted-foreground">days</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Learning Multiplier</span>
              <Badge variant="secondary" className="bg-academic-green text-white">
                {multiplier}x
              </Badge>
            </div>
            <Progress value={(currentStreak / 30) * 100} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Habit Forming</span>
              <span>30 days to automation</span>
            </div>
          </div>

          {/* Streak Controls for Demo */}
          <div className="flex gap-2 mt-4 justify-center">
            <Button size="sm" variant="outline" onClick={() => adjustStreak(-1)}>
              -1 Day
            </Button>
            <Button size="sm" variant="outline" onClick={() => adjustStreak(1)}>
              +1 Day
            </Button>
            <Button size="sm" variant="outline" onClick={() => setCurrentStreak(0)}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Routine Anchor Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Choose Your Learning Anchor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routineAnchors.map((anchor) => (
              <Card
                key={anchor.id}
                className={`cursor-pointer transition-all hover:shadow-card ${
                  selectedAnchor === anchor.id 
                    ? 'ring-2 ring-academic-blue bg-gradient-hero' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setSelectedAnchor(anchor.id)}
              >
                <CardContent className="p-4 text-center space-y-3">
                  <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center ${
                    selectedAnchor === anchor.id 
                      ? 'bg-academic-blue text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {anchor.icon}
                  </div>
                  <h3 className="font-semibold">{anchor.name}</h3>
                  <p className="text-sm text-muted-foreground">{anchor.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {anchor.timeOfDay}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Coach Output */}
      <Card className="border-2 border-academic-green/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            AI Coach Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isGenerating ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-academic-blue mx-auto mb-4"></div>
              <p className="text-muted-foreground">Analyzing your routine and generating personalized advice...</p>
            </div>
          ) : coachOutput ? (
            <div className="space-y-4">
              {/* Notification */}
              <div className="p-4 rounded-lg bg-info-blue/10 border border-info-blue/20">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-info-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-info-blue mb-1">Smart Notification</h4>
                    <p className="text-sm">{coachOutput.notification}</p>
                  </div>
                </div>
              </div>

              {/* Habit Tip */}
              <div className="p-4 rounded-lg bg-academic-green/10 border border-academic-green/20">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-academic-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-academic-green mb-1">Habit Optimization Tip</h4>
                    <p className="text-sm">{coachOutput.habitTip}</p>
                  </div>
                </div>
              </div>

              {/* Motivation */}
              <div className="p-4 rounded-lg bg-academic-purple/10 border border-academic-purple/20">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-academic-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-academic-purple mb-1">Motivational Boost</h4>
                    <p className="text-sm">{coachOutput.motivation}</p>
                  </div>
                </div>
              </div>

              {/* JSON Output Display */}
              <details className="mt-6">
                <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                  View Raw JSON Output
                </summary>
                <pre className="mt-2 p-3 bg-muted rounded-lg text-xs overflow-x-auto">
{JSON.stringify(coachOutput, null, 2)}
                </pre>
              </details>
            </div>
          ) : null}

          <Button 
            onClick={() => generateCoachingAdvice(selectedAnchor)}
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? 'Generating...' : 'Get New Coaching Advice'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AILearningCoach;