const fetch = require('node-fetch');

module.exports = async function repoGet(repoPart){
    let repo;
    repo = await fetch('https://api.github.com/repos/Soucouyant/HC-Bot').then(response => response.json());
    repoPart = repo.html_url;
};

console.log('ness');




