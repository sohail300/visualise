import React from "react";
import { Card, CardContent } from "./ui/card";

const Pricing = () => {
  return (
    <div id="pricing" className="py-12">
      <div className="container px-4 w-3/4 mx-auto ">
        <div className="flex flex-col">
          <div className="text-4xl md:text-6xl font-medium ">
            <span className="font-manrope bg-gradient-to-tr mx-2 from-white via-primary to-white bg-clip-text text-transparent">
              Pricing
            </span>
          </div>
        </div>
        <Card className="relative overflow-hidden border-2 border-primary/20 mt-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

          <CardContent className="relative z-10 p-8 text-center space-y-8">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/20 backdrop-blur-lg border border-primary/20">
              <span className="text-primary font-medium">100% Free</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-medium text-foreground">
              No Signup, No Limits, No Fees!
            </h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
