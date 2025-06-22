import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Upload, BarChart3, DollarSign, Star, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { AGENTS } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const DeveloperDashboard = () => {
  // Simulate wallet connection
  const [walletConnected, setWalletConnected] = useState(true); // set to false to test
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mock data
  const myAgents = AGENTS.slice(0, 3).map((a, i) => ({
    ...a,
    status: i === 0 ? "Active" : i === 1 ? "Draft" : "Paused",
    uses: Math.floor(Math.random() * 10000),
    avgRating: a.rating,
  }));
  const earnings = 1245;
  const monthlyEarnings = [
    { month: "Jan", earnings: 120 },
    { month: "Feb", earnings: 180 },
    { month: "Mar", earnings: 210 },
    { month: "Apr", earnings: 300 },
    { month: "May", earnings: 435 },
  ];
  const deployments = 3200;
  const mostUsedAgent = myAgents[0];
  const revenueByAgent = myAgents.map(a => ({ name: a.name, uses: a.uses, earnings: Math.floor(a.uses * 0.1) }));
  const favorites = AGENTS.slice(3, 6);
  const daoActivity = [
    { proposal: "Fund AI Safety Research Grant", status: "Passed", date: "2024-06-01", vote: "For" },
    { proposal: "Platform Fee Adjustment", status: "Rejected", date: "2024-05-20", vote: "Against" },
  ];
  const proposalsSubmitted = ["Audit CustomerCare Pro v2.0"];
  const jupStaked = 300;
  const governanceRole = "Voter";

  if (!walletConnected) {
    return <div className="min-h-screen flex flex-col items-center justify-center bg-background"><Header /><div className="text-xl font-semibold mb-4">Connect Wallet to View Dashboard</div><Button onClick={() => setWalletConnected(true)}>Connect Wallet</Button><Footer /></div>;
  }
  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background"><span>Loading dashboard...</span></div>;
  if (error) return <div className="min-h-screen flex items-center justify-center bg-background text-red-500">Error loading dashboard data.</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your AI agents, earnings, favorites, and DAO activity</p>
        </div>
        <Tabs defaultValue="agents" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="agents">My Agents</TabsTrigger>
            <TabsTrigger value="earnings">Earnings & Usage</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="dao">My DAO Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="agents" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">My Agents</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={myAgents} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uses" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {myAgents.map((agent, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">{agent.image}</div>
                    <div>
                      <h3 className="font-semibold">{agent.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{agent.category}</Badge>
                        <Badge variant={agent.status === 'Active' ? 'default' : agent.status === 'Draft' ? 'outline' : 'secondary'}>{agent.status}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end mt-4 md:mt-0">
                    <div className="font-semibold">{agent.uses} uses</div>
                    <div className="text-sm text-muted-foreground">Avg Rating: {agent.avgRating}</div>
                    <div className="flex space-x-2 mt-2">
                      <Button size="sm" variant="outline">View</Button>
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">Pause</Button>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600">Submit New Agent</Button>
            </div>
          </TabsContent>
          <TabsContent value="earnings" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Earnings & Usage</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">{earnings} JUP</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Total Deployments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{deployments}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Most Used Agent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold">{mostUsedAgent.name}</div>
                    <div className="text-sm text-muted-foreground">{mostUsedAgent.uses} uses</div>
                  </CardContent>
                </Card>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={monthlyEarnings} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="earnings" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-8">
                <h3 className="font-semibold mb-2">Revenue by Agent</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr>
                        <th className="text-left p-2">Agent</th>
                        <th className="text-left p-2">Uses</th>
                        <th className="text-left p-2">JUP Earned</th>
                      </tr>
                    </thead>
                    <tbody>
                      {revenueByAgent.map((row, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-2">{row.name}</td>
                          <td className="p-2">{row.uses}</td>
                          <td className="p-2">{row.earnings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="favorites" className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Favorites</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {favorites.map((agent, i) => (
                <div key={i} className="bg-card rounded-lg p-6 border flex flex-col items-center">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mb-2">{agent.image}</div>
                  <div className="font-semibold mb-1">{agent.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">Trust Score: {agent.trustScore}</div>
                  <Button className="w-full mb-2">Deploy Now</Button>
                  <Button variant="outline" className="w-full">Remove from Favorites</Button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="dao" className="mt-6">
            <h2 className="text-xl font-semibold mb-4">My DAO Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Proposals Voted On</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {daoActivity.map((a, i) => (
                      <li key={i}>{a.proposal} - <span className="font-semibold">{a.status}</span> ({a.vote}) <span className="text-xs text-muted-foreground">{a.date}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Proposals Submitted</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {proposalsSubmitted.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>JUP Tokens Staked</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{jupStaked}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Governance Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{governanceRole}</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default DeveloperDashboard;
