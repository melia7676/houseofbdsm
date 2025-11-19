// import { useParams, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import hib from '../assets/bdh.png';

// const BlogPost = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // In a real app, this would fetch the blog post data
//   const post = {
//     id:1,
//     title: "History of BDSM",
//     image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=1200",
//     date: "March 15, 2024",
//     readTime: "8 min read",
//     content: `
//       <h2>The Origins and Evolution</h2>
//       <p>BDSM practices have existed throughout human history, with evidence dating back to ancient civilizations. The term BDSM itself is an acronym combining Bondage & Discipline, Dominance & Submission, and Sadism & Masochism.</p>
      
//       <h2>Ancient Practices</h2>
//       <p>Historical records show that power exchange dynamics and ritualistic practices similar to modern BDSM existed in various cultures. Ancient texts, artwork, and artifacts provide evidence of these practices across different societies.</p>
      
//       <h2>Modern Evolution</h2>
//       <p>The modern BDSM community began to take shape in the mid-20th century, evolving from underground subcultures into a more organized and educated community. The focus on safety, consent, and communication became central principles.</p>
      
//       <h2>Community Formation</h2>
//       <p>As society became more open about sexuality, BDSM practitioners formed communities, created educational resources, and established ethical guidelines. The emphasis on SSC (Safe, Sane, and Consensual) and RACK (Risk Aware Consensual Kink) became fundamental principles.</p>
      
//       <h2>Contemporary Understanding</h2>
//       <p>Today, BDSM is increasingly recognized as a valid form of consensual adult sexuality. Mental health professionals, researchers, and educators work to destigmatize these practices and promote healthy, safe exploration within the community.</p>
//     `
//   };

//   return (
//     <div className="min-h-screen py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         <Button 
//           variant="ghost" 
//           onClick={() => navigate(-1)}
//           className="mb-8 hover:text-primary"
//         >
//           <ArrowLeft className="mr-2" />
//           Back to Blog
//         </Button>

//       <div className="div">
//          {BlogPost.map(post => (
//             <Card key={post.id}>
//         <div className="mb-8">
//           <img 
//             src={post.image} 
//             alt={post.title} 
//             className="w-full h-96 object-cover rounded-lg shadow-elegant"
//           />
//         </div>

//         <div className="flex gap-4 text-sm text-muted-foreground mb-6">
//           <span>{post.date}</span>
//           <span>•</span>
//           <span>{post.readTime}</span>
//         </div>

//         <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//           {post.title}
//         </h1>


//             </Card>
//           ))}


//         </div>

//         <div 
//           className="prose prose-invert prose-lg max-w-none"
//           dangerouslySetInnerHTML={{ __html: post.content }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BlogPost;

