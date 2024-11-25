import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos(
    { id }: { id: string },
    // props: { params: Promise<{ id: string }>; }
) {
    const videos = await getVideos(id);
    return (
        <h6>{JSON.stringify(videos)}</h6>
    );
}
