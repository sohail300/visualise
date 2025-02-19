"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div id="faq" className="pb-12">
      <div className="container px-4 w-3/4 mx-auto">
        <div className="flex flex-col">
          <span className="text-4xl md:text-6xl bg-gradient-to-tr mx-2 from-white via-primary to-white bg-clip-text text-transparent my-12">
            FAQs
          </span>
        </div>

        <div className="mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Do I need an account?",
                answer:
                  "No, you can start using our service right away. Just upload your image and get started!",
              },
              {
                question: "Is it really free?",
                answer: "Yes, our services are completely free.",
              },
              {
                question: "What file types are supported?",
                answer:
                  "We support all major image formats including JPG, PNG, and WEBP and MP4 video format.",
              },
              {
                question: "Is my uploaded image stored?",
                answer:
                  "No, we process your image instantly and delete it immediately after. Your privacy is our priority.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="backdrop-blur-lg border-2 border-gray-800/20 rounded-sm px-4"
              >
                <AccordionTrigger className="text-left text-white text-lg hover:text-white/80 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500/90 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
