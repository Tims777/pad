import { Handlers } from "$fresh/server.ts";
import { storeNote } from "../../utils/db.ts";

export const handler: Handlers = {
  async POST(req) {
    const { path, note } = await req.json();
    if (!path || !Array.isArray(path)) {
      return new Response("Path invalid.", { status: 400 });
    }

    if (path.length > 100) {
      return new Response("Path too long.", { status: 400 });
    }

    if (note.length > 10000) {
      return new Response("Note too long.", { status: 400 });
    }

    await storeNote(path, note);
    return new Response();
  },
};
