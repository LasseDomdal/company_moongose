// index.js
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}

async function generateCompaniesList(companies) {
    let template = await getText('/companies.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({companies});
}

async function main() {
    try {
        let companies = await get('/company');
        document.body.innerHTML = await generateCompaniesList(companies);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}
main();