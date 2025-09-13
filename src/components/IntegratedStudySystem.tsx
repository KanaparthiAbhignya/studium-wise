import React, { useState } from 'react';
import HabitStacking from './HabitStacking';
import StudyBuddyMatching from './StudyBuddyMatching';
import AILearningCoach from './AILearningCoach';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Users, Target, TrendingUp, Settings } from 'lucide-react';

interface StudySystemProps {
  userId?: string;
  initialMode?: 'habits' | 'buddy' | 'coach' | 'analytics';
}

const IntegratedStudySystem: React.FC<StudySystemProps> = ({
  userId,
  initialMode = 'habits'
}) => {
  const [activeMode, setActiveMode] = useState(initialMode);
  const [systemData, setSystemData] = useState({
    totalStreak: 23,
    activeBuddies: 2,
    weeklyGoals: 4,
    completionRate: 87
  });

  const [requestedBuddyRoutine, setRequestedBuddyRoutine] = useState<string | null>(null);

  const handleHabitComplete = (habit: string, streak: number) => {
    setSystemData(prev => ({
      ...prev,
      totalStreak: Math.max(prev.totalStreak, streak)
    }));
    
    // Trigger cross-system notifications
    console.log(`Habit completed: ${habit}, new streak: ${streak}`);
  };

  const handleStudyBuddyRequest = (routine: string) => {
    setRequestedBuddyRoutine(routine);
    setActiveMode('buddy');
  };

  const handleBuddySelected = (buddy: any) => {
    setSystemData(prev => ({
      ...prev,
      activeBuddies: prev.activeBuddies + 1
    }));
    
    // Could trigger notifications, sync calendars, etc.
    console.log(`Connected with buddy: ${buddy.name}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* System Overview Dashboard */}
      <Card className="bg-gradient-hero border-2 border-academic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Integrated Learning System
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-academic-blue">{systemData.totalStreak}</div>
              <p className="text-sm text-muted-foreground">Total Streak</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-academic-green">{systemData.activeBuddies}</div>
              <p className="text-sm text-muted-foreground">Study Buddies</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-academic-purple">{systemData.weeklyGoals}</div>
              <p className="text-sm text-muted-foreground">Weekly Goals</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning-orange">{systemData.completionRate}%</div>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main System Navigation */}
      <Tabs value={activeMode} onValueChange={(value) => setActiveMode(value as any)}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="habits" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Habit Stacking
          </TabsTrigger>
          <TabsTrigger value="buddy" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Study Buddies
            {systemData.activeBuddies > 0 && (
              <Badge variant="secondary" className="ml-1 text-xs">
                {systemData.activeBuddies}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="coach" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            AI Coach
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="habits" className="space-y-6">
          <HabitStacking
            onHabitComplete={handleHabitComplete}
            onStudyBuddyRequest={handleStudyBuddyRequest}
            studyData={systemData}
          />
        </TabsContent>

        <TabsContent value="buddy" className="space-y-6">
          <StudyBuddyMatching
            requestedRoutine={requestedBuddyRoutine}
            onBuddySelected={handleBuddySelected}
          />
        </TabsContent>

        <TabsContent value="coach" className="space-y-6">
          <AILearningCoach />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Learning Analytics Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Settings className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced analytics to track your learning progress, habit effectiveness, and buddy collaboration.
                </p>
                <Button variant="outline">
                  Request Early Access
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Cross-System Notifications */}
      {requestedBuddyRoutine && activeMode === 'buddy' && (
        <Card className="border-academic-green bg-academic-green/5">
          <CardContent className="p-4">
            <p className="text-sm">
              🎯 Finding study buddies for your <strong>{requestedBuddyRoutine}</strong> routine...
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default IntegratedStudySystem;