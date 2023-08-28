const API_KEY = '5da7604b'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year.substr(0,4),
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
