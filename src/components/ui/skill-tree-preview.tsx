import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Palette, 
  Code, 
  MessageCircle, 
  Target, 
  Zap, 
  Star,
  Lock,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

const skillNodes = [
  // Row 1 - Core Skills
  { id: 1, name: "Creativity", icon: Palette, level: 12, maxLevel: 20, unlocked: true, xp: 850, maxXp: 1000, x: 20, y: 20 },
  { id: 2, name: "Logic", icon: Code, level: 10, maxLevel: 20, unlocked: true, xp: 720, maxXp: 1000, x: 50, y: 20 },
  { id: 3, name: "Communication", icon: MessageCircle, level: 15, maxLevel: 20, unlocked: true, xp: 950, maxXp: 1000, x: 80, y: 20 },
  
  // Row 2 - Advanced Skills
  { id: 4, name: "Strategy", icon: Target, level: 8, maxLevel: 15, unlocked: true, xp: 600, maxXp: 750, x: 35, y: 50 },
  { id: 5, name: "Innovation", icon: Zap, level: 6, maxLevel: 15, unlocked: true, xp: 400, maxXp: 750, x: 65, y: 50 },
  
  // Row 3 - Master Skills
  { id: 6, name: "Leadership", icon: Star, level: 0, maxLevel: 10, unlocked: false, xp: 0, maxXp: 500, x: 35, y: 80 },
  { id: 7, name: "Mastery", icon: TrendingUp, level: 0, maxLevel: 10, unlocked: false, xp: 0, maxXp: 500, x: 65, y: 80 }
];

const connections = [
  { from: 1, to: 4 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 5 },
  { from: 4, to: 6 },
  { from: 5, to: 7 }
];

export const SkillTreePreview = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Your <span className="text-primary">Skill Tree</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch your abilities grow with every quest completed. Unlock new perks and showcase your expertise.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="quest-card">
            {/* Skill Tree Visualization */}
            <div className="relative h-96 mb-8">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {connections.map((connection, index) => {
                  const fromNode = skillNodes.find(n => n.id === connection.from);
                  const toNode = skillNodes.find(n => n.id === connection.to);
                  
                  if (!fromNode || !toNode) return null;
                  
                  const isActive = fromNode.unlocked && toNode.unlocked;
                  
                  return (
                    <line
                      key={index}
                      x1={`${fromNode.x}%`}
                      y1={`${fromNode.y}%`}
                      x2={`${toNode.x}%`}
                      y2={`${toNode.y}%`}
                      stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth="2"
                      opacity={isActive ? "0.6" : "0.3"}
                    />
                  );
                })}
              </svg>

              {/* Skill Nodes */}
              {skillNodes.map((skill) => {
                const SkillIcon = skill.icon;
                const progress = (skill.xp / skill.maxXp) * 100;
                
                return (
                  <div
                    key={skill.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                  >
                    <div className={`
                      skill-tree-node relative
                      ${skill.unlocked ? 'unlocked' : ''}
                    `}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {skill.unlocked ? (
                          <SkillIcon className="w-6 h-6" />
                        ) : (
                          <Lock className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      
                      {skill.unlocked && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-accent-foreground">
                            {skill.level}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 bg-card border border-primary/20 rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <SkillIcon className="w-5 h-5" />
                        <h4 className="font-semibold">{skill.name}</h4>
                        {skill.unlocked ? (
                          <CheckCircle2 className="w-4 h-4 text-success ml-auto" />
                        ) : (
                          <Lock className="w-4 h-4 text-muted-foreground ml-auto" />
                        )}
                      </div>
                      
                      {skill.unlocked ? (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Level {skill.level}/{skill.maxLevel}</span>
                            <span>{skill.xp}/{skill.maxXp} XP</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Complete more quests to unlock this skill
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skill Stats */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">7</div>
                <div className="text-sm text-muted-foreground">Skills Unlocked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">45</div>
                <div className="text-sm text-muted-foreground">Total Levels</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">2,520</div>
                <div className="text-sm text-muted-foreground">Total XP Earned</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="magic-glow">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Full Skill Tree
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};