import { Card } from "@/components/ui/card";
import { Movie } from "@/components/MovieCard";
import { TrendingUp, Eye, Clock, Check } from "lucide-react";

interface StatsSectionProps {
  movies: Movie[];
}

export function StatsSection({ movies }: StatsSectionProps) {
  const stats = [
    {
      label: "Total de Filmes",
      value: movies.filter(m => m.type === 'movie').length,
      icon: TrendingUp,
      color: "bg-gradient-primary"
    },
    {
      label: "Séries Acompanhadas", 
      value: movies.filter(m => m.type === 'series').length,
      icon: Eye,
      color: "bg-gradient-accent"
    },
    {
      label: "Na Lista",
      value: movies.filter(m => m.status === 'watchlist').length,
      icon: Clock,
      color: "bg-yellow-600"
    },
    {
      label: "Assistidos",
      value: movies.filter(m => m.status === 'watched').length,
      icon: Check,
      color: "bg-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={stat.label}
            className="p-6 bg-card border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center shadow-glow`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}