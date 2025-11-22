export type Character = {
    id: string,
    name: string,
    status: "Alive" | "Dead" | "unknown",
    species: string,
    location: {name : string},
    image: string,
    url: string
}