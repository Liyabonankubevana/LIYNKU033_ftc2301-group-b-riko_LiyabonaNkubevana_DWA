const origin = "https://podcast-api.netlify.app/"

export const AllShows = async() => {
    const response = await fetch(origin+"shows")
    return response.json()
}

export const getSeasons = async(id) => {
    const response = await fetch(origin+"id/"+id)
    return response.json()
}