'use client'
import { Pagination } from "@shared/components/Pagination"
import { Table } from "@usuarios/components/Table"

const page = () => {
    return (
        <div className="padding-sides pt-5 pb-5 ">
            <div className="mb-5">

                <h2>Usuarios</h2>
                <div className=" d-flex justify-content-between mt-4">
                    <form>
                        <div className='search-container '>
                            <input type="search" className="form-control input-search input-search-with-button" id="search-btn" placeholder="Buscar..." name="search" aria-label="Campo de búsqueda" />
                            <button className="reset" type="reset" aria-label="Borrar"></button>
                            <button className="button-search" type="submit" aria-label="Buscar"></button>
                        </div>
                    </form>

                    <button className="btn btn-primary">+ Alta de usuario</button>
                </div>
            </div >
            <Table />

            <Pagination />
        </div >
    )
}

export default page
