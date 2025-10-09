import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className=" max-w-[90%] p-2 border w-auto min-w-[80%]">
      <div className="grid justify-center justify-items-center w-full grid-cols-1">
        {children}
      </div>
    </div>
  );
}
