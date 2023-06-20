
async function getOtakuGif(reaction){
    const Fetch = async () => {
        const temp = await fetch(`https://api.otakugifs.xyz/gif?reaction=${reaction}&format=gif`)
                            .then(res => res.json())
        return temp.data
    }
    return Fetch()
}

module.exports = {
    getOtakuGif
}