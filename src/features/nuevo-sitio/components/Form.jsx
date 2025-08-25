export const Form = () => {
    return (
        <>
            <div className="col-6 responsive-scroll"
                style={{
                    width: '35rem',
                    height: '30rem',
                    overflowY: 'auto',
                    borderRadius: '1rem',
                    padding: '3rem',
                    backgroundColor: '#F3F6F9 !important'
                }}
            >
                <div className="vertical-example">
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
                        placeholder="Ingrese Textos"
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
                        placeholder="Ingrese Textos"
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
                        placeholder="Ingrese Textos"
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
                        placeholder="Ingrese Textos"
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
                        placeholder="Ingrese Textos"
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
                        placeholder="Ingrese Textos"
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
                        placeholder="Ingrese Textos"
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
                        placeholder="Ingrese Textos"
                    />
                    <div className="form-label-container">
                        <label htmlFor="input-text" className="form-label">
                            Dirección Adicional
                        </label>
                    </div>
                    <input
                        type="text"
                        className="form-control pb-3"
                        id="input-text"
                        name="campoTexto"
                        aria-describedby="Texto"
                        placeholder="Ingrese Textos"
                    />
                </div>
            </div>
        </>
    )
}
