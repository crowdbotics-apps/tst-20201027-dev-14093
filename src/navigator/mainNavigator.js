import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313496Navigator from '../features/BlankScreen313496/navigator';
import BlankScreen213495Navigator from '../features/BlankScreen213495/navigator';
import BlankScreen113494Navigator from '../features/BlankScreen113494/navigator';
import BlankScreen013493Navigator from '../features/BlankScreen013493/navigator';
import BlankScreen113383Navigator from '../features/BlankScreen113383/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313496: { screen: BlankScreen313496Navigator },
BlankScreen213495: { screen: BlankScreen213495Navigator },
BlankScreen113494: { screen: BlankScreen113494Navigator },
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
