// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseName = data.license[0];
  let string = ""
  if(licenseName === "MIT"){
    string = `[!(https://img.shields.io./badge/license-MIT-yellow.svg)]`
};
console.log(license);
const str = '';

if (typeof str === 'string' && str.length === 0) {
  console.log('string is empty');
} else {
  console.log('string is NOT empty')
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `# ${license.link} ## license ${renderLicenseLink(license)}`
}
const str = '';

if (typeof str === 'string' && str.length === 0) {
  console.log('string is empty');
} else {
  console.log('string is NOT empty')
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${license.section} ## license ${renderLicenseSection(license)}`
}
const str = '';

if (typeof str === 'string' && str.length === 0) {
  console.log('string is empty');
} else {
  console.log('string is NOT empty')
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  -[profile](#profile)
  
  ${response.username}
  ##username:
  
      ${response.description}
  ##description:
  
      ${response.installation}
  ##installation:
  
      ${response.usage}
  ##usage:
  
      ${response.licenses}
  ##licenses:
  
      ${response.contribution}
  ##contribution:
  
      ${response.test}
  ##test:
  
      ${response.email}
  ##email:
  
      ${response.profile}
  ##profile:
  `;  
}

module.exports = generateMarkdown;
