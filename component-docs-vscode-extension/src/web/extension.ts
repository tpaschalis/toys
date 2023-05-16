import * as vscode from 'vscode';
import * as path from 'path';

// Function to open a new Chrome tab with a modified URL
function openNewTab() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const filePath = editor.document.uri.fsPath;
    const fileDir = path.dirname(filePath); // Get the directory of the file
    // Use the filePath to modify the URL as per your requirements
    const modifiedUrl = getModifiedUrl(fileDir);

    // Call vscode.env.openExternal() to open the modified URL in the default browser
    vscode.env.openExternal(vscode.Uri.parse(modifiedUrl));
  }
}

// Function to modify the URL based on the file directory
function getModifiedUrl(directory: string): string {
  const urlPrefix = 'https://grafana.com/docs/agent/next/flow/reference/components/';
  const dirParts = directory.split('/');
  const componentsIndex = dirParts.indexOf('component');

  let desiredParts: string[];

  // If 'components' directory is found
  if (componentsIndex !== -1) {
    desiredParts = dirParts.slice(componentsIndex + 1); // Exclude 'components' directory and preceding parts
  } else {
    desiredParts = dirParts; // Use the entire directory if 'components' directory is not found
  }

  const internalIndex = desiredParts.indexOf('internal');
  // Exclude suffix directories starting from 'internal' directory if it exists
  if (internalIndex !== -1) {
    desiredParts = desiredParts.slice(0, internalIndex);
  }

  const modifiedUrl = urlPrefix + desiredParts.join('.');
  return modifiedUrl;
}

// Example usage: Register a command to trigger the openNewTab() function
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.openNewTab', openNewTab);

  context.subscriptions.push(disposable);
}

