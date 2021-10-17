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
  return `
  # ${data.title}

  ## Description

  ${data.projectDescription}

  ## Table of Contents (Optional)

  If your README is very long, add a table of contents to make it easy for users to find what they need.

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)

  ## Installation

  ${data.installInfo}

  ## Usage 

  ${data.usageInfo}

  ${renderLicenseSection(data.license)}

  ## Contributions

  ${data.contributionsInfo}`;
}

module.exports = generateMarkdown;
