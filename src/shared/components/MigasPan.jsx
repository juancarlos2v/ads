import Link from 'next/link'
import React from 'react'

export const MigasPan = ({ enlaces }) => {

    return (
        <>
            <nav aria-label="Navegación secundaria ">
                <ol className="breadcrumb mb-5"

                >
                    {enlaces.map((enlace, index) => (
                        <li className="breadcrumb-item" key={index}>
                            <Link href={enlace.enlace} className='link-inherit text-decoration-none'>{enlace.nombre} </Link>
                        </li>
                    ))}


                </ol>
            </nav>

        </>
    )
}
