const movieMain = document.querySelector('#movies');

const moviesData = [
  {
    image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    rating: 9.1,
    year: 2022,
    description: "Descrição do filme… DO BATIMA",
    isFavorited: true,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.5,
    year: 2019,
    description: "Descrição do filme… VINGADORES",
    isFavorited: false
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 5.2,
    year: 2022,
    description: "Descrição do filme… DOUTOR ESTRANHO",
    isFavorited: false
  },
]

const createMovieBox = (movie) => {

  const movieBox = document.createElement('div');

  movieBox.classList.add('movieBox');

  const movieTitles = moviesData.map(movie => movie.title); 
  const movieRat = moviesData.map(movie => movie.rating);
  const movieImg = moviesData.map(movie => movie.image);
  const movieDes = moviesData.map(movie => movie.description);


  console.log(movieImg);

  const movieInnerHTML = `
  
 
  <img class = "imagemFilme" src = "${movie.image}" alt = "image 1"/>


<div class="flex-col flex">
  <div class = "nomeFilme letras">${movie.title}</div>  

  <div class = "flex-row flex">
    <img class = "star" src = "star.svg" alt = "star"/>
    <div class = "text letras">${movie.rating}</div>
    <img class = "heart" src = "heart.svg" alt = "heart"/>
    <div class = "favoritar favoritar-2 letras">Favoritar</div>
  </div>
</div>

<p class = "description letras" >${movie.description}</p>      
  `
  movieBox.innerHTML = movieInnerHTML;
  movieMain.appendChild(movieBox);

}

moviesData.forEach(movie => createMovieBox(movie));
