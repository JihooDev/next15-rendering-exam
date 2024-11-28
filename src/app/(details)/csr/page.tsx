"use client";

import MovieCard from '@/components/movie-card';
import { Fetch } from '@/instance/fetch';
import { TMovie } from '@/types/types';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data, setData] = useState<TMovie[] | null>(null);
    const [loading, setLoading] = useState(true);
    const fetch = new Fetch(process.env.NEXT_PUBLIC_BASE_URL!);
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch.get(
                '/trending/movie/day',
                {
                    cache: 'force-cache'
                }
            );
            setData(res.results);
        }

        fetchMovies().catch((e) => {
            console.error(e);
        }).finally(() => setLoading(false));
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <h1 className='text-xl font-bold'>CSR Page</h1>
            <div className='grid grid-flow-row grid-cols-4 mt-10 px-5 gap-10'>
                {
                    data?.map((movie) => (
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
