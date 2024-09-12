import { Button, Layout, Text } from "@ui-kitten/components"
import { useTokenStore } from "../../store/useTokenStore";

export const HomeScreen = () => {
  const {returnvoid}=useTokenStore();
  return (
  <Layout>
    <Text>
        Hola
    </Text>

    <Button onPress={returnvoid}>
      click
    </Button>
  </Layout>
  )
}

