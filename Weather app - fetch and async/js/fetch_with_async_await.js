async function showUserInConsole() {
  //wait for response to return
  const response = await fetch("user.json");

  const user = await response.json();

  console.log(user.displayName.toUpperCase());


}

showUserInConsole();


