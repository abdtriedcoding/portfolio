import { workData } from "@/app/(more)/work/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "abdullahsidd // work",
  description: "Find a list of my few projects here.",
};

const workPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Work</h1>
        I love building side projects that solve either my own or someone
        else&apos;s problems. Here is an extensive list of all the stuff I have
        built over the years.
        <br />
        <br />
        <p>
          As a student, I am now interested in doing internship 🤭?
          <br />
          Always happy to discuss an idea — hit me a up at
          <a
            href="https://www.linkedin.com/in/abdullahsidd"
            className="link ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @abdullahsidd
          </a>
          {""}.
        </p>
      </div>
      <Table>
        <TableCaption>
          A list of my few projects ranked such that it represent how complex
          projects i made over a period of time, showing my journey as starting
          from junior to mid level self taught developer.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Project</TableHead>
            <TableHead className="text-right">Description</TableHead>
            <TableHead className="text-right">Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workData.map((item) => (
            <TableRow key={item.title} className="w-full">
              <TableCell className="font-medium">
                <a
                  href={item.link}
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </TableCell>
              <TableCell
                className="text-right"
                dangerouslySetInnerHTML={{ __html: item.shortDesc }}
              ></TableCell>
              <TableCell className="text-right">{item.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default workPage;
