import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "grpc-rocket" is now active!');
  let disposable = vscode.commands.registerCommand(
    "grpc-rocket.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hola bruh!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
