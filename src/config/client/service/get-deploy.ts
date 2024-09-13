
import { isAxiosError } from "axios";
import { ResponseRender } from "../../../interface/respons.render";
import { tesloApi } from "../http/api";
import { useTokenStore } from "../../../presentation/store/useTokenStore";
import { StorageAdapter } from "../../storage/storage.adapter";
import { tokenStorage } from "../../constant/constant";

export const getProductsByPage = async (): Promise<ResponseRender[]> => {

  try {
    const { data } = await tesloApi.get<ResponseRender[]>('');
 
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("Error de Axios:", error); // <-- Más detalles del error
      if (error.request?.status) {

        await StorageAdapter.removeItem(tokenStorage);
        throw new Error('401');
      }
    }
    console.log("Error general:", error);
    throw new Error('Error getting products');
  }
};
