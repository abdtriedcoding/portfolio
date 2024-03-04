import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Intro } from "@/components/misc/(home)/intro";
import Image from "next/image";
import socialphoto from "@/public/socialphoto.webp";

const Home = () => {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <div className="w-40 h-40 mx-auto mb-8">
        <Image
          className="rounded-full object-cover w-full h-full"
          src={socialphoto}
          role="presentation"
          alt="socialphoto"
          priority
          placeholder="blur"
        />
      </div>
      <h1 className="mt-0 mb-2 text-2xl font-bold text-center dark:text-white">
        Abdullah Sidd
      </h1>
      <div className="max-w-md mx-auto text-center text-zinc-600 dark:text-zinc-400">
        <HoverCard>
          <HoverCardTrigger className="mr-1 text-sm font-semibold">
            19 years old
          </HoverCardTrigger>
          Software Engineer, India
          <HoverCardContent className="mt-1">
            <p>Born on January 5, 2005</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <Intro />
    </section>
  );
};

export default Home;
