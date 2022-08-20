export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=Z5I7oeh5stx0N7PSeTEyx9KKoPf6gxvo`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {

        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    })

    return gifs;

}