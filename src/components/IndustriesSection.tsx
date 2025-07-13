import { Truck, HardHat, TreePine, Car } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Truck,
      title: "Logistics",
      description: "Optimisasi rute pengiriman, monitoring waktu tiba, dan peningkatan efisiensi distribusi.",
      benefits: ["Tracking real-time", "Route optimization", "Delivery confirmation"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: HardHat,
      title: "Construction", 
      description: "Pengawasan alat berat, monitoring area kerja, dan manajemen fleet konstruksi.",
      benefits: ["Equipment tracking", "Site monitoring", "Theft prevention"],
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: TreePine,
      title: "Plantation",
      description: "Monitoring kendaraan perkebunan, pengawasan area perkebunan, dan optimasi operasional.",
      benefits: ["Field monitoring", "Vehicle scheduling", "Area surveillance"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Car,
      title: "Rental Fleets",
      description: "Manajemen armada rental, tracking kendaraan sewaan, dan monitoring penggunaan.",
      benefits: ["Fleet management", "Usage monitoring", "Customer safety"],
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industri yang Kami <span className="text-primary">Layani</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            FlexiTrack telah terbukti meningkatkan efisiensi operasional di berbagai sektor industri.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-primary transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative p-6">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${industry.gradient} text-white`}>
                    <industry.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient}`}></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tidak menemukan industri Anda? FlexiTrack dapat disesuaikan dengan kebutuhan bisnis apapun.
          </p>
          <button className="text-primary font-semibold hover:text-primary-dark transition-colors underline underline-offset-4">
            Konsultasi Gratis →
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;