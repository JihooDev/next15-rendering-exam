import { Fetch } from '@/instance/fetch'
import React from 'react'

export default async function page() {
    const fetch = new Fetch(process.env.NEXT_PUBLIC_BASE_URL!);

    const res = await fetch.get(
        '/person/popular',
        {
            cache: 'no-store'
        }
    );

    return (
        <div>
            <h1 className='text-xl font-bold'>SSG Page</h1>
            <ul>
                <li>요청의 결과를 무조건 캐싱함</li>
            </ul>
            <ul>
                {res.results.map((person: any) => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
    )
}
