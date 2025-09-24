const url = 'https://streaming-availability.p.rapidapi.com/shows/shows/tt0944947';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ee2e32b0b4mshd3216b040ac757cp1b87d3jsndac6bade89a7',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}