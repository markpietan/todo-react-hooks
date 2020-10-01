import {API_KEY} from "./../secret"

export async function photoSearch(text){
    try {
        let request = await fetch(`https://api.unsplash.com/search/photos?query=cities&client_id=${API_KEY}&per_page=20`)
        let data = await request.json()
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}
