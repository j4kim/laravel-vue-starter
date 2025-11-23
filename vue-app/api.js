import axios from "axios";
import { route } from "../vendor/tightenco/ziggy";

export async function axiosRequest(config) {
    const response = await axios(config);
    return response.data;
}

export async function request(method, name, params = null, data = null) {
    const url = route(name, params);
    return await axiosRequest({ method, url, data });
}

export async function get(name, params = null) {
    return await request("get", name, params);
}

export async function post(name, params = null, data = null) {
    return await request("post", name, params, data);
}

export async function put(name, params = null, data = null) {
    return await request("put", name, params, data);
}

export async function del(name, params = null) {
    return await request("delete", name, params);
}
