
import { useGetBooksQuery } from "@/app/baseApi"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "Title",
    paymentStatus: "Author",
    totalAmount: "Genre",
    paymentMethod: "ISBN",
    des: "Description",
    copies: "Copies",

  },
  {
    invoice: "Title",
    paymentStatus: "Author",
    totalAmount: "Genre",
    paymentMethod: "ISBN",
    des: "Description",
    copies: "Copies",
  },
  {
    invoice: "Title",
    paymentStatus: "Author",
    totalAmount: "Genre",
    paymentMethod: "ISBN",
    des: "Description",
    copies: "Copies",
  },
  {
    invoice: "Title",
    paymentStatus: "Author",
    totalAmount: "Genre",
    paymentMethod: "ISBN",
    des: "Description",
    copies: "Copies",
  },
  {
    invoice: "Title",
    paymentStatus: "Author",
    totalAmount: "Genre",
    paymentMethod: "ISBN",
    des: "Description",
    copies: "Copies",
  },
  {
    invoice: "Title",
    paymentStatus: "Author",
    totalAmount: "Genre",
    paymentMethod: "ISBN",
    des: "Description",
    copies: "Copies",
  },
  {
    invoice: "Title",
    paymentStatus: "Author",
    totalAmount: "Genre",
    paymentMethod: "ISBN",
    des: "Description",
    copies: "Copies",
  },
]



export function TableBook() {

  const {data, isLoading} = useGetBooksQuery(undefined)

  console.log({data, isLoading})

  if(isLoading){
    return <div>loading..............................</div>
  }

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-center">{invoice.totalAmount}</TableCell>
            <TableCell className="text-center">Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {
              data.data.map(data => <div>{data.title}</div>)
            }
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
