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
    <div id="faq" className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:w-4/5 lg:w-3/4">
        <div className="flex flex-col">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            <span className="font-manrope bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent ">
              FAQs
            </span>
          </div>
        </div>

        <div className="w-full mt-8 sm:mt-10 md:mt-12">
          <Accordion
            type="single"
            collapsible
            className="space-y-3 md:space-y-4"
          >
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
                className="backdrop-blur-lg border border-gray-800/20 rounded-sm px-3 sm:px-4"
              >
                <AccordionTrigger className="text-left text-white text-base sm:text-lg hover:text-white/80 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500/90 text-sm sm:text-base">
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
