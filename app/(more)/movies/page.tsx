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
        <h1 className="text-2xl font-bold pb-8">My Fav Movies</h1>
        <p>
          Cinema has always held a special place in my heart, starting with
          Spiderman a childhood favorite movie suggested by my father. Over the
          years, I've enjoyed a wide range of films, with standout favorites
          like Inception, The Martian, The Matrix, Avengers Endgame, Titanic and
          Jumanji.
        </p>
        <p className="pt-5">Below are some of my all-time favorite movies.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {MovieData.map((movie: Movie) => (
          <MovieCard
            key={movie.href}
            title={movie.title}
            href={movie.href}
            imgName={movie.imgName}
            movieImage={movie.movieImage}
          />
        ))}
      </div>
    </section>
  );
};

export default MoviesPage;
