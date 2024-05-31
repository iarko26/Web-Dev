//variables
let search = document.querySelector('.searchbar-container');
let profile = document.querySelector('.profile-container');
let root = document.documentElement.style;
const url = "https://api.github.com/users/";
let get = ((con) => document.getElementById(`${con}`));
let noerror = get('no-results');
let btnmode = get('btn-mode');
let btntext = get('mode-text');
let input = get('input');
let btnsearch = get('submit');
let userName = get('name');
let avatar = get('avatar');
let bio = get('bio');
let followers = get('followers');
let following = get('following');
let repos = get('repos');
let user_location = get('location');
let linkedin = get('linkedin');
let Repo = get('repo');
let modeicon = get('mode-icon');
let user = get('user');
let date = get('date');
let darkmode = false;

//event listener
btnsearch.addEventListener('click', async () => {
    if (input.value !== "") {
        try {
            await getuser(input.value);
            await getrepos(input.value);
            await getprofilereadme(input.value);
        } catch (error) {
            console.error('Error fetching user data or repositories:', error);
            noerror.style.display = 'block'; // Show the error message
        }
    }
});

btnmode.addEventListener('click', () => {
    if (darkmode) {
        lightmodeprop();
    } else {
        darkmodeprop();
    }
});

//fetch user
async function getuser(userName) {
    try {
        let response = await fetch(`${url}${userName}`);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayuser(data);
        } else {
            noerror.style.display = 'block'; // Show the error message
            profile.style.display = 'none'; // Hide the user's profile
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        noerror.style.display = 'block'; // Show the error message
        profile.style.display = 'none'; // Hide the user's profile
    }
}

async function getrepos(userName) {
    try {
        let response = await fetch(`${url}${userName}/repos`);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displaytopRepo(data);
        }
    } catch (error) {
        console.error('Error fetching user repositories:', error);
        noerror.style.display = 'block'; // Show the error message
    }
}

async function getprofilereadme(userName) {
    try {
        let response = await fetch(`${url}${userName}/repos`);
        if (response.ok) {
            let repos = await response.json();
            let userRepo = repos.find(repo => repo.name === userName); //find the user's repository
            if (userRepo) {
                response = await fetch(`${userRepo.url}/contents/README.md`);
                if (response.ok) {
                    let data = await response.json();
                    let readmeContent = atob(data.content); // Decode the content of the readme file(any file in the repository is encoded in base64 format)
                    displayreadme(readmeContent);
                } else {
                    console.error('Error fetching readme:', error);
                }
            }
        }
    } catch (error) {
        console.error('Error fetching user repositories:', error);
        noerror.style.display = 'block'; // Show the error message
    }
}

//display user data
function displayuser(data) {
    noerror.style.display = 'none'; // Hide the error message

    avatar.src = `${data.avatar_url}`; // Show profile picture
    // Display the user's name
    if (data.name) {
        userName.innerText = data.name;
    } else {
        userName.innerText = `@${data.login}`;
    }
    user.innerText = `@${data.login}`; // Show username
    user.href = `${data.html_url}`; // Link to profile
    date.innerText = `Joined ${new Date(data.created_at).toDateString()}`; // Show date

    if (data.bio) {
        bio.innerText = `${data.bio}`;
    } else {
        bio.innerText = 'No bio provided';
    }
    if (data.location) {
        user_location.innerText = `${data.location}`;
    } else {
        user_location.innerText = 'Not Available';
    }
    followers.innerText = `${data.followers}`;
    following.innerText = `${data.following}`;
    repos.innerText = `${data.public_repos}`;

    // Make sure the profile container is visible
    profile.style.display = 'block';
    search.classList.toggle('active');
    profile.classList.toggle('active');
}

function displaytopRepo(data) {
    data.sort((a, b) => b.commits - a.commits); // Sort the repositories by the number of commits
    Repo.innerHTML = "";

    for (let i = 0; i < Math.min(data.length, 2); i++) {
        const repo = data[i];
        const listitem = document.createElement('li');
        const link = document.createElement('a');
        link.innerText = repo.name;
        link.href = repo.html_url;
        link.target = '_blank';
        link.classList.add('repo-link');
        listitem.appendChild(link);
        if (data.length === 2) {
            listitem.classList.add('two-repos');
        }
        Repo.appendChild(listitem);
    }
}

function displayreadme(readmeContent) {
    let decodecon = readmeContent;
    let linkedinmatch = decodecon.match(/linkedin\.com\/in\/(\w+)/i); // Match the LinkedIn username
    if (linkedinmatch) {
        linkedin.innerText = `@${linkedinmatch[1]}`; // Display the LinkedIn username
        linkedin.href = `https://www.linkedin.com/in/${linkedinmatch[1]}`; // Link to the LinkedIn profile
        linkedin.style.display = 'block';
        linkedin.previousElementSibling.style.opacity = 1;
    } else {
        linkedin.innerText = 'N/A';
        linkedin.href = '#';
        linkedin.style.display = 'block';
        linkedin.previousElementSibling.style.opacity = 0.5;
    }
}

//toggle 
function darkmodeprop() {
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    btntext.innerText = "LIGHT";
    modeicon.src = "./assets/images/sun-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
    darkmode = true;
    console.log(darkmode);
    localStorage.setItem('darkmode', 'true');
    console.log('Dark mode enabled');
}

function lightmodeprop() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    btntext.innerText = "DARK";
    modeicon.src = "./assets/images/moon-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    darkmode = false;
    console.log(darkmode);
    localStorage.setItem('dark-mode', 'false');
    console.log('Light mode enabled');
}

//
function init() {
    darkmode = false;
    let val = localStorage.getItem('darkmode'); // Change 'dark-mode' to 'darkmode'
    if (val === null) {
        localStorage.setItem('darkmode', darkmode); // Change 'dark-mode' to 'darkmode'
        lightmodeprop();
    } else if (val === 'true') {
        darkmodeprop();
    } else {
        lightmodeprop();
    }
}

// Call init() when the page loads
init();
