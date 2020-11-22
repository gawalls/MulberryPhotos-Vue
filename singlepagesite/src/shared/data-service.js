import { format, parseISO } from "date-fns";
import * as axios from "axios";
import { API } from "./config";
import { displayDateFormat } from "./constants";

const getTestData = async function() {
  const response = await axios.get(`${API}/db.json`);
  let data = parseList(response);

  const returnData = data.map(d => {
    var isoCreatedOn = parseISO(d.CreatedOn);
    d.CreatedOn = format(isoCreatedOn, displayDateFormat);
    return d;
  });
  return returnData;
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

export const data = {
  getTestData
};
