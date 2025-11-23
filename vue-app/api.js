import axios from "axios";
import { route } from "../vendor/tightenco/ziggy";

export async function request(config) {
    const response = await axios(config);
    return response.data;
}

export async function get(name, params = null) {
    return await request({
        method: "get",
        url: route(name, params),
    });
}

export async function post(name, params = null, data = null) {
    return await request({
        method: "post",
        url: route(name, params),
        data,
    });
}

export async function put(name, params = null, data = null) {
    return await request({
        method: "put",
        url: route(name, params),
        data,
    });
}

export async function del(name, params = null) {
    return await request({
        method: "delete",
        url: route(name, params),
    });
}
