"use client"
import { X } from "lucide-react"
import EnquiryForm from "./enquiry-form"

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md m-4 animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4">
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100 transition-colors" aria-label="Close">
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          <EnquiryForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  )
}
