import { ReactElement } from "react";

interface ContactItem {
  children: ReactElement;
  link: string;
  placeholder: string;
}

export default function ContactItem({
  link,
  placeholder,
  children,
}: ContactItem) {
  return (
    <div className="flex items-center gap-4 mt-10">
      <div className="dark:text-main-dark text-main-light border-2 p-2 rounded-full">
        {children}
      </div>
      <a
        className="text-lg underline decoration-1 decoration-solid"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {placeholder}
      </a>
    </div>
  );
}
