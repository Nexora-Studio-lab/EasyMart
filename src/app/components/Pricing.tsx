const plans = [
  {
    name: "Lite",
    image: "/logo-lite.png",
    tagline: "مثالي للمتاجر الصغيرة",
    price: "6,300 DA",
    priceNote: "دفعة واحدة",
    features: [
      "نقطة بيع لمستخدم واحد",
      "تتبع أساسي للمخزون",
      "تقارير المبيعات (يومية/أسبوعية)",
      "طباعة الفواتير",
    ],
    cta: "اطلب الآن",
    message: "مرحباً، أريد طلب نسخة Lite من EasyMart",
    highlighted: false,
  },
  {
    name: "Pro",
    image: "/logo-pro.png",
    tagline: "للأعمال النامية",
    price: "8,500 DA",
    priceNote: "دفعة واحدة",
    features: [
      "مستخدمون غير محدودين والأدوار",
      "مخزون متقدم مع التنبيهات",
      "لوحة تحليلات كاملة",
      "مساعد ذكاء اصطناعي مدمج",
    ],
    cta: "اطلب الآن",
    message: "مرحباً، أريد طلب نسخة Pro من EasyMart",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            أسعار بسيطة وشفافة
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            اختر الخطة المناسبة لحجم عملك.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 sm:p-8 ${
                plan.highlighted
                  ? "border-brand shadow-xl shadow-brand/10"
                  : "border-border bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                  الأكثر شعبية
                </span>
              )}

              {"image" in plan && (
                <div className="mb-6 flex items-center justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-brand/5 p-4 ring-1 ring-brand/10">
                    <img
                      src={`/EasyMart${plan.image}`}
                      alt={`${plan.name} logo`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              <h3 className="text-center text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-center text-sm text-muted-foreground">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-foreground sm:text-4xl">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.priceNote}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/213667564094?text=${encodeURIComponent(plan.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark"
                    : "border border-border bg-white text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
