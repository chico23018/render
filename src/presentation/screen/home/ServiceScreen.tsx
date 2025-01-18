import { Button, List, } from "@ui-kitten/components"
import { useTokenStore } from "../../store/useTokenStore";
import { MainLayout } from "../../components/layout/MainLayout";



import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { StorageAdapter } from "../../../config/storage/storage.adapter";
import { tokenStorage } from "../../../config/constant/constant";
import { getServiceData } from "../../../config/client/service/get-service-data";

import { LoadingScreen } from "../loading/LoadingScreen";

import { CustomCard } from "../../components/customComponents/CustomCard";
import { useState } from "react";
import styles from "../../stylePresentation/StylePrentation";
import { RefreshControl } from "react-native";




export const ServiceScreen = () => {

  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { checkToken } = useTokenStore();
  // // useInfiniteQuery para manejar la paginación
  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   error,
  // } = useInfiniteQuery({
  //   queryKey: ['evento', serviceId.serveceId], // Asegúrate de que el queryKey sea único por cada evento
  //   staleTime: 1000 * 60 * 60, // 1 hour
  //   initialPageParam: "", // El cursor inicial es una cadena vacía

  //   // Función de consulta, usa pageParam para el cursor
  //   queryFn: async ({ pageParam = "" }) => {
  //     return await getEventData(serviceId.serveceId, pageParam);
  //   },

  //   // Manejador del siguiente cursor (paginación)
  //   getNextPageParam: (lastPage) => {
  //     const lastItem = lastPage[lastPage.length - 1]; // Obtiene el último elemento de la página
  //     return lastItem?.cursor || undefined; // Si no hay más elementos, devuelve undefined
  //   },
  // });
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['service', 'data'],
    staleTime: 1000 * 60 * 60, // 1 hora
    queryFn: getServiceData,  // Pasa solo la referencia de la función
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  // Verifica si hubo un error
  if (isError) {
    if (error.message.includes("401")) {

      checkToken()
    }

  }
  const onPullRefresh = async () => {
    setIsRefreshing(true)

    await queryClient.invalidateQueries({ queryKey: ['service','data'] })
    setIsRefreshing(false)
  }
  return (


    <MainLayout title="ServiceScreen">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <List
          data={data}
          renderItem={({ item }) => <CustomCard service={item} />}
          keyExtractor={(item) => item.id}
          numColumns={3}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onPullRefresh} />}
          contentContainerStyle={styles.listContainer} // Agrega un estilo al contenedor de la lista
          ListFooterComponent={<Button onPress={async () => {
            await StorageAdapter.removeItem(tokenStorage);

            checkToken()
          }}
          >
            Remover token
          </Button>}
        />
      )}


    </MainLayout>

  )
}