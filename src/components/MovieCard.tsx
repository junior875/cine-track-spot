import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Check, Eye, Clock } from "lucide-react";
import { useState } from "react";

export interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  rating: number;
  genre: string[];
  type: 'movie' | 'series';
  status?: 'watched' | 'watching' | 'watchlist';
}

interface MovieCardProps {
  movie: Movie;
  onStatusChange?: (movieId: number, status: Movie['status']) => void;
}

export function MovieCard({ movie, onStatusChange }: MovieCardProps) {
  const [status, setStatus] = useState<Movie['status']>(movie.status);
  const [isHovered, setIsHovered] = useState(false);

  const handleStatusChange = (newStatus: Movie['status']) => {
    setStatus(newStatus);
    onStatusChange?.(movie.id, newStatus);
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'watched':
        return <Check className="w-4 h-4" />;
      case 'watching':
        return <Eye className="w-4 h-4" />;
      case 'watchlist':
        return <Clock className="w-4 h-4" />;
      default:
        return <Plus className="w-4 h-4" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'watched':
        return 'bg-green-600/20 text-green-400 border-green-400/20';
      case 'watching':
        return 'bg-blue-600/20 text-blue-400 border-blue-400/20';
      case 'watchlist':
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-400/20';
      default:
        return 'bg-secondary/20 text-muted-foreground border-border';
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-card border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status badge */}
        <div className="absolute top-2 right-2">
          <Badge className={`${getStatusColor()} border backdrop-blur-sm`}>
            {getStatusIcon()}
          </Badge>
        </div>

        {/* Type badge */}
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-background/80 text-foreground backdrop-blur-sm">
            {movie.type === 'movie' ? 'Filme' : 'Série'}
          </Badge>
        </div>

        {/* Action buttons overlay */}
        <div className={`absolute inset-0 flex items-end justify-center p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex gap-2">
            <Button
              variant="cinema"
              size="sm"
              onClick={() => handleStatusChange(status === 'watched' ? undefined : 'watched')}
            >
              <Check className="w-4 h-4" />
              Assistido
            </Button>
            <Button
              variant="cinema"
              size="sm"
              onClick={() => handleStatusChange(status === 'watchlist' ? undefined : 'watchlist')}
            >
              <Plus className="w-4 h-4" />
              Lista
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{movie.year}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium text-foreground">{movie.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {movie.genre.slice(0, 2).map((g) => (
            <Badge
              key={g}
              variant="outline"
              className="text-xs border-primary/20 text-muted-foreground"
            >
              {g}
            </Badge>
          ))}
          {movie.genre.length > 2 && (
            <Badge variant="outline" className="text-xs border-primary/20 text-muted-foreground">
              +{movie.genre.length - 2}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}