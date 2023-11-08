import Container from "../Container/Container";


const Loading = () => {
    return (
        <div>
            <Container>
                <div className="flex w-full h-[80vh] justify-center items-center">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            </Container>
        </div>
    );
};

export default Loading;