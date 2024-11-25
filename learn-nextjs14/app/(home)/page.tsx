// "use client"

// import { useEffect, useState } from "react";

export const metadata = {
    title: "Home",
};
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// 기존 Client 측 컴포넌트에서 Server 측 컴포넌트로 변경
async function getMovies() {
    await new Promise((resolve, reject) => setTimeout(resolve, 5000));
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    // const [isLoading, setIsLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const getMovies = async () => {
    //     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    //     const json = await response.json();
    //     setMovies(json);
    //     setIsLoading(false);
    // };
    // useEffect(() => {
    //     getMovies();
    // }, []);

    const movies = await getMovies();
    return (
        <div>
            {JSON.stringify(movies)}
        </div>
    )
}