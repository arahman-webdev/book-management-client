import { useGetSingleBookQuery, useUpdateBookMutation } from '@/app/baseApi';
import BookForm from '@/providers/BookForm';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Update = () => {

    const form = useForm()

    const [updatePost] = useUpdateBookMutation()

    const onSubmit = async (data: any) => {
        try {
            const updateData = {
                id: data._id,
                ...data,
                available: true,

            }


            const res = await updatePost(updateData).unwrap()

            console.log(res)

            

        } catch (error) {
            console.log(error)
        }
    }


    const { bookId } = useParams<{ bookId: any }>()

    const { data: book, isLoading } = useGetSingleBookQuery(bookId)

    // Pre-populate form
    useEffect(() => {
        if (book) {
            form.reset(book);
        }
    }, [book, form]);

    if (isLoading) {
        return <div><p>Loading..................</p></div>
    }

    console.log("From book from page", book)

    return (
        <div>
            <BookForm onSubmit={onSubmit} form={form} book={book} />
        </div>
    );
};

export default Update;