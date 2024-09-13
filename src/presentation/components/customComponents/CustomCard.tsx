import { Card, Icon, Layout, Text } from "@ui-kitten/components"
import { useNavigationCofig } from "../../../config/useNavigationConfig"
import { ResponseRender } from "../../../interface/respons.render";
import { useWindowDimensions } from "react-native";


interface Props {
    name:string
    id:string
  }
  
export const CustomCard = ({name,id}:Props) => {
    const { navigation } = useNavigationCofig();
   const {width}=useWindowDimensions();
    const circulo=name==='Animation 101';
    return (
        <Card
            style={{  margin: 3 ,width:width/3-3}}
            onPress={() => console.log("devo aprire la lista de evento",id)}
        >
            <Layout style={{height:10,width:10, borderRadius:10 ,position:'absolute',backgroundColor:circulo?'green':'red',right:5,top:5}}/>
            <Layout >
                <Text>{name}</Text>
            </Layout>

            <Layout>
                <Text>{id}</Text>
            </Layout>
        </Card>
    )
}

