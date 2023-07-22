import { type StateUpdater, useRef, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export interface NotepadProps {
  path: string[];
  note: string;
}

async function save(path: string[], note: string) {
  return await fetch("/api/note", {
    method: "POST",
    body: JSON.stringify({
      path,
      note,
    }),
  });
}

export default function Notepad(props: NotepadProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div class="flex gap-2 w-full">
      <textarea ref={textAreaRef} rows={16} class="resize-none border w-full">
        {props.note}
      </textarea>
      <Button
        onClick={async (event) => {
          const button = event.currentTarget;
          try {
            button.disabled = true;
            button.textContent = "Saving...";
            const resp = await save(props.path, textAreaRef.current!.value);
            if (!resp.ok) {
              const error = await resp.text();
              alert("Saving failed!\n" + error);
            }
          } finally {
            button.disabled = false;
            button.textContent = "Save";
          }
        }}
      >
        Save
      </Button>
    </div>
  );
}
