/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import {Config} from '@remotion/cli/config';
import {webpackOverride} from './src/webpack-override';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig(webpackOverride);

// 🔥 This is needed to get Three.js renders working on my Mac. Not great for Docker use though?
// See: https://oss.issuehunt.io/r/remotion-dev/remotion/issues/1761
Config.setChromiumOpenGlRenderer('angle');
