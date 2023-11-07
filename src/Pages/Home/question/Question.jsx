import Container from "../../../components/Container/Container";
import Title from "../../../components/Title/Title";


const Question = () => {
    return (
        <div>
            <Title>FAQ</Title>
            <Container>
                <div className="flex my-20 gap-6">
                    <div className="flex-1">
                        <img className="h-[600px] object-cover rounded-md  w-full" src={"https://i.ibb.co/Mc3rLHn/graphic-question-mark-asking-symbol.jpg"} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 border shadow-xl rounded">
                        <div className="collapse collapse-arrow bg-base-200 mb-6">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How many books can I borrow at a time?
                            </div>
                            <div className="collapse-content">
                                <p className="text-lg">You can borrow up to five books at a time with a standard library membership.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-6">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Can I renew my borrowed books online?
                            </div>
                            <div className="collapse-content">
                                <p className="text-lg">Yes, you can renew your borrowed books online as long as no one else has placed a hold on them.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-6">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Do you offer interlibrary loans?
                            </div>
                            <div className="collapse-content">
                                <p className="text-lg">Yes, we provide interlibrary loan services for books not available in our collection.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-6">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                How can I reserve a meeting room at the library?
                            </div>
                            <div className="collapse-content">
                                <p className="text-lg">To reserve a meeting room, please visit the library in person or contact our staff for more information.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-6">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Can I access Wi-Fi in the library?
                            </div>
                            <div className="collapse-content">
                                <p className="text-lg">Yes, we offer free Wi-Fi access for library visitors. You can connect to our Wi-Fi network to access the internet while in the library.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-6">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                How can I suggest a book for the library s collection?
                            </div>
                            <div className="collapse-content">
                                <p className="text-lg">We welcome book suggestions from our patrons. If you'd like to recommend a book for our collection, please fill out our book suggestion form available on our website. Our collection development team will review your suggestion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Question;