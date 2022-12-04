const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn')
const devAvatar = document.getElementById('dev-avatar');
const devName = document.getElementById('dev-name');
const devUsername = document.getElementById('dev-username');
const devBio = document.getElementById('dev-bio');

const devRepos = document.getElementById('repos-value');
const devFollowers = document.getElementById('followers-value');
const devFollowing = document.getElementById('following-value');

const devLocation = document.getElementById('dev-location');
const devTwitter = document.getElementById('dev-twitter');
const devBlog = document.getElementById('dev-link');
const devJob = document.getElementById('dev-job');



async function api() {
    const response = await fetch('https://api.github.com/users/'+searchInput.value)
    const data = await response.json()

    console.log(data)

    devAvatar.src = data.avatar_url || "https://www.pngwing.com/en/free-png-zhhmc"
    devName.innerHTML = data.name || "TBD"
    devUsername.innerHTML = data.username || "TBD"
    devBio.innerHTML = data.bio || "TBD"
    devRepos.innerHTML = data.public_repos || 0
    devFollowers.innerHTML = data.followers || 0
    devFollowing.innerHTML = data.following || 0
    devLocation.innerHTML = data.location || "TBD"
    devTwitter.innerHTML = data.twitter || "TBD"
    devJob.innerHTML = data.company || 'TBD'
    devBlog.innerHTML = data.blog || "TBD"
}


searchBtn.addEventListener('click', (e) => {
    api()
})