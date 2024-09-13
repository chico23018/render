
import { PropsWithChildren, useEffect } from "react"
import { useTokenStore } from "../store/useTokenStore"
import { useNavigationCofig } from "../../config/useNavigationConfig";


export const TokenProvider = ({ children }: PropsWithChildren) => {
    const { token,checkToken} = useTokenStore();
    const { navigation } = useNavigationCofig();
    useEffect(() => {
       
        checkToken();

    }, [])
    useEffect(() => {
        if (token) {
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

    }, [token])
    return (
        <>{children}</>
    )
}

