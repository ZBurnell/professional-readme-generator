// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licensechoice = ''
   // Add links 
    switch (license) {
      case 'MIT':
        licensechoice = '[![MIT Badge Link](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
      case 'Apache':
        licensechoice = '[![Apache Badge Link](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
      case 'GPL':
        licensechoice = '[![GPL v3 Badge Link](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    } 
    return licensechoice
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //let licensetype = license.license;
  let licensechoice = ''
   
    switch (license) {
      case 'MIT':
        licensechoice = '[MIT License link](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)'
      break;
      case 'Apache':
        licensechoice = '[Apache License link](https://github.com/apache/.github/blob/main/LICENSE)'
      break;
      case 'GPL':
        licensechoice = '[GNU General Public Library License link](https://github.com/collective/example.p4p5/blob/master/LICENSE.GPL)'
      break;
    } 
    return licensechoice
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

// TODO: Create a function to generate markdown for README
const generatedREADME = ({ Title , Description , Installation , Usage , Credits , License , Features , Contribute}) =>{
  return `
   # ${Title};

   # Description;
   ${Description}
   
   
   # Installation;
   ${Installation}
   
   # Credits;
   ${Credits}
   
   # License;
   ${renderLicenseBadge(License)}
   ${renderLicenseLink(License)}
   ${renderLicenseSection(License)}
   
   
   # Features;
   ${Features}

   # Contribute;
   ${Contribute}
   `
}
module.exports = generatedREADME;
