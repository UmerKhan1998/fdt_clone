import apiClient from "./apiClient";

const Leads = (token, formData) =>
  apiClient.post("/leads", formData, {
    headers: {
      authtoken: `${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

const Subscriber = (formData) =>
  apiClient.post("/subscriber/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export default {
  Leads,
  Subscriber,
};
