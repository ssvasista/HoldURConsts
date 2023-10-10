const CONSTANTS = {
    LinkedInProfile: "https://www.linkedin.com/in/shravan-vasista-a14b35115/",
    GithubProfile: "https://github.com/ssvasista",
    // Add more constants as needed
  };
  
const constantsDisplay = document.getElementById("constants-display");

let formattedText = '';
Object.keys(CONSTANTS).forEach((key, index) => {
  formattedText += `${index + 1}. ${key} | ${CONSTANTS[key]}\n`;
});

constantsDisplay.textContent = formattedText;