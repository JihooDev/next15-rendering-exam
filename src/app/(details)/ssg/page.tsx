import MovieCard from '@/components/movie-card';
import { Fetch } from '@/instance/fetch'
import { TMovie } from '@/types/types';
import React from 'react'

// #Top rated movies
export default async function page() {
    const fetch = new Fetch(process.env.NEXT_PUBLIC_BASE_URL!);

    const res = await fetch.get(
        '/discover/movie',
        {
            cache: 'force-cache'
        }
    );

    const { results } = res as { results: TMovie[] };

    return (
        <div>
            <h1 className='text-xl font-bold'>SSG Page</h1>
            <ul>
                <li>요청의 결과를 무조건 캐싱함</li>
            </ul>
            <div className='grid grid-flow-row grid-cols-4 mt-10 px-5 gap-10'>
                {
                    results.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))
                }
            </div>
        </div>
    )
}
