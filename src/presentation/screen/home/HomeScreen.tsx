import { Button, Layout, Text } from "@ui-kitten/components"
import { useTokenStore } from "../../store/useTokenStore";
import { MainLayout } from "../../components/layout/MainLayout";

export const HomeScreen = () => {
  const { returnvoid } = useTokenStore();
  return (
    <MainLayout title="HomeScreen">
      <Layout>
        <Text>
          Hola
        </Text>

        <Button onPress={returnvoid}>
          click
        </Button>
      </Layout>
    </MainLayout>
  )
}

