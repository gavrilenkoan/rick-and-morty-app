
const LOCATIONS_URL = "https://rickandmortyapi.com/api/location";

async function LocationsPage() {

    const locations = await fetch(LOCATIONS_URL);
    const locationsJson = await locations.json();

    return (
        <div>LocationsPage<br/>
            {JSON.stringify(locationsJson)}
        </div>
    )
}

export default LocationsPage