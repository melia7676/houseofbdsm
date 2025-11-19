import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import a from '../assets/a.jpeg';
import b from '../assets/b.jpeg';
import c from '../assets/c.jpeg';
import d from '../assets/d.jpeg';
import e from '../assets/e.jpeg';
import f from '../assets/f.jpeg';
import g from '../assets/g.jpeg';
import lov from '../assets/lov.jpeg'

const profiles = [
  {
    id: 1,
    name: "Mistress Amelia",
    image: d,
    bio: "Experienced dominatrix specializing in psychological domination and discipline.",
    specialties: ["Discipline", "Role Play", "Sensory Play"]
  },
  {
    id: 2,
    name: "Master Alexander",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "20 years of experience in traditional dominance and rope artistry.",
    specialties: ["Rope Bondage", "Traditional Dom", "Training"]
  },
  {
    id: 3,
    name: "Mistress Rejoice",
    image: a,
    bio: "Expert in sensory exploration and power exchange dynamics.",
    specialties: ["Sensory Deprivation", "Power Exchange", "Fetish"]
  },
  {
    id: 4,
    name: "Master Dominic",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    bio: "Specialized in impact play and advanced BDSM techniques.",
    specialties: ["Impact Play", "Advanced Techniques", "Mentorship"]
  },
  {
    id: 5,
    name: "Mistress Isabella",
    image: b,
    bio: "Focuses on psychological domination and lifestyle dynamics.",
    specialties: ["Lifestyle Dom", "Psychology", "Protocols"]
  },
  {
    id: 6,
    name: "Master Sterling",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    bio: "Expert in safe exploration and consent-focused practices.",
    specialties: ["Safety Education", "Consent", "Beginners"]
  },
  {
    id: 7,
    name: "Mistress Raven",
    image: c,
    bio: "Specializes in intense sessions and edge play.",
    specialties: ["Edge Play", "Intensity", "Experience"]
  },
  {
    id: 8,
    name: "Master Viktor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    bio: "Traditional master with focus on discipline and structure.",
    specialties: ["Discipline", "Structure", "Protocol"]
  },
  {
    id: 9,
    name: "Mistress Debbie",
    image: lov,
    bio: "Expert in elegance, poise, and sophisticated domination.",
    specialties: ["Elegant Dom", "Sophistication", "Refinement"]
  },
  {
    id: 10,
    name: "Master Julian",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Specializes in trust building and relationship dynamics.",
    specialties: ["Trust Building", "Relationships", "Dynamics"]
  },
  {
    id: 11,
    name: "Mistress Tempest",
    image: f,
    bio: "Known for creative scenes and artistic expression.",
    specialties: ["Creative Scenes", "Artistry", "Innovation"]
  },
  {
    id: 12,
    name: "Master Phoenix",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop",
    bio: "Expert in transformation and personal growth through BDSM.",
    specialties: ["Transformation", "Growth", "Development"]
  },
  {
    id: 13,
    name: "Mistress Aurora",
    image: g,
    bio: "Focuses on nurturing dominance and positive reinforcement.",
    specialties: ["Nurturing Dom", "Positive", "Support"]
  },
  {
    id: 14,
    name: "Master Damon",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop",
    bio: "Specializes in intense psychological play and mindfuck.",
    specialties: ["Mind Games", "Psychology", "Intensity"]
  },
  {
    id: 15,
    name: "Mistress Seraphina",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
    bio: "Expert in sensual domination and tease techniques.",
    specialties: ["Sensual Dom", "Tease", "Seduction"]
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Professional Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced and dedicated professionals who guide our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <Card key={profile.id} className="overflow-hidden hover:shadow-elegant transition-smooth">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={profile.image} 
                  alt={profile.name}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{profile.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {profile.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
