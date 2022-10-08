// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `# ${license.title} ## license ${renderLicenseBadge(license)}`
}
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
  return `# ${data.title}`;
}

module.exports = generateMarkdown;
