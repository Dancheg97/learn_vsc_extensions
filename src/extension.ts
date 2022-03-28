import * as vscode from "vscode";
import { GrpcNinjaPanel } from "./swiper";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "grpcninja" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("grpcninja.helloWorld", () => {
      GrpcNinjaPanel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("grpcninja.helloRoad", async () => {
      let resp = await vscode.window.showInformationMessage(
        "Chose some stuff out here",
        "heyo",
        "yoha"
      );
      if (resp === "heyo") {
        vscode.window.showInformationMessage("YO!");
      } else {
        vscode.window.showInformationMessage("Test changesww!");
      }
    })
  );
}

export function deactivate() {}
