import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";


//  `Promise.all`을 사용하여 데이터를 병렬로 가져오는 대신, `MovieInfo`와 `MovieVideos` 같은 개별 컴포넌트를 사용하는 방식이 더 진보된 이유는 다음과 같습니다:

// ## 성능 향상

// 1. **스트리밍 및 점진적 렌더링**: 영화 정보와 비디오를 별도의 컴포넌트로 분리하면, Next.js는 데이터를 사용할 수 있을 때마다 스트리밍을 시작할 수 있습니다. 이를 통해 페이지의 일부를 모든 데이터가 로드되기 전에 점진적으로 렌더링할 수 있습니다.

// 2. **병렬 데이터 가져오기**: 각 컴포넌트가 자체적으로 데이터를 가져올 수 있기 때문에, 전체 페이지가 로드될 때까지 기다릴 필요 없이 각 컴포넌트가 준비되는 대로 표시할 수 있습니다.

// ## 코드 구조 개선

// 1. **모듈화**: 코드를 모듈화하여 유지보수성을 높일 수 있습니다. 각 컴포넌트는 자신의 데이터 로직을 관리하므로, 코드의 가독성과 재사용성이 향상됩니다.

// 2. **독립적인 업데이트**: 특정 컴포넌트의 데이터 로직이나 UI를 변경해야 할 때, 해당 컴포넌트만 수정하면 되므로 전체 코드에 미치는 영향을 최소화할 수 있습니다.

// 이러한 이유들로 인해, 개별 컴포넌트를 사용하는 방식은 더 유연하고 효율적인 방법으로 간주됩니다.




// async function getMovie(id: string) {
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// async function getVideos(id: string) {
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }

export default async function MovieDetail(
    props: {
        params: Promise<{ id: string }>;
    }
) {
    const params = await props.params;

    const {
        id
    } = params;

    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
        <div>
            Movie detail page
            <Suspense fallback={<h1>Loading Movie Info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Videos...</h1>}>
                <MovieVideos id={id} />
            </Suspense>

        </div>
    );
}


// export default async function MovieDetail(context: { params: Promise<{ id: string }> }) {
//     const { id } = await context.params; // 비동기적으로 params를 처리
//     const movie = await getMovies(id);
//     return <h1>{movie.title}</h1>;
//   }