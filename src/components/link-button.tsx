import Link from 'next/link'
import React from 'react'

type Props = {
    href: string
    title: string
}

export default function LinkButton({ href, title }: Props) {
    return (
        <Link
            href={href}
            className='bg-white text-black px-5 py-2 rounded-md font-bold'
        >
            {title}
        </Link>
    )
}
