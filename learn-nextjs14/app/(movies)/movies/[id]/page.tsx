export default async function MovieDetail({
    params,
}: {
    params: { id: string };
}) {
    const { id } =  await params;
    console.log(params);
    return <h1>Movie {id}</h1>;
}