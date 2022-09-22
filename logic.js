document.getElementById("btn").addEventListener("click", showProfile);
function showProfile() {
    let uname = document.getElementById("gusername").value;
    let url = "https://api.github.com/users/" + uname;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        if (data.message) {
            alert("User not found");                  
        }else{console.log(data);
            document.getElementById("anshere").innerHTML = `
            <br>
            <img src="${data.avatar_url}" alt="profile pic" width="250px" height="250px">
            <h3> ${data.login}</h3>
            <h1>${data.name}</h1>
            <a href="${data.html_url}" target="_blank">View Github Profile</a><br>
            <a href="${data.blog}" target="_blank">View Blog</a><br>
            <p>Bio: ${data.bio}</p>
            <p>Loction: ${data.location}</p>
            <p>Email: ${data.email}</p>
            <p>Company: ${data.company}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Public Repos: ${data.public_repos}   </p> 
            <a href="${data.repos_url}" target="_blank">View Repos</a><br>
            <p>Account Created on: ${data.created_at}</p>
            <p>Last Updated on:${data.updated_at}</p>
            <a href="${data.twitter_username}" target="_blank">View Twitter</a><br>
            `;
        }        
    }).catch((err) => {console.log(err);})
}