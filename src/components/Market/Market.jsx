import cardImg from '../../assets/cardImg.jpg'
import cardImg2 from '../../assets/imgCard2.jpg'
import cardImg3 from '../../assets/imgCard3.jpg'

export default function Market(){
    return(
        <>
            <div className="container">
                <div className="Market-container gap-x-1">
                    <div className="titels">
                        <h2 className=" text-2xl"> Market</h2>
                        <p className="subtitel">
                            View or edit your browsing historyAfter viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in
                            View or edit your browsing historyAfter viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in
                        </p>
                    </div>
                    <div className="card-container grid grid-cols-3 self-start gap-x-1">
                        <div className="cart-item col-span-1 self-center bg-purple-600 p-1">
                            <img src={cardImg} alt="cardImg" className=' place-items-center
                             bg-no-repeat bg-cover bg-center
                             ' />
                             <div className='content-card p-5 bg-white'>
                                    <h2 className='mb-7 text-xl'>Price: 199 USD</h2>
                                    <p className=' mb-7'>about the product in the titel most popular and etc</p>
                                    <button className="buy p-2 bg-purple-200 hover:bg-purple-300 rounded"> Buy </button>
                             </div>
                        </div>

                        <div className="cart-item col-span-1 self-center bg-purple-600 p-1">
                            <img src={cardImg2} alt="cardImg" className=' place-items-center
                             bg-no-repeat bg-cover bg-center
                             ' />
                             <div className='content-card p-5 bg-white'>
                                    <h2 className='mb-7 text-xl'>Price: 199 USD</h2>
                                    <p className=' mb-7'>about the product in the titel most popular and etc</p>
                                    <button className="buy p-2 bg-purple-200 hover:bg-purple-300 rounded"> Buy </button>
                             </div>
                        </div>

                        <div className="cart-item col-span-1 self-center bg-purple-600 p-1">
                            <img src={cardImg3} alt="cardImg" className=' place-items-center
                             bg-no-repeat bg-cover bg-center
                             ' />
                             <div className='content-card p-5 bg-white'>
                                    <h2 className='mb-7 text-xl'>Price: 199 USD</h2>
                                    <p className=' mb-7'>about the product in the titel most popular and etc</p>
                                    <button className="buy p-2 bg-purple-200 hover:bg-purple-300 rounded"> Buy </button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}