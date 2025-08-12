
import BackButton from "@/components/BackButton/BackButton";
import { fetchNoteById } from "@/lib/api";


type Props = {
    params: Promise<{id: string}>;
};

const PreviewPage = async ({params}: Props) =>{
    const {id} = await params;

    const note = await fetchNoteById(id)
    return(
        <div>
            Preview Page
            <BackButton>Close</BackButton>
            <br/>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    
    </div>
    )
}

export default PreviewPage;