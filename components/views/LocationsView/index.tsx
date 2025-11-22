import { Pagination, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Location } from "@/types/location";
import LocationCard from "./components/LocationCard/LocationCard";

async function getLocations(page: number) {
    const res = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch locations");

    return res.json();
}

const LocationsPage = () => {
    const [page, setPage] = useState(1);
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
    const fetchLocations = async () => {
        try {
            const data = await getLocations(page);
            setLocations(data.results);
        } catch (error) {
            console.error("Error fetching locations:", error);
        }
    };

        fetchLocations();
    }, [page]);


    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Location</h1>
            <TextField fullWidth id="outlined-basic" label="Enter location" variant="outlined" />

            {/* LOCATION GRID */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "20px",
                }}
            >
                {locations.map((location: Location) => (
                    <LocationCard key={location.id} location={location}/>
                ))}
            </div>

            <Pagination
                count={7}
                page={page}
                onChange={(_, value) => setPage(value)}
            />
        </div>
    );
}

export default LocationsPage