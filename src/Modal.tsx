import React, { ReactNode, useEffect, useRef } from "react";

type ModalType = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalType) {
  const modalRef = useRef<HTMLDivElement>(null);
  const prevFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      prevFocusedElement.current = document.activeElement as HTMLElement;
      const focusableElements =
        modalRef.current?.querySelectorAll(
          "button, textarea, input, select, [tabindex]"
        ) || [];
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;
      if (firstElement) {
        firstElement.focus();
      }
      const handleTab = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (modalRef.current) {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
              }
            }
          }
        }
      };
      document.addEventListener("keydown", handleTab);
      return () => {
        document.removeEventListener("keydown", handleTab);
        prevFocusedElement.current?.focus();
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  if (!isOpen) return null;
  return (
    <div
      onClick={handleClickOutside}
      className="fixed top-0 left-0 w-full h-screen bg-modalColor opacity-90 flex items-center justify-center"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={handleContentClick}
        className="relative lg:w-2/5 xl:w-2/5 p-6 bg-white rounded-lg"
      >
        <button
          aria-label="closebutton"
          onClick={() => onClose()}
          className="absolute top-5 right-5"
        >
          <img
            src="./closebutton.png"
            className="w-8 h-8 object-cover"
            alt="closebutton"
          />
        </button>
        {children}
      </div>
    </div>
  );
}
