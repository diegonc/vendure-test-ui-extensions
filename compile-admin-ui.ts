import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import * as path from 'path';

import { TEUPlugin } from './src/plugins/test-external-ui/plugin.module'

compileUiExtensions({
  outputPath: path.join(__dirname, "src", "admin-ui"),
  devMode: false,
  extensions: [
      TEUPlugin.uiExtensions
  ]
}).compile?.().then(() => {
  process.exit(0);
}).catch(err => {
  console.error("err", err);
  process.exit(1);
});
