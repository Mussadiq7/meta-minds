import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  BarChart3, 
  Megaphone, 
  Code, 
  DollarSign, 
  FileText,
  ShoppingCart,
  Headphones,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Customer Service",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-50/50 hover:bg-blue-50",
      description: "24/7 support automation"
    },
    {
      name: "Data Analytics",
      icon: BarChart3,
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50/50 hover:bg-emerald-50",
      description: "Insights & reporting"
    },
    {
      name: "Marketing",
      icon: Megaphone,
      color: "from-pink-500 to-pink-600",
      bg: "bg-pink-50/50 hover:bg-pink-50",
      description: "Campaign automation"
    },
    {
      name: "Development",
      icon: Code,
      color: "from-violet-500 to-violet-600",
      bg: "bg-violet-50/50 hover:bg-violet-50",
      description: "Code & deployment"
    },
    {
      name: "Finance",
      icon: DollarSign,
      color: "from-amber-500 to-amber-600",
      bg: "bg-amber-50/50 hover:bg-amber-50",
      description: "Accounting & billing"
    },
    {
      name: "Content",
      icon: FileText,
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50/50 hover:bg-indigo-50",
      description: "Writing & creation"
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-50/50 hover:bg-orange-50",
      description: "Sales & inventory"
    },
    {
      name: "Support",
      icon: Headphones,
      color: "from-teal-500 to-teal-600",
      bg: "bg-teal-50/50 hover:bg-teal-50",
      description: "Help & assistance"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-600/20 mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Popular Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Explore AI Agents by Category
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Discover specialized AI solutions tailored to your business needs. From customer service to data analytics, 
            find the perfect agent for every use case.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                key={index}
                to={`/marketplace?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${category.bg} border border-border/50 hover:border-transparent`}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Explore category</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-600/20 transition-colors duration-300" />
              </Link>
            );
          })}
        </div>
        
        {/* View all categories button */}
        <div className="text-center mt-12">
          <Link to="/marketplace">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2 hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300">
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
