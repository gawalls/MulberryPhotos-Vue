import * as axios from "axios";
import { API } from "./config";

const getData = async function() {
  const response = await axios.get(`${API}/db.json`);
  let data = parseList(response);
  console.log(data);
  return data;
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) {
    return [];
  }

  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

export const data = {
  getData
};
