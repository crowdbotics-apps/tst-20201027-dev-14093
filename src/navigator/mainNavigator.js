import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1113525Navigator from '../features/BlankScreen1113525/navigator';
import BlankScreen513524Navigator from '../features/BlankScreen513524/navigator';
import BlankScreen1013523Navigator from '../features/BlankScreen1013523/navigator';
import BlankScreen713522Navigator from '../features/BlankScreen713522/navigator';
import BlankScreen813521Navigator from '../features/BlankScreen813521/navigator';
import BlankScreen413520Navigator from '../features/BlankScreen413520/navigator';
import BlankScreen913519Navigator from '../features/BlankScreen913519/navigator';
import BlankScreen413514Navigator from '../features/BlankScreen413514/navigator';
import BlankScreen613512Navigator from '../features/BlankScreen613512/navigator';
import BlankScreen513511Navigator from '../features/BlankScreen513511/navigator';
import BlankScreen213510Navigator from '../features/BlankScreen213510/navigator';
import BlankScreen613509Navigator from '../features/BlankScreen613509/navigator';
import BlankScreen513508Navigator from '../features/BlankScreen513508/navigator';
import BlankScreen313502Navigator from '../features/BlankScreen313502/navigator';
import BlankScreen213501Navigator from '../features/BlankScreen213501/navigator';
import BlankScreen113500Navigator from '../features/BlankScreen113500/navigator';
import BlankScreen613499Navigator from '../features/BlankScreen613499/navigator';
import BlankScreen513498Navigator from '../features/BlankScreen513498/navigator';
import BlankScreen413497Navigator from '../features/BlankScreen413497/navigator';
import BlankScreen313496Navigator from '../features/BlankScreen313496/navigator';
import BlankScreen213495Navigator from '../features/BlankScreen213495/navigator';
import BlankScreen113383Navigator from '../features/BlankScreen113383/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1113525: { screen: BlankScreen1113525Navigator },
BlankScreen513524: { screen: BlankScreen513524Navigator },
BlankScreen1013523: { screen: BlankScreen1013523Navigator },
BlankScreen713522: { screen: BlankScreen713522Navigator },
BlankScreen813521: { screen: BlankScreen813521Navigator },
BlankScreen413520: { screen: BlankScreen413520Navigator },
BlankScreen913519: { screen: BlankScreen913519Navigator },
BlankScreen413514: { screen: BlankScreen413514Navigator },
BlankScreen613512: { screen: BlankScreen613512Navigator },
BlankScreen513511: { screen: BlankScreen513511Navigator },
BlankScreen213510: { screen: BlankScreen213510Navigator },
BlankScreen613509: { screen: BlankScreen613509Navigator },
BlankScreen513508: { screen: BlankScreen513508Navigator },
BlankScreen313502: { screen: BlankScreen313502Navigator },
BlankScreen213501: { screen: BlankScreen213501Navigator },
BlankScreen113500: { screen: BlankScreen113500Navigator },
BlankScreen613499: { screen: BlankScreen613499Navigator },
BlankScreen513498: { screen: BlankScreen513498Navigator },
BlankScreen413497: { screen: BlankScreen413497Navigator },
BlankScreen313496: { screen: BlankScreen313496Navigator },
BlankScreen213495: { screen: BlankScreen213495Navigator },
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
