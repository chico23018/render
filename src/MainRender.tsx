import '../gesture-handler';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './presentation/navigation/DrawerNavigation';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useColorScheme } from 'react-native';
import { StackNavigation } from './presentation/navigation/StackNavigation';
import { TokenProvider } from './presentation/provider/TokenProvider';

export const MainRender = () => {
    const colorScheme = useColorScheme();
    const theme =  eva.light;
    const backgroungcolor =  '#FFFFFF';

   const colorText= '#222B45'
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={theme}>

                <NavigationContainer
                  theme={{
                    dark: false,
                    colors: {
                         primary: theme['color-primary-500'],
                         background: backgroungcolor,
                         card:'#FFFFFF',
                         text: colorText,
                         border: theme['color-basic-800'],
                         notification: theme['color-primary-500']
                    }
                 }}
                >
                    <TokenProvider>

                    <StackNavigation />
                    </TokenProvider>
                </NavigationContainer>
            </ApplicationProvider>
        </>
    )
}
