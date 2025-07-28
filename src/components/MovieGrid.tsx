import { MovieCard, Movie } from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import { useState } from "react";

interface MovieGridProps {
  movies: Movie[];
  title?: string;
  onMovieStatusChange?: (movieId: number, status: Movie['status']) => void;
  showViewToggle?: boolean;
}

export function MovieGrid({ 
  movies, 
  title, 
  onMovieStatusChange,
  showViewToggle = false 
}: MovieGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <List className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Nenhum item encontrado</h3>
          <p className="text-muted-foreground">
            Adicione filmes e séries à sua lista para vê-los aqui.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {title && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {showViewToggle && (
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'hero' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'hero' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      )}

      <div className={
        viewMode === 'grid' 
          ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          : "space-y-4"
      }>
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <MovieCard 
              movie={movie} 
              onStatusChange={onMovieStatusChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}