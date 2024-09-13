import { Button, Layout, List, Text } from "@ui-kitten/components"
import { useTokenStore } from "../../store/useTokenStore";
import { MainLayout } from "../../components/layout/MainLayout";



import { useQuery, useQueryClient } from "@tanstack/react-query";
import { StorageAdapter } from "../../../config/storage/storage.adapter";
import { tokenStorage } from "../../../config/constant/constant";
import { getProductsByPage } from "../../../config/client/service/get-deploy";

import { LoadingScreen } from "../loading/LoadingScreen";
import { ScrollView } from "react-native-gesture-handler";


export const HomeScreen = () => {

  const queryClient = useQueryClient();
  const { checkToken } = useTokenStore();


  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsByPage,
  });

  // Verifica si hubo un error
  if (isError) {
    console.log("error qie",error.message)
    checkToken()
    // return <Text>Error al obtener los productos: {error.message}</Text>;
  }
  return (
    <ScrollView>

      <MainLayout title="HomeScreen">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Text>Datos: {JSON.stringify(data, null, 2)}</Text> // <-- Asegúrate de que los datos llegan aquí
        )}

        <Button onPress={async () => {
          await StorageAdapter.removeItem(tokenStorage);
          queryClient.invalidateQueries({ queryKey: ['products'] });  
          checkToken()
        }}>
          Remover token
        </Button>
      </MainLayout>
    </ScrollView>
  )
}

{/* <List
        data={animationMenuItems}
        renderItem={({ item }) => <CustomCard name={item.name} id={item.id} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
      /> */}
export const animationMenuItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    id: 'cube-outline',

  },
  {
    name: 'Animation 102',
    id: 'albums-outline',

  },
  {
    name: 'Animation 102',
    id: 'hola',

  },


]