import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

import RequestInformationModal from "../components/FranchiseDetail/RequestInformationModal";
import ScheduleCallModal from "../components/FranchiseDetail/ScheduleCallModal";

import {
  ArrowLeft,
  DollarSign,
  TrendingUp,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  FileText,
  PhoneCall,
} from "lucide-react";

// =====================================================
// FRANCHISE TYPE
// =====================================================
interface Franchise {
  _id: string;
  name: string;
  category: string;
  description: string;
  fullDescription?: string;
  investment: string;
  roi?: string;
  unitsOperating?: number;
  yearFounded?: number;
  territories?: string;
  phone?: string;
  image?: string;
  support?: string[];
  requirements?: string[];
}

const FranchiseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [franchise, setFranchise] = useState<Franchise | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false); 

  // =====================================================
  // FETCH SINGLE FRANCHISE
  // =====================================================
  useEffect(() => {
  const fetchFranchise = async () => {
    const token = localStorage.getItem("token");
    console.log(token," here")
    if (!token) {
    navigate("/login");
    return;
    }  

    try {
      setLoading(true);
      setError("");

      if (!id) {
        setError("Franchise ID is missing.");
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/franchises/${id}`
      );

      if (response.status === 404) {
        setFranchise(null);
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch franchise details");
      }

      const data = await response.json();

      setFranchise(data);
    } catch (error) {
      console.error("Error fetching franchise:", error);
      setError(
        "Unable to load franchise details. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  fetchFranchise();
}, [id]);

  // =====================================================
  // LOADING STATE
  // =====================================================
  if (loading) {
    return (
      <div className="min-h-screen bg-background">

        {/* Header Loading */}
        <div className="bg-[image:var(--gradient-hero)] px-4 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="h-10 w-52 animate-pulse rounded-lg bg-white/20" />
          </div>
        </div>

        {/* Content Loading */}
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-3">

            {/* Left */}
            <div className="space-y-8 lg:col-span-2">

              <div className="h-[400px] w-full animate-pulse rounded-lg bg-muted" />

              <div className="space-y-4">
                <div className="h-10 w-72 animate-pulse rounded bg-muted" />

                <div className="h-6 w-full animate-pulse rounded bg-muted" />

                <div className="h-4 w-full animate-pulse rounded bg-muted" />

                <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
              </div>

            </div>

            {/* Right */}
            <div>
              <Card className="space-y-6 p-6">

                <div className="h-6 w-40 animate-pulse rounded bg-muted" />

                <div className="h-20 animate-pulse rounded bg-muted" />

                <div className="h-20 animate-pulse rounded bg-muted" />

                <div className="h-12 animate-pulse rounded bg-muted" />

                <div className="h-12 animate-pulse rounded bg-muted" />

              </Card>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // ERROR STATE
  // =====================================================
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">

        <div className="text-center">

          <h1 className="mb-4 text-3xl font-bold text-foreground">
            Something went wrong
          </h1>

          <p className="mb-6 text-muted-foreground">
            {error}
          </p>

          <div className="flex justify-center gap-3">

            <Button
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>

            <Link to="/categories">
              <Button variant="outline">
                Back to Franchises
              </Button>
            </Link>

          </div>

        </div>
      </div>
    );
  }

  // =====================================================
  // FRANCHISE NOT FOUND
  // =====================================================
  if (!franchise) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">

        <div className="text-center">

          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Franchise Not Found
          </h1>

          <p className="mb-6 text-muted-foreground">
            The franchise you're looking for doesn't exist
            or may have been removed.
          </p>

          <Link to="/categories">
            <Button>
              Return to All Franchises
            </Button>
          </Link>

        </div>
      </div>
    );
  }

  // =====================================================
  // MAIN PAGE
  // =====================================================
  return (
    <div className="min-h-screen bg-background">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="bg-[image:var(--gradient-hero)] px-4 py-8 text-primary-foreground">

        <div className="mx-auto max-w-7xl">

          <Link to="/categories">

            <Button
              variant="ghost"
              className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />

              Back to All Franchises
            </Button>

          </Link>

        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="mx-auto max-w-7xl px-4 py-12">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}
          <div className="space-y-8 lg:col-span-2">

            {/* Hero Image */}
            <div className="overflow-hidden rounded-lg shadow-[var(--shadow-card)]">

              <img
                src={`http://localhost:5000${franchise.image || ""}`}
                alt={franchise.name}
                className="h-[400px] w-full object-cover"
              />

            </div>

            {/* Brand Info */}
            <div>

              <div className="mb-4 flex flex-wrap items-center gap-4">

                <h1 className="text-4xl font-bold text-foreground">
                  {franchise.name}
                </h1>

                <Badge className="text-base">
                  {franchise.category}
                </Badge>

              </div>

              <p className="mb-6 text-xl text-muted-foreground">
                {franchise.description}
              </p>

              {franchise.fullDescription && (
                <p className="leading-relaxed text-foreground">
                  {franchise.fullDescription}
                </p>
              )}

            </div>

            <Separator />

            {/* =================================================
                SUPPORT
            ================================================= */}
            {franchise.support &&
              franchise.support.length > 0 && (
                <>
                  <div>

                    <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">

                      <CheckCircle2 className="text-accent" />

                      Franchisee Support

                    </h2>

                    <div className="grid gap-3 md:grid-cols-2">

                      {franchise.support.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2"
                        >

                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />

                          <span className="text-foreground">
                            {item}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>

                  <Separator />
                </>
              )}

            {/* =================================================
                REQUIREMENTS
            ================================================= */}
            {franchise.requirements &&
              franchise.requirements.length > 0 && (
                <div>

                  <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">

                    <FileText className="text-primary" />

                    Franchisee Requirements

                  </h2>

                  <div className="space-y-3">

                    {franchise.requirements.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2"
                      >

                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />

                        <span className="text-foreground">
                          {item}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>
              )}

          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}
          <div className="space-y-6">

            {/* Investment Card */}
            <Card className="space-y-4 bg-gradient-to-b from-card to-muted/30 p-6 shadow-[var(--shadow-card)]">

              <h3 className="text-lg font-bold text-foreground">
                Investment Details
              </h3>

              <div className="space-y-4">

                {/* Investment */}
                <div className="flex items-start gap-3">

                  <div className="rounded-lg bg-primary/10 p-2">

                    <DollarSign className="h-5 w-5 text-primary" />

                  </div>

                  <div>

                    <p className="text-sm text-muted-foreground">
                      Total Investment
                    </p>

                    <p className="text-2xl font-bold text-primary">
                      {franchise.investment}
                    </p>

                  </div>

                </div>

                {/* ROI */}
                <div className="flex items-start gap-3">

                  <div className="rounded-lg bg-accent/10 p-2">

                    <TrendingUp className="h-5 w-5 text-accent" />

                  </div>

                  <div>

                    <p className="text-sm text-muted-foreground">
                      Average ROI
                    </p>

                    <p className="text-2xl font-bold text-accent">
                      {franchise.roi || "N/A"}
                    </p>

                  </div>

                </div>

                <Separator />

                {/* Franchise Information */}
                <div className="space-y-3">

                  {/* Units */}
                  <div className="flex items-center gap-2">

                    <Building2 className="h-4 w-4 text-muted-foreground" />

                    <span className="text-sm text-muted-foreground">
                      Units Operating:
                    </span>

                    <span className="font-semibold text-foreground">
                      {franchise.unitsOperating ?? 0}
                    </span>

                  </div>

                  {/* Founded */}
                  <div className="flex items-center gap-2">

                    <Calendar className="h-4 w-4 text-muted-foreground" />

                    <span className="text-sm text-muted-foreground">
                      Founded:
                    </span>

                    <span className="font-semibold text-foreground">
                      {franchise.yearFounded || "N/A"}
                    </span>

                  </div>

                  {/* Territories */}
                  <div className="flex items-start gap-2">

                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />

                    <div>

                      <span className="text-sm text-muted-foreground">
                        Territories:
                      </span>

                      <p className="font-semibold text-foreground">
                        {franchise.territories || "N/A"}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <Separator />

              {/* CTA Buttons */}
              <div className="space-y-3 pt-2">

                {/* Request Information */}
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() =>
                    setIsRequestModalOpen(true)
                  }
                >
                  Request Information
                </Button>

                {/* Schedule Call */}
                <Button
                  className="w-full"
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    setIsCallModalOpen(true)
                  }
                >
                  <PhoneCall className="mr-2 h-5 w-5" />

                  Schedule a Call
                </Button>

              </div>

            </Card>

            {/* Additional Info */}
            <Card className="bg-muted/50 p-6">

              <h3 className="mb-3 font-bold text-foreground">
                Why Choose This Franchise?
              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">

                <li>✓ Established brand recognition</li>

                <li>✓ Comprehensive training program</li>

                <li>✓ Ongoing operational support</li>

                <li>✓ Marketing assistance</li>

                <li>✓ Proven business model</li>

              </ul>

            </Card>

          </div>

        </div>

      </div>

      {/* =====================================================
          REQUEST INFORMATION MODAL
      ===================================================== */}
      <RequestInformationModal
        open={isRequestModalOpen}
        onOpenChange={setIsRequestModalOpen}
        franchise={franchise}
      />

      {/* =====================================================
          SCHEDULE CALL MODAL
      ===================================================== */}
      <ScheduleCallModal
        open={isCallModalOpen}
        onOpenChange={setIsCallModalOpen}
        franchise={franchise}
      />

    </div>
  );
};

export default FranchiseDetail; 
