import { MapPin, Smartphone, Scissors, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const products = [
    {
      icon: MapPin,
      type: "TO",
      name: "Tracking-Only",
      description: "Solusi basic untuk tracking lokasi real-time dengan fitur monitoring dasar.",
      features: [
        "Real-time GPS tracking",
        "Historical route playback", 
        "Basic reporting",
        "Mobile app access"
      ],
      price: "Mulai dari Rp 299K/bulan",
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      type: "PT", 
      name: "Portable",
      description: "Device portable yang mudah dipindah-pindah untuk kebutuhan tracking fleksibel.",
      features: [
        "Portable GPS device",
        "Long battery life",
        "Waterproof design",
        "Quick installation"
      ],
      price: "Mulai dari Rp 399K/bulan",
      popular: false,
      color: "from-green-500 to-green-600"
    },
    {
      icon: Scissors,
      type: "CO",
      name: "Cut-Off Control", 
      description: "Kontrol penuh dengan fitur remote engine cut-off untuk keamanan maksimal.",
      features: [
        "Remote engine control",
        "Theft prevention",
        "Emergency alerts",
        "Advanced security"
      ],
      price: "Mulai dari Rp 499K/bulan",
      popular: true,
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Star,
      type: "FF",
      name: "Full Feature",
      description: "Paket lengkap dengan semua fitur premium untuk manajemen fleet profesional.",
      features: [
        "All premium features",
        "Advanced analytics",
        "Driver behavior monitoring",
        "Fuel consumption tracking"
      ],
      price: "Mulai dari Rp 699K/bulan",
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilihan <span className="text-primary">Produk FlexiTrack</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Temukan solusi GPS tracking yang tepat sesuai kebutuhan dan budget bisnis Anda.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.type}
              className={`relative bg-card rounded-xl p-6 shadow-elegant hover:shadow-primary transition-all duration-300 hover:-translate-y-2 ${
                product.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    POPULER
                  </span>
                </div>
              )}

              {/* Product Icon */}
              <div className="mb-4">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${product.color} text-white`}>
                  <product.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Product Type */}
              <div className="mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded bg-gradient-to-r ${product.color} text-white`}>
                  {product.type}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-lg font-semibold text-foreground">{product.price}</p>
              </div>

              {/* CTA Button */}
              <Button 
                variant={product.popular ? "cta" : "outline-primary"} 
                className="w-full"
              >
                Pilih Paket
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-subtle rounded-xl">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Tidak yakin produk mana yang tepat?
          </h3>
          <p className="text-muted-foreground mb-4">
            Konsultasi gratis dengan tim ahli kami untuk mendapatkan rekomendasi terbaik.
          </p>
          <Button variant="hero" size="lg">
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;