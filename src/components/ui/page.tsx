import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return <div className="w-full p-2 border-y sm:border">{children}</div>;
}
