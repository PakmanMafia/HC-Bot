const fetch = require('node-fetch');

module.exports = async function (repoLink) {
    const repo = await fetch(repoLink).then(response => response.json());
    const repoPart = await repo.html_url;
    return repoPart;
}
console.log('hello');




