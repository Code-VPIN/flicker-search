const constants = {
	DEFAULT_URL: 
		"https://API.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&nojsoncallback=1&api_key=d381b45e9f914a24b882c5dd217c9d69&per_page=20",

	BASE_URL:
		"https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=d381b45e9f914a24b882c5dd217c9d69&per_page=20",
		//default testing purpose - "https://www.flickr.com/services/api/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=d381b45e9f914a24b882c5dd217c9d69&per_page=20",
	STORAGE_KEY: "flicker_search_queries"
};

export default constants;
