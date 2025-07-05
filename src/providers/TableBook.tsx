
import { useDeleteBookMutation, useGetBooksQuery } from "@/app/baseApi"
import { Link } from "react-router"
import { FaTrash } from "react-icons/fa";
import { BorrowBook } from "./BorrowBook";
import Swal from "sweetalert2";




export function TableBook() {

  const { data, isLoading } = useGetBooksQuery(undefined)



  const [deleteBookItem] = useDeleteBookMutation()

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })

    if (result.isConfirmed) {
      try {
        const res = await deleteBookItem({ id }).unwrap()


        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });


        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

  }

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
            <tr key={index} className="hover:bg-[#12285e] hover:text-white">
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
                  className=" text-red-500 px-3 py-1 rounded  text-center"
                  disabled={!book.available}
                >
                  <BorrowBook bookId={book._id} />
                </button>
                <Link to={`/update/${book._id}`}
                  className="bg-[#12285e] text-white px-3 py-1 rounded hover:bg-blue-600 text-center"

                >
                  Update
                </Link>
                <button
                  className=" text-red-600 cursor-pointer px-3 py-1 rounded text-center"
                  onClick={(() => handleDelete(book._id))}
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
