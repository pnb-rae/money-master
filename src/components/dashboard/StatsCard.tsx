import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: ReactNode;
  variant?: "default" | "growth" | "gold";
}

export const StatsCard = ({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
  variant = "default"
}: StatsCardProps) => {
  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:shadow-soft",
      variant === "growth" && "bg-gradient-to-br from-growth-light/30 to-transparent border-growth/20",
      variant === "gold" && "bg-gradient-to-br from-gold-light/30 to-transparent border-gold/20"
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "p-3 rounded-xl",
          variant === "growth" && "bg-growth/10 text-growth",
          variant === "gold" && "bg-gold/10 text-gold",
          variant === "default" && "bg-primary/10 text-primary"
        )}>
          {icon}
        </div>
        {change && (
          <span className={cn(
            "text-sm font-medium",
            changeType === "positive" && "text-growth",
            changeType === "negative" && "text-destructive",
            changeType === "neutral" && "text-muted-foreground"
          )}>
            {change}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </Card>
  );
};