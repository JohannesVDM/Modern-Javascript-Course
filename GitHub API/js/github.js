class Github {
  constructor() {
    this.clientId = 'c2cfdf302a3c2e965fc2';
    this.clientSecret = 'ae5451d7ea10189b000404e0bd4f3d944da8d05b';

    this.repo_count = 5;
    this.repo_sort = 'created: asc';
  }

  async getUser(user) {

    //ANCHOR WITH SECRET
    //const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientId}&clientSecret=${this.clientSecret}`);

    //const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}?client_id=${this.clientId}&client_secret=${this.clientId}&clientSecret=${this.clientSecret}`);

    //ANCHOR WITHOUT SECRET
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}`);

    const profileData = await profileResponse.json();

    const repoData = await repoResponse.json();

    return {
      profileData: profileData,
      repoData: repoData
    }
  }
}