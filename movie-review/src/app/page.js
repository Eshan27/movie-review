import { fetchMovieDetails } from "@/lib/tmdb";
import Image from "next/image";

export default async function Home() {
  const movieId = '550'; // Example movie ID
  const movieDetails = await fetchMovieDetails(movieId);

  // TMDb base URL for images
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500"; // Use 'w500' or other sizes like 'original'

  // Get the full poster URL
  const posterUrl = movieDetails?.poster_path
    ? `${posterBaseUrl}${movieDetails.poster_path}`
    : null;

  return (
    <div>
      <div>
        Carousal with movies and shareometer
      </div>
      <div>
        Review Cards
      </div>
      <div>
        Write your own reviews
      </div>
      <div>
        Top share-o-meter rated movies
      </div>
      <div>
        Footer
      </div>

      <div>
        List of movies:
        {JSON.stringify(movieDetails, null, 2)}
      </div>

      {/* Display the movie poster if available */}
      {posterUrl ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <Image 
            src={posterUrl} 
            alt={`${movieDetails.title} Poster`} 
            width={100} 
            height={150} 
            className="movie-poster"
          />
        </div>
      ) : (
        <p>Poster not available</p>
      )}
    </div>
  );
}
