import { Card } from "../ui/card";
import { Badge } from "..//ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FranchiseCardProps {
  id: string;
  name: string;
  category: string;
  investment: string;
  description: string;
  image: string;
  roi: string;
}

const FranchiseCard = ({
  id,
  name,
  category,
  investment,
  description,
  image,
  roi,
}: FranchiseCardProps) => {
  return (
    <Link to={`/franchise/${id}`} className="block h-full">
      <Card className="group h-full cursor-pointer overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={`http://localhost:5000${image || ""}`}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          
          {/* Title + Category + Arrow */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                {name}
              </h3>

              <Badge
                variant="secondary"
                className="mt-2 bg-slate-100 text-slate-700"
              >
                {category}
              </Badge>
            </div>

            <ArrowRight
              className="mt-1 flex-shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
              size={22}
            />
          </div>

          {/* Description */}
          <p className="line-clamp-2 text-sm leading-6 text-slate-500">
            {description}
          </p>

          {/* Investment + ROI */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <div>
              <p className="text-sm text-slate-500">
                Investment
              </p>

              <p className="text-lg font-bold text-blue-600">
                {investment}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-500">
                Avg. ROI
              </p>

              <p className="text-lg font-bold text-emerald-600">
                {roi}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FranchiseCard;