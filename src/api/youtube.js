import axios from 'axios';

const KEY = 'AIzaSyAlFveuhufSbbf6G7h33Ll6Fpan0qmx53c';

export default axios.create( {
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: '10',
		key: KEY
	}
} );