import * as vscode from "vscode";
import { HelloPanel } from "./HelloPanel";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "grpc-rocket" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("grpc-rocket.helloWorld", () => {
      HelloPanel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("grpc-rocket.askQuestion", async () => {
      let answer = await vscode.window.showInformationMessage(
        "How was your day?",
        "good",
        "bad"
      );
      console.log(answer);
      if (answer === "good") {
        vscode.window.showInformationMessage("Gut");
      }
    })
  );
}

export function deactivate() {}
