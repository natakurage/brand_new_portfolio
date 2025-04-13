"use client";

import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function GalleryCard({ src, title, content } : { src: string, title: string, content?: string}) {
  const download = () => window.open(src);
  return (
    <>
      <div className="card my-3">
        <figure
          className="w-full h-48 relative"
          onClick={() => (document.getElementById("modal_for_" + src) as HTMLDialogElement).showModal()}
        >
          <Image
            src={src}
            alt={title}
            fill
            className="object-contain"
          />
        </figure>
        <div className="card-body p-0">
          <h3 className="card-title">{title}</h3>
          {content && <p>{content}</p>}
        </div>
      </div>
      <dialog
        id={"modal_for_" + src}
        className="modal"
      >
        <div className="modal-box flex flex-col max-w-none max-h-none w-[90vw] h-[90vh] bg-opacity-90">
          <h3 className="font-bold text-lg">{title}</h3>
          {content && <p className="text-sm">{content}</p>}
          <div className="m-0 flex-1 relative">
            <Image
              src={src}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          <button
            className="btn w-32"
            onClick={download}
          >
            <FaDownload />Download
          </button>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}