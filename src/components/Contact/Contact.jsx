
export default function Contact(){
    return(
        <div className="container">
            <div className="titel-container mb-20">
                <h2 className="titel-form font-bold text-3xl">
                    Get News and Updates
                </h2>
            </div>
            <div className="form w-full">
                <input type="text" placeholder="E - mail" className="mr-2 border-b border-black"/>
                <button type="submit" className=" text-center border-2 border-purple-200 p-1 rounded-full"> go </button>
            </div>
            <div className="About-text flex justify-between">
                <p className="about max-w-lg">
                    Hi! We are pleased to introduce you to our online store, where you can find a wide range of products.Subscribe to our newsletter and be always up to date with the latest novelties
                </p>
                <a href="#" className="email underline self-end">shop@email.com</a>
            </div>
        </div>
    );
}