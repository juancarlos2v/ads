import { getUserAD, singUp } from "@/features/usuarios/services/userService";
import { useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState({
    cuil: "",
    name: "",
    lastName: "",
    email: "",
    area: "",
  });
  const [result, setResult] = useState({
    success: null,
    message: "",
  });

  const registerUser = (cuil) => {
    singUp(cuil)
      .then((res) => {
        setResult({
          success: true,
          message: "Usuario registrado con exito.",
        });
      })
      .catch((e) => {
        console.log(e.message);
        setResult({
          success: false,
          message: e.message,
        });
      });
  };

  const getUserFromAD = (cuil) => {
    getUserAD(cuil)
      .then((res) => {
        console.log(res);
        setUser({
          cuil: res.numeroCui,
          name: res.nombre,
          lastName: res.apellido,
          email: res.email,
          area: res.areaSigla,
        });
        setResult({
          success: true,
          message: "Usuario encontrado.",
        });
      })
      .catch((e) => {
        console.log(e);
        setResult({
          success: false,
          message: "Usuario no encontrado.",
        });
      });
  };

  return {
    user,
    setUser,
    registerUser,
    getUserFromAD,
    result,
  };
};
