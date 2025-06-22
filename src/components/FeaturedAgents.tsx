import { Button } from "@/components/ui/button";
import AgentCard from "./AgentCard";
import { Link } from "react-router-dom";
import { Star, TrendingUp, ArrowRight } from "lucide-react";

const FeaturedAgents = () => {
  const agents = [
    {
      name: "CustomerCare Pro",
      description: "Advanced customer service agent that handles inquiries, complaints, and support tickets with human-like empathy and efficiency. Perfect for businesses looking to provide 24/7 support.",
      category: "Customer Service",
      rating: 4.9,
      downloads: "12.5K",
      verified: true,
      price: "$29/mo",
      image: "🎧"
    },
    {
      name: "DataMiner AI",
      description: "Powerful data analysis agent that extracts insights, generates reports, and identifies trends from your business data. Transform raw data into actionable business intelligence.",
      category: "Analytics",
      rating: 4.8,
      downloads: "8.2K",
      verified: true,
      price: "$49/mo",
      image: "📊"
    },
    {
      name: "SocialGuru",
      description: "Social media management agent that creates content, schedules posts, and engages with your audience across platforms. Boost your social media presence effortlessly.",
      category: "Marketing",
      rating: 4.7,
      downloads: "15.1K",
      verified: true,
      price: "$19/mo",
      image: "📱"
    },
    {
      name: "CodeReview Bot",
      description: "Intelligent code review agent that analyzes pull requests, suggests improvements, and ensures code quality standards. Maintain high code quality across your development team.",
      category: "Development",
      rating: 4.9,
      downloads: "6.8K",
      verified: true,
      price: "$39/mo",
      image: "💻"
    },
    {
      name: "InvoiceGenius",
      description: "Automated invoicing agent that generates, sends, and tracks invoices while managing payment reminders and reporting. Streamline your financial operations.",
      category: "Finance",
      rating: 4.6,
      downloads: "9.3K",
      verified: true,
      price: "$25/mo",
      image: "💰"
    },
    {
      name: "ContentCraft AI",
      description: "Creative writing agent that produces blog posts, articles, and marketing copy tailored to your brand voice and style. Create engaging content at scale.",
      category: "Content",
      rating: 4.8,
      downloads: "11.7K",
      verified: true,
      price: "$35/mo",
      image: "✍️"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-600/20 mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending Now
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Featured AI Agents
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Discover the most popular and trusted AI agents deployed by thousands of users worldwide. 
            These agents have been carefully selected based on performance, reliability, and user satisfaction.
          </p>
        </div>
        
        {/* Agents Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <div key={index} className="group">
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI agents to automate tasks, 
              improve efficiency, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/marketplace">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Explore All Agents
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2 hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300">
                  Start Building
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;
