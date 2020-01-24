/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function addUserComponent(username) {
  axios.get(`https://api.github.com/users/${username}`).then(response => {
    let myGithubComponent = buildGithubComponent(response.data);
    let cardsElement = document.querySelector('.cards');
    cardsElement.appendChild(myGithubComponent);
  });
}

addUserComponent('bishibop');

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(follower => {
  addUserComponent(follower);
});
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function buildGithubComponent({
  avatar_url,
  name,
  login,
  location:githubLocation,
  html_url,
  followers,
  following,
  bio
}) {
  let cardElement = document.createElement('div');
  cardElement.classList.add('card');

  let imgElement = document.createElement('img');
  imgElement.src = avatar_url;

  let cardInfoElement = document.createElement('div');
  cardInfoElement.classList.add('card-info');

  let headerElement = document.createElement('h3');
  headerElement.classList.add('name');
  headerElement.textContent = name;

  let usernameElement = document.createElement('p');
  usernameElement.classList.add('username');
  usernameElement.textContent = login;

  let locationElement = document.createElement('p');
  locationElement.textContent = `Location: ${githubLocation}`;

  let profileElement = document.createElement('p');
  profileElement.textContent = "Profile:&nbsp;";

  let profileAnchorElement = document.createElement('a');
  profileAnchorElement.href = html_url;
  profileAnchorElement.textContent = html_url;

  let followersElement = document.createElement('p');
  followersElement.textContent = `Followers: ${followers}`;

  let followingElement = document.createElement('p');
  followingElement.textContent = `Followeing: ${following}`;

  let bioElement = document.createElement('p');
  bioElement.textContent = `Bio: ${bio}`;

  profileElement.appendChild(profileAnchorElement);

  [headerElement, usernameElement, locationElement, profileElement, followersElement, followingElement, bioElement].forEach(element => {
    cardInfoElement.appendChild(element);
  });

  cardElement.appendChild(imgElement);
  cardElement.appendChild(cardInfoElement);

  return cardElement;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
