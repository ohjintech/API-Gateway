import React from 'react'
import SearchBar from '../Components/SearchBar.jsx'
import SearchResults from '../Components/SearchResults'

class SearchContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchResults: null
    }

    this.performSearch = this.performSearch.bind(this)
  }
  
  // make fetch request here?
    // requesting to back end, not the API
    // API fetch logic happens at backend
    // prop drill response into to search results
    performSearch(string){
      // if(e.key === 'Enter'){
      // string.replace(/\s+$/, '') gets rid of beginning and trailing whitespaces
        //this.testfuntion()
      let tempArray = string.split(' ').filter(el => el !== '');
      let updatedString = tempArray.join('+')
      const sendObj = {"updatedString":updatedString}
      // console.log('updatedString: ', updatedString)
      let requestBody = {
        method: 'POST',
        headers: {
        
          'Content-Type': 'application/json'
        },
        // headers: {'Content-Type': 'text/javascript'},
        // body: JSON.stringify(updatedString)
        body: JSON.stringify(sendObj)
      };
  
      fetch('/search', requestBody) 
      .then(response => response.text())
      .then(data => console.log('Data received from backend: ', data))
      .catch(err => console.log(err))
      }
  
  render(){
    //container array 
    //made a for loop for each thing i got from my fetch
    // <SearchResults booktite=data.title/>
    //render container array in the return statement
    
      return(
        <div className='searchcontainer'>
            <SearchBar onEnter={this.performSearch} />
         
            <div className='searchresults'>
              {this.state.searchResults}
         </div>
        </div>
       
       )
  }
}

// jsonobject.items[0]
// API: "Google"
// title: "why Read Moby-Dick?"
// author: [Nathaniel Philbrick]
// industryIdentifier[0]["identifier"] : "9780143123972"

export default SearchContainer

// performSearch(searchTerm ){
//   const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=e30af747df7905a923cedbcf8b405f72&query=' + searchTerm
//   const getlist = fetch(urlString)
//   .then(response => {
//       return response.json()
//   }).then(data => {
//       const results = data.results
//       const movieRows = [];
//       results.forEach((movie) => {
//           movie.poster_src = "https://image.tmdb.org/t/p/w200/" + movie.poster_path
//           const movies = <MovieRow stars={this.state.stars} key={movie.id} movie={movie}/>
//           if(movie.poster_path !== null){
//           movieRows.push(movies)
//           }
//           this.setState({rows: movieRows})
//       })
//   })
//   .catch(err => {
//       console.log('Not a movie', err)
//   })

// setRating(event){
//   const rating = event.target.value
//   this.setState({stars: rating})
//   const postMovieData = {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({title: this.props.movie.title, rating: rating})
//   };
//   fetch('http://localhost:3000', postMovieData)
// }