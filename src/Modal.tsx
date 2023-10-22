import { useEffect, useRef } from "react";

interface Props {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ openModal, closeModal, children }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      className="bg-transparent backdrop:backdrop-blur w-5/6 sm:w-1/2 max-w-4xl"
    >
      <div className="flex flex-col items-center justify-between z-10 inset-0 overflow-y-auto h-48 rounded-md bg-white text-black p-4">
        {children}
        <button
          onClick={() => {
            closeModal();
          }}
          className="bg-black text-white px-3 text-lg rounded-sm focus:outline-0"
        >
          Ok
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
