const username = document.getElementById('username');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const repos = document.querySelector('.repos');
const dp= document.querySelector('#dp');
const requestUrl= 'https://api.github.com/users/mildlybrutal';
const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl);
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if (xhr.readyState == 4) {
        const data = JSON.parse(this.responseText);
        username.innerHTML = data.login;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;
        repos.innerHTML= data.public_repos;
        const imgElement = document.createElement('img');
        imgElement.style.borderRadius  = '50%';
        imgElement.style.width = '150px';
        imgElement.setAttribute('src', data.avatar_url);
        imgElement.setAttribute('alt', 'Avatar Image');
        dp.appendChild(imgElement);
        dp.addEventListener('click', redirectToGithub);
    }
}
xhr.send();

function redirectToGithub() {
    window.open('https://github.com/mildlybrutal',"_blank");
}
