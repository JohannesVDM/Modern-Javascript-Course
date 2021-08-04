function ghInputKeyDown() {
  //init github 
  const github = new Github;
  const ui = new UI;

  const uiGitHubInput = document.getElementById('GithubUsernameInput');

  //ANCHOR method 1
  // uiGitHubInput.addEventListener('keyup', keyDown);

  // function keyDown(e) {
  // console.log(e.target.value);
  // }

  uiGitHubInput.addEventListener('keyup', e => {
    if (e.target.value !== '') {
      userText = e.target.value;

      //make http call
      github.getUser(userText)
        .then(data => {
          if (data.profileData.message === "Not Found") {
            console.log("not found");

            //2nd par is bootstrap classes
            ui.showAlert('User not found', 'alert alert-danger');

          } else {
            //show profile if found
            ui.showProfile(data.profileData, data.repoData);
            // console.log(data.repoData);
            //ui.showRepos(data.repoData);
          }
        });
    } else {
      //clear profile in ui
      ui.clearProfile();
    }
  });
}

ghInputKeyDown();
