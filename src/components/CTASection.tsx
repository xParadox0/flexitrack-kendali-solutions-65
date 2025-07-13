import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Chat Langsung",
      description: "Konsultasi real-time dengan tim ahli kami",
      action: "Mulai Chat",
      color: "text-success"
    },
    {
      icon: Phone,
      title: "Hubungi Kami",
      description: "Diskusi detail kebutuhan bisnis Anda",
      action: "Telepon Sekarang",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Kirim Inquiry",
      description: "Dapatkan proposal khusus untuk perusahaan",
      action: "Kirim Email",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Siap Mengoptimalkan 
            <br />
            <span className="text-primary">Operasional Bisnis Anda?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan 500+ perusahaan yang telah merasakan peningkatan efisiensi dengan FlexiTrack. 
            Dapatkan kontrol penuh atas armada Anda hari ini.
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Mulai Trial Gratis 30 Hari
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-primary" size="xl">
              Lihat Demo Langsung
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Instalasi dalam 24 jam</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Garansi kepuasan 100%</span>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-primary transition-all duration-300 hover:-translate-y-2 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className={`p-4 rounded-xl bg-gradient-subtle ${method.color} group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {method.description}
              </p>

              {/* CTA Button */}
              <Button variant="outline-primary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                {method.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-muted-foreground mb-2">
            <strong className="text-foreground">Konsultasi gratis!</strong> Tim ahli kami siap membantu menentukan solusi terbaik untuk bisnis Anda.
          </p>
          <p className="text-sm text-muted-foreground">
            Tidak ada komitmen, tidak ada biaya tersembunyi. Hanya solusi yang tepat untuk kebutuhan Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;