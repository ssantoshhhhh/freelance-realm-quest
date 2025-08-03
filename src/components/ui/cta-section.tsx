import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sword, Shield, Star, Sparkles, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="quest-card bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 border-primary/20">
            <CardContent className="p-12">
              {/* Floating Elements */}
              <div className="relative mb-8">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute -bottom-4 left-8 w-4 h-4 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                
                <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium border-accent/30 bg-accent/10">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ready to Begin?
                </Badge>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Your <span className="text-primary">Epic Journey</span>
                <br />
                Awaits
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of freelancers who have transformed their careers into thrilling adventures. 
                Every quest completed makes you stronger, every skill learned unlocks new possibilities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="magic-glow bg-primary hover:bg-primary-glow px-8 py-4 text-lg font-semibold">
                  <Sword className="w-5 h-5 mr-2" />
                  Create Your Character
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-secondary/50 hover:border-secondary px-8 py-4 text-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Browse Quests First
                </Button>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/30">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Free to Start</div>
                    <div className="text-xs text-muted-foreground">No setup fees</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Instant XP</div>
                    <div className="text-xs text-muted-foreground">Start earning immediately</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Secure Platform</div>
                    <div className="text-xs text-muted-foreground">Protected payments</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};