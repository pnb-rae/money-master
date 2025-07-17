import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Goal {
  name: string;
  current: number;
  target: number;
  color: "primary" | "growth" | "gold";
}

interface ProgressChartProps {
  goals: Goal[];
}

export const ProgressChart = ({ goals }: ProgressChartProps) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Goal Progress</h3>
      <div className="space-y-6">
        {goals.map((goal, index) => {
          const percentage = Math.min((goal.current / goal.target) * 100, 100);
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{goal.name}</span>
                <span className="text-sm text-muted-foreground">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <div className="relative">
                <Progress 
                  value={percentage} 
                  className={`h-3 ${
                    goal.color === "growth" ? "bg-growth-light" :
                    goal.color === "gold" ? "bg-gold-light" : "bg-primary/10"
                  }`}
                />
                <div 
                  className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-1000 ease-out ${
                    goal.color === "growth" ? "bg-gradient-growth" :
                    goal.color === "gold" ? "bg-gradient-gold" : "bg-gradient-primary"
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${
                  goal.color === "growth" ? "text-growth" :
                  goal.color === "gold" ? "text-gold" : "text-primary"
                }`}>
                  {percentage.toFixed(1)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};