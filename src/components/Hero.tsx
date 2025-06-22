import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500" />
      
      {/* Floating elements */}
      <div className="absolute top-32 right-20 animate-bounce">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
          <Star className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-6 py-3 text-sm font-medium text-blue-700 ring-1 ring-blue-600/20 mb-8">
            <Sparkles className="h-4 w-4 mr-2 animate-spin" />
            The Future of AI Agent Deployment
            <span className="ml-2 px-2 py-1 bg-blue-600 text-white rounded-full text-xs">Beta</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl mb-8">
            Find, Trust & Deploy{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AI Agents
            </span>{" "}
            Instantly
          </h1>
          
          {/* Subtitle */}
          <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Metaminds is your unified platform where anyone—businesses, developers, or end users—can 
            discover smart bots that automate tasks, answer questions, and power services with unprecedented ease.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/marketplace">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 h-14 text-base font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Explore Agents
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="px-8 py-4 h-14 text-base font-semibold border-2 hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300">
                Start Building
              </Button>
            </Link>
          </div>
          
          {/* Features grid */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center group">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Deploy</h3>
              <p className="text-gray-600 leading-relaxed">Deploy AI agents with one click, no technical setup required. Get up and running in minutes, not hours.</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted & Verified</h3>
              <p className="text-gray-600 leading-relaxed">All agents are vetted, rated, and reviewed by our community. Security and reliability guaranteed.</p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Matching</h3>
              <p className="text-gray-600 leading-relaxed">AI-powered recommendations find the perfect agent for your specific needs and use cases.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
