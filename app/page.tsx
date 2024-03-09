import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Intro } from "@/components/misc/(home)/intro";

const Home = () => {
  return (
    <section className="h-[70vh] flex justify-center items-center">
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <h1 className="mt-0 mb-1 text-xl font-medium dark:text-white">
          Abdullah
        </h1>
        <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
          <HoverCard>
            <HoverCardTrigger className="mr-1">19y/o</HoverCardTrigger>
            Software Engineer, India
            <HoverCardContent className="w-auto h-8 p-0 px-2 pt-1">
              <p>5 Jan, 2005</p>
            </HoverCardContent>
          </HoverCard>
        </div>
        <Intro />
      </div>
    </section>
  );
};

export default Home;
