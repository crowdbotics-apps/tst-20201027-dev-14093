import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113500Navigator from '../features/BlankScreen113500/navigator';
import BlankScreen613499Navigator from '../features/BlankScreen613499/navigator';
import BlankScreen513498Navigator from '../features/BlankScreen513498/navigator';
import BlankScreen413497Navigator from '../features/BlankScreen413497/navigator';
import BlankScreen313496Navigator from '../features/BlankScreen313496/navigator';
import BlankScreen213495Navigator from '../features/BlankScreen213495/navigator';
import BlankScreen013493Navigator from '../features/BlankScreen013493/navigator';
import BlankScreen113383Navigator from '../features/BlankScreen113383/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113500: { screen: BlankScreen113500Navigator },
BlankScreen613499: { screen: BlankScreen613499Navigator },
BlankScreen513498: { screen: BlankScreen513498Navigator },
BlankScreen413497: { screen: BlankScreen413497Navigator },
BlankScreen313496: { screen: BlankScreen313496Navigator },
BlankScreen213495: { screen: BlankScreen213495Navigator },
BlankScreen013493: { screen: BlankScreen013493Navigator },
BlankScreen113383: { screen: BlankScreen113383Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;