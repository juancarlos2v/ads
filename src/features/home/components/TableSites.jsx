import React from 'react'

export const TableSites = () => {
    return (
        <>

            <div className="responsive-scroll" tabIndex="0">
                <table className="table  padding-sides">
                    <thead>
                        <tr>
                            <th scope="col" className="tb-number">Código</th>
                            <th scope="col" className="tb-text">Sitio</th>
                            <th scope="col" className="tb-text">Ubicación</th>
                            <th scope="col" className="tb-tag">Estado</th>
                            <th scope="col" className="tb-button">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-right">ECOP4267</td>
                            <td>Entrada Ecoparque</td>
                            <td>Avenida General Las Heras 4267 4277, C1425 CABA </td>
                            <td>
                                <span className="badge badge-success">Verificado</span>
                            </td>
                            <td>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">map</span>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">download</span>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right">G3699</td>
                            <td>Centro Cultural Plaza Defensa</td>
                            <td>Avenida General Las Heras 4267 4277, C1425 CABA </td>
                            <td>
                                <span className="badge badge-danger">requiere verificación</span>
                            </td>
                            <td>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">map</span>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">download</span>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right">ECOP4267</td>
                            <td>Espacio Cultural Gardel</td>
                            <td>Olleros 3640, 1427 Chacarita, Ciudad Autónoma de Buenos Aires</td>
                            <td>
                                <span className="badge badge-success">Verificado</span>
                            </td>
                            <td>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">map</span>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">download</span>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right">G3703</td>
                            <td>Centro Cultural Recoleta</td>
                            <td>Junin 1930, 1113 Recoleta, Ciudad Autónoma de Buenos Aires</td>
                            <td>
                                <span className="badge badge-danger">Duplicado</span>
                            </td>
                            <td>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">map</span>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">download</span>
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">delete</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
