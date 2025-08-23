"use client";
import Image from "next/image";
import Link from "next/link";
//import ModalAlert from "@components/ModalAlert";
//import { ThreeDots } from "react-loader-spinner";

const Page = () => {
  //const { BA_COLABORATIVA_URL, isLoading, error, clearError, loginOpenID } =useLogin();

  const logoBA = "/logo-ba.png";

  return (
    <div className="d-flex flex-md-row-reverse  flex-column  justify-content-center align-items-center  ">
      <div className="d-flex flex-column justify-content-center align-items-center  p-login-content col-md-6  col-11 p-5 ">
        <h1
          className=""
          style={{ color: "var(--grisulado-900)" }}
        >{`Bienvenido`}</h1>
        <button
          //onClick={loginOpenID}
          type="button"
          className="p-2 mb-3 d-flex btn btn btn-primary  justify-content-center align-items-center"
          //href={urlAuth}
          href="#/"
          style={{
            width: "15rem",
          }}
        >
          Ingresar con CUIL
        </button>
        <div
          className=" d-flex-column align-items-center"
          style={{ borderTop: "solid 0.1rem var(--gray-light)" }}
        >
          <p className="flex-lg-row flex-column col-12 d-flex m-0 mt-md-2 justify-content-center align-items-center">
            ¿No tenés Usuario? &nbsp;
            <Link
              className=""
              target="_blank"
              href="#/"
              //href={BA_COLABORATIVA_URL}
            >
              {` Solicita uno aqui`}
            </Link>
          </p>
        </div>
      </div>
      <div
        className=" d-none d-md-flex h-100 col-md-6 col-12 vh-100  flex-column justify-content-center align-items-center "
        style={{ backgroundColor: "var(--bg-neutral)" }}
      >
        <div className="">
          <Image
            src={logoBA}
            width={300}
            height={150}
            alt="logo-ba"
            style={{ objectFit: "contain" }}
            priority
          ></Image>
          <h2
            style={{ color: "var(--grisulado-900)", fontSize: "35px" }}
          >{`Administrador de sitios`}</h2>
        </div>
      </div>
      {/* {error != "" && (
          <ModalAlert clearError={clearError} message={error} open={!!error} />
        )} */}
      <style jsx>{`
        box-shadow: 1px 9px 18px 8px rgba(0, 0, 0, 0.33);
        -webkit-box-shadow: 1px 9px 18px 8px rgba(0, 0, 0, 0.33);
        -moz-box-shadow: 1px 9px 18px 8px rgba(0, 0, 0, 0.33);
      `}</style>
    </div>
  );
};

export default Page;
