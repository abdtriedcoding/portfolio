import { Metadata } from "next/types";
import { UsefulThings } from "@/components/misc/(uses)/useful-things";

export const metadata: Metadata = {
  title: "abdullah // uses",
  description: "A list of software and hardware that I use.",
};

const UsesPage = () => {
  return (
    <section>
      <div className="pb-5">
        <h1 className="text-2xl font-bold pb-8">Uses</h1>
        Here's a list of software and hardware that I use on a regular basis.
        <br />
        <br />
        <p>
          Every once in a while someone asks me about my development environment
          or has questions about certain hardware. I thought it would be fun to
          list out everything I use here. Keep in mind, I change things around
          quite a bit, but I will try to keep this page updated. If I missed
          anything, please let me know.
        </p>
      </div>
      <UsefulThings />
    </section>
  );
};

export default UsesPage;
