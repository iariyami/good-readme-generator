// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  # Table of Contents

  * [Description](#description)
  * [License](#license)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Contributors](#contributors)
  * [Contact](#contact)
  * [Credits](#credits)

  # **Description**
  * ${data.description}

  # **License**
  * ${data.license}

  # **Usage** 
  * ${data.usage}

  # **Installation**   
  * ${data.installation}

  # **Contributors**
  * ${data.contributors}

  # **Contact**
  * # " ' https://github.com/${data.username} ' "

  * ${data.email}
`;
}

module.exports = generateMarkdown;