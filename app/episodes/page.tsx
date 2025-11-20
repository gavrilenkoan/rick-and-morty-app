
const EPISODES_URL = "https://rickandmortyapi.com/api/episode";

async function EpisodesPage() {

    const episodes = await fetch(EPISODES_URL);
    const episodesJson = await episodes.json();

    return (
        <div>EpisodesPage<br/>
            {JSON.stringify(episodesJson)}
        </div>
    )
}

export default EpisodesPage