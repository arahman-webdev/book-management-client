
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

            </div>
            <div>
                <div className="py-4">
                    <h1 className="text-center md:text-5xl text-3xl font-bold py-4">All kinds Of Books</h1>
                </div>
                <TableBook />
            </div>
        </div>
    );
};

export default Landing;