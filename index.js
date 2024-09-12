/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { MainRender } from './src/MainRender';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainRender);
