import { useEffect, useRef } from "preact/hooks";

export default function CreateNoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const token = crypto.getRandomValues(new BigUint64Array(1))[0].toString(36);
  useEffect(() => {
    const form = formRef.current!;
    form.onsubmit = (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const href = [
        data.get("token")!.toString(),
        data.get("title")!.toString().toLowerCase(),
      ];
      if (href.indexOf("") != -1) {
        alert("Please fill out all fields!");
      } else {
        location.href = href.join("/");
      }
    };
  });
  return (
    <form ref={formRef}>
      <table class="text-left">
        <tr>
          <th>
            <label for="title">Title</label>
          </th>
          <td>
            <input name="title" class="border" />
          </td>
        </tr>
        <tr>
          <th>
            <label for="token">Auth Token</label>
          </th>
          <td>
            <input name="token" class="border" value={token} readonly />
          </td>
        </tr>
        <tr class="text-center">
          <td colSpan={2}>
            <button class="p-1 border hover:bg-gray-100">Create</button>
          </td>
        </tr>
      </table>
    </form>
  );
}
