import MovieCard from '@/components/movie-card';
import { Fetch } from '@/instance/fetch'
import { TMovie } from '@/types/types';
import React from 'react'

export default async function page() {
    const fetch = new Fetch(process.env.NEXT_PUBLIC_BASE_URL!);

    const res = await fetch.get(
        '/trending/movie/day',
        {
            cache: 'no-store'
        }
    );

    const { results } = res as { results: TMovie[] };

    return (
        <div>
            <h1 className='text-xl font-bold'>SSG Page</h1>
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
