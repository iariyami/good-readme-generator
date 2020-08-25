// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  # Table of Contents

  <!-- toc -->
  * [Description](#description)
  * [License](#license)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Contributors](#contributors)
  * [Questions](#questions)
  * [Credits](#credits)
   <!-- toc stop -->

  # **Description**
   > ${data.description}

  ## **License**
  * ${data.license}

  ## **Usage** 
  * ${data.usage}

  ### **Installation**   
  * ${data.installation}

  ## **Contributors**
 


`;
}

module.exports = generateMarkdown;