import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import hib from "../assets/bdh.png";
import bsc from "../assets/bsc.webp";
import ttt from "../assets/ttt.jpeg";
import ac from "../assets/ac.jpeg";
import pd from "../assets/pd.webp";
import eg from "../assets/eg.jpg";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blog data (array)
  const posts = [
    {
      id: 1,
      title: "History of BDSM",
      image: hib,
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
      `,
    },
    {
      id: 2,
      title: "Safety and Consent in BDSM",
      image: bsc,
      date: "March 10, 2024",
      readTime: "12 min read",
      content: `
                    <h2>The Foundations of Safety and Consent</h2>
            <p>Safety and consent are the cornerstones of all healthy BDSM relationships. Unlike misconceptions that paint BDSM as reckless or harmful, the reality is that these practices are deeply rooted in mutual respect, communication, and understanding. Every scene or interaction begins with the shared agreement that the well-being of all participants comes first.</p>

            <h2>Understanding Consent</h2>
            <p>Consent in BDSM goes far beyond a simple “yes” or “no.” It is an ongoing process that involves open discussion, negotiation, and respect for personal boundaries. Practitioners often use tools such as safewords—pre-agreed signals that immediately stop or slow down play—to ensure that everyone remains comfortable and in control. True consent is informed, enthusiastic, and can be withdrawn at any time without judgment or pressure.</p>

            <h2>The Role of Communication</h2>
            <p>Effective communication is essential before, during, and after any BDSM activity. Partners take time to discuss desires, limits, fears, and expectations in detail. This ensures that each individual’s needs are respected and that all play is carried out with clear understanding. Aftercare—checking in and providing comfort after a session—is also a vital form of communication that reinforces trust and emotional safety.</p>

            <h2>Safety Protocols and Best Practices</h2>
            <p>Responsible BDSM practitioners adopt a variety of safety measures. This can include learning proper techniques to avoid physical harm, keeping first aid supplies on hand, and ensuring emotional readiness before engaging in any scene. Frameworks such as SSC (Safe, Sane, and Consensual) and RACK (Risk-Aware Consensual Kink) guide participants toward responsible decision-making, balancing exploration with awareness and care.</p>

            <h2>Building Trust and Emotional Safety</h2>
            <p>Trust forms the emotional foundation of BDSM relationships. Both Dominant and submissive partners rely on each other to maintain honesty, accountability, and respect. Emotional safety allows for vulnerability and authentic connection, making BDSM not just about physical sensation but also about psychological and relational depth.</p>

            <h2>Contemporary Perspectives</h2>
            <p>In today’s world, the BDSM community continues to emphasize education, inclusion, and ethical play. Workshops, online forums, and community events provide spaces for learning and discussion about consent culture, trauma awareness, and relationship health. By centering safety and consent, BDSM becomes a model for how all intimate relationships can thrive through trust, respect, and communication.</p>

      `,
    },
    {
      id: 3,
      title: "10 Tips & Tricks for BDSM",
      image: ttt,
      date: "March 5, 2024",
      readTime: "10 min read",
      content: `
                                  <h2>Introduction to BDSM Best Practices</h2>
                <p>BDSM is a rich and diverse form of intimate exploration built on trust, respect, and communication. Whether you’re new to the lifestyle or a seasoned practitioner, understanding essential principles helps create safe, satisfying, and meaningful experiences. These ten tips and tricks serve as a practical guide to help you explore responsibly and confidently.</p>

                <h2>1. Prioritize Consent and Communication</h2>
                <p>Every BDSM interaction should begin with open and honest communication. Discuss boundaries, interests, and limits before any scene. Consent must always be explicit, informed, and freely given—without pressure or manipulation.</p>

                <h2>2. Learn About Safety and Technique</h2>
                <p>Educate yourself before engaging in any physical or psychological play. Learn the proper techniques for bondage, impact play, and other practices to avoid injuries. Workshops, books, and reputable online resources are excellent starting points.</p>

                <h2>3. Use Safewords and Signals</h2>
                <p>Safewords are critical tools for maintaining control and safety. Common choices include the “traffic light” system: <strong>green</strong> means continue, <strong>yellow</strong> means slow down, and <strong>red</strong> means stop immediately. Always respect your partner’s safeword, no exceptions.</p>

                <h2>4. Establish Clear Limits</h2>
                <p>Understanding both soft and hard limits ensures everyone feels secure. Soft limits are areas that might be explored carefully, while hard limits are absolute boundaries that must never be crossed.</p>

                <h2>5. Focus on Aftercare</h2>
                <p>Aftercare is the process of emotional and physical recovery following a BDSM scene. It might include cuddling, reassurance, hydration, or quiet time. This step helps participants reconnect, reflect, and ensure emotional well-being.</p>

                <h2>6. Practice Hygiene and Equipment Safety</h2>
                <p>Always clean and sanitize your toys, restraints, and tools. Avoid sharing equipment without proper sterilization. Good hygiene is essential for both health and mutual respect.</p>

                <h2>7. Build Trust Gradually</h2>
                <p>Trust is earned over time. Start with lighter scenes or low-risk activities before exploring more intense forms of play. Take time to understand your partner’s emotional and physical responses.</p>

                <h2>8. Stay Emotionally Aware</h2>
                <p>BDSM can evoke strong emotional reactions. Check in regularly with yourself and your partner during and after scenes. Emotional intelligence and empathy are key to creating deeper, safer connections.</p>

                <h2>9. Respect Privacy and Boundaries</h2>
                <p>Confidentiality is crucial within the BDSM community. Never share someone’s involvement or experiences without consent. Respect for privacy fosters trust and integrity.</p>

                <h2>10. Keep Learning and Evolving</h2>
                <p>The BDSM journey is one of continuous learning. Attend workshops, read educational materials, and engage with experienced community members. Growth comes from curiosity, humility, and the willingness to listen and adapt.</p>

                <h2>Conclusion</h2>
                <p>By following these ten tips, you can approach BDSM with confidence, responsibility, and respect. The essence of the lifestyle lies not in control or pain, but in mutual trust, care, and self-discovery. When practiced ethically, BDSM can become a deeply empowering and enriching experience for all involved.</p>

      `,
    },
        {
      id: 4,
      title: "Understanding Power Dynamics",
      image: pd,
      date: "March 28, 2024",
      readTime: "15 min read",
      content: `
                              <h2>The Essence of Power Exchange</h2>
            <p>At the heart of BDSM lies the concept of power exchange — the deliberate and consensual giving or taking of control between partners. Unlike traditional relationships, BDSM dynamics revolve around negotiated authority, where one person assumes a Dominant role and another takes on a submissive role. This exchange is not about coercion but about trust, respect, and the shared desire to explore emotional and psychological depth.</p>

            <h2>Psychology of Dominance</h2>
            <p>Dominance is often misunderstood as mere control or authority. In reality, a true Dominant carries responsibility, empathy, and self-awareness. They guide and protect their submissive, ensuring that all interactions are safe, consensual, and emotionally grounded. Effective dominance comes from confidence balanced with compassion — the ability to lead while remaining attuned to the submissive’s needs and limits.</p>

            <h2>The Role of Submission</h2>
            <p>Submission, too, is an act of strength, not weakness. A submissive chooses to surrender control in a structured and trusted environment. This act of letting go can bring deep emotional release, self-discovery, and empowerment. The submissive’s willingness to yield stems from trust and the understanding that their boundaries will be honored at all times.</p>

            <h2>Building Trust and Emotional Connection</h2>
            <p>Power dynamics thrive on mutual trust and transparent communication. Negotiation before play is essential — partners discuss expectations, desires, and limitations openly. Emotional connection enhances the experience, allowing Dominant and submissive partners to feel secure enough to explore intense psychological and physical sensations safely.</p>

            <h2>Balance and Responsibility</h2>
            <p>In healthy BDSM relationships, power is never truly one-sided. While one partner may hold control in a scene or dynamic, both share equal importance in maintaining the relationship’s structure. The Dominant ensures the submissive’s safety and emotional care, while the submissive provides trust and openness. This balance keeps the relationship respectful and sustainable.</p>

            <h2>Understanding Power Exchange Beyond the Scene</h2>
            <p>For some, power dynamics extend beyond the bedroom into daily life — forming long-term structures such as D/s (Dominant/submissive) relationships. These arrangements rely on the same foundations: communication, respect, and consent. Roles may evolve, but the underlying goal remains mutual growth and emotional intimacy.</p>

            <h2>Modern Perspectives on Power and Consent</h2>
            <p>As BDSM becomes better understood in modern society, the psychological nuances of power exchange are gaining recognition. Professionals in psychology and sexology increasingly acknowledge that when practiced ethically, BDSM can foster self-awareness, trust, and emotional intelligence. Understanding these dynamics offers insights into how humans express vulnerability, strength, and connection through consensual roles.</p>

            <h2>Conclusion</h2>
            <p>Power dynamics in BDSM are not about domination or submission for their own sake — they are about harmony, trust, and exploration. When practiced with respect, communication, and care, they allow individuals to experience profound levels of connection and personal growth. True power in BDSM lies not in control, but in the mutual exchange of trust and understanding.</p>

      `,
    },
    {
      id: 5,
      title: "Equipment Guide for Beginners",
      image: eg,
      date: "March 20, 2024",
      readTime: "7 min read",
      content: `
                                  <h2>Introduction to BDSM Equipment</h2>
              <p>Starting your BDSM journey can feel exciting and a little overwhelming, especially when it comes to choosing your first set of tools and accessories. Equipment in BDSM is designed not only to enhance sensation but also to reinforce trust, creativity, and connection between partners. This guide will help beginners understand how to select, use, and care for their equipment safely and responsibly.</p>

              <h2>1. Start Simple</h2>
              <p>When you’re new to BDSM, it’s best to begin with basic and versatile tools. Soft restraints, blindfolds, or simple floggers are excellent starting points. These items allow partners to explore sensation and trust without risking injury or discomfort.</p>

              <h2>2. Understand Materials and Quality</h2>
              <p>BDSM equipment comes in a wide range of materials, from leather and silicone to metal and rope. Beginners should focus on body-safe, non-porous materials that are easy to clean and maintain. Avoid cheap or poorly made items, as they can break easily or cause harm during use.</p>

              <h2>3. Safety Before Aesthetics</h2>
              <p>While attractive gear may catch your eye, safety should always come first. Ensure that cuffs, collars, and restraints are comfortable and easy to release. For impact toys, like paddles or floggers, check that handles are secure and that no sharp edges are present. Safety is the foundation of enjoyable play.</p>

              <h2>4. Hygiene and Maintenance</h2>
              <p>Proper cleaning and maintenance of BDSM equipment is crucial. Always wash items that come into contact with skin or bodily fluids using appropriate disinfectants or toy cleaners. Rope, leather, and silicone all require different care methods — learning them protects both your equipment and your health.</p>

              <h2>5. Restraints and Bondage Basics</h2>
              <p>Bondage gear such as cuffs, rope, and under-the-bed restraints offer countless ways to explore control and submission. Start with soft materials like padded leather or neoprene cuffs before experimenting with rope. Never tie too tightly or around sensitive areas, and always have safety scissors or a quick-release method nearby.</p>

              <h2>6. Sensation Play Tools</h2>
              <p>Sensation play involves stimulating the senses through temperature, texture, or touch. Beginners can experiment with feathers, ice cubes, massage oils, or soft floggers. These tools help partners discover preferences and limits without needing advanced skills or expensive equipment.</p>

              <h2>7. Impact Play Essentials</h2>
              <p>If you’re curious about spanking, paddling, or flogging, start with lighter materials such as suede or soft leather. Learn proper striking techniques and avoid sensitive areas like the spine or kidneys. Communication during play helps maintain safety and comfort.</p>

              <h2>8. Importance of Storage and Discretion</h2>
              <p>Store your toys in a clean, dry, and discreet place. Keeping items separate by material prevents damage and cross-contamination. A simple toy bag or dedicated storage box ensures your equipment stays safe, clean, and organized.</p>

              <h2>9. Communication and Exploration</h2>
              <p>Before using any new piece of equipment, talk openly with your partner about interests, curiosity, and comfort levels. Trying new tools together builds trust and deepens intimacy. Always respect boundaries and adjust as needed.</p>

              <h2>10. Continuous Learning</h2>
              <p>BDSM equipment is just one aspect of a larger lifestyle centered around consent and communication. Attend workshops, read reliable guides, and connect with experienced practitioners to continue learning. Education is your best tool for both safety and satisfaction.</p>

              <h2>Conclusion</h2>
              <p>Your first steps into BDSM equipment selection should always focus on comfort, trust, and knowledge. High-quality, well-maintained gear combined with honest communication ensures that your experiences are both safe and rewarding. As you grow in confidence and understanding, your collection can evolve with you — reflecting your unique preferences and dynamic.</p>

      `,
    },
    {
      id: 6,
      title: "Aftercare: Why It Matters",
      image: ac,
      date: "March 15, 2024",
      readTime: "9 min read",
      content: `

                  <h2>Understanding Aftercare</h2>
            <p>Aftercare is one of the most essential yet often overlooked aspects of BDSM. It refers to the care, attention, and emotional support partners provide to each other after a scene or intense session. While BDSM can involve physical or psychological intensity, aftercare ensures that both participants feel safe, grounded, and emotionally balanced afterward.</p>

            <h2>The Importance of Emotional Recovery</h2>
            <p>BDSM scenes can trigger a range of emotions — from euphoria and vulnerability to exhaustion and catharsis. Aftercare helps participants process these feelings in a nurturing environment. This emotional decompression strengthens trust between partners and reinforces the sense of safety that defines ethical BDSM play.</p>

            <h2>Physical Care and Comfort</h2>
            <p>After a scene, the body may need gentle attention. Offering water, snacks, or a blanket can help restore comfort and hydration. For physical play that involves marks, bondage, or impact, simple remedies like aloe gel or warm compresses can soothe the skin. Taking the time to address physical needs communicates care and respect.</p>

            <h2>Emotional Connection and Reassurance</h2>
            <p>Emotional aftercare is about closeness and reassurance. Cuddling, gentle touch, and quiet conversation can help partners reconnect and affirm mutual trust. It’s also a time to express gratitude — acknowledging the shared vulnerability and cooperation that made the scene possible.</p>

            <h2>Debriefing and Reflection</h2>
            <p>Once emotions settle, partners can discuss how the scene went. What felt good? What could be improved next time? This open dialogue helps both Dominants and submissives grow in understanding, refine boundaries, and strengthen their dynamic. Honest feedback ensures continuous mutual respect and learning.</p>

            <h2>Aftercare for Dominants</h2>
            <p>Aftercare isn’t just for submissives — Dominants also benefit from emotional recovery. Leading a scene requires intense focus, responsibility, and emotional investment. Aftercare allows Dominants to decompress, receive appreciation, and feel valued for their care and guidance.</p>

            <h2>Tailoring Aftercare to Individual Needs</h2>
            <p>No two people experience play the same way. Some may need physical closeness, while others prefer space and quiet. Discussing aftercare preferences before a scene ensures that everyone’s emotional needs are met. Flexibility and empathy are key to effective aftercare.</p>

            <h2>Aftercare in Long-Term Dynamics</h2>
            <p>For ongoing BDSM relationships, aftercare extends beyond individual sessions. It becomes a routine of emotional maintenance — checking in, supporting one another, and nurturing intimacy. Consistent aftercare fosters long-term stability and emotional trust within the dynamic.</p>

            <h2>Common Misconceptions</h2>
            <p>Some people mistakenly view aftercare as optional or unnecessary, especially in casual encounters. However, even brief or light play can affect participants emotionally or physically. Taking time for aftercare is a sign of maturity and responsibility, not weakness or dependency.</p>

            <h2>Conclusion</h2>
            <p>Aftercare is more than just the final step in a BDSM session — it is an expression of compassion, respect, and understanding. It transforms intense experiences into moments of emotional connection and healing. When practiced thoughtfully, aftercare strengthens trust and deepens the bonds that make BDSM safe, consensual, and fulfilling.</p>

      `,
    },
    
    
  ];

  // Get post matching the URL id
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Post Not Found</h1>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

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

        <Card className="p-6">
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
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
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;



























// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function BlogDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const post = location.state; // get blog data

//   if (!post) {
//     return <p className="text-center py-20 text-white">Blog post not found.</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-6 py-16">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 text-white hover:text-gray-100 font-medium"
//       >
//         ← Back
//       </button>
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full h-72 object-cover rounded-lg shadow-lg"
//       />
//       <h1 className="text-3xl font-bold mt-6 text-white drop-shadow-lg">
//         {post.title}
//       </h1>
//       <p className="mt-4 text-gray-900 leading-relaxed whitespace-pre-line bg-white/80 p-4 rounded-lg">
//         {post.content}
//       </p>
//     </div>
//   );
// }

// export default BlogDetail;

