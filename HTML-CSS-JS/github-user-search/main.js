const data_card = document.getElementById('data-card')
const appCard = document.getElementById('app-card')
const searchCard = document.getElementById('search-card')
const modal = document.getElementById("error-modal-div")

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
    console.log("reponse: ",response)
    const data = await response.json()

    console.log(data);

    if(response.status == 404) {
        modal.style.visibility = "visible"
        modal.style.marginTop = "0px"
        modal.style.transition = "0.25s"
        searchCard.style.marginBottom = "25px"
        searchCard.style.transition = "0.25s"
    } else {
        modal.style.visibility = "hidden";
        searchCard.style.marginBottom = "-50px"
        searchCard.style.transition = "0.25s"
        modal.style.transition = "0s"
        searchCard.style.marginBottom = "-50px"
    }

    if(data.name.length > 20) {
        devName.style.fontSize = "22px"
    }

    if(data.blog.length > 20) {
       devBlog.innerHTML =  data.blog.slice(0, 17)
    }

    devAvatar.src = data.avatar_url || "https://www.pngwing.com/en/free-png-zhhmc"
    devName.innerHTML = data.name || "To be determined  "
    devUsername.innerHTML = data.username || null
    devBio.innerHTML = data.bio.slice(0, 50) + "..." || "To be determined"
    devRepos.innerHTML = data.public_repos || 0
    devFollowers.innerHTML = data.followers || 0
    devFollowing.innerHTML = data.following || 0
    devLocation.innerHTML = data.location || "To be determined"
    devTwitter.innerHTML = data.twitter || "To be determined"
    devJob.innerHTML = data.company || 'To be determined'
    devBlog.innerHTML = data.blog.slice(0,17) || "To be determined"
}

searchBtn.addEventListener('click', (e) => {

    api()
})

