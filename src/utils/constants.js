const API_KEY = "AIzaSyA-sBxPkW-FrBMiqxmqMnuQm7GIREZUkAk";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://cors-anywhere.herokuapp.com/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const key = "&key=" + API_KEY;
