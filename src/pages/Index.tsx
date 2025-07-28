import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MovieGrid } from "@/components/MovieGrid";
import { StatsSection } from "@/components/StatsSection";
import { Movie } from "@/components/MovieCard";
import { mockMovies, trendingMovies, popularSeries, recentMovies } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [movies, setMovies] = useState<Movie[]>(mockMovies);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const handleMovieStatusChange = (movieId: number, status: Movie['status']) => {
    setMovies(prevMovies => 
      prevMovies.map(movie => 
        movie.id === movieId ? { ...movie, status } : movie
      )
    );
    
    const statusLabels = {
      watched: 'assistido',
      watching: 'assistindo',
      watchlist: 'lista de desejos'
    };
    
    if (status) {
      toast({
        title: "Status atualizado!",
        description: `Item marcado como ${statusLabels[status]}.`,
      });
    }
  };

  const filteredMovies = useMemo(() => {
    if (!searchQuery) return movies;
    return movies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [movies, searchQuery]);

  const getContentByTab = () => {
    switch (activeTab) {
      case 'trending':
        return (
          <div className="container mx-auto px-4 py-8">
            <StatsSection movies={movies} />
            <MovieGrid 
              movies={trendingMovies} 
              title="🔥 Em Alta Agora"
              onMovieStatusChange={handleMovieStatusChange}
              showViewToggle
            />
            <div className="mt-12">
              <MovieGrid 
                movies={popularSeries} 
                title="📺 Séries Populares"
                onMovieStatusChange={handleMovieStatusChange}
              />
            </div>
          </div>
        );
      
      case 'watchlist':
        const watchlistItems = movies.filter(m => m.status === 'watchlist' || m.status === 'watching' || m.status === 'watched');
        return (
          <div className="container mx-auto px-4 py-8">
            <StatsSection movies={movies} />
            <MovieGrid 
              movies={watchlistItems} 
              title="📋 Minha Lista"
              onMovieStatusChange={handleMovieStatusChange}
              showViewToggle
            />
          </div>
        );
      
      default:
        return (
          <>
            <Hero />
            <div className="container mx-auto px-4 py-8">
              <StatsSection movies={movies} />
              
              {searchQuery ? (
                <MovieGrid 
                  movies={filteredMovies} 
                  title={`Resultados para "${searchQuery}"`}
                  onMovieStatusChange={handleMovieStatusChange}
                  showViewToggle
                />
              ) : (
                <div className="space-y-12">
                  <MovieGrid 
                    movies={trendingMovies} 
                    title="🔥 Em Alta"
                    onMovieStatusChange={handleMovieStatusChange}
                  />
                  
                  <MovieGrid 
                    movies={recentMovies} 
                    title="🎬 Filmes Recentes"
                    onMovieStatusChange={handleMovieStatusChange}
                  />
                  
                  <MovieGrid 
                    movies={popularSeries} 
                    title="📺 Séries Populares"
                    onMovieStatusChange={handleMovieStatusChange}
                  />
                </div>
              )}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSearch={setSearchQuery}
      />
      {getContentByTab()}
    </div>
  );
};

export default Index;
