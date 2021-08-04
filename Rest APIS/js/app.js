//ANCHOR rest api
// application program interface 
// many different apis 
// - focus is on web apis

//ANCHOR rest api 
// representational state transfer
// mostly http

//can be used with most programming languages


//ANCHOR http request 
// get: retrieve data from specified source
// post: post data to specified source
// put: update specified source
// delete: remove a specified source

//ANCHOR secondary 
//  head: same as get but does not return body
//  options returns the supported http methods
//  patch update partial resources

//API endpoints
//GET /api/users      //get all users
//GET /api/users/1    //get single users
//POST /api/users     //add user
//PUT /api/users/1    //Update user
//DELETE /api/users/1 // Delete user

//ANCHOR CALLBACK FUNCTIONS 
// you get async and sync callbacks


const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }


function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post three', body: 'this is post three' }, getPosts);
//getPosts();