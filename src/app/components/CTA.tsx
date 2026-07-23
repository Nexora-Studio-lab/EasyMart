export default function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-purple-600 px-6 py-10 text-center sm:px-16 sm:py-16">
          <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-60" />

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            مستعد لتحويل أعمالك؟
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            انضم إلى آلاف أصحاب المتاجر الذين يستخدمون EasyMart للبيع بشكل أسرع، الإدارة بذكاء، والنمو بشكل أكبر.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              اختر خطتك الآن
            </a>
            <a
              href="https://wa.me/213667564094?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20EasyMart"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              تحدث مع المبيعات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
