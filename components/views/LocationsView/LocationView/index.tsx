"use client";

import { useEffect, useState } from "react";
import { Character } from "@/types/character";
import styles from "../../CharactersView/CharacterView/CharacterPage.module.scss";
import CharacterCard from "@/components/common/cards/CharacterCard";

interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

const LocationPage = ({ id }: { id: string }) => {
    const [location, setLocation] = useState<Location | null>(null);
    const [residents, setResidents] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchLocationAndResidents() {
            const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
            const locationData: Location = await res.json();
            setLocation(locationData);

            const residentIds = locationData.residents.map(url => url.split("/").pop()).filter(Boolean);

            if (residentIds.length === 0) return;

            const residentsRes = await fetch(`https://rickandmortyapi.com/api/character/${residentIds.join(",")}`);
            let residentsData: Character[] = await residentsRes.json();

            if (!Array.isArray(residentsData)) {
                residentsData = [residentsData];
            }

            setResidents(residentsData);
        }

        fetchLocationAndResidents();
    }, [id]);

    if (!location) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{location.name}</h1>
            </div>

            <div className={styles.info}>
                <div><strong>Type:</strong> {location.type}</div>
                <div><strong>Dimension:</strong> {location.dimension}</div>
            </div>

            <div className={styles.array}>
                <h2>Residents</h2>
                <div className={styles.grid}>
                    {residents.map(r => (
                        <CharacterCard key={r.id} char={r} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationPage;