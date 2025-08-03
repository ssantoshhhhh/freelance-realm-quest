import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sword, Shield, Zap, Star, Users, Trophy } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-magic-sparkle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary-glow rounded-full animate-magic-sparkle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-secondary-glow rounded-full animate-magic-sparkle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-accent rounded-full animate-magic-sparkle" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium border-primary/30 bg-primary/10 animate-float">
            <Star className="w-4 h-4 mr-2" />
            Begin Your Freelance Adventure
          </Badge>
          
          <h1 className="rpg-title mb-6 leading-tight">
            Level Up Your
            <br />
            <span className="text-accent">Freelance Career</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your skills into power. Complete quests, gain XP, and unlock your potential in the ultimate 
            gamified freelance platform where every project makes you stronger.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="magic-glow bg-primary hover:bg-primary-glow px-8 py-3 text-lg font-semibold">
              <Sword className="w-5 h-5 mr-2" />
              Start Your Quest
            </Button>
            <Button variant="outline" size="lg" className="border-secondary/50 hover:border-secondary px-8 py-3 text-lg">
              <Shield className="w-5 h-5 mr-2" />
              Browse Quests
            </Button>
          </div>
        </div>

        {/* Character Stats Preview */}
        <div className="max-w-3xl mx-auto">
          <div className="quest-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Your Character Stats
              </h3>
              <Badge variant="outline" className="bg-accent/20 border-accent/50 text-accent-foreground">
                Level 12 Freelancer
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Creativity Skill */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary" />
                    </div>
                    Creativity
                  </span>
                  <span className="text-xs text-muted-foreground">850/1000 XP</span>
                </div>
                <Progress value={85} className="xp-bar h-3" />
              </div>

              {/* Logic Skill */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-secondary" />
                    </div>
                    Logic
                  </span>
                  <span className="text-xs text-muted-foreground">720/1000 XP</span>
                </div>
                <Progress value={72} className="h-3" />
              </div>

              {/* Communication Skill */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    Communication
                  </span>
                  <span className="text-xs text-muted-foreground">950/1000 XP</span>
                </div>
                <Progress value={95} className="h-3" />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-accent" />
                <span>23 Quests Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span>4.9 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};