import { Divider, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/StackNavigation";
import { MyIcon } from "../ui/MyIcon";
import * as eva from '@eva-design/eva';


interface Props {
  title: string;
  subTitle?: string;

  rightAction?: () => void;
  rightActionIcon?: string;

  goBackBoolean?:boolean

  children?: React.ReactNode;
}

export const MainLayout = ({
  title,
  subTitle,
  rightAction,
  rightActionIcon,
  goBackBoolean=false,
  children,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const { top } = useSafeAreaInsets();
  const {  goBack } = useNavigation();


  const backAction = () => (
    <TopNavigationAction
      icon={<MyIcon name="arrow-back-outline" />}
      onPress={goBack}
    />
  )

  const topLeft = () => (
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

  const theme =  eva.light;

  return (
    <Layout style={{ paddingTop: top}}>
      <TopNavigation
        title={title}
        subtitle={subTitle}
        alignment="center"
        style={{backgroundColor:theme['color-primary-500']}}
        accessoryLeft={()=> goBackBoolean? backAction(): topLeft()}
      // accessoryRight={ () => <RenderRightAction /> }
      />
      <Divider />

      <Layout style={{ height: '100%' }}>
        {children}
      </Layout>

    </Layout>
  );
};
//'#e7ecff'