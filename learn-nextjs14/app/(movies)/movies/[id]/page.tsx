import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}
async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail(
    props: {
        params: Promise<{ id: string }>;
    }
) {
    const params = await props.params;

    const {
        id
    } = params;

    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return <h1>{movie.title}</h1>;
}

// export default async function MovieDetail(context: { params: Promise<{ id: string }> }) {
//     const { id } = await context.params; // 비동기적으로 params를 처리
//     const movie = await getMovies(id);
//     return <h1>{movie.title}</h1>;
//   }