import { TMovie } from '@/types/types'
import Link from 'next/link'
import React from 'react'

type Props = {
    movie: TMovie
}

export default function MovieCard({ movie }: Props) {
    return (
        <Link href={`/ssg/${movie.id}`}>
            <div className='cursor-pointer'>
                <img
                    className='w-full h-96 object-cover'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <h1 className='text-lg font-bold mt-2'>{movie.title}</h1>
                <p className='text-sm mt-2'>{movie.release_date}</p>
                <p className='text-sm mt-2'>{movie.vote_average}</p>
            </div>
        </Link>
    )
}
