import { Movie } from "@/components/MovieCard";

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Duna: Parte Dois",
    year: 2024,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    rating: 8.7,
    genre: ["Ficção Científica", "Drama", "Aventura"],
    type: "movie",
    status: "watched"
  },
  {
    id: 2,
    title: "The Last of Us",
    year: 2023,
    poster: "https://images.unsplash.com/photo-1489599363986-ac10b2bf25b6?w=400&h=600&fit=crop",
    rating: 9.1,
    genre: ["Drama", "Terror", "Thriller"],
    type: "series",
    status: "watching"
  },
  {
    id: 3,
    title: "Oppenheimer",
    year: 2023,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    rating: 8.4,
    genre: ["Biografia", "Drama", "História"],
    type: "movie",
    status: "watchlist"
  },
  {
    id: 4,
    title: "House of the Dragon",
    year: 2022,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    rating: 8.6,
    genre: ["Fantasia", "Drama", "Ação"],
    type: "series"
  },
  {
    id: 5,
    title: "John Wick 4",
    year: 2023,
    poster: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
    rating: 7.9,
    genre: ["Ação", "Crime", "Thriller"],
    type: "movie"
  },
  {
    id: 6,
    title: "Wednesday",
    year: 2022,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    rating: 8.2,
    genre: ["Comédia", "Crime", "Família"],
    type: "series",
    status: "watched"
  },
  {
    id: 7,
    title: "Top Gun: Maverick",
    year: 2022,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    rating: 8.3,
    genre: ["Ação", "Drama"],
    type: "movie",
    status: "watched"
  },
  {
    id: 8,
    title: "Stranger Things 4",
    year: 2022,
    poster: "https://images.unsplash.com/photo-1489599363986-ac10b2bf25b6?w=400&h=600&fit=crop",
    rating: 8.8,
    genre: ["Drama", "Fantasia", "Terror"],
    type: "series",
    status: "watching"
  },
  {
    id: 9,
    title: "Avatar: O Caminho da Água",
    year: 2022,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    rating: 7.8,
    genre: ["Ficção Científica", "Aventura", "Fantasia"],
    type: "movie"
  },
  {
    id: 10,
    title: "The Bear",
    year: 2022,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    rating: 8.9,
    genre: ["Comédia", "Drama"],
    type: "series",
    status: "watchlist"
  },
  {
    id: 11,
    title: "Tudo em Todo Lugar ao Mesmo Tempo",
    year: 2022,
    poster: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
    rating: 8.1,
    genre: ["Ação", "Aventura", "Comédia"],
    type: "movie",
    status: "watched"
  },
  {
    id: 12,
    title: "Euphoria",
    year: 2019,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    rating: 8.4,
    genre: ["Drama"],
    type: "series"
  }
];

export const trendingMovies = mockMovies.slice(0, 6);
export const popularSeries = mockMovies.filter(m => m.type === 'series').slice(0, 4);
export const recentMovies = mockMovies.filter(m => m.type === 'movie').slice(0, 6);