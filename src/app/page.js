import { TableSites } from "@/features/home/components/TableSites";
import { Pagination } from "@/shared/components/Pagination";

const page = () => {
  return (
    <>
      <div
        className="d-flex align-items-center p-5"
        style={{
          backgroundImage: "url('/map.png')",
          height: "15rem",
          backgroundPosition: "center",
        }}
      >
        <form className="col-6">
          <div className="form-label-container">
            <h2 style={{ color: "white" }}>Administrador de Sitios</h2>
          </div>
          <div className="search-container">
            <input
              type="search"
              className="form-control input-search input-search-with-button"
              id="search-btn"
              placeholder="Buscar..."
              name="search"
              aria-label="Campo de búsqueda"
            />
            <button className="reset" type="reset" aria-label="Borrar"></button>
            <button
              className="button-search"
              type="submit"
              aria-label="Buscar"
            ></button>
          </div>
        </form>
      </div>
      <div className="pt-5 pb-5">
        <TableSites />
        <Pagination />
      </div>
    </>
  );
};

export default page;
