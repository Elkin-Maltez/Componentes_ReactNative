/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ViewComponents from './src/viewcomponentes';
import TextoComponents from './src/textcomponentes';
import ImagenComponents from './src/imagecomponentes';
import ListasSimple from './src/flatlistcomponentes';
import Listas from './src/sectionlistcomponentes';
import Boton from './src/buttoncomponentes';
import Entradas from './src/inputcomponentes';
import Scroll from './src/scrollviewcomponentes'

AppRegistry.registerComponent(appName, () => Scroll);
