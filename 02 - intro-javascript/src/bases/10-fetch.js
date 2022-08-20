const apiKey = 'Z5I7oeh5stx0N7PSeTEyx9KKoPf6gxvo';

//llamada -> https://api.giphy.com/v1/gifs/random?api_key=Z5I7oeh5stx0N7PSeTEyx9KKoPf6gxvo

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);