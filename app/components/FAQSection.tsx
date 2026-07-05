"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqItems: FAQItem[] = [
  {
    question: "Is this referral code verified?",
    answer: "Yes. Every referral code is reviewed for accuracy and usability before it appears on the website.",
  },
  {
    question: "How often are codes updated?",
    answer: "Referral offers are updated regularly to reflect the latest benefits and working codes.",
  },
  {
    question: "Does copying the code cost anything?",
    answer: "No. Copying a referral code is a free action and works immediately from the browser.",
  },
  {
    question: "Can existing users use referral codes?",
    answer: "Existing users may be able to use referral codes for eligible offers depending on the app policy.",
  },
];

export function FAQSection({
  items = defaultFaqItems,
  title = "FAQ",
  subtitle = "Common questions about referral codes and how the website works.",
}: {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="space-y-8">
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={item.question} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between px-5 py-5 text-left text-slate-950"
              >
                <span className="text-base font-semibold">{item.question}</span>
                <ChevronDown className={`h-5 w-5 transition ${isOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              {isOpen ? (
                <div className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">
                  {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
