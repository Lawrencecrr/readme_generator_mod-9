// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const badgeUrl = String(license).split(" ").join("%20");
  return `
  ![${license} license badge](https://img.shields.io/badge/license-${badgeUrl}-green)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  if (license == 'GNU AGPLv3') {
    return `[${license}](https://choosealicense.com/licenses/agpl-3.0/)`}
  if (license == 'GNU GPLv3') {
    return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`}
  if (license == 'GNU LGPLv3') {
    return `[${license}](https://choosealicense.com/licenses/lgpl-3.0/)`}
  if (license == 'Mozilla Public License 2.0') {
    return `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`}
  if (license == 'Apache License 2.0') {
    return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`}
  if (license == 'MIT License') {
    return `[${license}](https://choosealicense.com/licenses/mit/)`}
  if (license == 'Boost Software License 1.0') {
    return `[${license}](https://choosealicense.com/licenses/bsl-1.0/)`}
  if (license == 'The Unlicense') {
    return `[${license}](https://choosealicense.com/licenses/unlicense/)`}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  ## License
  This application is covered under this license: ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests 
  ${data.tests}
  
  ## Questions
  My Github profile: [${data.github}](https://github.com/${data.github})
  Please email me with any questions, comments, or concerns at ${data.email}.

`;
}

module.exports = generateMarkdown;
