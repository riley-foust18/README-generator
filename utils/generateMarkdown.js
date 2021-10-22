// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length === 0) {
    return ""
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)} 
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.projectDescription}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installInfo}

  ## Usage 

  ${data.usageInfo}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributionsInfo}
  
  ## Tests
  ${data.testsInfo}

  ## Questions
  My GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername}) <br>
  Email me: ${data.emailInfo};
  `
}

module.exports = generateMarkdown;
