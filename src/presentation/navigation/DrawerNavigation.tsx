
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoadingScreen } from '../screen/loading/LoadingScreen';
import { HomeScreen } from '../screen/home/HomeScreen';
import { DeployScreen } from '../screen/deploy/DeployScreen';

const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator 
         screenOptions ={
            {
                headerShown: false,
            
            }
        }
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="DeployScreen" component={DeployScreen} />
        </Drawer.Navigator>
    )
}





