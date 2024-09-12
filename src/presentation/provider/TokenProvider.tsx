import { Layout, Text } from "@ui-kitten/components"
import { PropsWithChildren, useEffect } from "react"
import { useTokenStore } from "../store/useTokenStore"
import { useNavigationCofig } from "../../config/useNavigationConfig";

export const TokenProvider =  ({ children }: PropsWithChildren) => {
    const{status}=useTokenStore();
    const {navigation}=useNavigationCofig();
    useEffect(() => {

     
            if (status === 'ok') {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'DrawerScreen' }],
                })
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'TokenScreen' }],
                })
            }
        
    }, [status])
  return (
 <>{children}</>
  )
}

