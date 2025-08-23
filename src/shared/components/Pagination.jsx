export const Pagination = () => {
    return (
        <>
            <nav aria-label="Ejemplo de paginado numerado inicial">
                <ul className="pagination mt-5">
                    <li className="page-item">
                        <a className="page-link" href="#">
                            <span className="page-previous-icon" aria-hidden="true"></span>
                            <span className="page-previous-text">Anterior</span>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item no-events"><span className="page-link">...</span></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item no-events"><span className="page-link">...</span></li>
                    <li className="page-item"><a className="page-link" href="#">10</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            <span className="page-next-text">Siguiente</span>
                            <span className="page-next-icon" aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
