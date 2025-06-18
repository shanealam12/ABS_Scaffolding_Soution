"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import EnquiryModal from "@/components/enquiry-modal"

interface ModalContextType {
  openEnquiryModal: () => void
  closeEnquiryModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)

  const openEnquiryModal = () => setIsEnquiryModalOpen(true)
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false)

  return (
    <ModalContext.Provider value={{ openEnquiryModal, closeEnquiryModal }}>
      {children}
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
