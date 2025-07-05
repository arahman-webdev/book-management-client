import { useGetSingleBookQuery, useUpdateBookMutation } from '@/app/baseApi';
import BookForm from '@/providers/BookForm';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {

    interface IBook {
        _id: string;
        title: string;
        author: string;
        genre: string;
        isbn: string;
        description: string;
        copies: number;
    }



    const form = useForm()
    const navigate = useNavigate()

    const [updatePost] = useUpdateBookMutation()

    const onSubmit = async (data: IBook) => {
        try {
            const updateData = {
                id: data._id,
                ...data,
                available: true,

            }

            const res = await updatePost(updateData).unwrap()

            console.log(res)

            Swal.fire({
                title: "Good job!",
                text: "You updated the book successfully!",
                icon: "success"
            });

            navigate('/all-books')

        } catch (error) {
            console.log(error)
        }
    }


    const { bookId } = useParams<{ bookId: string }>()

    const { data: book, isLoading } = useGetSingleBookQuery(bookId)

    // Pre-populate form
    useEffect(() => {
        if (book) {
            form.reset(book);
        }
    }, [book, form]);

    if (isLoading) {
       return <div className="min-h-screen flex flex-col justify-center items-center">loading........</div>
    }

    console.log("From book from page", book)

    return (
        <div>
            <BookForm onSubmit={onSubmit} form={form} book={book} />
        </div>
    );
};

export default Update;