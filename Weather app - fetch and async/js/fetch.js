fetch("user.json").then(response => {
  return response.json();
}).then(user => {
  console.log(user);
  return user.displayName.toUpperCase();
}).then(displayNameAsUppercase => {
  console.log(displayNameAsUppercase);
}).catch(e => {
  //handle error 
  console.log(e);
});
