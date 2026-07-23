import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2 font-bold text-sm text-foreground">
          <Image src="/logo-pro.png" alt="EasyMart" width={24} height={24} className="h-6 w-6 object-contain" />
          EasyMart
        </div>

        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground sm:gap-x-6">
          <li><a href="#features" className="hover:text-foreground">المميزات</a></li>
          <li><a href="#pricing" className="hover:text-foreground">الأسعار</a></li>
          <li><a href="#faq" className="hover:text-foreground">الأسئلة الشائعة</a></li>
          <li><a href="#" className="hover:text-foreground">الخصوصية</a></li>
          <li><a href="#" className="hover:text-foreground">الشروط</a></li>
        </ul>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} EasyMart. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
