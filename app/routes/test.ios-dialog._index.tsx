import { useEffect, useRef, useState } from 'react';

export default function TestiOSDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);
  return (
    <div className="[&_button]:border [&_button]:p-1 [&_button]:border-black [&_button]:rounded">
      <h1>Test iOS Dialog</h1>
      <button type="button" onClick={() => setIsOpen(true)}>
        open
      </button>
      <dialog
        ref={dialogRef}
        className="mx-4 min-h-96 w-auto max-w-screen-sm bg-white p-0 text-inherit sm:mx-auto "
      >
        <div className="p-4">
          <h2>Dialog</h2>
          <p>Hi!</p>
          <button type="button" onClick={() => setIsOpen(false)}>
            close
          </button>
        </div>
      </dialog>
    </div>
  );
}
