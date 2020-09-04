// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  # Table of Contents

  * [Description](#description)
  * [License](#license)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Test](#test)
  * [Contributors](#contributors)
  * [Contact](#contact)
  * [Credits](#credits)

  # **Description**
  * ${data.description}

  # **License**
  *  ![License: MIT](${
    data.license === "MIT"
      ? "https://img.shields.io/badge/License-MIT-yellow.svg"
      : ""
    })

  # **Usage** 
  * ${data.usage}

  # **Installation**   
  * ${data.installation}

  # **Test**
  * ${data.test}

  # **Contributors**
  * ${data.contributors}

  # **Contact**
  * https://github.com/${data.github}

  * ${data.email}
`;
}

module.exports = generateMarkdown;