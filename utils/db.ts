const kv = await Deno.openKv();

const PREFIX = "note";

export async function loadNote(path: string[]): Promise<string> {
  const res = await kv.get<string>([PREFIX, ...path]);
  return res.value;
}

export async function storeNote(path: string[], note: string) {
  await kv.set([PREFIX, ...path], note);
}
