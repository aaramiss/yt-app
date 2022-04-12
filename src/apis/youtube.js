import axios from 'axios';

const KEY = 'AIzaSyAlAfY3Wnua2hwK4bpep57FgxnwJJQnU-g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});