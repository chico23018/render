import { Button, List, } from "@ui-kitten/components"
import { useTokenStore } from "../../store/useTokenStore";
import { MainLayout } from "../../components/layout/MainLayout";



import { useQuery, useQueryClient } from "@tanstack/react-query";
import { StorageAdapter } from "../../../config/storage/storage.adapter";
import { tokenStorage } from "../../../config/constant/constant";
import { getProductsByPage } from "../../../config/client/service/get-deploy";

import { LoadingScreen } from "../loading/LoadingScreen";

import { CustomCard } from "../../components/customComponents/CustomCard";


export const HomeScreen = () => {

  const queryClient = useQueryClient();
  const { checkToken } = useTokenStore();
 
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['products'],
    staleTime: 1000 * 60 * 60, // 1 hour
    queryFn: getProductsByPage,
  });

  // Verifica si hubo un error
  if (isError) {
    if( error.message.includes("401")){

      checkToken()
    }
    
  }
  return (


    <MainLayout title="HomeScreen">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <List
          data={animationMenuItems}
          renderItem={({ item }) => <CustomCard name={item.name} id={item.id} />}
          keyExtractor={(item) => item.id}
          numColumns={3}
          ListFooterComponent={<Button onPress={async () => {
            await StorageAdapter.removeItem(tokenStorage);
            queryClient.invalidateQueries({ queryKey: ['products'] });
            checkToken()
          }}>
            Remover token
          </Button>}
        />
      )}


    </MainLayout>

  )
}

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