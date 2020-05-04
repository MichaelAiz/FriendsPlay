var OSName = "Unknown OS";
if (navigator.platform.indexOf("Win")!=-1) OSName="Windows";
if (navigator.platform.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.platform.indexOf("X11")!=-1) OSName="Unix";
if (navigator.platform.indexOf("Linux")!=-1) OSName="Linux";
if (navigator.platform.indexOf("iphone")!=-1) OSName="iOS";
if (navigator.platform.indexOf("Android")!=-1) OSName="Android";
alert(OSName);