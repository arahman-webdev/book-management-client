
import { useGetBooksQuery } from "@/app/baseApi"
import { Link } from "react-router"
import { FaTrash } from "react-icons/fa";
import { BorrowBook } from "./BorrowBook";




export function TableBook() {

  const { data, isLoading } = useGetBooksQuery(undefined)

  console.log({ data, isLoading })

  if (isLoading) {
    return <div>loading..............................</div>
  }

  return (
    <div className="p-4 overflow-x-auto">
      <table className="w-full border-collapse border border-[#28407c]">
        <thead className="bg-[#12285e]">
          <tr>
            <th className="border border-[#28407c] p-2">Ttile</th>
            <th className="border border-[#28407c] p-2">Author</th>
            <th className="border border-[#28407c] p-2">Genre</th>
            <th className="border border-[#28407c] p-2">Isbn</th>
            <th className="border border-[#28407c] p-2">Copies</th>
            <th className="border border-[#28407c] p-2">Availability</th>
            <th className="border border-[#28407c] p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((book: any, index: number) => (
            <tr key={index} className="hover:bg-[#12285e]">
              <td className="border border-[#28407c] p-2 text-center">
                {book.title}
              </td>
              <td className="border border-[#28407c] p-2 text-center">{book.author}</td>
              <td className="border border-[#28407c] p-2 text-center">${book.genre}</td>
              <td className="border border-[#28407c] p-2 text-center">{book.isbn}</td>
              <td className="border border-[#28407c] p-2 text-center">{book.copies}</td>
              <td className={`border border-[#28407c] p-2 text-center ${book?.available ? 'text-green-500' : 'text-red-500'}`}>
                {book?.available ? "Available" : "Unavailable"}
              </td>
              <td className="border border-[#28407c] p-2 text-center space-y-2 space-x-3">

                <button
                  className=" text-red-500 px-3 py-1 rounded hover:bg-red-600 text-center"
                // onClick={() => handleDelete(book._id)}
                >
                  <BorrowBook />
                </button>
                <Link
                  to={`/update/${book._id}`}
                  className="bg-[#12285e] text-white px-3 py-1 rounded hover:bg-blue-600 text-center"
                >
                  Update
                </Link>
                <button
                  className=" text-red-500 px-3 py-1 rounded hover:bg-red-600 text-center"
                // onClick={() => handleDelete(book._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
