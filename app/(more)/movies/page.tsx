import { Metadata } from "next";
import { Movie, MovieData } from "./data";
import { MovieCard } from "@/components/misc/(movies)/movie-card";

export const metadata: Metadata = {
  title: "abdullah sidd // movies",
  description: "Find a list of my fav and currently watching movies.",
};

const MoviesPage = () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Marvel Cinematic Movies</h1>
        <p className="pb-5">
          I have loved watching marvel studios since childhood. My first movie
          was Spiderman, which is one of the most popular ones. It was suggested
          to me by my father. Since then, I have watched many different series
          of marvel cinematic, but Iron Man, Infinity War, Endgame, and Loki are
          some of my favorites.
        </p>
        <p className="pt-5">
          Below are some of my all-time favorite marvel cinematic movies.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {MovieData.map((movie: Movie) => (
          <MovieCard
            key={movie.href}
            title={movie.title}
            altTitle={movie.altTitle}
            href={movie.href}
            imgName={movie.imgName}
            starred={movie.starred}
            movieImage={movie.movieImage}
          />
        ))}
      </div>
    </section>
  );
};

export default MoviesPage;
