import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hib from '../assets/bdh.png';
import bsc from '../assets/bsc.webp';
import ttt from "../assets/ttt.jpeg";
import ac from "../assets/ac.jpeg";
import pd from "../assets/pd.webp";
import eg from "../assets/eg.jpg";



import { Content } from "vaul";

const blogPosts = [
  {
    id: 1,
    title: "History of BDSM",
    excerpt: "Explore the rich history and evolution of BDSM practices throughout human civilization.",
    image: hib,
    date: "March 15, 2024",
    readTime: "8 min read",
    Content:"bubinisnmzi"
  },
  {
    id: 2,
    title: "Safety and Consent in BDSM",
    excerpt: "Understanding the fundamental importance of safety, consent, and communication in BDSM relationships.",
    image: bsc,
    date: "March 10, 2024",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "10 Tips & Tricks for BDSM",
    excerpt: "Essential tips for anyone exploring or practicing BDSM, from beginners to experienced practitioners.",
    image: ttt,
    date: "March 5, 2024",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Understanding Power Dynamics",
    excerpt: "A deep dive into the psychological aspects of dominance and submission in BDSM relationships.",
    image: pd,
    date: "February 28, 2024",
    readTime: "15 min read"
  },
  {
    id: 5,
    title: "Equipment Guide for Beginners",
    excerpt: "Everything you need to know about selecting your first BDSM equipment and accessories.",
    image: eg,
    date: "February 20, 2024",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Aftercare: Why It Matters",
    excerpt: "The crucial role of aftercare in BDSM sessions and how to provide proper emotional support.",
    image: ac,
    date: "February 15, 2024",
    readTime: "9 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Community Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Insights, education, and stories from the BDSM community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Card key={post.id} className="overflow-hidden hover:shadow-elegant transition-smooth group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {post.excerpt}
                </p>
                <Button asChild variant="outline" className="w-full hover:border-primary hover:bg-primary/10">
                  <Link to={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
