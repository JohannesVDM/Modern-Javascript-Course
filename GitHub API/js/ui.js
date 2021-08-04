class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user, repo) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}"> 
          <a href="${user.html_url}" target="_blank" class="btn btn - primary btn - block">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-primary">Following: ${user.following}</span>
          <br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company} </li>
            <li class="list-group-item">Website/blog: ${user.blog} </li>
            <li class="list-group-item">Location: ${user.location} </li>
            <li class="list-group-item">Date Joined: ${user.created_at} </li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h 3>
    <div id="repos">
      <!---->
    </div>
    `;




    //console.log(repo);
    let output = '';
    repo.forEach(function (repo) {
      console.log(repo);
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${user.html}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span>Stars: ${repo.stargazers_count}</span>
            <span>Watchers: ${repo.watchers_count}</span>
            <span>Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
        `;
    });
    //output 
    document.getElementById('repos').innerHTML = output;

  }

  //display fetched repo in frontend

  // showRepos(repo) {
  //
  // }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(message, className) {
    //clear any remaining alerts
    this.clearAlert();

    //create div 
    const div = document.createElement('div');

    //add class //without multiple class names
    div.className = className;

    div.appendChild(document.createTextNode(message));

    //get parent 
    const container = document.querySelector('.searchContainer');

    //searchbox
    const search = document.querySelector('.search');

    //insert alert
    container.insertBefore(div, search);
  }

  //clear alert message for multiple alerts
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }

    //timeout after 3s 
    setTimeout(() => {
      this.clearAlert();
    }, 3000);

  }
}