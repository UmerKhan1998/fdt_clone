import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_KEY || "";

const apiVersion = 1;

const route_endpoint = `/api`;

const apiclient = axios.create({
  baseURL: url + "" + route_endpoint,
});

export default apiclient;