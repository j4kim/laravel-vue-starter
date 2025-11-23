import axios from "axios";
import { route } from "../vendor/tightenco/ziggy";

async function refreshTokenAndRetry(config) {
    await get("sanctum.csrf-cookie");
    return await axiosRequest(config, true);
}

export async function axiosRequest(config, isRetry = false) {
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        if (error.response.status === 419 && !isRetry) {
            return await refreshTokenAndRetry(config);
        }
        throw error;
    }
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
