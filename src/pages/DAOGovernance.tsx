import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Vote, Plus, Clock, CheckCircle, XCircle, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { BarChart, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const DAOGovernance = () => {
  // Loading and error state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mock data
  const proposals = [
    {
      id: 1,
      title: "Audit CustomerCare Pro v2.0",
      type: "Audit",
      description: "Review the latest version of CustomerCare Pro for security vulnerabilities and performance issues.",
      status: "Active",
      votesFor: 1250,
      votesAgainst: 300,
      votesAbstain: 50,
      totalStaked: 1600,
      timeRemaining: 60 * 60 * 24 * 2, // 2 days in seconds
      proposer: "@auditor_dao"
    },
    {
      id: 2,
      title: "Fund AI Safety Research Grant",
      type: "Funding",
      description: "Allocate 10,000 JUP tokens to fund research into AI agent safety and alignment.",
      status: "Passed",
      votesFor: 2100,
      votesAgainst: 400,
      votesAbstain: 0,
      totalStaked: 2500,
      timeRemaining: 0,
      proposer: "@safety_first"
    },
    {
      id: 3,
      title: "Implement Cross-Chain Support",
      type: "Feature",
      description: "Add support for Ethereum and Polygon networks to expand agent accessibility.",
      status: "Active",
      votesFor: 800,
      votesAgainst: 600,
      votesAbstain: 200,
      totalStaked: 1600,
      timeRemaining: 60 * 60 * 24 * 1, // 1 day in seconds
      proposer: "@cross_chain_dev"
    }
  ];

  const votingHistory = [
    {
      id: 2,
      title: "Fund AI Safety Research Grant",
      outcome: "Passed",
      totalVotes: 2500,
      participation: 82,
      dateClosed: "2024-06-01"
    },
    {
      id: 4,
      title: "Platform Fee Adjustment",
      outcome: "Rejected",
      totalVotes: 1200,
      participation: 61,
      dateClosed: "2024-05-20"
    }
  ];

  const daoStats = {
    totalProposals: 42,
    activeProposals: 2,
    totalVotes: 12000,
    memberCount: 340,
    jupStaked: 125000,
    approvalRate: 68,
    mostVoted: { title: "Fund AI Safety Research Grant", count: 2500 }
  };

  const myGovernance = {
    votedOn: [2, 4],
    submitted: [1],
    jupStaked: 300,
    badge: "Active Voter"
  };

  // Chart data
  const chartData = [
    { name: "Passed", value: 28 },
    { name: "Rejected", value: 10 },
    { name: "Active", value: 4 }
  ];
  const COLORS = ["#22c55e", "#ef4444", "#6366f1"];

  // Voting filter
  const [historyFilter, setHistoryFilter] = useState("all");

  // Countdown helper
  function formatCountdown(seconds: number) {
    if (seconds <= 0) return "Completed";
    const d = Math.floor(seconds / (60 * 60 * 24));
    const h = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const m = Math.floor((seconds % (60 * 60)) / 60);
    return `${d}d ${h}h ${m}m`;
  }

  // Voting handler
  function handleVote(proposalId: number, type: "for" | "against" | "abstain") {
    toast({
      title: "Vote submitted",
      description: `Your vote (${type}) for proposal #${proposalId} has been recorded (mock).`,
      duration: 3000
    });
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background"><span>Loading DAO data...</span></div>;
  if (error) return <div className="min-h-screen flex items-center justify-center bg-background text-red-500">Error loading DAO data.</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">DAO Governance</h1>
              <p className="text-muted-foreground">Participate in community decisions and help shape the future of Metaminds</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="h-4 w-4 mr-2" />
              Create Proposal
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-lg p-6 border text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{daoStats.totalProposals}</div>
            <div className="text-muted-foreground">Total Proposals</div>
          </div>
          <div className="bg-card rounded-lg p-6 border text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{daoStats.jupStaked.toLocaleString()} JUP</div>
            <div className="text-muted-foreground">JUP Staked</div>
          </div>
          <div className="bg-card rounded-lg p-6 border text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{daoStats.memberCount}</div>
            <div className="text-muted-foreground">DAO Members</div>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6 border mb-8">
          <h3 className="font-semibold mb-4">Proposal Outcomes</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <Tabs defaultValue="proposals" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="proposals">Active Proposals</TabsTrigger>
            <TabsTrigger value="history">Voting History</TabsTrigger>
            <TabsTrigger value="stats">DAO Status</TabsTrigger>
            <TabsTrigger value="my">My Governance</TabsTrigger>
          </TabsList>
          <TabsContent value="proposals" className="mt-6">
            <div className="space-y-6">
              {proposals.filter(p => p.status === "Active").map((proposal) => {
                const total = proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain;
                return (
                  <div key={proposal.id} className="bg-card rounded-lg p-6 border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold">{proposal.title}</h3>
                          <Badge variant="default">{proposal.status}</Badge>
                          <Badge variant="outline">{proposal.type}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{proposal.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Proposed by {proposal.proposer}</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {formatCountdown(proposal.timeRemaining)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center text-green-600">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              For ({proposal.votesFor} JUP)
                            </span>
                            <span>{Math.round((proposal.votesFor / total) * 100)}%</span>
                          </div>
                          <Progress value={(proposal.votesFor / total) * 100} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center text-red-600">
                              <XCircle className="h-4 w-4 mr-1" />
                              Against ({proposal.votesAgainst} JUP)
                            </span>
                            <span>{Math.round((proposal.votesAgainst / total) * 100)}%</span>
                          </div>
                          <Progress value={(proposal.votesAgainst / total) * 100} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center text-gray-600">
                              <Users className="h-4 w-4 mr-1" />
                              Abstain ({proposal.votesAbstain} JUP)
                            </span>
                            <span>{Math.round((proposal.votesAbstain / total) * 100)}%</span>
                          </div>
                          <Progress value={(proposal.votesAbstain / total) * 100} className="h-2" />
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => handleVote(proposal.id, "for")}> <Vote className="h-4 w-4 mr-2" />Vote For</Button>
                        <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-50" onClick={() => handleVote(proposal.id, "against")}> <Vote className="h-4 w-4 mr-2" />Vote Against</Button>
                        <Button variant="outline" onClick={() => handleVote(proposal.id, "abstain")}>Abstain</Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="history" className="mt-6">
            <div className="mb-4 flex flex-wrap gap-2 items-center">
              <label className="text-sm font-medium">Filter:</label>
              <select className="border rounded px-2 py-1" value={historyFilter} onChange={e => setHistoryFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Passed">Passed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="space-y-4">
              {votingHistory.filter(h => historyFilter === "all" || h.outcome === historyFilter).map(h => (
                <div key={h.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">{h.title}</div>
                    <div className="text-sm text-muted-foreground">{h.totalVotes} votes • {h.participation}% participation</div>
                    <div className="text-xs text-muted-foreground">Closed: {h.dateClosed}</div>
                  </div>
                  <Badge variant={h.outcome === "Passed" ? "secondary" : "outline"}>{h.outcome}</Badge>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="stats" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{daoStats.totalProposals}</div>
                <div className="text-muted-foreground">Total Proposals Submitted</div>
              </div>
              <div className="bg-card rounded-lg p-6 border text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{daoStats.activeProposals}</div>
                <div className="text-muted-foreground">Active Proposals Now</div>
              </div>
              <div className="bg-card rounded-lg p-6 border text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{daoStats.totalVotes}</div>
                <div className="text-muted-foreground">Total Votes Cast</div>
              </div>
              <div className="bg-card rounded-lg p-6 border text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{daoStats.memberCount}</div>
                <div className="text-muted-foreground">DAO Member Count</div>
              </div>
              <div className="bg-card rounded-lg p-6 border text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">{daoStats.jupStaked.toLocaleString()} JUP</div>
                <div className="text-muted-foreground">JUP Tokens Staked</div>
              </div>
              <div className="bg-card rounded-lg p-6 border text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{daoStats.approvalRate}%</div>
                <div className="text-muted-foreground">Proposal Approval Rate</div>
              </div>
              <div className="bg-card rounded-lg p-6 border text-center col-span-1 md:col-span-3">
                <div className="text-lg font-semibold mb-1">Most Voted Proposal</div>
                <div className="text-2xl font-bold">{daoStats.mostVoted.title}</div>
                <div className="text-muted-foreground">{daoStats.mostVoted.count} votes</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="my" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold mb-4">My Governance Activity</h3>
                <div className="space-y-2">
                  <div>Proposals Voted On: <span className="font-bold">{myGovernance.votedOn.length}</span></div>
                  <div>Proposals Submitted: <span className="font-bold">{myGovernance.submitted.length}</span></div>
                  <div>JUP Tokens Staked: <span className="font-bold">{myGovernance.jupStaked}</span></div>
                  <div>Participation Badge: <Badge variant="secondary">{myGovernance.badge}</Badge></div>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Voted on "Fund AI Safety Research Grant"</li>
                  <li>Submitted proposal "Audit CustomerCare Pro v2.0"</li>
                  <li>Staked 300 JUP</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default DAOGovernance;
