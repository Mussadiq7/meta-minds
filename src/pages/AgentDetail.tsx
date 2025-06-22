import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "react-router-dom";
import { Star, Download, Verified, Send, Upload, Flag, Zap } from "lucide-react";
import { useState } from "react";
import { AGENTS } from "@/lib/utils";

const AgentDetail = () => {
  const { id } = useParams();
  const agent = AGENTS.find(a => a.id === id);
  if (!agent) return <div className="min-h-screen bg-background"><Header /><div className="container py-8">Agent not found.</div><Footer /></div>;
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", content: "Hello! I'm CustomerCare Pro. How can I help you today?" }
  ]);
  const [loadingResponse, setLoadingResponse] = useState(false);

  const handleSendMessage = async () => {
    if (message.trim()) {
      setChatMessages(prev => [...prev, { type: "user", content: message }]);
      setMessage("");
      setLoadingResponse(true);
      try {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;
        if (!apiKey) {
          setChatMessages(prev => [...prev, { type: "bot", content: "API key is missing. Please set VITE_GROQ_API_KEY in your .env file." }]);
          setLoadingResponse(false);
          return;
        }
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "mixtral-8x7b-32768",
            messages: [
              { role: "system", content: `You are an expert assistant for the AI agent '${agent.name}'. Here is the agent's description: ${agent.description}` },
              ...chatMessages.map(m => ({ role: m.type === "user" ? "user" : "assistant", content: m.content })),
              { role: "user", content: message }
            ],
            max_tokens: 256,
          }),
        });
        const data = await response.json();
        const aiReply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
        setChatMessages(prev => [...prev, { type: "bot", content: aiReply }]);
      } catch (err) {
        setChatMessages(prev => [...prev, { type: "bot", content: "Sorry, there was an error contacting the AI assistant." }]);
      } finally {
        setLoadingResponse(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                    🎧
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h1 className="text-2xl font-bold">{agent.name}</h1>
                      <Verified className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-muted-foreground">{agent.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{agent.stats.successRate}%</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{typeof agent.stats.uses !== 'undefined' ? `${agent.stats.uses} uses` : 'N/A uses'}</span>
                      </div>
                      <Badge>Customer Service</Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary mb-1">{agent.price} JUP</div>
                  <div className="text-sm text-muted-foreground">per interaction</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {agent.longDescription}
              </p>

              <div className="flex space-x-3">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Zap className="h-4 w-4 mr-2" />
                  Use Now
                </Button>
                <Button variant="outline">
                  Stake JUP
                </Button>
                <Button variant="outline" size="icon">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* AI Assistant Chat */}
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-4">Ask About {agent.name}</h2>
              <div className="border rounded-lg h-96 flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder={`Ask anything about ${agent.name}...`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button size="icon" onClick={handleSendMessage} disabled={loadingResponse}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="how-it-works" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                <TabsTrigger value="audits">Audit Logs</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="how-it-works" className="mt-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-4">How CustomerCare Pro Works</h3>
                  <div className="prose max-w-none">
                    <p>{agent.howItWorks || "No details provided."}</p>
                    <h4>Key Features:</h4>
                    <ul>
                      <li>{Array.isArray(agent.keyFeatures) ? agent.keyFeatures.join(', ') : "No features listed."}</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="audits" className="mt-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-4">DAO Audit History</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium">Security Audit</div>
                        <div className="text-sm text-muted-foreground">Completed by DAO Vote #{agent.audit?.daoVote ?? "N/A"}</div>
                      </div>
                      <Badge variant="secondary">{agent.audit?.status ?? "Unknown"}</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-4">User Reviews</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">@user{agent.reviews?.[0]?.userId ?? ""}</span>
                      </div>
                      <p className="text-muted-foreground">{agent.reviews?.[0]?.review ?? "No reviews yet."}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="stats" className="mt-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-4">Performance Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{agent.stats.successRate}%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{agent.stats.uptime}%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full">Use Now</Button>
                <Button variant="outline" className="w-full">Stake JUP</Button>
                <Button variant="outline" className="w-full">Add to Favorites</Button>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold mb-4">Developer Info</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Developer:</span>
                  <span>@customer_dev</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reputation:</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{agent.reputation}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Published:</span>
                  <span>{agent.published}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentDetail;
