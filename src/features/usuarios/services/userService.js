import axios from "axios";

const url = `/api/usuarios`;

export const singUp = async (cuil) => {
  try {
    const response = await axios.post(`${url}?cuil=${cuil}`);
    return response;
  } catch (e) {
    console.log(e.response.data.error);
    throw { message: e.response.data.error.message };
  }
};

export const getUserAD = async (cuil) => {
  try {
    const response = await axios.get(`${url}?cuil=${cuil}`);
    return response.data.data;
  } catch (e) {
    console.log(e.error);
    return e;
  }
};
