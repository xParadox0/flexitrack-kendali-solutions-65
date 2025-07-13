import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Clock,
      value: "50%",
      label: "Waktu Respons Lebih Cepat",
      description: "Pengambilan keputusan yang lebih cepat dengan data real-time",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      value: "30%",
      label: "Penghematan Biaya Operasional",
      description: "Efisiensi BBM dan pengurangan overtime",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      value: "25%",
      label: "Peningkatan Produktivitas",
      description: "Optimisasi rute dan jadwal operasional",
      color: "text-secondary"
    },
    {
      icon: Users,
      value: "500+",
      label: "Perusahaan Terpercaya",
      description: "Dipercaya oleh berbagai industri di Indonesia",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8cGF0aCBkPSJNMjAgMjBjMCAxMS0yIDIwLTIwIDIwczIwLTkgMjAtMjBTMTEgMCAyMCAwczAgOSAwIDIwWiIvPgo8L2c+CjwvZz4KPC9zdmc+')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hasil Nyata yang <span className="text-secondary">Terukur</span>
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Bergabunglah dengan ratusan perusahaan yang telah merasakan manfaat FlexiTrack.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary-foreground/10 rounded-xl group-hover:bg-primary-foreground/20 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/70 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-primary-foreground">Siap merasakan peningkatan yang sama?</span>
            <button className="bg-primary-foreground text-primary px-4 py-2 rounded-full font-semibold hover:bg-primary-foreground/90 transition-colors">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;