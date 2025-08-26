export const Form = () => {
    return (
        <>
            <div className="pt-3 pb-4"
                style={{
                    width: '35rem',
                    borderRadius: '1rem',
                    backgroundColor: 'white',
                    overflowY: 'auto',
                }}
            >
                <div className="vertical-example col-12 p-4 responsive-scroll"
                    style={{ overflowY: 'auto', height: '35rem' }}
                >
                    <div className="col-12">
                        <h3>Ubicación</h3>
                        <div className='search-container mb-3'>
                            <input type="search" className="form-control input-search input-search-with-button" id="search-btn" placeholder="Buscar..." name="search" aria-label="Campo de búsqueda" />
                            <button className="reset" type="reset" aria-label="Borrar"></button>
                            <button className="button-search" type="submit" aria-label="Buscar"></button>
                        </div>
                        <div className="form-label-container">
                            <label htmlFor="input-text" className="form-label">
                                Localidad
                            </label>
                        </div>
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="input-text"
                            name="campoTexto"
                            aria-describedby="Texto"
                            placeholder=""
                            disabled
                        />
                        <div className="form-label-container">
                            <label htmlFor="input-text" className="form-label">
                                Provincia
                            </label>
                        </div>
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="input-text"
                            name="campoTexto"
                            aria-describedby="Texto"
                            placeholder=""
                            disabled
                        />
                        <div className="form-label-container">
                            <label htmlFor="input-text" className="form-label">
                                Dirección
                            </label>
                        </div>
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="input-text"
                            name="campoTexto"
                            aria-describedby="Texto"
                            placeholder=""
                            disabled
                        />
                        <div className="form-label-container">
                            <label htmlFor="input-text" className="form-label">
                                Dirección Adicional
                            </label>
                        </div>
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="input-text"
                            name="campoTexto"
                            aria-describedby="Texto"
                            placeholder=""
                        />
                        <h3 className="mt-4">Perfil del sitio</h3>
                        <div className="form-label-container">
                            <label htmlFor="input-text" className="form-label">
                                Nombre
                            </label>
                        </div>
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="input-text"
                            name="campoTexto"
                            aria-describedby="Texto"
                            placeholder=""
                        />
                        <div className="form-label-container">
                            <label htmlFor="input-select" className="form-label">
                                Categoría
                            </label>
                        </div>
                        <select className="form-control form-select mb-3" aria-label="Ejemplo de selección por defecto">
                            <option value="0">Seleccionar</option>
                            <option value="1">Galería de Arte</option>
                            <option value="2">Contable</option>
                            <option value="3">Clínica</option>
                            <option value="3">Escuela</option>
                            <option value="3">Centro Cultural</option>
                        </select>
                        <div className="form-label-container">
                            <label htmlFor="input-select" className="form-label">
                                Grupo
                            </label>
                        </div>
                        <select className="form-control form-select mb-3" aria-label="Ejemplo de selección por defecto">
                            <option value="0">Seleccionar</option>
                            <option value="1">Cultura</option>
                            <option value="2">Educación</option>
                            <option value="3">Clínica</option>
                            <option value="3">Salud</option>
                            <option value="3">Transporte</option>
                        </select>
                        <div className="form-label-container">
                            <label htmlFor="input-text" className="form-label">
                                Organismo
                            </label>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="input-text"
                            name="campoTexto"
                            aria-describedby="Texto"
                            placeholder=""
                            value='DGSACIU'
                            disabled
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
