
export const Table = () => {
    return (
        <>

            <div className="" tabIndex="0">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="tb-text">CUIL</th>
                            <th scope="col" className="tb-text">Nombre</th>
                            <th scope="col" className="tb-text">Apellido</th>
                            <th scope="col" className="tb-text">Grupo</th>
                            <th scope="col" className="tb-text">Activo</th>
                            <th scope="col" className="tb-button">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20953368502</td>
                            <td>Juan Carlos</td>
                            <td>Vilcherrez</td>
                            <td>Sistemas</td>
                            <td>
                                <label className="switch" forhtml="switch-2">
                                    <input type="checkbox" id="switch-2" readOnly />
                                    <span className="slider"></span>
                                </label>
                            </td>
                            <td>
                                <div className="actions-table">
                                    <button type="button" className="btn btn-xs">
                                        <span className="material-symbols-rounded o-icon" aria-hidden="true">edit</span>
                                    </button>
                                    <button type="button" className="btn btn-xs">
                                        <i className="bx bxs-trash-alt o-icon"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}
