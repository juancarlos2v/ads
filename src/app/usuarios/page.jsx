'use client'
import { Buscador } from "@shared/components/Buscador"
import { Pagination } from "@shared/components/Pagination"
import { Table } from "@usuarios/components/Table"
import { useRouter } from "next/navigation"

const page = () => {

    const route = useRouter()

    return (
        <div className="padding-sides pt-5 pb-5 ">
            <div className="mb-5">

                <h2>Usuarios</h2>
                <div className=" d-flex justify-content-between mt-4">
                    <Buscador />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => route.push("/usuarios/alta")}
                    >+ Alta de usuario</button>
                </div>
            </div >
            <Table />
            <Pagination />
        </div >
    )
}

export default page
