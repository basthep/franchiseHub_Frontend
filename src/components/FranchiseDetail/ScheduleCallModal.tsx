import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, PhoneCall } from "lucide-react";

interface ScheduleCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  franchise: {
    name: string;
    phone: string;
  };
}

const ScheduleCallModal = ({
  open,
  onOpenChange,
  franchise,
}: ScheduleCallModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <PhoneCall className="h-6 w-6 text-primary" />
            Schedule a Call
          </DialogTitle>

          <DialogDescription>
            Contact {franchise.name} directly using the phone number below.
          </DialogDescription>
        </DialogHeader>

        {/* Phone Number */}
        <div className="mt-4 rounded-lg bg-muted/50 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-2">
            {franchise.name} Phone Number
          </p>

          <a
            href={`tel:${franchise.phone}`}
            className="text-2xl font-bold text-primary hover:underline flex items-center justify-center gap-2"
          >
            <Phone className="h-5 w-5" />
            {franchise.phone}
          </a>

          <p className="text-sm text-muted-foreground mt-3">
            Click the number to call the franchise.
          </p>
        </div>

        {/* Close Button */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleCallModal; 
