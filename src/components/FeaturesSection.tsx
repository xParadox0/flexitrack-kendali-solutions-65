import { MapPin, Bell, Wrench, BarChart3, Plug, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Monitoring",
      description: "Pantau lokasi lengkap dan riwayat tracking kendaraan secara real-time dengan akurasi tinggi.",
      color: "text-primary"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Notifikasi cerdas untuk event-event kritis seperti pelanggaran area, kecepatan berlebih, dan lainnya.",
      color: "text-secondary"
    },
    {
      icon: Wrench,
      title: "Maintenance Reminder",
      description: "Pengingat otomatis untuk perawatan kendaraan berdasarkan jarak tempuh dan waktu operasional.",
      color: "text-warning"
    },
    {
      icon: BarChart3,
      title: "Activity Summary",
      description: "Ringkasan data aktivitas yang mudah dipahami untuk evaluasi performa dan efisiensi operasional.",
      color: "text-success"
    },
    {
      icon: Plug,
      title: "Plug & Play Installation",
      description: "Instalasi mudah tanpa perlu mengubah sistem kendaraan yang sudah ada. Pasang dan langsung gunakan.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Flexible Deployment",
      description: "Pilihan fleksibel antara membeli atau menyewa sesuai kebutuhan dan budget perusahaan Anda.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fitur Unggulan <span className="text-primary">FlexiTrack</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Solusi GPS tracking yang lebih dari sekadar pelacak. Dapatkan kontrol penuh atas operasional kendaraan Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-6 shadow-elegant hover:shadow-primary transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-subtle ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;