/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => AppNavigator);
