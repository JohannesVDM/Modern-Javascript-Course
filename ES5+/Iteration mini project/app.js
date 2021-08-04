const data = [
  {
    name: 'Johannes Dewalt',
    age: '32',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Bostom MA',
    image: 'https://randomuser.me/api/portraits/med/women/16.jpg'
  },
  {
    name: 'Jane Moth',
    age: '25',
    gender: 'Female',
    lookingfor: 'Female',
    location: 'Bostom MA',
    image: 'https://randomuser.me/api/portraits/med/men/70.jpg'
  },
  {
    name: 'Jannes Pienaar',
    age: '60',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Bostom MA',
    image: 'https://randomuser.me/api/portraits/med/men/1.jpg'
  }
];

const profiles = profileIterator(data);
//call first profile 
nextProfile();

//Profile iterator 
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
    }
  };
}

//next event 
document.querySelector('#next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.querySelector('#profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">Age: ${currentProfile.age}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}   </li>
    </ul>
  `;
    document.querySelector('#imageDisplay').innerHTML = `<img src ="${currentProfile.image} ">`;
  } else {
    //no more profiles
    window.location.reload();
    //nextProfile();
  }
  //
}