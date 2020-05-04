var OSName = "Unknown OS";
if (navigator.platform.indexOf("Win")!=-1) OSName="Windows";
if (navigator.platform.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.platform.indexOf("X11")!=-1) OSName="Unix";
if (navigator.platform.indexOf("Linux")!=-1) OSName="Linux";
if (navigator.platform.indexOf("iPhone")!=-1) OSName="iOS";
if (navigator.platform.indexOf("Pike")!=-1) OSName="iOS";
if (navigator.platform.indexOf("Android")!=-1) OSName="Android";
const link1= document.querySelector('#game-link-1 > a')
const link2= document.querySelector('#game-link-2 > a')
const link3= document.querySelector('#game-link-3 > a')
if (OSName != "Android"){
    link1.setAttribute('href', 'https://www.apple.com/ca/itunes/');
    link1.innerHTML="iTunes";
    link2.setAttribute('href', 'https://www.apple.com/ca/itunes/');
    link2.innerHTML="iTunes";
    link3.setAttribute('href', 'https://www.apple.com/ca/itunes/');
    link3.innerHTML="iTunes";
}
