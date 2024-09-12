import { Divider, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/StackNavigation";
import { MyIcon } from "../ui/MyIcon";



interface Props {
  title: string;
  subTitle?: string;

  rightAction?: () => void;
  rightActionIcon?: string;

  children?: React.ReactNode;
}

export const MainLayout = ({
  title,
  subTitle,
  rightAction,
  rightActionIcon,
  children,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const { top } = useSafeAreaInsets();
  const { canGoBack, goBack } = useNavigation();


  // const renderBackAction = () => (
  //   <TopNavigationAction
  //     icon={<MyIcon name="arrow-back-outline" />}
  //     onPress={goBack}
  //   />
  // )

  const menu = () => (
    <TopNavigationAction
      icon={<MyIcon name='menu-outline' />}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
    />
  )
  // const RenderRightAction = () => {

  //   if ( rightAction === undefined || rightActionIcon === undefined ) return null;

  //   return (
  //     <TopNavigationAction 
  //       onPress={ rightAction }
  //       icon={ <MyIcon name={rightActionIcon} /> }
  //     />
  //   )
  // }



  return (
    <Layout style={{ paddingTop: top }}>
      <TopNavigation
        title={title}
        subtitle={subTitle}
        alignment="center"
        accessoryLeft={ menu}
      // accessoryRight={ () => <RenderRightAction /> }
      />
      <Divider />

      <Layout style={{ height: '100%' }}>
        {children}
      </Layout>

    </Layout>
  );
};
