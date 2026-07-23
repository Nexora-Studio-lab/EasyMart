export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/5 via-transparent to-purple-500/5" />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="inline-block rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-medium text-brand">
          متوفر الآن بإصدارين Pro و Lite
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          الطريقة الأذكى لإدارة{" "}
          <span className="bg-gradient-to-r from-brand to-purple-600 bg-clip-text text-transparent">
            متجرك
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          EasyMart هو نظام نقاط بيع مكتبي شامل مع إدارة مخزون فورية، تحليلات متقدمة، دعم مستخدمين متعددين، وذكاء اصطناعي مدمج — مصمم لكل حجم من الأعمال.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40"
          >
            شاهد الأسعار
          </a>
          <a
            href="#features"
            className="rounded-full border border-border bg-white px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            استكشف المميزات
          </a>
        </div>

        <div className="mx-auto mt-16 hidden max-w-4xl overflow-hidden rounded-2xl border border-border bg-white shadow-2xl sm:block">
          <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ms-3 h-2.5 w-20 rounded bg-border" />
          </div>
          <div className="grid grid-cols-4 gap-px bg-border">
            <div className="bg-muted p-4 space-y-3">
              <div className="h-3 w-16 rounded bg-border" />
              <div className="h-8 w-full rounded bg-brand/10" />
              <div className="h-8 w-full rounded bg-white" />
              <div className="h-8 w-full rounded bg-white" />
              <div className="h-8 w-full rounded bg-white" />
              <div className="h-8 w-full rounded bg-white" />
            </div>
            <div className="col-span-3 bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="h-5 w-32 rounded bg-muted" />
                <div className="h-8 w-24 rounded bg-brand/20" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-border p-4">
                  <div className="h-3 w-14 rounded bg-muted" />
                  <div className="mt-2 h-6 w-20 rounded bg-brand/20" />
                </div>
                <div className="rounded-xl border border-border p-4">
                  <div className="h-3 w-14 rounded bg-muted" />
                  <div className="mt-2 h-6 w-16 rounded bg-brand/20" />
                </div>
                <div className="rounded-xl border border-border p-4">
                  <div className="h-3 w-14 rounded bg-muted" />
                  <div className="mt-2 h-6 w-24 rounded bg-brand/20" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-5 gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-16 rounded-lg border border-border bg-muted" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
