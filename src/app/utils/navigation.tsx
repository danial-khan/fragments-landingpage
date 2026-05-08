import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function normalizedPathname(): string {
  const p = window.location.pathname.replace(/\/$/, "");
  return p === "" ? "/" : p;
}

export const scrollToSection = (id: string, router: AppRouterInstance) => {
  if (normalizedPathname() !== "/") {
    router.push(`/#${id}`);
    return;
  }

  const run = () =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  run();
  requestAnimationFrame(run);
};
