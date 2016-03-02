var app = require('app'),
    BrowserWindow = require('browser-window');
var mainWindow = null;

var handleStartupEvent = function() {
  if (process.platform !== 'win32') {
    return false;
  }

  var squirrelCommand = process.argv[1];
  switch (squirrelCommand) {
    case '--squirrel-install':
    case '--squirrel-updated':

      // Optionally do things such as:
      //
      // - Install desktop and start menu shortcuts
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Always quit when done
      app.quit();

      return true;
    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Always quit when done
      app.quit();

      return true;
    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated
      app.quit();
      return true;
  }
};

if (handleStartupEvent()) {
  return;
}

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd   Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

    // Open our fullscreen window
    mainWindow = new BrowserWindow({
        resizable: false,
        frame: true,
        fullscreen: true,
        toolbar: true,
        kiosk: false
    });

    // Set Volume
    //VolumeUp
    // todo

    // Block Putting the Computer to Sleep
    const powerSaveBlocker = require('electron').powerSaveBlocker;
    var id = powerSaveBlocker.start('prevent-display-sleep');

    // Battery Power Checks
    // to do

    mainWindow.loadUrl('file://' + __dirname + '/windows/main/main.html');
    mainWindow.openDevTools(); // Whether to open the devtools window

    // Shutdown
    powerSaveBlocker.stop(id);

});
