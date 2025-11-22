"use client";

import { useEffect, useState } from "react";

const LocationPage = ({ id } : { id: string }) => {

    const [location, setLocation] = useState();

    useEffect(() => {
        async function fetchLocation() {
            const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
            setLocation(await res.json());
        }

        fetchLocation();
    }, []);


    return (
        <div style={{ padding: "20px" }}>
            <h1>{JSON.stringify(location)}</h1>
        </div>
    );
}

export default LocationPage;