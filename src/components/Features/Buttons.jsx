
export default function Buttons({data ,context, setCurrBtn, isTarget}){
    const onClick = (event) =>{
        const tabTarget = event.currentTarget;
        const targetContext = tabTarget.dataset.button;

        setCurrBtn(+targetContext.slice(-1));
        
        // tabContent = document.querySelectorAll('tabs__cont-item');

        // tabContent.forEach(item => {
        //     item.classList.remove('tabs__cont-item--active')
        // });
        
        // document.querySelector(`#${targetContext}`).classList.add('tabs__cont-item--active');
    }

    return(
        <>  
            <button className={`tabs__btn-item ${ isTarget ? "tabs__btn-item--active" : ""}`} data-button={data} onClick={onClick}> {context} </button>
        </>
    );
}