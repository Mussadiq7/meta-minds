
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import { Star, Wallet, Vote, MessageSquare } from "lucide-react";

const Profile = () => {
  const { address } = useParams();

  const subscriptions = [
    {
      name: "CustomerCare Pro",
      category: "Customer Service",
      monthlyUses: 150,
      totalSpent: "15 JUP"
    }
  ];

  const stakings = [
    {
      agent: "DataMiner AI",
      amount: "50 JUP",
      rewards: "2.3 JUP"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-card rounded-lg p-6 border mb-8">
            <div className="flex items-center space-x-6">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                {address?.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">@user_{address?.slice(-4)}</h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Wallet className="h-4 w-4 mr-1" />
                    {address?.slice(0, 8)}...{address?.slice(-8)}
                  </span>
                  <span>Member since Dec 2023</span>
                </div>
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">4.8 Reputation</span>
                  </div>
                  <Badge variant="secondary">Verified User</Badge>
                </div>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </div>

          <Tabs defaultValue="subscriptions" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="staking">Staking</TabsTrigger>
              <TabsTrigger value="voting">Voting History</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="subscriptions" className="mt-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Active Subscriptions</h3>
                {subscriptions.map((sub, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                          🎧
                        </div>
                        <div>
                          <h4 className="font-semibold">{sub.name}</h4>
                          <Badge variant="secondary">{sub.category}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{sub.monthlyUses} uses this month</div>
                        <div className="text-sm text-muted-foreground">Total spent: {sub.totalSpent}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="staking" className="mt-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Staked Agents</h3>
                {stakings.map((stake, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{stake.agent}</h4>
                        <div className="text-sm text-muted-foreground">Staked: {stake.amount}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">+{stake.rewards}</div>
                        <div className="text-sm text-muted-foreground">Rewards earned</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="voting" className="mt-6">
              <div className="space-y-4">
                <h3 className="font-semibold">DAO Voting History</h3>
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Fund AI Safety Research Grant</h4>
                      <div className="text-sm text-muted-foreground">Voted: For • 100 JUP staked</div>
                    </div>
                    <Badge variant="secondary">Passed</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Reviews Submitted</h3>
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-start space-x-4">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">CustomerCare Pro</div>
                      <p className="text-muted-foreground">Excellent customer service agent. Helped resolve my issue quickly and professionally!</p>
                      <div className="text-sm text-muted-foreground mt-2">2 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
