import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  Gamepad2, 
  TrendingUp, 
  Users, 
  Trophy, 
  Zap, 
  Target,
  Shield,
  Coins
} from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "RPG Character System",
    description: "Transform your professional profile into an RPG character with stats, levels, and visual progression that showcases your skills.",
    badge: "Core Feature"
  },
  {
    icon: TrendingUp,
    title: "XP & Skill Progression", 
    description: "Earn experience points for every project completed. Watch your skills grow and unlock new abilities as you level up.",
    badge: "Progression"
  },
  {
    icon: Target,
    title: "Quest-Style Projects",
    description: "Browse freelance jobs presented as exciting quests with clear objectives, rewards, and difficulty ratings.",
    badge: "Gamified Jobs"
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Unlock badges, perks, and special rewards as you hit milestones and complete challenging quests.",
    badge: "Rewards"
  },
  {
    icon: Users,
    title: "Guild Communities",
    description: "Join forces with other freelancers in specialized guilds. Share knowledge, collaborate, and take on group quests.",
    badge: "Social"
  },
  {
    icon: Shield,
    title: "Reputation Shield",
    description: "Build an unbreakable reputation through consistent quality work. Your character's integrity becomes your strongest asset.",
    badge: "Trust"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
            <Zap className="w-4 h-4 mr-2" />
            Platform Features
          </Badge>
          <h2 className="text-4xl font-display font-bold mb-4">
            Why Choose <span className="text-primary">SkillQuest</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience freelancing like never before. Our gamified platform turns professional growth 
            into an engaging adventure that motivates and rewards your progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="quest-card group bg-card/50 backdrop-blur-sm border-primary/10"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Active Freelancers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">500K+</div>
            <div className="text-sm text-muted-foreground">Quests Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">$2M+</div>
            <div className="text-sm text-muted-foreground">Rewards Earned</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};