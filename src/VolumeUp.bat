@if (@a==@b) @end /*
@ECHO OFF
ECHO **********************************************
ECHO **********************************************
ECHO **********************************************
ECHO **********************************************
ECHO **********************************************
ECHO Adjusting Computer Volume... please be patient
ECHO **********************************************
ECHO **********************************************
ECHO **********************************************
ECHO **********************************************
ECHO **********************************************
:: batch portion

cscript /e:jscript "%~f0"


:: JScript portion */

var shl = new ActiveXObject("WScript.Shell");
for (var i=0; i<100; i++) {
    shl.SendKeys(String.fromCharCode(0xAF));
}