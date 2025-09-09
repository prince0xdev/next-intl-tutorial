"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchTo = (lang: string) => {
    if (lang !== locale) {
      const segments = pathname.split("/");
      segments[1] = lang;
      router.replace(segments.join("/"));
    }
  };

  return (
    <div className="flex items-center">
      <div
        className="flex items-center bg-white rounded-full px-4 py-1 shadow-md cursor-pointer select-none border-[1px] border-neutral-200"
        onClick={() => switchTo(locale === "en" ? "fr" : "en")}
        style={{ minWidth: 60 }}
      >
        <Globe className="w-5 h-5 mr-2 text-neutral-300" />
        <span className="font-semibold text-gray-700">
          {locale.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
