import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { loadNote } from "../utils/db.ts";
import CurrentPageUrl from "../islands/CurrentPageURL.tsx";
import Notepad, { NotepadProps } from "../islands/Notepad.tsx";

export const handler: Handlers<NotepadProps> = {
  async GET(_req, ctx) {
    const path = ctx.params.path.split("/");
    const note = await loadNote(path);
    return ctx.render({ path, note });
  },
};

export default function NotepadPage(props: PageProps<NotepadProps>) {
  return (
    <>
      <Head>
        <title>Pad - Deno KV powered Notepad</title>
      </Head>
      <main class="p-4 mx-auto max-w-screen-md h-80">
        <p>
          URL of your note: <CurrentPageUrl />
        </p>
        <p>Keep it secret! Anybody with this URL can edit your note.</p>
        <p>
          Keep it save! You need this URL to access your note again in the
          future.
        </p>
        <Notepad {...props.data} />
      </main>
    </>
  );
}
