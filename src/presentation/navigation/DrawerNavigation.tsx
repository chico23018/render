
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { LoadingScreen } from '../screen/loading/LoadingScreen';
import { ServiceScreen } from '../screen/home/ServiceScreen';
import { EventScreen } from '../screen/deploy/EventScreen';
import { Layout, Text } from '@ui-kitten/components';
import styles from '../stylePresentation/StylePrentation';

const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={
                {
                    headerShown: false,
                    drawerItemStyle: {
                              borderRadius: 100,
                              paddingHorizontal: 20
                            }
                }}
        >
            <Drawer.Screen name="ServiceScreen" component={ServiceScreen} />
            {/* <Drawer.Screen name="EventScreen" component={EventScreen} /> */}
        </Drawer.Navigator>
    )
}

// screenOptions={{
//     headerShown: false,
//     //drawerType: (dimensons.width>=758)?'permanent':'slide',
//     // drawerActiveBackgroundColor: globalColors.primary,
//     // drawerInactiveTintColor: globalColors.primary,
//     drawerActiveTintColor: 'white',
//     drawerItemStyle: {
//       borderRadius: 100,
//       paddingHorizontal: 20
//     }
//   }}
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
  
      <DrawerContentScrollView>
        <Layout
          style={
            {
              height: 200,
              margin: 30,
              borderRadius: 50,
 }
          }
        />
        <DrawerItemList {...props} />
  <Text  > hola mundo </Text>
      </DrawerContentScrollView>
    )
  }


