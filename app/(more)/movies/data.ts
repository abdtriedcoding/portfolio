import { StaticImageData } from "next/image";

import inception from "@/public/movies/inception.png";
import martian from "@/public/movies/martian.png";
import matrix from "@/public/movies/matrix.png";
import titanic from "@/public/movies/titanic.png";
import endgame from "@/public/movies/endgame.png";
import jumanji from "@/public/movies/jumanji.png";

export interface Movie {
  title: string;
  href: string;
  imgName: string;
  movieImage: StaticImageData;
}

export const MovieData: Movie[] = [
  {
    title: "Inception",
    href: "https://www.imdb.com/title/tt1375666/",
    imgName: "inception.png",
    movieImage: inception,
  },
  {
    title: "The Martian",
    href: "https://www.imdb.com/title/tt3659388/",
    imgName: "martian.png",
    movieImage: martian,
  },
  {
    title: "The Matrix",
    href: "https://www.imdb.com/title/tt0133093/",
    imgName: "matrix.png",
    movieImage: matrix,
  },

  {
    title: "Avengers: Endgame",
    href: "https://www.imdb.com/title/tt4154796/",
    imgName: "endgame.png",
    movieImage: endgame,
  },
  {
    title: "Titanic",
    href: "https://www.imdb.com/title/tt0120338/",
    imgName: "titanic.png",
    movieImage: titanic,
  },
  {
    title: "Jumanji",
    href: "https://www.imdb.com/title/tt2283362/",
    imgName: "jumanji.png",
    movieImage: jumanji,
  },
];
