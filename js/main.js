const warningImgPath = './Images/warning.svg';

var objappVersion = navigator.appVersion;
var objAgent = navigator.userAgent;
var objbrowserName = navigator.appName;
var objfullVersion = '' + parseFloat(navigator.appVersion);
var objBrMajorVersion = parseInt(navigator.appVersion, 10);
var objOffsetName, objOffsetVersion, ix;

// In Chrome
if ((objOffsetVersion = objAgent.indexOf('Chrome')) != -1) {
  objbrowserName = 'Chrome';
  objfullVersion = objAgent.substring(objOffsetVersion + 7);
}
// In Microsoft internet explorer
else if ((objOffsetVersion = objAgent.indexOf('MSIE')) != -1) {
  objbrowserName = 'Microsoft Internet Explorer';
  objfullVersion = objAgent.substring(objOffsetVersion + 5);
}

// In Firefox
else if ((objOffsetVersion = objAgent.indexOf('Firefox')) != -1) {
  objbrowserName = 'Firefox';
}
// In Safari
else if ((objOffsetVersion = objAgent.indexOf('Safari')) != -1) {
  objbrowserName = 'Safari';
  objfullVersion = objAgent.substring(objOffsetVersion + 7);
  if ((objOffsetVersion = objAgent.indexOf('Version')) != -1)
    objfullVersion = objAgent.substring(objOffsetVersion + 8);
}
// In Edge
else if ((objOffsetVersion = objAgent.indexOf('Edge')) != -1) {
  objbrowserName = 'Edge';
}
// For other browser "name/version" is at the end of userAgent
else if (
  (objOffsetName = objAgent.lastIndexOf(' ') + 1) <
  (objOffsetVersion = objAgent.lastIndexOf('/'))
) {
  objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
  objfullVersion = objAgent.substring(objOffsetVersion + 1);
  if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
    objbrowserName = navigator.appName;
  }
}
// trimming the fullVersion string at semicolon/space if present
if ((ix = objfullVersion.indexOf(';')) != -1)
  objfullVersion = objfullVersion.substring(0, ix);
if ((ix = objfullVersion.indexOf(' ')) != -1)
  objfullVersion = objfullVersion.substring(0, ix);

objBrMajorVersion = parseInt('' + objfullVersion, 10);
if (isNaN(objBrMajorVersion)) {
  objfullVersion = '' + parseFloat(navigator.appVersion);
  objBrMajorVersion = parseInt(navigator.appVersion, 10);
}

let browserAlertNode = document.getElementById(objbrowserName);

let versionElement = document.createElement('span');
versionElement.className = 'label warning';

let imageTag = document.createElement('img');
imageTag.setAttribute('id', 'Img');
imageTag.setAttribute('src', warningImgPath);
imageTag.setAttribute('alt', 'warning');
imageTag.setAttribute('style', 'width:12%');

versionElement.appendChild(imageTag);

let textNode = document.createElement('h5');
textNode.innerText = ` Your Version ${objBrMajorVersion}+`;

versionElement.appendChild(textNode);

browserAlertNode.appendChild(versionElement);

// document.write(
//   '' +
//     'Browser name  = ' +
//     objbrowserName +
//     '<br>' +
//     // 'Full version  = ' +
//     // objfullVersion +
//     // '<br>' +
//     'Major version = ' +
//     objBrMajorVersion
//   // '<br>' +
//   // 'navigator.appName = ' +
//   // navigator.appName +
//   // '<br>' +
//   // 'navigator.userAgent = ' +
//   // navigator.userAgent +
//   // '<br>'
// );
