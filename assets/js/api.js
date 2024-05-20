// Promise ==> async/await


async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

/* OU

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
*/