import axios from 'axios';
export async function fetchData(url, params = {}) {
  const options = {
    method: 'GET',
    url,
    params,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2VmNWFlNWIzYWU0NTE0MmUzMWI0ODc1YWI5MTBiMCIsInN1YiI6IjY2MmI5OWU0ZTE2ZTVhMDExZWU3NmVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iQ1EiL86IhJrEhWWfhZHRb5xq8RCjvSLWFgC7T16beA',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchDataTrending() {
  return await fetchData('https://api.themoviedb.org/3/trending/movie/day', {
    language: 'en-US',
  });
}

export async function fetchDataSearchMovie(query) {
  return await fetchData('https://api.themoviedb.org/3/search/movie', {
    query,
    include_adult: 'false',
    language: 'en-US',
    page: '1',
  });
}

export async function fetchDataMovieDetails(id) {
  return await fetchData(`https://api.themoviedb.org/3/movie/${id}`, {
    language: 'en-US',
  });
}

export async function fetchDataMovieCredits(id) {
  return await fetchData(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    language: 'en-US',
  });
}

export async function fetchDataMovieReviews(id) {
  return await fetchData(`https://api.themoviedb.org/3/movie/${id}/reviews`, {
    language: 'en-US',
    page: '1',
  });
}
