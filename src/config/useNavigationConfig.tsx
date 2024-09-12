import { useNavigation } from '@react-navigation/native';


import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from '../presentation/navigation/StackNavigation';

export const useNavigationCofig = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return{navigation}
}

