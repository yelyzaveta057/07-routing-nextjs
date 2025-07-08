import NotesClient from "./Notes.client";

import css from "./NotesPage.module.css";

import { Note } from "../../types/note";
import { fetchNotes } from "../../lib/api";

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

const Notes = async () => {
  const response: NotesHttpResponse = await fetchNotes("", 1);

  return (
    <section className={css.app}>
      <NotesClient initialValue={response} />
    </section>
  );
};

export default Notes;