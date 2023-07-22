import { useEffect, useState } from "preact/hooks";

export default function CurrentPageUrl() {
  const [pageUrl, setPageUrl] = useState<string>();
  useEffect(() => {
    setPageUrl(location.href);
  });
  return (
    <a href={pageUrl}>
      <output>{pageUrl ?? "..."}</output>
    </a>
  );
}
