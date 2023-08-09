import imgTab from '../../assets/img-tabs.jpg';
import imgVideo from '../../assets/img-video.jpg';

export default function TabsContent({idTeg, content, isTarget,}) {
    return (
        <>
            <div className={`tabs__cont-item ${isTarget ? "tabs__cont-item--active" : "" }`} id={idTeg}>
                <img src={imgTab} alt="content" className="tabs__content__items-img row-span-2
                              self-stretch
                              w-[1030px] h-[423px] bg-no-repeat bg-cover bg-center object-cover" />
                <div className="tabs__cont-box flex flex-col">
                    <h3 className=' text-2xl'>Graphics</h3>
                    <p> a mini framework for building web applications using Rust {content} </p>
                </div>
                <div className="tabs__cont-video col-end-3 col-span-1">
                    <img src={imgVideo} alt="video" className="video w-[280px] h-36 bg-no-repeat bg-cover bg-center" />
                </div>
            </div>
        </>
    );
}