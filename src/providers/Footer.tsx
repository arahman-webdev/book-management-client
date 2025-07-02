import { Link } from "react-router";


const Footer = () => {
    return (
        <div className="bg-linear-to-t from-[#121931d3] to-[#274066] py-16 shadow-2xl">
            <div className="max-w-7xl mx-auto px-14">
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <h3 className="text-3xl font-bold">Abdur Rahman</h3>
                            <p>Be the first to know when we launch</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-4xl font-medium py-4">Resource</h3>
                        <div className="flex flex-col">
                            <Link to={'/'}>Home</Link>
                            <Link to={'/'}>About Us</Link>
                            <Link to={'/'}>Information</Link>
                            <Link to={'/'}>More Us</Link>
                            <Link to={'/'}>Contact Us</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-4xl font-medium py-4">Insights</h3>
                        <div className="flex flex-col">
                            <Link to={'/'}>Insight of the Day</Link>
                            <Link to={'/'}>Hadith of the Day</Link>
                            <Link to={'/'}>Infographics</Link>
                            <Link to={'/'}>FAQ</Link>
                            <Link to={'/'}>About Us</Link>
                            <Link to={'/'}>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;