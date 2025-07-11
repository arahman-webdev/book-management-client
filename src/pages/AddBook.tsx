
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { useAddBookMutation } from "@/app/baseApi"
import { useNavigate } from "react-router"
import { Textarea } from "@/components/ui/textarea"
import Swal from "sweetalert2";

export function AddBook() {



    const navigate = useNavigate()
    const form = useForm();
    const { reset } = form;
    const [createData] = useAddBookMutation()
    const onSubmit = async (data: any) => {
        try {
            const bookData = {
                ...data,
                Available: true
            }
            const response = await createData(bookData).unwrap();
            console.log(response)
            Swal.fire({
                title: "Good job!",
                text: "Succefully added to db!",
                icon: "success"
            });
            reset()
            navigate('/all-books')
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Validation failed!",
            });
        }
    }

  
    return (
        <div className="py-20">
            <div className="max-w-3xl mx-auto">
                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="title" {...field} value={field.value || ""} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input placeholder="author" {...field} value={field.value || ""} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Genre" {...field} value={field.value || ""} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ISBN</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ISBN" {...field} value={field.value || ""} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Type your message here." {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Copies" {...field} value={field.value || ""} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button className="w-full bg-[#1a478f] text-white cursor-pointer p-2 rounded-full" type="submit">Submit</button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
