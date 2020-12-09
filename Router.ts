// IMPORTANT NOTE
// Make sure all html pages are named all lower case. Apps Scripts run on *nix
// servers and are therefor case sensitive. This just makes things easier.

function doGet(e:GoogleAppsScript.Events.DoGet) {
    // Extract params
    if (e && e.parameter){
        var nav = (e.parameter as any).nav as string;

        // Add any additional expected parameters here
    }

    if (nav) {
      this.currentPage = nav.toLowerCase() + '.html';
    } 
    
    // Alter _layout.html as desired
    return HtmlService.createTemplateFromFile('_layout.html')
      .evaluate()
      .setTitle('Portal')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }
  
  // Adapted from https://stackoverflow.com/questions/30919637/break-google-apps-htmlservice-page-into-multiple-html-files
  function renderBody () {
    if (this.currentPage) {
      return HtmlService.createTemplateFromFile(this.currentPage)
         .evaluate()
         .getContent();
    } else {
      return HtmlService.createHtmlOutputFromFile('index.html').getContent();
    } 
  }
  
  function GetRelativeUrl (navPart) {
   return ScriptApp.getService().getUrl() + "?nav=" + navPart.toLowerCase();
  }