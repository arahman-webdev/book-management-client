import { TableBook } from "@/providers/TableBook";


const AllBooks = () => {
    return (
        <div className="py-24 max-w-7xl mx-auto">
            <div className="py-4">
                <h1 className="text-center md:text-5xl text-3xl font-bold py-4">All kinds Of Books</h1>
            </div>
            <TableBook />
        </div>
    );
};

export default AllBooks;