import MovieCard from '@/components/movie-card';
import { Fetch } from '@/instance/fetch'
import { TMovie, TMovieDetail } from '@/types/types';
import { revalidatePath } from 'next/cache';
import React from 'react'

export default async function page() {
    const fetch = new Fetch(process.env.NEXT_PUBLIC_BASE_URL!);
    const randomPageNum = Math.floor(Math.random() * 50) + 1
    const movie = await fetch.get(`/discover/movie?page=${randomPageNum}`, {
        next: {
            revalidate: 5,
            tags: ['random_movie']
        }
    });

    const handleAction = async (_: FormData) => {
        'use server';
        revalidatePath('random_movie')
    };

    return (
        <div>
            <div className='flex justify-end'>
                <form
                    action={handleAction}
                >
                    <button
                        className='bg-blue-500 text-white px-3 py-1 rounded-md'
                    >
                        새로고침
                    </button>
                </form>
            </div>
            <div className='grid grid-flow-row grid-cols-4 mt-10 px-5 gap-10'>
                {
                    movie.results.map((movie: TMovie) => (
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
