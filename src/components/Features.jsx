
export default function Features() {
    return (
        <>
            <div className="container">
                <div className="features__titels flex">
                    <h2 className="features__titel section__titel basis-40 pr-5"> product features </h2>
                    <p className="features__text text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Easy to set up and save to use</p>
                </div>
                <div className="tabs grid">
                    <div className="tabs__buttons w-40">
                        <button className="tabs__btn-item" data-button="content-1">01 graphics</button>
                        <button className="tabs__btn-item" data-button="content-2">02 controls </button>
                        <button className="tabs__btn-item" data-button="content-3">03 Processor </button>
                        <button className="tabs__btn-item" data-button="content-4">04 Activity </button>
                        <button className="tabs__btn-item" data-button="content-5">05 set up </button>
                    </div>

                    <div className="tabs__content ">
                        <div className="tabs__cont-item" id="content-1">
                            <img src="#" alt="content" className="tabs__content__items-img" />
                            <div className="tabs__cont-box flex">
                                <h3>Graphics</h3>
                                <p> a mini framework for building web applications using Rust </p>
                            </div>
                            <div className="tabs__cont-video">
                                <img src="" alt="" className="video" />
                            </div>
                        </div>
                        <div className="tabs__cont-item" id="content-2">

                        </div>
                        <div className="tabs__cont-item" id="content-3">

                        </div>
                        <div className="tabs__cont-item" id="content-4">

                        </div>
                        <div className="tabs__cont-item" id="content-5">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}