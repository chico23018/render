import { Layout, Text } from "@ui-kitten/components"
import { useTokenStore } from "../../../presentation/store/useTokenStore"

export const Metodo = () => {
    const{checkToken,token}=useTokenStore();

    const chect=()=>{
        console.log('token error')
        checkToken();
    }
  return{
    chect
  }
}

