import { Episode } from "@/types/episode";
import { Pagination, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import EpisodeCard from "./components/EpisodeCard/EpisodeCard"

async function getEpisodes(page: number) {
    const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch episodes");

    return res.json();
}

const EpisodesPage = () => {
    const [page, setPage] = useState(1);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
    const fetchEpisodes = async () => {
        try {
            const data = await getEpisodes(page);
            setEpisodes(data.results);
        } catch (error) {
            console.error("Error fetching episodes:", error);
        }
    };

        fetchEpisodes();
    }, [page]);


    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Episodes</h1>
            <TextField fullWidth id="outlined-basic" label="Enter an episode" variant="outlined" />

            {/* EPISODES GRID */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "20px",
                }}
            >
                {episodes.map((ep: Episode) => (
                    <EpisodeCard key={ep.id} ep={ep}/>
                ))}
            </div>

            <Pagination
                count={3}
                page={page}
                onChange={(_, value) => setPage(value)}
            />
        </div>
    );
}

export default EpisodesPage