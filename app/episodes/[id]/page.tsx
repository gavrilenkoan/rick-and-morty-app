import EpisodePage from "@/components/views/EpisodesView/EpisodeView/index"; 

const Page = async ({ params } : { params: Promise<{ id: string }>}) => {

    const { id } = await params;
    return(<EpisodePage id={id} />);
}

export default Page