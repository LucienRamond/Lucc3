import { ContentContext } from "@/providers/ContentContext";
import { useContext } from "react";

export default function Home() {
  const { content } = useContext(ContentContext);

  return (
    <div className=" mt-[50px] max-w-[80%] text-[var(--homepage-title)] ">
      <div className=" font-bold lg:text-9xl sm:text-7xl text-6xl pb-2 anim-from-top">
        {content.company_name}
      </div>
      <div className=" h-[1px] bg-[var(--border)] anim-from-left"></div>
      <div className=" flex font-bold lg:text-4xl sm:text-2xl text-lg pt-2">
        <div className=" typing-animate">{content.company_description}</div>
      </div>
    </div>
  );
}
