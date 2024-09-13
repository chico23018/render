import axios from "axios";
import { tokenStorage } from "../../constant/constant";
import { StorageAdapter } from "../../storage/storage.adapter";

const tesloApi = axios.create({
    baseURL:'https://api.render.com/v1/services',
    params: {
        limit: '20'
    
      },
      headers:{
        'accept': 'application/json',
      }
})

  // TODO: Interceptors
  tesloApi.interceptors.request.use(
    async (config) => {
      const token = await StorageAdapter.getItem(tokenStorage);
      console.log("Token enviado:", token); // <-- Verifica si el token existe
      if (token) {
        config.headers['authorization'] = `Bearer ${token}`;
      }
      return config;
    }
  );
  
  
  
  
  export {
    tesloApi,
  }
  
  