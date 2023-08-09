

export default function Welcome(){
    return(
        <>
            <div className="container">
                <h1 className="titel pt-44 mb-3 text-8xl"> Virtual Store</h1>
                <p className="subtitel mb-1 text-4xl"> shop and etc for free </p>
                <p className="top__text mb-12 text-xs"> 
                    Promotion time is limited and valid until 1/19/2000 
                </p>
                <button className="buy-btn p-px flex cursor-pointer bg-gradient-to-b from-blue-500 to-green-500">
                    <span className="btn-text  text-white pt-5 pb-5 pr-24 pl-24"> Buy Now </span>
                    <span className="btn-price pt-5 pb-5 pl-24 pr-24 bg-slate-100"> 399.99 USD </span>
                </button>
                <p className="text-price"> *over popular product </p>
            </div>
        </>
    );
}