// app/notes/filter/[[...slug]]/page.tsx

import { getNotess } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function NotesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params; 
  const raw = slug?.[0];
  const tag =
    !raw || raw.toLowerCase() === "all" ? undefined : decodeURIComponent(raw);

  return <NotesClient tag={tag} />;
}