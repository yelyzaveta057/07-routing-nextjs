import NotesClient from "./Notes.client";

import css from "./NotesPage.module.css";

import { Note } from "../../../../types/note";
import { fetchNotes } from "../../../../lib/api";



interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

const Notes = async ({params}: {params: {slug?: string[]}}) => {
  const tag = params.slug?.[0] || '';
  const response: NotesHttpResponse = await fetchNotes("", 1, tag);

  return (
    <section className={css.app}>
      <NotesClient initialValue={response} tag={tag} />
    </section>
  );
};

export default Notes;