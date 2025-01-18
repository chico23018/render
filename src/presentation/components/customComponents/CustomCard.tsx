import { Card,  Layout, Text } from "@ui-kitten/components"
import { useNavigationConfig } from "../../../config/useNavigationConfig"

import { useWindowDimensions } from "react-native";
import { ServiceEntity } from "../../../interface/Entities/entityService";


interface Props {
    service:ServiceEntity
  }
  
export const CustomCard = ({service}:Props) => {
    const { navigation } = useNavigationConfig();
   const {width}=useWindowDimensions();
   const heightWidth =width/3-6;
    return (
        <Card
            style={{  margin: 3 ,width:heightWidth, height:heightWidth , alignItems:'center',justifyContent:'center'}}
            onPress={() => navigation.navigate("EventScreen",{serveceId:service.id})}
        >
            {/* <Layout style={{height:10,width:10, borderRadius:10 ,position:'absolute',backgroundColor:circulo?'green':'red',right:5,top:5}}/> */}
            <Layout >
                <Text>{service.name}</Text>
            </Layout>

            {/* <Layout>
                <Text>{service.id}</Text>
            </Layout> */}
        </Card>
    )
}

