import { useGetBorrowedBookQuery } from "@/app/baseApi";



const BorrowSummery = () => {


    interface IBOOK {
        book: {
            title: string;
            isbn: string;
        };
        totalQuantity: number;
    }

    const { data: books, isLoading } = useGetBorrowedBookQuery(undefined)

    if (isLoading) {
        return <div className="min-h-screen flex flex-col justify-center items-center">loading........</div>
    }

    console.log(books)


    return (
        <div className=" max-w-5xl mx-auto px-4 md:py-32 py-14">
            <h1 className="text-center md:text-5xl text-3xl font-bold py-4">A list of books summary</h1>
            <div className="p-4 overflow-x-auto">
                <table className="w-full border-collapse border border-[#28407c]">
                    <thead className="bg-[#12285e]">
                        <tr>
                            <th className="border border-[#28407c] p-2">Ttile</th>
                            <th className="border border-[#28407c] p-2">Isbn</th>
                            <th className="border border-[#28407c] p-2">totalQuantity</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {books.data.map((book:IBOOK, index: number) => (
                            <tr key={index} className="hover:bg-[#12285e]">
                                <td className="border border-[#28407c] p-2 text-center">{book?.book.title || ""}</td>
                                <td className="border border-[#28407c] p-2 text-center">{book.book.isbn}</td>
                                <td className="border border-[#28407c] p-2 text-center">{book?.totalQuantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BorrowSummery;