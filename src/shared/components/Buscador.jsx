import { useUser } from '@/features/usuarios/hooks/useUser'
import { useState } from 'react'

export const Buscador = ({ handle, response }) => {

    const [searchText, setSearchText] = useState("");

    return (
        <>
            <form>
                <div className="form-label-container">
                </div>
                <div className='search-container'>
                    <input
                        type="search"
                        className="form-control input-search input-search-with-button"
                        id="search-btn"
                        placeholder="Buscar..."
                        name="search" aria-label="Campo de búsqueda"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button
                        className="button-search" type="button" aria-label="Buscar"
                        onClick={() => handle(searchText)}
                    ></button>
                </div>
                {!response.success && <div
                    className="text-danger mt-1">
                    {response.message}
                </div>}

            </form>

        </>
    )
}