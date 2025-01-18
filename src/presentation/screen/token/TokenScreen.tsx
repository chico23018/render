import { Button, Input, Layout, Spinner, Text } from "@ui-kitten/components";
import { useTokenStore } from "../../store/useTokenStore";
import { useState } from "react";
import { Image, ScrollView } from "react-native";
import { CheckToken } from "../../../hooks/CheckToken";
import styles from "../../stylePresentation/StylePrentation";

export const TokenScreen = () => {
  const { checkToken } = useTokenStore();
  const { checkTokenValidity, tokenLoading } = CheckToken();
  const [token1, setToken1] = useState('');

  // // Función para guardar el token en el almacenamiento
  // const saveToken = async () => {
  //   try {
  //     await StorageAdapter.setItem(tokenStorage, token1);
  //     checkToken(); // Actualiza el estado global del token
  //     setToken1(''); // Limpia el campo de entrada después de guardar
  //   } catch (error) {
  //     console.error("Error saving token:", error);
  //     // Aquí podrías mostrar una alerta si es necesario
  //   }
  // };

  return (
    <ScrollView style={styles.scrollView}>
      <Layout style={styles.container}>
        <Image
          source={require('../../../assets/render.png')}
          style={styles.image}
          resizeMode="contain"
        />
        {tokenLoading ? (
          <Layout style={styles.loadingContainer}>
            <Spinner status='primary' size='large' />
          </Layout>
        ) : (
          <>
            <Text style={styles.title}>Enter your token</Text>
            <Input
              value={token1}
              onChangeText={setToken1}
              style={styles.input}
              placeholder="Enter your token"
            />
            <Button onPress={() => checkTokenValidity(token1)} style={styles.button}>
              Save Token
            </Button>
            <Text style={styles.description}>
              Here you need to enter your token so that your services can be
              restored from the Render dashboard. The token is saved in the phone's memory.
            </Text>
          </>
        )}
      </Layout>
    </ScrollView>
  );
};
