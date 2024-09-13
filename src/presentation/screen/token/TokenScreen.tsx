import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { useTokenStore } from "../../store/useTokenStore";
import { useState } from "react";

import { StorageAdapter } from "../../../config/storage/storage.adapter";
import { tokenStorage } from "../../../config/constant/constant";

export const TokenScreen = () => {
  const { token, checkToken } = useTokenStore();
  const [token1, setToken1] = useState('');

  const saveToken = async () => {

    await StorageAdapter.setItem(tokenStorage, token1);
    checkToken();
  }

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' }}>


      <Text style={{ fontSize: 30, fontWeight: 'bold', }}>
        inserire suo token
      </Text>

      <Input

        value={token1}
        onChangeText={setToken1}
        style={{ marginVertical: 5, width: '100%' }} />
      <Button
        onPress={saveToken}
        style={{ width: '50%', alignSelf: 'center' }}>
        click
      </Button>
    </Layout>
  )
}

