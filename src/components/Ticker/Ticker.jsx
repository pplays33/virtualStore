
export default function Ticker(){
    return(
        <>
            <div className="container ticker overflow-x-hidden overflow-y-hidden">
                <div className="text-bg 
                 flex justify-center items-center
                text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
                 mb-5
                ">
                    <h2 className=" text-9xl font-bold"> Universe </h2>
                </div>
                <div className="btn-container flex justify-center">
                    <button className="buy-btn p-px flex cursor-pointer rounded-sm bg-gradient-to-b from-purple-400 to-pink-600">
                        <span className="btn-text  text-white pt-5 pb-5 pr-24 pl-24"> Buy Now </span>
                        <span className="btn-price pt-5 pb-5 pl-24 pr-24 bg-white"> 399.99 USD </span>
                    </button>
                </div>
            </div>
        </>
    );
}