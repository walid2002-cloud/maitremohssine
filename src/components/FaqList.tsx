"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqList({
  title,
  items,
}: {
  title: string;
  items: readonly { q: string; a: string }[];
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h2 className="mb-8 text-center text-3xl font-black">{title}</h2>
      <Accordion type="single" collapsible className="rounded-3xl border border-gold/15 px-5">
        {items.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
