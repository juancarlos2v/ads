import React from 'react'

export const Buscador = () => {
    return (
        <>
            <form>
                <div className="form-label-container">
                </div>
                <div className='search-container'>
                    <input type="search" className="form-control input-search input-search-with-button" id="search-btn" placeholder="Buscar..." name="search" aria-label="Campo de búsqueda" />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="button-search" type="submit" aria-label="Buscar"></button>
                </div>
            </form>

        </>
    )
}