
import { CTA } from "../components";
import "./message.css";
import Typewriter from "../components/TypeWriter";
const text = `
Today officially marks 12 weeks of knowing each other and 1 month of officially becoming lovers.
The time is not long but not short either.
But it's a small milestone.
Just cherish the present.
And let’s discover the world together!`
const Message = () => {
  return (
    <section className='max-container'>

        <h1 className='head-text'>
        Dear{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          My sweet little girl
        </span>
      </h1>
        <Typewriter text={text}/>
      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Message;
