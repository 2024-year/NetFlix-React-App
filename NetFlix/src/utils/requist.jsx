// const API_KEY=Process.env.REACT_APP_KEY
const API_KEY = import.meta.env.VITE_API_KEY;

const requist={
    // fetchTrending:`/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
    // fetchTv:`/discover/tv?${API_KEY}&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`
    fetchTrending: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
fetchTV: `/discover/tv/${API_KEY}&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`    
};
export default requist;