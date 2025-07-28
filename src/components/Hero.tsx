import { Button } from "@/components/ui/button";
import { Play, Plus, Star } from "lucide-react";
import heroImage from "@/assets/cinema-hero.jpg";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cinema Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Acompanhe
              </span>
              <br />
              <span className="text-foreground">
                seus filmes
              </span>
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                favoritos
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Organize sua lista de filmes e séries, marque o que já assistiu e descubra 
              novas recomendações personalizadas para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="gap-2 text-lg px-8 py-6">
                <Play className="w-5 h-5" />
                Começar Agora
              </Button>
              <Button variant="cinema" size="lg" className="gap-2 text-lg px-8 py-6">
                <Plus className="w-5 h-5" />
                Criar Lista
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>Avaliado por +10k usuários</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <span className="hidden sm:inline">100% gratuito</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 animate-float">
        <div className="w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl" />
      </div>
      <div className="absolute top-20 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-gradient-accent rounded-full opacity-30 blur-lg" />
      </div>
    </section>
  );
}