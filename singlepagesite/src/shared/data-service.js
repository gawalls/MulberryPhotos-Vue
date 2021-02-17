//import { format, parseISO } from "date-fns";
import * as axios from "axios";
import { API } from "./config";
//import { displayDateFormat } from "./constants";

const getData = async function() {
  const response = await axios.get(`${API}/db.json`);
  let data = parseList(response);
  return data;
};

const getWebPages = async function() {
  //const response = getData();  
  var webPages = [{"title": "title 1", "description": "description 1"}];
  return webPages;
}

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
  getData,
  getWebPages
};