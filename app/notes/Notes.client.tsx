"use client";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

import NoteList from "../../components/NoteList/NoteList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { Note } from "../../types/note";
import css from "./NotesPage.module.css";

import { fetchNotes } from "../../lib/api";
import Pagination from "../../components/Pagination/Pagination";
import NoteModal from "../../components/NoteModal/NoteModal";

type NotesHttpResponse = {
  notes: Note[];
  totalPages: number;
};

type Props = {
  initialValue: NotesHttpResponse;
};

const NotesClient = ({ initialValue }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSuccess = () => {
  setIsModalOpen(false);
}

  

  // Queries
  const [debouncedQuery] = useDebounce(query, 400);

  const { data } = useQuery<NotesHttpResponse>({
    queryKey: ["notes", debouncedQuery, page],
    queryFn: () => fetchNotes(debouncedQuery, page),
    placeholderData: keepPreviousData,
    initialData: initialValue,
  });

  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setPage(1);
  };

  return (
    <>
      <div className={css.toolbar}>
        <SearchBox query={query} updateQuery={updateQuery} />
        {data?.totalPages && data?.totalPages > 1 ? (
          <Pagination
            totalPages={data?.totalPages}
            page={page}
            onPageChange={setPage}
          />
        ) : (
          ""
        )}
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
     {isModalOpen && (
  <NoteModal
    onClose={closeModal}
    onSuccess={handleSuccess}
  />
)}
      </div>
      {data && <NoteList notes={data?.notes} />}
    </>
  );
};

export default NotesClient;