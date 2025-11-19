import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypeAnimation } from 'react-type-animation';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import background from '../assets/bg.jpeg';

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <img
        src={background}
        alt="Community banner"
        className="absolute w-full h-screen inset-0 bg-cover bg-center opacity-10"
      />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            House of Satisfaction
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-foreground">
            BDSM Community Chronicles
          </h2>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-20">
            <TypeAnimation
              sequence={[
                'Explore the depths of BDSM culture',
                3000,
                'Join our exclusive community',
                3000,
                'Shop premium lifestyle products',
                3000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <div className="flex gap-4 justify-center mb-12">
            <Button asChild size="lg" className="gradient-primary shadow-glow transition-smooth hover:scale-105">
              <Link to="/shop">Explore Shop</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/blog">Read Blog</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
          
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              <FaPhoneAlt size={24} />
            </a>
            <a href="mailto:houseofsatisfactionbdsmcommu@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card hover:shadow-elegant transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
              <p className="text-muted-foreground">
                Learn about BDSM practices, safety, and consent through our comprehensive resources and experienced community members.
              </p>
            </Card>
            <Card className="p-8 bg-card hover:shadow-elegant transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-primary">Community</h3>
              <p className="text-muted-foreground">
                Connect with like-minded individuals in a safe, respectful, and judgment-free environment dedicated to exploration.
              </p>
            </Card>
            <Card className="p-8 bg-card hover:shadow-elegant transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-primary">Premium Shop</h3>
              <p className="text-muted-foreground">
                Access high-quality BDSM equipment and lifestyle products carefully curated for our community members.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Join Our Exclusive Community</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Become a member of the House of Satisfaction and unlock exclusive content, community access, and special shop discounts.
          </p>
          <Button asChild size="lg" className="gradient-primary shadow-glow">
            <Link to="/membership">Learn About Membership</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
