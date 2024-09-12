
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoadingScreen } from '../screen/loading/LoadingScreen';
import { HomeScreen } from '../screen/home/HomeScreen';

const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator 
        //  screenOptions ={
        //     {
        //         headerShown: false,
            
        //     }
        // }
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        </Drawer.Navigator>
    )
}





