import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import AgentCard from "@/components/AgentCard";
import { Search, Filter, Star, TrendingUp, Clock, Zap } from "lucide-react";
import { useState, useMemo } from "react";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trustScore, setTrustScore] = useState([0]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPricing, setSelectedPricing] = useState("All");
  const [sortBy, setSortBy] = useState("trust");

  const categories = [
    "All Categories",
    "Customer Service",
    "Analytics",
    "Marketing",
    "Development",
    "Finance",
    "Content",
    "E-commerce",
    "Support",
    "Education",
    "Healthcare",
    "Legal"
  ];

  const pricingModels = ["All", "Free", "Pay-per-use", "Subscription"];

  const agents = [
    {
      name: "CustomerCare Pro",
      description: "Advanced customer service agent that handles inquiries, complaints, and support tickets with human-like empathy and efficiency.",
      category: "Customer Service",
      rating: 4.9,
      downloads: "12.5K",
      verified: true,
      price: "$29/mo",
      image: "🎧",
      trustScore: 95
    },
    {
      name: "DataMiner AI",
      description: "Powerful data analysis agent that extracts insights, generates reports, and identifies trends from your business data.",
      category: "Analytics",
      rating: 4.8,
      downloads: "8.2K",
      verified: true,
      price: "$49/mo",
      image: "📊",
      trustScore: 92
    },
    {
      name: "SocialGuru",
      description: "Social media management agent that creates content, schedules posts, and engages with your audience across platforms.",
      category: "Marketing",
      rating: 4.7,
      downloads: "15.1K",
      verified: true,
      price: "$19/mo",
      image: "📱",
      trustScore: 88
    },
    {
      name: "CodeReview Bot",
      description: "Intelligent code review agent that analyzes pull requests, suggests improvements, and ensures code quality standards.",
      category: "Development",
      rating: 4.9,
      downloads: "6.8K",
      verified: true,
      price: "$39/mo",
      image: "💻",
      trustScore: 96
    },
    {
      name: "InvoiceGenius",
      description: "Automated invoicing agent that generates, sends, and tracks invoices while managing payment reminders and reporting.",
      category: "Finance",
      rating: 4.6,
      downloads: "9.3K",
      verified: true,
      price: "$25/mo",
      image: "💰",
      trustScore: 85
    },
    {
      name: "ContentCraft AI",
      description: "Creative writing agent that produces blog posts, articles, and marketing copy tailored to your brand voice and style.",
      category: "Content",
      rating: 4.8,
      downloads: "11.7K",
      verified: true,
      price: "$35/mo",
      image: "✍️",
      trustScore: 90
    },
    {
      name: "ShopAssistant",
      description: "E-commerce assistant that helps customers find products, process orders, and provide shopping recommendations.",
      category: "E-commerce",
      rating: 4.5,
      downloads: "7.4K",
      verified: true,
      price: "$22/mo",
      image: "🛒",
      trustScore: 82
    },
    {
      name: "TechSupport Pro",
      description: "Technical support agent that troubleshoots issues, provides solutions, and guides users through technical problems.",
      category: "Support",
      rating: 4.7,
      downloads: "13.2K",
      verified: true,
      price: "$28/mo",
      image: "🔧",
      trustScore: 89
    },
    {
      name: "StudyBuddy AI",
      description: "Educational assistant that helps students with homework, explains concepts, and provides learning resources.",
      category: "Education",
      rating: 4.6,
      downloads: "10.8K",
      verified: true,
      price: "$15/mo",
      image: "📚",
      trustScore: 87
    },
    {
      name: "HealthAdvisor",
      description: "Healthcare assistant that provides health information, symptom checking, and wellness recommendations.",
      category: "Healthcare",
      rating: 4.4,
      downloads: "5.9K",
      verified: true,
      price: "$32/mo",
      image: "🏥",
      trustScore: 78
    },
    {
      name: "LegalEagle",
      description: "Legal assistant that helps with document review, legal research, and basic legal guidance.",
      category: "Legal",
      rating: 4.3,
      downloads: "4.7K",
      verified: true,
      price: "$45/mo",
      image: "⚖️",
      trustScore: 75
    },
    {
      name: "EmailOptimizer",
      description: "Email marketing agent that optimizes campaigns, analyzes performance, and suggests improvements.",
      category: "Marketing",
      rating: 4.5,
      downloads: "8.9K",
      verified: true,
      price: "$18/mo",
      image: "📧",
      trustScore: 84
    },
    {
      name: "BudgetTracker",
      description: "Personal finance agent that tracks expenses, creates budgets, and provides financial insights.",
      category: "Finance",
      rating: 4.6,
      downloads: "12.1K",
      verified: true,
      price: "$12/mo",
      image: "📈",
      trustScore: 86
    },
    {
      name: "DevOps Helper",
      description: "DevOps automation agent that manages deployments, monitors systems, and optimizes infrastructure.",
      category: "Development",
      rating: 4.8,
      downloads: "5.3K",
      verified: true,
      price: "$55/mo",
      image: "🚀",
      trustScore: 93
    },
    {
      name: "SEO Master",
      description: "SEO optimization agent that analyzes websites, suggests improvements, and tracks search rankings.",
      category: "Marketing",
      rating: 4.7,
      downloads: "9.6K",
      verified: true,
      price: "$38/mo",
      image: "🔍",
      trustScore: 91
    }
  ];

  // Filter and sort agents
  const filteredAgents = useMemo(() => {
    const filtered = agents.filter(agent => {
      // Search filter
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === "All Categories" || agent.category === selectedCategory;
      
      // Trust score filter
      const matchesTrustScore = agent.trustScore >= trustScore[0];
      
      // Pricing filter
      const matchesPricing = selectedPricing === "All" || 
                            (selectedPricing === "Free" && agent.price === "Free") ||
                            (selectedPricing === "Subscription" && agent.price.includes("/mo")) ||
                            (selectedPricing === "Pay-per-use" && !agent.price.includes("/mo") && agent.price !== "Free");
      
      return matchesSearch && matchesCategory && matchesTrustScore && matchesPricing;
    });

    // Sort agents
    switch (sortBy) {
      case "trust":
        filtered.sort((a, b) => b.trustScore - a.trustScore);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "downloads":
        filtered.sort((a, b) => parseInt(b.downloads.replace(/[^0-9]/g, '')) - parseInt(a.downloads.replace(/[^0-9]/g, '')));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, trustScore, selectedPricing, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Panel */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-left"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Trust Score */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Trust Score</h4>
                <div className="px-2">
                  <Slider
                    value={trustScore}
                    onValueChange={setTrustScore}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>0</span>
                    <span>{trustScore[0]}</span>
                    <span>100</span>
                  </div>
                </div>
              </div>

              {/* Pricing Model */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Pricing</h4>
                <div className="space-y-2">
                  {pricingModels.map((model) => (
                    <Button
                      key={model}
                      variant={selectedPricing === model ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-left"
                      onClick={() => setSelectedPricing(model)}
                    >
                      {model}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSearchTerm("");
                  setTrustScore([0]);
                  setSelectedCategory("All Categories");
                  setSelectedPricing("All");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for AI agents, categories, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold">AI Agents</h2>
                <Badge variant="secondary">{filteredAgents.length} agents found</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  <option value="trust">Trust Score</option>
                  <option value="rating">Rating</option>
                  <option value="downloads">Downloads</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            {/* Agent Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAgents.map((agent, index) => (
                <AgentCard key={index} {...agent} />
              ))}
            </div>

            {/* No Results */}
            {filteredAgents.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No agents found</h3>
                  <p>Try adjusting your filters or search terms</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setTrustScore([0]);
                    setSelectedCategory("All Categories");
                    setSelectedPricing("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
