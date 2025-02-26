const vscode = require('vscode');

vscode.commands.registerCommand('extension.replaceCurlyQuotes', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const document = editor.document;
    const text = document.getText();
    const newText = text.replace(/’/g, '\'');

    editor.edit(editBuilder => {
        editBuilder.replace(new vscode.Range(0, 0, document.lineCount, 0), newText);
    });
});
