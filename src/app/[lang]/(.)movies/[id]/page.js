import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";
import Sidebar from "@/components/Sidebar";
import { getDictionary } from "../../dictionaries";

const MovieModalPage = async ({ params: { id, lang } }) => {
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Modal>
                <MovieDetails id={id} dictionary={dictionary} />
            </Modal>
        </>
    )
}

export default MovieModalPage