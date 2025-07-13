import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Shield, Settings, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "TO",
      title: "Tracking-Only (TO)",
      description: "Pantau pergerakan kendaraan secara real-time dengan solusi tracking dasar yang andal.",
      features: ["Real-time GPS tracking", "Historical route data", "Basic alerts", "Mobile app access"],
      price: "Mulai dari Rp 300.000",
      icon: MapPin,
      color: "bg-primary/10 text-primary"
    },
    {
      id: "PT",
      title: "Portable (PT)",
      description: "Solusi tracking portabel yang fleksibel untuk berbagai jenis kendaraan dan aset mobile.",
      features: ["Portable device", "Long battery life", "Magnetic mount", "Waterproof design"],
      price: "Mulai dari Rp 450.000",
      icon: Zap,
      color: "bg-secondary/10 text-secondary"
    },
    {
      id: "CO",
      title: "Cut-Off Control (CO)",
      description: "Kontrol penuh dengan kemampuan memutus mesin kendaraan dari jarak jauh untuk keamanan maksimal.",
      features: ["Remote engine cut-off", "Fuel monitoring", "Advanced security", "Panic button"],
      price: "Mulai dari Rp 600.000",
      icon: Shield,
      color: "bg-destructive/10 text-destructive"
    },
    {
      id: "FF",
      title: "Full Feature (FF)",
      description: "Solusi lengkap dengan semua fitur premium untuk manajemen fleet yang komprehensif.",
      features: ["All tracking features", "Maintenance alerts", "Fuel analytics", "Driver behavior analysis"],
      price: "Mulai dari Rp 850.000",
      icon: Settings,
      color: "bg-success/10 text-success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              FlexiTrack <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pilih solusi GPS tracking yang tepat untuk kebutuhan operasional Anda. Dari tracking dasar hingga kontrol penuh kendaraan.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="border-border bg-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="text-primary border-primary">
                        {product.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-foreground">{product.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Fitur Utama:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground">Harga</p>
                        <p className="text-lg font-semibold text-primary">{product.price}</p>
                      </div>
                      <Button variant="outline" className="group">
                        Pelajari Lebih Lanjut
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tidak Yakin Produk Mana yang Tepat?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tim ahli kami siap membantu Anda memilih solusi FlexiTrack yang sesuai dengan kebutuhan bisnis Anda.
          </p>
          <Button variant="hero" size="xl" className="group">
            Konsultasi Gratis
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;