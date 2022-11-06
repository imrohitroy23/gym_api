export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3deab57297mshb310158e16869a0p1d87d7jsn04a1d2c0928b',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3deab57297mshb310158e16869a0p1d87d7jsn04a1d2c0928b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
