
import { createStackNavigator, StackCardStyleInterpolator, StackNavigationProp } from '@react-navigation/stack';
import { LoadingScreen } from '../screen/loading/LoadingScreen';
import { DrawerNavigation } from './DrawerNavigation';
import { TokenScreen } from '../screen/token/TokenScreen';
import { ServiceScreen } from '../screen/home/ServiceScreen';
import { EventScreen } from '../screen/deploy/EventScreen';

export type RootStackParams = {
    LoadingScreen: undefined;
    TokenScreen: undefined;
    DrawerScreen: undefined;
    ServiceScreen:undefined,
    EventScreen:{ serveceId: string }
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
            <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
            <Stack.Screen name="EventScreen" component={EventScreen} />
        </Stack.Navigator>
    )
}

