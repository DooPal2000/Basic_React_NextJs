import { API_URL } from "../../../(home)/page";

async function getMovies(id: string){
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieDetail({
    params : {id},
}: {
    params: { id: string };
}) {
    const movie = await getMovies(id);
    return <h1>{movie.title}</h1>;
}

// export default async function MovieDetail(context: { params: Promise<{ id: string }> }) {
//     const { id } = await context.params; // 비동기적으로 params를 처리
//     const movie = await getMovies(id);
//     return <h1>{movie.title}</h1>;
//   }