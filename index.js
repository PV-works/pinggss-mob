import { registerRootComponent } from 'expo';
/**
 * @format
 */
import './shim';
import React from 'react';
import {Text, TextInput} from 'react-native';
import Root from './Root';
import {name as appName} from './app.json';

/**
 * PREVENT NATIVE FONT SCALE
 * Add more text component here if they are using in App
 */
if (!Text.defaultProps) {
  Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;
if (!TextInput.defaultProps) {
  TextInput.defaultProps = {};
}
TextInput.defaultProps.allowFontScaling = false;


function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  // Render the app component on foreground launch
  return <Root />;
}

registerRootComponent(HeadlessCheck);
