import LocationPage from "@/components/views/LocationsView/LocationView/index"; 

const Page = async ({ params } : { params: Promise<{ id: string }>}) => {

    const { id } = await params;
    return(<LocationPage id={id} />);
}

export default Page