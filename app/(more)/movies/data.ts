export interface Movie {
  title: string;
  altTitle?: string;
  href: string;
  imgName: string;
  starred?: boolean;
}

export const MovieData: Movie[] = [
  {
    title: "Iron Man",
    href: "https://www.imdb.com/title/tt0371746/",
    imgName: "ironman",
    starred: true,
  },
  {
    title: "Guardians of the Galaxy",
    href: "https://www.imdb.com/title/tt2015381/",
    imgName: "guardianOfGalaxy",
    starred: true,
  },
  {
    title: "Captain America: The Winter Soldier",
    href: "https://www.imdb.com/title/tt1843866/",
    imgName: "winterSoldier",
    starred: true,
  },
  {
    title: "Black Panther",
    href: "https://www.imdb.com/title/tt1825683/",
    imgName: "blackPanther",
  },
  {
    title: "Thor: Ragnarok",
    href: "https://www.imdb.com/title/tt3501632/",
    imgName: "ragnarok",
  },
  {
    title: "Avengers: Infinity War",
    href: "https://www.imdb.com/title/tt4154756/",
    imgName: "infinityWar",
    starred: true,
  },
  {
    title: "Spider-Man: Homecoming",
    href: "https://www.imdb.com/title/tt2250912/",
    imgName: "homecoming",
  },
  {
    title: "Avengers: Endgame",
    href: "https://www.imdb.com/title/tt4154796/",
    imgName: "endgame",
    starred: true,
  },
];
