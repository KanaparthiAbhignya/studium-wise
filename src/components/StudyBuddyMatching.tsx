import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, MessageCircle, Target, Clock, Zap } from 'lucide-react';

interface StudyBuddy {
  id: string;
  name: string;
  avatar: string;
  level: number;
  currentStreak: number;
  studyFocus: string[];
  preferredTime: string;
  isOnline: boolean;
}

interface StudyBuddyMatchingProps {
  requestedRoutine?: string;
  onBuddySelected?: (buddy: StudyBuddy) => void;
}

const mockBuddies: StudyBuddy[] = [
  {
    id: '1',
    name: 'Alex Chen',
    avatar: '/placeholder.svg',
    level: 12,
    currentStreak: 8,
    studyFocus: ['JavaScript', 'React', 'Computer Science'],
    preferredTime: 'Morning (7-10 AM)',
    isOnline: true
  },
  {
    id: '2',
    name: 'Maya Patel',
    avatar: '/placeholder.svg',
    level: 15,
    currentStreak: 23,
    studyFocus: ['Mathematics', 'Data Science', 'Python'],
    preferredTime: 'Evening (7-9 PM)',
    isOnline: true
  },
  {
    id: '3',
    name: 'Jordan Kim',
    avatar: '/placeholder.svg',
    level: 9,
    currentStreak: 5,
    studyFocus: ['Language Learning', 'Spanish', 'Literature'],
    preferredTime: 'Lunch Break (12-1 PM)',
    isOnline: false
  }
];

const StudyBuddyMatching: React.FC<StudyBuddyMatchingProps> = ({
  requestedRoutine,
  onBuddySelected
}) => {
  const [selectedBuddy, setSelectedBuddy] = useState<string | null>(null);

  const handleConnect = (buddy: StudyBuddy) => {
    setSelectedBuddy(buddy.id);
    onBuddySelected?.(buddy);
  };

  const getRoutineCompatibility = (buddy: StudyBuddy, routine?: string) => {
    if (!routine) return 'neutral';
    
    const timeMatches = {
      coffee: buddy.preferredTime.includes('Morning'),
      lunch: buddy.preferredTime.includes('Lunch'),
      evening: buddy.preferredTime.includes('Evening'),
      commute: true // Flexible timing
    };

    return timeMatches[routine as keyof typeof timeMatches] ? 'high' : 'medium';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6" />
            Study Buddy Matching
            {requestedRoutine && (
              <Badge variant="outline">
                For {requestedRoutine} routine
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockBuddies.map((buddy) => {
            const compatibility = getCompatibilityScore(buddy, requestedRoutine);
            const isSelected = selectedBuddy === buddy.id;
            
            return (
              <Card 
                key={buddy.id}
                className={`border-2 transition-all ${
                  isSelected 
                    ? 'border-academic-blue bg-academic-blue/5' 
                    : 'border-muted hover:border-academic-blue/50'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={buddy.avatar} alt={buddy.name} />
                          <AvatarFallback>{buddy.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        {buddy.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-academic-green rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="font-semibold">{buddy.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Level {buddy.level}
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            {buddy.currentStreak} day streak
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {buddy.preferredTime}
                          </span>
                        </div>
                        
                        <div className="flex gap-1 flex-wrap">
                          {buddy.studyFocus.slice(0, 3).map((focus) => (
                            <Badge key={focus} variant="secondary" className="text-xs">
                              {focus}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={compatibility.level === 'high' ? 'default' : 'outline'}
                        className={
                          compatibility.level === 'high' 
                            ? 'bg-academic-green text-white' 
                            : compatibility.level === 'medium'
                            ? 'bg-warning-orange text-white'
                            : ''
                        }
                      >
                        {compatibility.score}% match
                      </Badge>
                      
                      <Button
                        onClick={() => handleConnect(buddy)}
                        disabled={!buddy.isOnline}
                        variant={isSelected ? "default" : "outline"}
                        size="sm"
                      >
                        {isSelected ? (
                          <>
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Connected
                          </>
                        ) : (
                          'Connect'
                        )}
                      </Button>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 p-3 bg-academic-blue/10 rounded-lg border border-academic-blue/20">
                      <p className="text-sm">
                        🎉 You're now connected with {buddy.name}! Start a study session or send them a message to coordinate your {requestedRoutine || 'study'} routine.
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">
                          Start Session
                        </Button>
                        <Button size="sm" variant="outline">
                          Send Message
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to calculate compatibility
const getCompatibilityScore = (buddy: StudyBuddy, routine?: string) => {
  let score = 70; // Base compatibility
  
  // Time alignment bonus
  if (routine) {
    const timeMatches = {
      coffee: buddy.preferredTime.includes('Morning'),
      lunch: buddy.preferredTime.includes('Lunch'),
      evening: buddy.preferredTime.includes('Evening'),
      commute: true
    };
    
    if (timeMatches[routine as keyof typeof timeMatches]) {
      score += 20;
    }
  }
  
  // Activity level bonus
  if (buddy.currentStreak > 10) score += 10;
  if (buddy.isOnline) score += 5;
  
  const level = score >= 85 ? 'high' : score >= 70 ? 'medium' : 'low';
  
  return { score: Math.min(score, 98), level };
};

export default StudyBuddyMatching;