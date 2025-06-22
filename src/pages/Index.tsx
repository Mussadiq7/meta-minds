import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedAgents from "@/components/FeaturedAgents";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, Users, Bot, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <FeaturedAgents />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Platform Analytics & Leaderboards</h1>
          <p className="text-muted-foreground">Discover top performers and track platform growth</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">+2 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,200</div>
              <p className="text-xs text-muted-foreground">+50 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,200 JUP</div>
              <p className="text-xs text-muted-foreground">Lifetime transaction volume</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DAO Participation</CardTitle>
              <Crown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">61%</div>
              <p className="text-xs text-muted-foreground">Governance participation rate</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Trusted Agents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Top Trusted Agents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Example agents, update as needed */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-sm">1</div>
                  <div className="flex-1">
                    <div className="font-medium">CustomerCare Pro</div>
                    <div className="text-sm text-muted-foreground">Customer Service</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">98/100</div>
                    <div className="text-sm text-muted-foreground">12.5K uses</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-sm">2</div>
                  <div className="flex-1">
                    <div className="font-medium">DataMiner AI</div>
                    <div className="text-sm text-muted-foreground">Analytics</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">95/100</div>
                    <div className="text-sm text-muted-foreground">8.2K uses</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-sm">3</div>
                  <div className="flex-1">
                    <div className="font-medium">SocialGuru</div>
                    <div className="text-sm text-muted-foreground">Marketing</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">92/100</div>
                    <div className="text-sm text-muted-foreground">15.1K uses</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Top Developers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                Top Developers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-sm">1</div>
                  <div className="flex-1">
                    <div className="font-medium">@customer_dev</div>
                    <div className="text-sm text-muted-foreground">3 agents</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">2.4K JUP</div>
                    <div className="flex items-center text-sm"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />4.9</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-sm">2</div>
                  <div className="flex-1">
                    <div className="font-medium">@data_scientist</div>
                    <div className="text-sm text-muted-foreground">2 agents</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">1.8K JUP</div>
                    <div className="flex items-center text-sm"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />4.8</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-sm">3</div>
                  <div className="flex-1">
                    <div className="font-medium">@ai_builder</div>
                    <div className="text-sm text-muted-foreground">5 agents</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">1.2K JUP</div>
                    <div className="flex items-center text-sm"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />4.7</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* DAO Voter Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="h-5 w-5 mr-2 text-purple-500" />
                DAO Voter Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold text-sm">1</div>
                  <div className="flex-1">
                    <div className="font-medium">@dao_leader</div>
                    <div className="text-sm text-muted-foreground">45 votes</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600">98/100</div>
                    <div className="text-sm text-muted-foreground">500 JUP</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold text-sm">2</div>
                  <div className="flex-1">
                    <div className="font-medium">@governance_pro</div>
                    <div className="text-sm text-muted-foreground">38 votes</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600">95/100</div>
                    <div className="text-sm text-muted-foreground">350 JUP</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold text-sm">3</div>
                  <div className="flex-1">
                    <div className="font-medium">@community_voice</div>
                    <div className="text-sm text-muted-foreground">32 votes</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600">87/100</div>
                    <div className="text-sm text-muted-foreground">280 JUP</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Most Used Agents This Week */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Most Used Agents This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Example agents, update as needed */}
              <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">🤖</div>
                <div className="flex-1">
                  <div className="font-medium">CustomerCare Pro</div>
                  <Badge variant="secondary">Customer Service</Badge>
                  <div className="text-sm text-muted-foreground mt-1">12.5K uses</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">🤖</div>
                <div className="flex-1">
                  <div className="font-medium">DataMiner AI</div>
                  <Badge variant="secondary">Analytics</Badge>
                  <div className="text-sm text-muted-foreground mt-1">8.2K uses</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">🤖</div>
                <div className="flex-1">
                  <div className="font-medium">SocialGuru</div>
                  <Badge variant="secondary">Marketing</Badge>
                  <div className="text-sm text-muted-foreground mt-1">15.1K uses</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
