import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coffee, Car, Utensils, Moon, Zap, Target, Users, Brain, Calendar } from 'lucide-react';

interface HabitStackingProps {
  onHabitComplete?: (habit: string, streak: number) => void;
  onStudyBuddyRequest?: (routine: string) => void;
  studyData?: any;
}

interface RoutineContext {
  id: string;
  name: string;
  icon: React.ReactNode;
  timeSlot: string;
  studyTypes: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

const routines: RoutineContext[] = [
  {
    id: 'coffee',
    name: 'Coffee Break',
    icon: <Coffee className="w-5 h-5" />,
    timeSlot: '7-10 AM',
    studyTypes: ['flashcards', 'vocabulary', 'quick-review'],
    difficulty: 'easy'
  },
  {
    id: 'commute',
    name: 'Commute',
    icon: <Car className="w-5 h-5" />,
    timeSlot: '8-9 AM, 5-6 PM',
    studyTypes: ['audio-lessons', 'podcasts', 'voice-notes'],
    difficulty: 'medium'
  },
  {
    id: 'lunch',
    name: 'Lunch Break',
    icon: <Utensils className="w-5 h-5" />,
    timeSlot: '12-1 PM',
    studyTypes: ['coding-challenges', 'problem-solving', 'practice-tests'],
    difficulty: 'medium'
  },
  {
    id: 'evening',
    name: 'Evening Wind-down',
    icon: <Moon className="w-5 h-5" />,
    timeSlot: '7-9 PM',
    studyTypes: ['reflection', 'deep-learning', 'concept-mapping'],
    difficulty: 'hard'
  }
];

const HabitStacking: React.FC<HabitStackingProps> = ({
  onHabitComplete,
  onStudyBuddyRequest,
  studyData
}) => {
  const [activeRoutine, setActiveRoutine] = useState('coffee');
  const [streakData, setStreakData] = useState({
    current: 12,
    multiplier: 2.4,
    nextMilestone: 15,
    weeklyGoal: 7
  });
  const [completedToday, setCompletedToday] = useState<string[]>(['coffee']);

  const calculateReward = (streak: number) => {
    return Math.floor(streak / 5) * 0.2 + 1;
  };

  const handleRoutineComplete = (routineId: string) => {
    if (!completedToday.includes(routineId)) {
      setCompletedToday([...completedToday, routineId]);
      const newStreak = streakData.current + 1;
      const newMultiplier = calculateReward(newStreak);
      
      setStreakData(prev => ({
        ...prev,
        current: newStreak,
        multiplier: newMultiplier
      }));

      onHabitComplete?.(routineId, newStreak);
    }
  };

  const requestStudyBuddy = (routine: string) => {
    onStudyBuddyRequest?.(routine);
  };

  const getContextualSuggestion = (routineId: string) => {
    const suggestions = {
      coffee: "Perfect focus time! Try spaced repetition flashcards while your mind is fresh.",
      commute: "Hands-free learning opportunity - switch to audio content or voice recordings.",
      lunch: "Energy boost time! Tackle that challenging coding problem you bookmarked.",
      evening: "Reflection mode activated - review today's learnings and plan tomorrow's goals."
    };
    return suggestions[routineId as keyof typeof suggestions];
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-2 border-academic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6" />
            Habit Stacking System
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeRoutine} onValueChange={setActiveRoutine}>
            <TabsList className="grid w-full grid-cols-4">
              {routines.map((routine) => (
                <TabsTrigger key={routine.id} value={routine.id} className="flex flex-col gap-1 h-auto py-2">
                  {routine.icon}
                  <span className="text-xs">{routine.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {routines.map((routine) => (
              <TabsContent key={routine.id} value={routine.id} className="space-y-4">
                <Card className={`border-2 ${completedToday.includes(routine.id) ? 'border-academic-green bg-academic-green/5' : 'border-muted'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-academic-blue text-white">
                          {routine.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{routine.name}</h3>
                          <p className="text-sm text-muted-foreground">{routine.timeSlot}</p>
                        </div>
                      </div>
                      <Badge variant={completedToday.includes(routine.id) ? "default" : "outline"}>
                        {completedToday.includes(routine.id) ? 'Completed' : 'Pending'}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-info-blue/10 rounded-lg border border-info-blue/20">
                        <p className="text-sm">{getContextualSuggestion(routine.id)}</p>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {routine.studyTypes.map((type) => (
                          <Badge key={type} variant="secondary" className="text-xs">
                            {type.replace('-', ' ')}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleRoutineComplete(routine.id)}
                          disabled={completedToday.includes(routine.id)}
                          className="flex-1"
                        >
                          {completedToday.includes(routine.id) ? 'Completed!' : 'Mark Complete'}
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => requestStudyBuddy(routine.id)}
                          className="flex items-center gap-2"
                        >
                          <Users className="w-4 h-4" />
                          Find Buddy
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Streak & Progress Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-academic-blue">{streakData.current}</div>
            <p className="text-sm text-muted-foreground">Day Streak</p>
            <div className="mt-2">
              <Zap className="w-4 h-4 mx-auto text-warning-orange" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-academic-green">{streakData.multiplier}x</div>
            <p className="text-sm text-muted-foreground">Multiplier</p>
            <div className="mt-2">
              <Target className="w-4 h-4 mx-auto text-academic-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-academic-purple">{completedToday.length}/4</div>
            <p className="text-sm text-muted-foreground">Today's Progress</p>
            <div className="mt-2">
              <Calendar className="w-4 h-4 mx-auto text-academic-purple" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress to Next Milestone */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Next Milestone</span>
            <span className="text-sm text-muted-foreground">
              {streakData.nextMilestone - streakData.current} days to go
            </span>
          </div>
          <Progress 
            value={(streakData.current / streakData.nextMilestone) * 100} 
            className="h-2"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Reach {streakData.nextMilestone} days for {calculateReward(streakData.nextMilestone)}x multiplier
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HabitStacking;