const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    //json into js user object
    const user = JSON.parse(xhr.responseText);

    console.log(user);
  }
}

xhr.open("GET", "user.json", true);
xhr.send();