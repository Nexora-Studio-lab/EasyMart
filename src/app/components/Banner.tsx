export default function Banner() {
  return (
    <div className="fixed inset-x-0 top-16 z-40 overflow-hidden bg-gradient-to-r from-red-500 via-yellow-500 via-50% to-green-500 py-2.5 text-center text-sm font-bold text-white sm:text-base">
      <div className="animate-pulse">
        خصم 30% لأول 10 عملاء — العرض محدود!
      </div>
    </div>
  );
}
