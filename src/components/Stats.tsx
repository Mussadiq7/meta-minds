import { Users, Bot, Building, Zap, TrendingUp, Award, Globe, Shield } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Bot,
      value: "2,500+",
      label: "AI Agents Available",
      description: "Curated and verified",
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-500/10"
    },
    {
      icon: Users,
      value: "12+",
      label: "Active Users",
      description: "Growing community",
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-500/10"
    },
    {
      icon: Building,
      value: "None",
      label: "Businesses Served",
      description: "Built as a Hackathon Project",
      color: "from-green-500 to-green-600",
      bg: "bg-green-500/10"
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable infrastructure",
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-500/10"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Industry Leader",
      description: "Top AI platform 2024"
    },
    {
      icon: Shield,
      title: "Enterprise Ready",
      description: "SOC 2 Type II certified"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Available in 150+ countries"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-700/20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="container relative">
        {/* Main Stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trusted by Thousands
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the AI Revolution
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join the growing community of businesses and developers leveraging our AI agent marketplace 
            to transform their operations and drive innovation.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`mx-auto h-20 w-20 rounded-3xl ${stat.bg} backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-white/20`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Why Choose Metaminds?
            </h3>
            <p className="text-blue-100">
              Industry recognition and enterprise-grade reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-blue-100 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-blue-100 mb-6">
            Ready to get started? Join thousands of satisfied users today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Get Started Free
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
