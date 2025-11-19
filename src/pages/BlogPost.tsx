import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this would fetch the blog post data
  const post = {
    id,
    title: "History of BDSM",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=1200",
    date: "March 15, 2024",
    readTime: "8 min read",
    content: `
      <h2>The Origins and Evolution</h2>
      <p>BDSM practices have existed throughout human history, with evidence dating back to ancient civilizations. The term BDSM itself is an acronym combining Bondage & Discipline, Dominance & Submission, and Sadism & Masochism.</p>
      
      <h2>Ancient Practices</h2>
      <p>Historical records show that power exchange dynamics and ritualistic practices similar to modern BDSM existed in various cultures. Ancient texts, artwork, and artifacts provide evidence of these practices across different societies.</p>
      
      <h2>Modern Evolution</h2>
      <p>The modern BDSM community began to take shape in the mid-20th century, evolving from underground subcultures into a more organized and educated community. The focus on safety, consent, and communication became central principles.</p>
      
      <h2>Community Formation</h2>
      <p>As society became more open about sexuality, BDSM practitioners formed communities, created educational resources, and established ethical guidelines. The emphasis on SSC (Safe, Sane, and Consensual) and RACK (Risk Aware Consensual Kink) became fundamental principles.</p>
      
      <h2>Contemporary Understanding</h2>
      <p>Today, BDSM is increasingly recognized as a valid form of consensual adult sexuality. Mental health professionals, researchers, and educators work to destigmatize these practices and promote healthy, safe exploration within the community.</p>
    `
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-8 hover:text-primary"
        >
          <ArrowLeft className="mr-2" />
          Back to Blog
        </Button>

        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-96 object-cover rounded-lg shadow-elegant"
          />
        </div>

        <div className="flex gap-4 text-sm text-muted-foreground mb-6">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {post.title}
        </h1>

        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogPost;
