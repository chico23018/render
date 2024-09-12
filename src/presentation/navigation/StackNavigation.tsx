
import { createStackNavigator, StackCardStyleInterpolator, StackNavigationProp } from '@react-navigation/stack';
import { LoadingScreen } from '../screen/loading/LoadingScreen';
import { DrawerNavigation } from './DrawerNavigation';
import { TokenScreen } from '../screen/token/TokenScreen';
export type RootStackParams = {
    LoadingScreen: undefined;
    TokenScreen: undefined;
    DrawerScreen: undefined;
}

export const StackNavigation = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // cardStyleInterpolator:fadeAnimation
            }}
            initialRouteName='LoadingScreen'>
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="TokenScreen" component={TokenScreen} />
            <Stack.Screen name="DrawerScreen" component={DrawerNavigation} />
        </Stack.Navigator>
    )
}

