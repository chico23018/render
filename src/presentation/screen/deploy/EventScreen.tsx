import { Layout, List } from "@ui-kitten/components";
import { MainLayout } from "../../components/layout/MainLayout";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigation";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { getEventData } from "../../../config/client/event/get-event-data";
import { CustomCardEvent } from "../../components/customComponents/CustomCardEvent";
import { RefreshControl, StyleSheet } from "react-native";
import styles from "../../stylePresentation/StylePrentation";
import { useState } from "react";

interface Props extends StackScreenProps<RootStackParams, 'EventScreen'> {}

export const EventScreen = ({ navigation, route }: Props) => {
  const serviceId = route.params;
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);
  // useInfiniteQuery para manejar la paginación
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ['evento', serviceId.serveceId], // Asegúrate de que el queryKey sea único por cada evento
    staleTime: 1000 * 60 * 60, // 1 hour
    initialPageParam: "", // El cursor inicial es una cadena vacía

    // Función de consulta, usa pageParam para el cursor
    queryFn: async ({ pageParam = "" }) => {
      return await getEventData(serviceId.serveceId, pageParam);
    },

    // Manejador del siguiente cursor (paginación)
    getNextPageParam: (lastPage) => {
      const lastItem = lastPage[lastPage.length - 1]; // Obtiene el último elemento de la página
      return lastItem?.cursor || undefined; // Si no hay más elementos, devuelve undefined
    },
  });

  const onPullRefresh = async () => {
    setIsRefreshing(true)

    await queryClient.invalidateQueries({ queryKey: ['evento', serviceId.serveceId] })
    setIsRefreshing(false)
  }

  // Muestra los datos si existen
  return (
    <MainLayout title="Evento" goBackBoolean>
      <List  
        data={data?.pages.flat()} // Combina todas las páginas cargadas en una sola lista
        renderItem={({ item }) => <CustomCardEvent evento={item} />}
        keyExtractor={(item, index) => item.id + index}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onPullRefresh} />}
        onEndReachedThreshold={0.8} // Llama cuando se ha llegado al 80% del final
        numColumns={3} // Muestra 3 columnas
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage(); // Llama a fetchNextPage para cargar más datos
          }
        }}
        contentContainerStyle={styles.listContainer} // Agrega un estilo al contenedor de la lista
      />
    </MainLayout>
  );
};


