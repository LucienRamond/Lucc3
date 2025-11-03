import type { ReactNode } from "react";

export default function Page({
  children,
  title,
  style,
}: {
  children: ReactNode;
  title?: string;
  style?: string;
}) {
  return (
    <div
      className={` p-2 bg-[var(--page-bg)] lg:w-[80%] sm:[90%] w-[99%] sm:my-2 my-1 rounded-xl border border-[var(--border)] ${style}`}
    >
      {title && (
        <div>
          <div className="anim-from-top text-xl font-bold text-[var(--page-title)] w-[80%] m-auto pb-2">
            {title}
          </div>
          <div className=" anim-from-left h-[1px] bg-[var(--page-title)] sm:w-[50%] w-[80%] m-auto"></div>
        </div>
      )}
      <div className=" p-2 sm:max-w-[90%] w-full mx-auto">{children}</div>
    </div>
  );
}
