import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Download, Verified, ExternalLink, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface AgentCardProps {
  name: string;
  description: string;
  category: string;
  rating: number;
  downloads: string;
  verified: boolean;
  price: string;
  image: string;
}

const AgentCard = ({ name, description, category, rating, downloads, verified, price, image }: AgentCardProps) => {
  const id = name.toLowerCase().replace(/\s+/g, '-');
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(localStorage.getItem(`liked-agent-${id}`) === 'true');
  }, [id]);
  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(`liked-agent-${id}`, newLiked.toString());
  };
  const { toast } = useToast();
  const handleDeploy = () => {
    toast({
      title: (
        <div className="flex flex-col items-center justify-center animate-bounceIn">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 mb-3 animate-bounce">
            <Zap className="h-10 w-10 text-white animate-pulse" />
          </div>
          <span className="text-2xl font-bold text-primary text-center">AI Agent Deployed!</span>
        </div>
      ) as React.ReactNode,
      description: (
        <div className="text-lg text-center text-muted-foreground mt-2">{name} is now live and ready to use.</div>
      ) as React.ReactNode,
      className: "max-w-lg mx-auto bg-gradient-to-br from-blue-50 to-purple-100 border-2 border-blue-300 shadow-2xl scale-105 animate-fadeInUp",
    });
  };
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Favorite button */}
      <button onClick={toggleLike} className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 ${liked ? 'text-red-500' : ''}`} aria-label="Like agent">
        <Heart className="h-4 w-4" fill={liked ? 'currentColor' : 'none'} />
      </button>
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            {image}
          </div>
          <div className="flex items-center space-x-2">
            {verified && (
              <div className="flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                <Verified className="h-3 w-3 mr-1" />
                <span className="text-xs font-medium">Verified</span>
              </div>
            )}
            <Badge variant="secondary" className="text-xs font-medium">
              {category}
            </Badge>
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{rating}</span>
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span className="font-medium">{downloads}</span>
            </div>
          </div>
          <div className="text-xl font-bold text-card-foreground bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {price}
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-3">
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-3" onClick={handleDeploy}>
            <Zap className="h-5 w-5 mr-2 animate-pulse" /> Deploy Now
          </Button>
          <Link to={`/agent/${name.toLowerCase().replace(/\s+/g, '-')}`}>
            <Button variant="outline" size="icon" className="hover:bg-gray-50 transition-colors">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
