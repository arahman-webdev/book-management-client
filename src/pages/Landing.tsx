
import bannerImg from '../assets/images/hero-banner-home.webp'
import { TableBook } from '@/providers/TableBook';

const Landing = () => {
    return (
        <div className='max-w-7xl mx-auto py-1 px-10 py-16'>
            <div className='flex items-center gap-16'>
                <div>
                    <div className='py-6'>
                        <h3>The islamic foundation</h3>
                        <h1 className="text-7xl font-bold">Learn, Discuse, & <br /> Share Achived Knowledge</h1>
                    </div>
                    <div>
                        <p>Book Shelf is a modern book management platform designed <br /> to simplify how you manage and borrow books.</p>
                    </div>
                </div>
                <div className="">
                    <img src={bannerImg} alt="" />
                </div>
                <button></button>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id libero voluptatum sequi eos, tempore provident est delectus aut, officia sunt sit vel. Debitis officiis possimus est et perspiciatis laudantium veritatis quos vel! Necessitatibus harum autem distinctio earum, ad repellat, illo error et reiciendis non dolor tempore fugit, consequatur optio! Molestias quisquam rerum placeat illo totam ex quo possimus aliquid, voluptate maiores debitis, sunt, officia voluptatum inventore minima dignissimos eligendi eaque modi ullam explicabo maxime at enim et alias! Tempore ipsam adipisci commodi rem quidem. Porro perferendis possimus quos doloribus temporibus veritatis. Ullam optio nostrum esse debitis explicabo iste commodi.
            </div>
            <div>
                <TableBook />
            </div>
        </div>
    );
};

export default Landing;