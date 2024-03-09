import Image from "next/image";
import { Movie } from "@/app/(more)/movies/data";

export const MovieCard = ({ title, href, imgName, movieImage }: Movie) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="relative h-32 focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left shadow-lg max-w-2xl group"
    >
      <Image
        className="transition duration-300 ease-in-out rounded-md bg-cover absolute w-full h-full group-hover:opacity-40"
        src={movieImage}
        alt={imgName}
        placeholder="blur"
      />
      <div className="transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 ml-0 sm:ml-4 z-40 text-2xl my-auto font-bold">
        <div>{title}</div>
      </div>
    </a>
  );
};
