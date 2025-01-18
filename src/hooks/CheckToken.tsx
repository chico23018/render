import { Alert } from "react-native";
import { getServiceData } from "../config/client/service/get-service-data";
import { useTokenStore } from "../presentation/store/useTokenStore";
import { useState } from "react";
import { StorageAdapter } from "../config/storage/storage.adapter";
import { tokenStorage } from "../config/constant/constant";
import { isAxiosError } from "axios";

export const CheckToken = () => {
    const { token, checkToken } = useTokenStore();
    const [tokenLoading, setTokenLoading] = useState(false);

    // Almacena el token en el almacenamiento
    const handleTokenStorage = async (token: string) => {
        await StorageAdapter.setItem(tokenStorage, token);
    };

    // Maneja errores al realizar la solicitud
    const handleError = (error: any) => {
        if (isAxiosError(error)) {
            if (error.request?.status === 401) {
                handleInvalidToken();
            } else {
                Alert.alert("Error", error.message);
            }
        }
    };

    // Maneja un token inválido
    const handleInvalidToken = async () => {
        await StorageAdapter.removeItem(tokenStorage);
        Alert.alert("Error", "Token is wrong");
    };

    // Verifica la validez del token
    const checkTokenValidity = async (token: string) => {
        token= token.trim();
        setTokenLoading(true);
        try {
            await handleTokenStorage(token);
            await getServiceData();
            checkToken(); // Verifica el token en el estado global
        } catch (error) {
            handleError(error); // Maneja cualquier error durante la solicitud
        } finally {
            setTokenLoading(false); // Asegura que el estado de carga se actualice
        }
    };

    return {
        tokenLoading,
        checkTokenValidity // Método para verificar la validez del token
    };
};
