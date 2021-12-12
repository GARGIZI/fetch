const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', sendRequest);

function sendRequest() {
  const firstName = input.value;
  const serverUrlName = 'https://api.genderize.io';
  const serverUrlCountry = 'https://api.nationalize.io';

  const urlName = `${serverUrlName}?name=${firstName}`;
  const urlCountry = `${serverUrlCountry}?name=${firstName}`;
  
  const response = fetch(urlName);
  const responseSecond = fetch(urlCountry);
  
  response.then(response => response.json()).then(commits => {
    console.log(firstName + ' ' + commits.gender);;
  });

  responseSecond.then(responseSecond => responseSecond.json()).then(commits => {
    console.log(firstName + ' ' + commits.country[1]['country_id']);;
  });
}