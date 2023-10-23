//link to the badge for whatever license is selected
function renderLicenseBadge(license) {

  let licensechoice = ''
    switch (license) {
      //(https://opensource.org/licenses/MIT)
      case 'MIT':
        licensechoice = '![MIT Badge Link](https://img.shields.io/badge/License-MIT-yellow.svg)'
      break;
      //(https://opensource.org/licenses/Apache-2.0)
      case 'Apache':
        licensechoice = '![Apache Badge Link](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      break;
      //(https://www.gnu.org/licenses/gpl-3.0)
      case 'GPL':
        licensechoice = '![GPL v3 Badge Link](https://img.shields.io/badge/License-GPLv3-blue.svg)'
      break;
    } 
    return licensechoice
}

//Link to the selected license
function renderLicenseLink(license) {
  //let licensetype = license.license;
  let licensechoice = ''
   
    switch (license) {
      //[MIT License link]
      case 'MIT':
        licensechoice = '![MIT License link](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)'
      break;
      //[Apache License link]
      case 'Apache':
        licensechoice = '![Apache License link](https://github.com/apache/.github/blob/main/LICENSE)'
      break;
      //[GNU General Public Library License link]
      case 'GPL':
        licensechoice = '![GNU General Public Library License link](https://github.com/collective/example.p4p5/blob/master/LICENSE.GPL)'
      break;
    } 
    return licensechoice
}

//function that returns the license section of README
function renderLicenseSection(license) {
  let licensechoice = ''
   
    switch (license) {
      case 'MIT':
        licensechoice = `
        Copyright (c) 2012-2023 Scott Chacon and others

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
      break;
      case 'Apache':
        licensechoice = `                               
        Apache License
    Version 2.0, January 2004
  http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
    `
      break;
      case 'GPL':
        licensechoice = `                  
        GNU GENERAL PUBLIC LICENSE
           Version 2, June 1991

Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
    `
      break;
    } 
    return licensechoice
}

// This is the base README before any user imputs are made
const generatedREADME = ({ Title , Description , Installation , Usage , Credits , License , Features , Contribute}) =>{
  return `
  # ${Title}

  # Description
   Hello and welcome to my application. Let me give you a quick rundown of the how and why I created it! ${Description}

  # Table of Content
   - [Title](#title)
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   - [Features](#features)
   - [Contribute](#contribute)

  # Installation
   You can download and run my app by following this link ${Installation} or by accessing the repositroy on GitHub and following these steps. settings -> pages -> visit site.
   
  # Usage
   ${Usage}

  # Credits
   ${Credits}
   License Badge links used can be found here - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
   
   
  # License
   Here you will find a link to the license that protects my app
   ${renderLicenseBadge(License)}
   ${renderLicenseLink(License)}
   ${renderLicenseSection(License)}
   
  # Features
   ${Features}

  # Contribute
   If you would like to contribute to my app I am currently working on implementing these new functions or fixing these bugs: ${Contribute}
  `
}
module.exports = generatedREADME;
