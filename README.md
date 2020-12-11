# AliAS

AliAS is a tool designed to help you set up a Google Apps Script webapp with minimal fuss. It
contains some helper functions which can be used to set up some basic web routing. This repository 
doesn't contain any app-specific code, such as reading data from a spreadsheet.

## How To Use

Add new html pages to your project and use the GetRelativeUrl function in your templates, that's it!

```
<a href="<?=GetRelativeUrl("samplepage.html")?>">Link here</a>
```

Just make sure that your html file names are all lower case. Apps Scripts run on \*nix systems, so they're case sensitive. I didn't spend time figuring out how to enumerate files inside of your Apps Script project yet, so the functions involved all use toLowerCase().

## Deploying

When you're ready to deploy your app, just use clasp! See [this article](https://developers.google.com/apps-script/guides/typescript) for more details.
