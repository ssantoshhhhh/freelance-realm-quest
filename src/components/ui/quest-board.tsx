import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Coins, Star, Zap, Palette, Code, MessageCircle, TrendingUp } from "lucide-react";

const questData = [
  {
    id: 1,
    title: "Design a Modern E-commerce Landing Page",
    client: "TechStore Inc.",
    description: "Create a sleek, conversion-focused landing page for our new product line. Must be responsive and include animations.",
    reward: 1200,
    timeLimit: "5 days",
    difficulty: "Intermediate",
    xpReward: 150,
    skillType: "creativity",
    skillIcon: Palette,
    tags: ["UI/UX", "Web Design", "Figma"],
    rating: 4.8
  },
  {
    id: 2,
    title: "Build React Component Library",
    client: "StartupLabs",
    description: "Develop a reusable component library with TypeScript, Storybook documentation, and comprehensive testing.",
    reward: 2500,
    timeLimit: "2 weeks",
    difficulty: "Advanced",
    xpReward: 300,
    skillType: "logic",
    skillIcon: Code,
    tags: ["React", "TypeScript", "Storybook"],
    rating: 4.9
  },
  {
    id: 3,
    title: "Content Strategy for SaaS Platform",
    client: "CloudSync",
    description: "Create comprehensive content strategy including blog posts, social media, and email campaigns for B2B SaaS.",
    reward: 800,
    timeLimit: "1 week",
    difficulty: "Beginner",
    xpReward: 100,
    skillType: "communication",
    skillIcon: MessageCircle,
    tags: ["Content Writing", "SEO", "Marketing"],
    rating: 4.7
  }
];

const difficultyColors = {
  "Beginner": "bg-success/20 text-success border-success/30",
  "Intermediate": "bg-warning/20 text-warning border-warning/30",
  "Advanced": "bg-destructive/20 text-destructive border-destructive/30"
};

const skillColors = {
  "creativity": "bg-primary/20 text-primary",
  "logic": "bg-secondary/20 text-secondary",
  "communication": "bg-accent/20 text-accent"
};

export const QuestBoard = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Available <span className="text-primary">Quests</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your adventure. Each quest completed strengthens your skills and earns valuable rewards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {questData.map((quest) => {
            const SkillIcon = quest.skillIcon;
            return (
              <Card key={quest.id} className="quest-card group">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${skillColors[quest.skillType]}`}>
                      <SkillIcon className="w-6 h-6" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={difficultyColors[quest.difficulty]}
                    >
                      {quest.difficulty}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {quest.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Posted by <span className="text-accent font-medium">{quest.client}</span>
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="text-sm font-medium">{quest.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">Client Rating</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {quest.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {quest.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm">
                      <Coins className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-accent">${quest.reward}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{quest.timeLimit}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">+{quest.xpReward} XP Reward</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full magic-glow">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Accept Quest
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary">
            View All Quests
          </Button>
        </div>
      </div>
    </section>
  );
};