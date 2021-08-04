const http = new easyHTTP;

//GET single post
// http.get('https://jsonplaceholder.typicode.com/posts/1'), function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// }

// get posts 
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  // console.log(err, posts);

  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});



// Create Data 
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// // Create post 
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


//update post 
// http.put('https://jsonplaceholder.typicode.com/posts/2', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }


// });