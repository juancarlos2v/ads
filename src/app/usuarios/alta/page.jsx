'use client'
import { useUser } from "@/features/usuarios/hooks/useUser"
import { Buscador } from "@shared/components/Buscador"
import { MigasPan } from "@shared/components/MigasPan"

const enlacesMigas = [{ nombre: "Inicio", enlace: '/' }, { nombre: "Usuarios", enlace: '/usuarios' }, { nombre: "Alta de usuario", enlace: '/usuarios/alta' }]

const page = () => {

    const { user, setUser, registerUser, getUserFromAD, result } = useUser()

    return (
        <div className="padding-sides pt-5 pb-5 bg-neutral">

            <MigasPan
                enlaces={enlacesMigas}
            />

            <h2>Alta de usuario</h2>
            <p className="info">Registre un usuario completando el siguiente formulario </p>
            <div className="d-flex flex-wrap gap-4 mt-4 bg-white p-5"
                style={{ borderRadius: '10px' }}
            >
                {/* BUSCADOR CUIL */}
                <div className="col-lg-4 col-12">
                    <label forhtml="input-number" className="form-label">
                        CUIL
                    </label>
                    <span className="badge-forms badge-required-forms">Requerido</span>
                    <Buscador
                        handle={getUserFromAD}
                        response={result}
                    />

                </div>
                {/* EMAIL ENCONTRADO */}
                <div className="col-lg-4 col-12">
                    <div className="form-label-container ">
                        <label forhtml="input-text" className="form-label">
                            Email
                        </label>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="input-text"
                        name="campoTexto"
                        aria-describedby="Texto"
                        value={user.email}
                        disabled
                    />
                </div>
                {/* AREA ENCONTRADA */}
                <div className="col-lg-3 col-12">
                    <div className="form-label-container col-2">
                        <label forhtml="input-text" className="form-label">
                            Area
                        </label>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="input-text"
                        name="campoTexto"
                        aria-describedby="Texto"
                        value={user.area}
                        disabled
                    />
                </div>
                {/* NOMBRE ENCONTRADO */}
                <div className="col-lg-4 col-12">
                    <div className="form-label-container">
                        <label forhtml="input-text" className="form-label">
                            Nombre
                        </label>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="input-text"
                        name="campoTexto"
                        aria-describedby="Texto"
                        value={user.name}
                        disabled
                    />
                </div>

                {/* APELLIDO ENCONTRADO */}
                <div className="col-lg-5 col-12">
                    <div className="form-label-container">
                        <label forhtml="input-text" className="form-label">
                            Apellido
                        </label>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="input-text"
                        name="campoTexto"
                        aria-describedby="Texto"
                        value={user.lastName}
                        disabled
                    />
                </div>

                {/* GRUPOS (CUENTA) A ASIGNAR */}
                <div className="col-lg-2 col-12">
                    <div className="form-label-container">
                        <label forhtml="input-select" className="form-label">
                            Grupo
                        </label>
                    </div>
                    <select className="form-control form-select" aria-label="Ejemplo de selección por defecto">
                        <option value="0">Seleccionar</option>
                        <option value="1">Opción</option>
                        <option value="2">Opción</option>
                        <option value="3">Opción</option>
                    </select>
                </div>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => registerUser(user.cuil)}
                >Registrar
                </button>
                <button type="button" className="btn btn-outline-secondary">Volver</button>
            </div>
        </div>
    )
}

export default page
