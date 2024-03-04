import { StaticImageData } from "next/image";

import ironman from "@/public/movies/ironman.png";
import endgame from "@/public/movies/endgame.png";
import ragnarok from "@/public/movies/ragnarok.png";
import homecoming from "@/public/movies/homecoming.png";
import infinitywar from "@/public/movies/infinitywar.png";
import blackPanther from "@/public/movies/blackPanther.png";
import winterSoldier from "@/public/movies/winterSoldier.png";
import guardianOfGalaxy from "@/public/movies/guardianOfGalaxy.png";

export interface Movie {
  title: string;
  altTitle?: string;
  href: string;
  imgName: string;
  starred?: boolean;
  movieImage: StaticImageData;
}

export const MovieData: Movie[] = [
  {
    title: "Iron Man",
    href: "https://www.imdb.com/title/tt0371746/",
    imgName: "ironman",
    starred: true,
    movieImage: ironman,
  },
  {
    title: "Guardians of the Galaxy",
    href: "https://www.imdb.com/title/tt2015381/",
    imgName: "guardianOfGalaxy",
    starred: true,
    movieImage: guardianOfGalaxy,
  },
  {
    title: "Captain America: The Winter Soldier",
    href: "https://www.imdb.com/title/tt1843866/",
    imgName: "winterSoldier",
    starred: true,
    movieImage: winterSoldier,
  },
  {
    title: "Black Panther",
    href: "https://www.imdb.com/title/tt1825683/",
    imgName: "blackPanther",
    movieImage: blackPanther,
  },
  {
    title: "Thor: Ragnarok",
    href: "https://www.imdb.com/title/tt3501632/",
    imgName: "ragnarok",
    movieImage: ragnarok,
  },
  {
    title: "Avengers: Infinity War",
    href: "https://www.imdb.com/title/tt4154756/",
    imgName: "infinityWar",
    starred: true,
    movieImage: infinitywar,
  },
  {
    title: "Spider-Man: Homecoming",
    href: "https://www.imdb.com/title/tt2250912/",
    imgName: "homecoming",
    movieImage: homecoming,
  },
  {
    title: "Avengers: Endgame",
    href: "https://www.imdb.com/title/tt4154796/",
    imgName: "endgame",
    starred: true,
    movieImage: endgame,
  },
];
