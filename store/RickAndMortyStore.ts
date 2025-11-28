import { create } from "zustand";

interface RMState {
    allCharacters: any[];
    allEpisodes: any[];
    allLocations: any[];

    loaded: boolean;
    loadAllData: () => Promise<void>;
}

async function fetchPages(url: string, pages: number) {
    const all = [];
    for (let p = 1; p <= pages; p++) {
        const res = await fetch(`${url}?page=${p}`, { cache: "no-store" });
        const json = await res.json();
        all.push(...json.results);
    }
    return all;
}

export const useRMStore = create<RMState>((set, get) => ({
    allCharacters: [],
    allEpisodes: [],
    allLocations: [],
    loaded: false,

    loadAllData: async () => {
        if (get().loaded) return;

        const [chars, eps, locs] = await Promise.all([
            fetchPages("https://rickandmortyapi.com/api/character", 42),
            fetchPages("https://rickandmortyapi.com/api/episode", 3),
            fetchPages("https://rickandmortyapi.com/api/location", 7)
        ]);

        set({
            allCharacters: chars,
            allEpisodes: eps,
            allLocations: locs,
            loaded: true
        });
    }
}));
