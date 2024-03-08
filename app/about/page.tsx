import { Metadata } from "next";

export const metadata: Metadata = {
  title: "abdullahsidd // about",
  description: "Most of the things you (maybe) want to know about me.",
};

const AboutPage = () => {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <h1 className="text-2xl font-bold pb-8">About</h1>

      <div className="flex flex-col gap-16 dark:text-zinc-200">
        <section className="flex flex-col md:flex-row gap-1 md:gap-9">
          <h2 className="md:w-28 text-zinc-400 font-medium shrink-0 md:text-left">
            Who am I
          </h2>
          <div className="flex flex-col gap-6">
            <p>
              Hi there<span className="wave mx-1">👋🏻</span> I&apos;m Abdullah
              Sidd, a 19-year-old guy, passionate about programming.
            </p>
            <p>
              My interest in computers started at a very young age, and I was
              very eager to learn as much as I could about them. I remember my
              first website that I made years ago, which had a terrible
              interface and design.I have always had a strong interest in
              computers and technology. From a young age, I was eager to learn
              as much as possible. One of my earliest experiences with computers
              was creating my own portfolio website.
            </p>
            <p>
              After this, I became more and more interested in web development
              and began to find resources to learn more about it. I watched many
              video tutorials, read through documentation and articles. The
              first programming language I learned was C, and from there, I also
              learned Python and Java but find in love with javascript. In
              addition to working with programming languages, I have also
              experimented with databases and have found that Firebase is my
              favorite so far. I have also used MySQL and Supabase few time.
            </p>
            <p>
              Currently, I&apos;m looking for an intern position as a full stack
              developer.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-1 md:gap-9">
          <h2 className="md:w-28 text-zinc-400 font-medium shrink-0 md:text-left">
            How I Tech
          </h2>
          <div className="flex flex-col gap-6">
            <p>
              As a full-stack developer, my primary focus involves handling both
              backend operations and user interface development. For robust
              tasks requiring performance and scalability,I use React (Next.js)
              for creating user interfaces, and I enhance the styling with
              TailwindCSS and mostly Firebase for backend operations.
            </p>
            <p>
              I have 3 years of experience working with these technologies, as
              well as experience in other languages such as TypeScript.
            </p>
            <p>
              In a nutshell, I&apos;m all about breaking down complex tech
              stuff, building cool things, and having some fun along the way!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
