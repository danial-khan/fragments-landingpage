
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const scrollToSection = (id: string, router: AppRouterInstance) => {
  if (window.location.pathname === "/about") {
    router.push("/");
  }
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);
};

