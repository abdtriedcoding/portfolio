import { Metadata } from "next";
import { skills } from "@/app/skills/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "abdullah sidd // skills",
  description:
    "Comprehensive collection of acquired tech skills including languages, libraries, frameworks, and databases i acquire.",
};

const SkillsPage = () => {
  return (
    <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <div className="pb-8 space-y-8">
        <h1 className="text-2xl font-bold">Skills</h1>
        <p>
          Comprehensive collection of acquired tech skills including languages,
          libraries, frameworks, and databases i acquire.
        </p>
      </div>
      <div className="flex flex-col gap-16 dark:text-zinc-200">
        <div className="space-y-3 ">
          {skills.map((skill) => (
            <Button variant={"outline"} className="mr-3" key={skill}>
              {skill}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
