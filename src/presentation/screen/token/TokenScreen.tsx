import { Button, Layout, Text } from "@ui-kitten/components"
import { useTokenStore } from "../../store/useTokenStore";

export const TokenScreen = () => {
  const {getStatus}=useTokenStore();
  return (
  <Layout>
    <Text>
        hola soy el tocken
    </Text>
    <Button onPress={getStatus}>
      click
    </Button>
  </Layout>
  )
}

