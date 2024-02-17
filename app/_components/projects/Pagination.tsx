import React from 'react'

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  totalPages: number
  currentPage: number
  setCurrentPage: any
}) {
  return (
    <div className="flex flex-row justify-end gap-2">
      <p className="self-center justify-self-end text-paragraph">
        Page {currentPage} of {totalPages}
      </p>
      <button
        onClick={() => setCurrentPage(Number(currentPage) - 1)}
        className="w-20 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <button
        onClick={() => setCurrentPage(Number(currentPage) + 1)}
        className="w-20 text-heading3 px-2 py-1 rounded bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}
