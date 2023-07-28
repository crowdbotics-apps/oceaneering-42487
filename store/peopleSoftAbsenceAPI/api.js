import axios from "axios";
const peopleSoftAbsenceAPI = axios.create({
  baseURL: "https://10.12.13.4/PSIGW/RESTListeningConnector/PSFT",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function peoplesoftabsenceapi_post_request_createabsence_create(payload) {
  return peopleSoftAbsenceAPI.post(`/request/createabsence`);
}

export const apiService = {
  peoplesoftabsenceapi_post_request_createabsence_create
};