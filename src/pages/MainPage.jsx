import Welcome from "../components/Welcome";
import Features from "../components/Features";

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

            </main>
        </>
    );
}