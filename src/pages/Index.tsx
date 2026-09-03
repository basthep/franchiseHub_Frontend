import { FranchiseCard } from "@/components/FranchiseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Shield, Users } from "lucide-react";
import { franchises } from "@/data/franchises";
import { useState } from "react";
import heroImage from "@/assets/hero-franchise.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFranchises = franchises.filter((franchise) =>
    franchise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    franchise.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]">
          <img
            src={heroImage}
            alt="Franchise Opportunities"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Discover Your Perfect
            <span className="block text-accent mt-2">Franchise Opportunity</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Connect with proven franchise brands ready for expansion. Your journey to business ownership starts here.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Explore Franchises
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              List Your Brand
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Proven Success</h3>
              <p className="text-muted-foreground">
                Partner with established brands with track records of profitability and growth
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Comprehensive Support</h3>
              <p className="text-muted-foreground">
                Receive training, marketing, and operational support from experienced teams
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Thriving Community</h3>
              <p className="text-muted-foreground">
                Join a network of successful franchisees and benefit from shared knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Franchises Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Available Franchise Opportunities
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our curated selection of franchise brands across various industries
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by brand name or category..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Franchise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFranchises.map((franchise) => (
              <FranchiseCard key={franchise.id} {...franchise} />
            ))}
          </div>

          {filteredFranchises.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No franchises found matching your search. Try different keywords.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[image:var(--gradient-hero)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Start Your Franchise Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get in touch with our team to learn more about available opportunities
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
