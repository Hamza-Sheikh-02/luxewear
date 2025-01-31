import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const NewsletterSubscription = () => {
  return (
    <div className="relative flex justify-center items-center h-[370px] sm:h-[444px]">
      <Card className="w-full max-w-xl rounded-lg p-4 bg-card text-card-foreground shadow-lg">
        <CardContent className="relative text-center max-w-[90%] mx-auto px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 leading-tight">
            Stay up to date about our latest offers
          </h1>
          <p className="text-sm sm:text-base mb-4 sm:mb-5">
            Sign up for our newsletter to receive exclusive offers, new ranges,
            and much more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="relative w-full sm:w-auto">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="pl-10 bg-input text-foreground rounded-md"
              />
            </div>
            <Button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/80">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterSubscription;
