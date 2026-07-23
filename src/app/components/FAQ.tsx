"use client";

import { useState } from "react";

const faqs = [
  {
    q: "ما الفرق بين Lite و Pro؟",
    a: "Lite هو نظام نقاط بيع اقتصادي لمستخدم واحد مع مخزون وتقارير أساسية. Pro يضيف مستخدمين غير محدودين، تحليلات متقدمة، ميزات الذكاء الاصطناعي، دعم متعدد اللغات والعملات، ودعم ذو أولوية.",
  },
  {
    q: "هل أحتاج إلى اتصال بالإنترنت؟",
    a: "EasyMart يعمل بدون إنترنت للوظائف الأساسية لنقطة بيع. التحليلات وميزات الذكاء الاصطناعي والمزامنة السحابية تتطلب اتصالاً بالإنترنت.",
  },
  {
    q: "ما الأجهزة التي أحتاجها؟",
    a: "EasyMart برنامج مكتبي يعمل على جهاز كمبيوتر أو لابتوب بنظام Windows. لإعداد صندوق بيع كامل، نوصي بشاشة لمسية، جهاز مسح الباركود، طابعة فواتير حرارية، ودرج نقود — جميعها متوافقة مع البرنامج.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            الأسئلة الشائعة
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-foreground"
              >
                {faq.q}
                <svg
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
