import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, ArrowRight, MapPin, Clock, Shield } from "lucide-react";

const Company = () => {
  const values = [
    {
      icon: Target,
      title: "Inovasi",
      description: "Terus mengembangkan teknologi tracking terdepan untuk memenuhi kebutuhan industri yang berkembang."
    },
    {
      icon: Shield,
      title: "Keandalan",
      description: "Memberikan solusi yang dapat diandalkan 24/7 dengan uptime 99.9% untuk operasional bisnis Anda."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Membangun hubungan jangka panjang dengan klien melalui layanan dan dukungan yang terpercaya."
    }
  ];

  const stats = [
    { number: "500+", label: "Perusahaan Mempercayai Kami" },
    { number: "10,000+", label: "Kendaraan Dipantau" },
    { number: "99.9%", label: "Uptime Sistem" },
    { number: "5+", label: "Tahun Pengalaman" }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Pendirian FlexiTrack",
      description: "Memulai perjalanan dengan visi menyediakan solusi GPS tracking terjangkau untuk UKM Indonesia."
    },
    {
      year: "2020",
      title: "Ekspansi Produk",
      description: "Meluncurkan lini produk lengkap: TO, PT, CO, dan FF untuk berbagai kebutuhan industri."
    },
    {
      year: "2022",
      title: "Sertifikasi Internasional",
      description: "Meraih sertifikasi ISO 9001:2015 dan berbagai penghargaan inovasi teknologi."
    },
    {
      year: "2024",
      title: "Platform Digital",
      description: "Menghadirkan platform monitoring terintegrasi dengan AI analytics dan mobile app terbaru."
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
              Tentang <span className="text-primary">FlexiTrack</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Membangun masa depan industri logistik Indonesia melalui teknologi GPS tracking yang inovatif dan terpercaya.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Misi Kami
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Memberikan solusi GPS tracking yang mudah digunakan, andal, dan terjangkau untuk membantu bisnis Indonesia mengoptimalkan operasional mereka dan meningkatkan efisiensi.
              </p>
              <p className="text-lg text-muted-foreground">
                Kami percaya bahwa teknologi harus mempermudah, bukan mempersulit. Karena itu, FlexiTrack dirancang untuk memberikan kendali penuh di ujung jari Anda.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Visi Kami</h3>
              <p className="text-muted-foreground">
                Menjadi platform GPS tracking terdepan di Indonesia yang memberdayakan setiap bisnis untuk mengambil keputusan lebih cepat dan cerdas berdasarkan data real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prinsip yang memandu setiap langkah dalam mengembangkan solusi terbaik untuk Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-border bg-card text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dari startup hingga menjadi pemimpin industri GPS tracking di Indonesia.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-24 bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Bergabunglah dengan 500+ Perusahaan yang Mempercayai FlexiTrack
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wujudkan efisiensi operasional yang Anda impikan. Mulai transformasi digital fleet management Anda hari ini.
          </p>
          <Button variant="hero" size="xl" className="group">
            Mulai Sekarang
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;