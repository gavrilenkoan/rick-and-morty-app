import CharacterPage from "@/components/views/CharactersView/CharacterView/index"; 

const Page = async ({ params } : { params: Promise<{ id: string }>}) => {

    const { id } = await params;
    return(<CharacterPage id={id} />);
}

export default Page