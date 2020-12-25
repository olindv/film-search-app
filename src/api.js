import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  params: {s: title, page: '1', r: 'json'},
  headers: {
    'x-rapidapi-key': '752d9213f0msh0142fc3426031f4p19f246jsnb095936c3ac0',
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
