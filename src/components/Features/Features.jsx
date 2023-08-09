import imgTab from '../../assets/img-tabs.jpg';
import imgVideo from '../../assets/img-video.jpg';
import '../components.css';
import Buttons from './Buttons';
import TabsContent from './TabsContent';

import { useState } from 'react';

export const generateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);


export default function Features() {
    const contextsForButtons = [
        "01 graphics",
        "02 controls",
        "03 Processor",
        "04 Activity",
        "05 set up",
    ];

    const [currentButton, setCurrBtn] = useState(1);

    const renderButtons = (value, index) =>{
        if(currentButton-1 === index){
           return(
               <Buttons
                   key={index}
                   data={`content-${index + 1}`}
                   context={value}
                   setCurrBtn={setCurrBtn}
                   isTarget={true}
               />
           ); 
        }
        return(
            <Buttons
                id={index}
                data={`content-${index + 1}`}
                context={value}
                setCurrBtn={setCurrBtn}

            />
        );
    }



    return (
        <>
            <div className="container">
                <div className="features__titels flex">
                    <h2 className="features__titel section__titel basis-40 pr-5 mb-5 text-xl"> product features </h2>
                    <p className="features__text text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Easy to set up and save to use</p>
                </div>
                <div className="tabs gap-x-1">
                    <div className="tabs__buttons flex flex-col items-start gap-y-2">
                        {
                            contextsForButtons.map((value, index) => renderButtons(value, index))
                        }
                    </div>

                    <div className="tabs__content relative min-h-[500px]">
                        {
                            contextsForButtons.map((value, index) => (
                                <TabsContent 
                                    key={generateId()}
                                    idTeg={index}
                                    content={value}
                                    isTarget = {currentButton - 1 === index ? true : false}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}