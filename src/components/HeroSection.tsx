import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tracking.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjciLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Kendali Penuh</span>
                <br />
                di Ujung Jari
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                FlexiTrack adalah solusi GPS tracking yang memberdayakan bisnis untuk mengambil keputusan lebih cepat dan cerdas berdasarkan data kendaraan real-time.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="font-semibold text-success">50% Waktu Respons Lebih Cepat</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">30% Penghematan Biaya</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Mulai Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-primary" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Lihat Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Dipercaya oleh 500+ perusahaan di Indonesia</p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>✓ Logistics</span>
                <span>✓ Construction</span>
                <span>✓ Plantation</span>
                <span>✓ Fleet Rental</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="FlexiTrack GPS Tracking Dashboard"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-background rounded-xl p-4 shadow-elegant animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Live Tracking</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Real-time Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;