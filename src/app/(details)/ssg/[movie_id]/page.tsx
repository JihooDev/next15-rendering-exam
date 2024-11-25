import { Fetch } from '@/instance/fetch'
import { TMovie, TMovieDetail } from '@/types/types'
import React from 'react'

const fetch = new Fetch(process.env.NEXT_PUBLIC_BASE_URL!);

type Props = {
    params: Promise<{
        movie_id: string
    }>
}

export async function generateStaticParams() {
    const res = await fetch.get(
        '/discover/movie',
        {
            cache: 'force-cache'
        }
    );

    const { results } = res as { results: TMovie[] };

    return results.map((movie) => ({
        movie_id: movie.id.toString()
    }));
}

export default async function page({ params }: Props) {
    // Next15 부터는 params는 Promise로 가져온다.
    // https://nextjs.org/docs/app/building-your-application/upgrading/version-15
    // https://nextjs.org/docs/messages/sync-dynamic-apis
    const { movie_id } = await params;

    const res = await fetch.get(
        `/movie/${movie_id}`,
        {
            cache: 'force-cache'
        }
    );

    const data = res as TMovieDetail;

    return (
        <div>
            {movie_id}
        </div>
    )
}
