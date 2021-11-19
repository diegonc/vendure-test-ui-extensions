import { VendurePlugin } from "@vendure/core";
import { AdminUiExtension } from "@vendure/ui-devkit/compiler";
import * as path from "path";

@VendurePlugin({})
export class TEUPlugin {
  static uiExtensions: AdminUiExtension = {
    extensionPath: path.join(__dirname, "ui-extensions"),
    ngModules: [
      {
        type: "lazy",
        route: "test",
        ngModuleFileName: "teu-extension.module.ts",
        ngModuleName: "TEUExtensionModule"
      },
      {
        type: 'shared',
        ngModuleFileName: 'teu-shared.module.ts',
        ngModuleName: 'TEUSharedModule',
      }
    ],
    staticAssets: [
      {
        path: path.join(__dirname, "ui-extensions", "components", "html-app", "src"),
        rename: "html-app"
      },
    ]
  }
}
