import CharacterCard from "../cards/CharacterCard";
import EpisodeCard from "../cards/EpisodeCard";
import LocationCard from "../cards/LocationCard";
import { useEffect, useState } from "react";
import { Character } from "@/types/character";
import { Episode } from "@/types/episode";
import { Location } from "@/types/location";
import styles from "./ItemsPage.module.scss";
import StyledTextField from "../../common/StyledTextField/StyledTextField";
import StyledPagination from "../../common/StyledPagination/StyledPagination";
import { ItemsType } from "@/types/itemsType";
import { useRMStore } from "@/store/RickAndMortyStore";

type ItemsMap = {
    [ItemsType.Characters]: Character[];
    [ItemsType.Episodes]: Episode[];
    [ItemsType.Locations]: Location[];
};

const ItemsPage = ({ itemsType, pagesAmount }: { itemsType: ItemsType; pagesAmount: number }) => {
    const [page, setPage] = useState(1);
    const [items, setItems] = useState<ItemsMap[typeof itemsType]>([]);

    async function load() {
        const res = await fetch(`https://rickandmortyapi.com/api/${itemsType.toLowerCase().slice(0, -1)}?page=${page}`);
        const data = await res.json();
        setItems(data.results);
    }

    useEffect(() => { load(); }, [page]);

    const [searchValue, setSearchValue] = useState("");

    const allCharacters = useRMStore(state => state.allCharacters);
    const allEpisodes = useRMStore(state => state.allEpisodes);
    const allLocations = useRMStore(state => state.allLocations);

    const source = itemsType === ItemsType.Characters ? allCharacters : itemsType === ItemsType.Episodes ? allEpisodes : allLocations;
    const searchResults = source
        .filter(i => {
            if (searchValue.trim() === "") return false;
            return i.name.toLowerCase().includes(searchValue.trim().toLowerCase());
        })
        .slice(0, 6);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1>{itemsType}</h1>
            </div>

            <div className={styles.search}>
                <StyledTextField
                    fullWidth
                    label={`Search ${itemsType.toLowerCase()}`}
                    variant="outlined"
                    value={searchValue}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSearchValue(event.target.value);
                    }}
                />
            </div>

            <div className={styles.searchResults}>
                {searchResults.map((i: any) => {
                    switch (itemsType) {
                        case ItemsType.Characters:
                            return <CharacterCard key={i.id} char={i as Character} />;

                        case ItemsType.Episodes:
                            return <EpisodeCard key={i.id} ep={i as Episode} />;

                        case ItemsType.Locations:
                            return <LocationCard key={i.id} location={i as Location} />;

                        default:
                            return null;
                    }
                })}
            </div>

            <div className={styles.grid}>
                {items.map((i: any) => {
                    switch (itemsType) {
                        case ItemsType.Characters:
                            return <CharacterCard key={i.id} char={i as Character} />;

                        case ItemsType.Episodes:
                            return <EpisodeCard key={i.id} ep={i as Episode} />;

                        case ItemsType.Locations:
                            return <LocationCard key={i.id} location={i as Location} />;

                        default:
                            return null;
                    }
                })}
            </div>

            <div className={styles.pagination}>
                <StyledPagination
                    count={pagesAmount}
                    page={page}
                    onChange={(_, p) => setPage(p)}
                    size="small"
                />
            </div>
        </div>
    );
};

export default ItemsPage;