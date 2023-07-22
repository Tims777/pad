import type { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import CreateNoteForm from "../islands/CreateNoteForm.tsx";

export default function Notepad(props: PageProps) {
  return (
    <>
      <Head>
        <title>Pad - Deno KV powered Notepad</title>
      </Head>
      <main class="mx-auto w-max">
        <h1 class="text-lg font-bold">Create new note</h1>
        <CreateNoteForm />
      </main>
    </>
  );
}
