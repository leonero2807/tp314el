import {Link} from "react-router-dom";
import ava from "../assets/images/ava.jpg"
import "./cta.css"

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                <br className='sm:block hidden'/>
                <br/>
                Love you in every universe
                <br/>
                <p className='cta-text typing-demo'>
                    Your super hero
                </p>
                <br/>
            </p>
            <br/>
            <img src={ava} width="200" height="150"/>
        </section>

    );
};

export default CTA;
