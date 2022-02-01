import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";
//const baseUrl = "https://ancient-falls-81850.herokuapp.com/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const eliminate = (id) => {
  const request = axios.delete(baseUrl + "/" + id);
  return request.then((response) => response.data);
};

const update = (id, newNumber) => {
  const request = axios.put(`${baseUrl}/${id}`, newNumber);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, eliminate, update };
