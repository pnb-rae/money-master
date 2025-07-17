import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  PiggyBank, 
  ChevronRight,
  Shield,
  Brain,
  Zap,
  Users,
  Star,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Index = () => {
  const goals = [
    { name: "Emergency Fund", current: 3200, target: 10000, color: "primary" as const },
    { name: "Vacation Fund", current: 1850, target: 5000, color: "growth" as const },
    { name: "Investment Goal", current: 7500, target: 15000, color: "gold" as const }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="h-4 w-4" />
                  <span>AI-Powered Financial Coaching</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Master Your
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    Money Journey
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Track, manage, and grow your wealth with intelligent insights. 
                  Join thousands who've taken control of their financial future.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">$2.5M+</div>
                  <div className="text-sm text-muted-foreground">Money Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">4.9★</div>
                  <div className="text-sm text-muted-foreground">User Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src={heroImage} 
                alt="MoneyMaster Dashboard" 
                className="rounded-2xl shadow-soft w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Financial Command Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a complete view of your financial health with intuitive dashboards and AI-powered insights.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatsCard
              title="Net Worth"
              value="$47,320"
              change="+12.5%"
              changeType="positive"
              icon={<TrendingUp className="h-5 w-5" />}
              variant="default"
            />
            <StatsCard
              title="Monthly Savings"
              value="$2,850"
              change="+8.2%"
              changeType="positive"
              icon={<PiggyBank className="h-5 w-5" />}
              variant="growth"
            />
            <StatsCard
              title="Investment Returns"
              value="$12,450"
              change="+15.3%"
              changeType="positive"
              icon={<DollarSign className="h-5 w-5" />}
              variant="gold"
            />
            <StatsCard
              title="Goals Progress"
              value="68%"
              change="On Track"
              changeType="positive"
              icon={<Target className="h-5 w-5" />}
              variant="default"
            />
          </div>

          {/* Progress Chart */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProgressChart goals={goals} />
            </div>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">AI Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-growth-light rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="h-4 w-4 text-growth" />
                    <span className="text-sm font-medium text-growth">Smart Suggestion</span>
                  </div>
                  <p className="text-sm text-foreground">
                    You're spending 23% more on dining out this month. Consider meal planning to save $280.
                  </p>
                </div>
                
                <div className="p-4 bg-gold-light rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-4 w-4 text-gold" />
                    <span className="text-sm font-medium text-gold">Achievement</span>
                  </div>
                  <p className="text-sm text-foreground">
                    Congratulations! You've saved 15% more than last month.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and AI guidance to help you achieve financial freedom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-6 w-6" />,
                title: "AI Financial Coach",
                description: "Get personalized advice and insights powered by advanced AI algorithms.",
                color: "primary"
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Smart Goal Setting",
                description: "Set and track financial goals with intelligent progress monitoring.",
                color: "growth"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Bank-Level Security",
                description: "Your data is protected with 256-bit encryption and secure protocols.",
                color: "gold"
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Investment Tracking",
                description: "Monitor your portfolio performance with real-time market data.",
                color: "primary"
              },
              {
                icon: <PiggyBank className="h-6 w-6" />,
                title: "Expense Analytics",
                description: "Understand your spending patterns with detailed breakdowns and trends.",
                color: "growth"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Community Support",
                description: "Connect with like-minded individuals on their financial journey.",
                color: "gold"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 group">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === "growth" ? "bg-growth/10 text-growth" :
                  feature.color === "gold" ? "bg-gold/10 text-gold" : "bg-primary/10 text-primary"
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who've already taken control of their money with MoneyMaster's AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="growth" className="group">
              Get Started Free
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Free forever. No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
