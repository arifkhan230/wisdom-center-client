import Container from "../../../components/Container/Container";


const Banner = () => {
    return (
        <div>
            <Container> 
                <div className="hero object-cover md:px-0 h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/wd8nfk3/cafe-frankfurt-germany.jpg)' }}>
                    
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Open a Book <br /> Open Your Mind</h1>
                            <p className="mb-5">The more that you read, the more things you will know. The more that you learn, the more places you ll go</p>
                            <button className="btn border-none text-white bg-[#2eca7f] hover:bg-[#6610f2]">Start Reading</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;