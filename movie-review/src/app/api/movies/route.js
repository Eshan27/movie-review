import { fetchMovieDetails } from "@/lib/tmdb";

export async function GET(request) {
    try {
        const movies = await fetchMovieDetails(movieId);
        return new Response(JSON.stringify(movies), {status: 200});
    } catch ( error ) {
        return new Response(JSON.stringify({error: 'Failed to fetch movies'}), {status: 500});
    }
}