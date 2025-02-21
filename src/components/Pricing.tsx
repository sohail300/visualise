import React from "react";
import { Card, CardContent } from "./ui/card";

const Pricing = () => {
  return (
    <div id="pricing" className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:w-4/5 lg:w-3/4">
        <div className="flex flex-col">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            <span className="font-manrope bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent">
              Pricing
            </span>
          </div>
        </div>
        <Card className="relative overflow-hidden border border-primary/20 mt-8 sm:mt-10 md:mt-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

          <CardContent className="relative z-10 p-6 sm:p-8 text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-primary/20 backdrop-blur-lg border border-primary/20">
              <span className="text-primary text-sm sm:text-base font-medium">
                100% Free
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              No Signup, No Limits, No Fees!
            </h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
