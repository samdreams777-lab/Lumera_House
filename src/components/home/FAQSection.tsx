import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-lumera-cream text-lumera-black relative border-b border-lumera-sand">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <StaggerReveal className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lumera-terracotta inline-flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            {t.faq.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-lumera-black tracking-tight mt-3">
            {t.faq.title}
          </h2>
        </StaggerReveal>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <StaggerReveal key={idx} delay={0.1 * (idx + 1)}>
                <div className="bg-white rounded-sm border border-lumera-taupe/60 overflow-hidden shadow-sm transition-all duration-300">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-xl font-normal text-lumera-black hover:text-lumera-terracotta transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="p-1 bg-lumera-sand rounded text-lumera-black flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-sm text-lumera-stone font-light leading-relaxed border-t border-lumera-sand pt-4"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
