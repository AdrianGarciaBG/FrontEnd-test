
document.getElementById("btn-search").addEventListener("click", getData);
document.getElementById("info").style.display = "none";
document.getElementById("error").style.display = "none"



function getData() {
    
    const userName = document.getElementById("inputName").value;
    
    const usersInfo = `https://api.github.com/users/${userName}`;

    fetch(usersInfo)
    .then(response => response.json())
    .then(data => {
        getUserData(data);
        console.log(data);
    })
    .catch(error => console.error(error));

    
    
    const usersRepo = `https://api.github.com/users/${userName}/repos`;

    fetch(usersRepo)
    .then(response => response.json())
    .then(data => {
        getUserRepos(data);
        console.log(data)
    })
    .catch(error => console.error(error));


function getUserData(data){

document.getElementById("info").style.display = "block";
document.getElementById("profilePic").src = data.avatar_url;
document.getElementById("username").innerHTML = "@" + data.login;
document.getElementById("fullname").innerHTML = data.name;
document.getElementById("userBio").innerHTML = data.bio;

};



function getUserRepos(data){

//     const repoTable = document.getElementById("repoTable");

//     const tdTable = document.createElement('td');

//     data.map(repoName => {

//     const trTable = document.createElement('tr');

//     trTable.innerHTML = `${repoName.name}`

//     tdTable.append(trTable);
// });
//     repoTable.append(tdTable);

    const repoTable = document.getElementById("repoTable");

    repoTable.innerHTML = "";

    let template = "";

    data.map( repoName => {
         template += `
            <tr>
                <td>${repoName.name}</td>
                <td><img src="img/code-fork-icon.png" class="fork">${repoName.forks_count}</td>
                <td><img src="img/star2.png" class="star">${repoName.stargazers_count}</td>
            </tr>
            
         `;
    });

    repoTable.innerHTML = template;
}

};

