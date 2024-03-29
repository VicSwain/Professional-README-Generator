// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // MIT License
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    // GNU GPL v3.0
  } else if (license === "GPL v3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla 2.0") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    // Unlicense
  } else if (license === "The Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else if (license === "BSD 2-Clause") {
    return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
  } else if (license === "BSD 3-Clause") {
    return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else if (license === "Boost Software 1.0") {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  } else if (license === "Creative Commons Zero v1.0") {
    return '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
    // GNU GPL v3.0
  } else if (license === "GPL v3.0") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla 2.0") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
    // Unlicense
  } else if (license === "The Unlicense") {
    return `(http://unlicense.org/)`;
  } else if (license === "BSD 2-Clause") {
    return '(https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === "BSD 3-Clause") {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === "Boost Software 1.0") {
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === "Creative Commons Zero v1.0") {
    return '(http://creativecommons.org/publicdomain/zero/1.0/)';
  } else {
    return "This project is not protected!"
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `MIT`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0") {
    return `Apache 2.0`;
    // GNU GPL v3.0
  } else if (license === "GPL v3.0") {
    return `GPL v3.0`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla 2.0") {
    return `Mozilla Public License 2.0`;
    // Unlicense
  } else if (license === "The Unlicense") {
    return `The Unlicense`;
  } else if (license === "BSD 2-Clause") {
    return 'BSD 2-Clause';
  } else if (license === "BSD 3-Clause") {
    return 'BSD 3-Clause';
  } else if (license === "Boost Software 1.0") {
    return 'Boost Software 1.0';
  } else if (license === "Creative Commons Zero v1.0") {
    return 'Creative Commons Zero v1.0';
  } else {
    return 'No license'
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributors](#contributors)\n
  [Tests](#tests)\n
  [Questions](#questions)\n

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${renderLicenseSection(data.license)};\n
  ${renderLicenseLink(data.license)};
  
  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  https://github.com/${data.username}\n
  Please contact me with further questions @ ${data.email}
`;

}


module.exports = generateMarkdown;
