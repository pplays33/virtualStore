import Welcome from "../components/Welcome";
import Features from "../components/Features/Features";
import Market from "../components/Market/Market";
import Ticker from "../components/Ticker/Ticker";
import Contact from "../components/Contact/Contact";

export default function MainPage(){
    return(
        <>
            <main className="main">
                <section className="Welcome mb-5">
                    <Welcome />
                </section>

                <section className="Features">
                    <Features />
                </section>

                <section className="Market mb-40">
                    <Market />
                </section>

                <section className="Ticker mb-40">
                    <Ticker />
                </section>

                <section className="Contact mb-40">
                    <Contact />
                </section>
            </main>
        </>
    );
}