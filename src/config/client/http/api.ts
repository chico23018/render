import axios from "axios";
import { tokenStorage } from "../../constant/constant";
import { StorageAdapter } from "../../storage/storage.adapter";

const createAxiosInstance = (baseURL:string, params = {}) => {
    const instance = axios.create({
        baseURL,
        params: {
            limit: '24', // Puedes cambiar esto a un parámetro dinámico si lo necesitas
            ...params,
        },
        headers: {
            'accept': 'application/json',
        }
    });

    // Interceptor para agregar el token de autorización a las solicitudes.
    instance.interceptors.request.use(
        async (config) => {
            const token = await StorageAdapter.getItem(tokenStorage);
            if (token) {
                config.headers['authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            // Manejo de errores de solicitud
            return Promise.reject(error);
        }
    );

    // Interceptor para manejar errores de respuesta
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            // Manejo de errores de respuesta aquí
            console.error('API Error:', error.response);
            return Promise.reject(error);
        }
    );

    return instance;
};

const render = createAxiosInstance('https://api.render.com/v1');

export { render };
