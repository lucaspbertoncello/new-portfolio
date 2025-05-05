import ReactDOM from "react-dom";

import { ExternalLink, Github, X } from "lucide-react";

import myContacts from "../assets/images/mycontacts.png";

type Modal = {
  isOpen: boolean;
};

export default function Modal({ isOpen }: Modal) {
  const root = document.getElementById("root");
  if (!root) return null;
  if (!isOpen) return;

  return ReactDOM.createPortal(
    <>
      <div
        data-aos="fade-down"
        className="w-full h-full absolute top-0 left-0 dark:bg-dark-800/50 bg-light-800/50 backdrop-blur-xs flex items-center justify-center"
      >
        {/* modal */}
        <div className="max-w-[600px] w-full rounded-t-lg">
          <img className="rounded-t-lg" src={myContacts} alt="" />

          <div className="p-8 dark:bg-dark-800 rounded-b-lg">
            <div className="dark:text-white font-semibold text-2xl">
              myContacts
            </div>

            <div className="my-2 text-sm dark:text-main-dark text-main-light">
              {/* {techStack.map((tech, index) => {
                return techStack.length - 1 > index ? (
                  <span>{tech} - </span>
                ) : (
                  <span>{tech}</span>
                );
              })} */}

              <span>HTML</span>
              <span>css</span>
              <span>css</span>
            </div>

            <div className="dark:text-font-dark text-md font-[200]">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>

            <div className="dark:text-white mt-8 font-semibold">
              Links do projeto{" "}
              <span className="dark:text-main-dark text-main-light">.</span>
              <div className="flex gap-4 dark:text-font-dark font-[200] text-sm mt-4 cursor-pointer">
                <a className="flex items-center" href={``}>
                  {" "}
                  <Github size={18} />{" "}
                  <span className="">
                    {" - "}
                    Código fonte
                  </span>
                </a>

                <a className="flex items-center" href={``}>
                  {" "}
                  <ExternalLink size={18} />{" "}
                  <span className="">
                    {" - "}
                    Website
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-20 dark:text-font-dark cursor-pointer">
        <X />
      </div>
    </>,
    root
  );
}
