import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Send } from "lucide-react";

interface RequestInformationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  franchise: {
    name: string;
  };
}

const RequestInformationModal = ({
  open,
  onOpenChange,
  franchise,
}: RequestInformationModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const handleClose = (open: boolean) => {
    onOpenChange(open);

    if (!open) {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Request Information
              </DialogTitle>

              <DialogDescription>
                Interested in{" "}
                <span className="font-semibold text-foreground">
                  {franchise.name}
                </span>
                ? Fill out the form below and the franchise team will get in
                touch with you.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>

                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-destructive">*</span>
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>

                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Message
                </Label>

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you would like to know..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Submit Request
              </Button>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="py-8 text-center">
            <div className="flex justify-center mb-5">
              <div className="rounded-full bg-accent/10 p-4">
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-3">
              Request Submitted!
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Thank you for your interest in{" "}
              <span className="font-semibold text-foreground">
                {franchise.name}
              </span>
              .
              <br />
              The franchise team will review your request and contact you soon.
            </p>

            <Button
              onClick={() => handleClose(false)}
              className="min-w-32"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RequestInformationModal; 
