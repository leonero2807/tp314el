import React, {useState, useEffect} from 'react';

const Typewriter = ({text, speed = 100}) => {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (index >= text.length) {
                clearInterval(timer);
                return;
            }
            setTypedText(typedText + text[index]);
            setIndex(index + 1);
        }, speed);

        return () => clearInterval(timer);
    }, [index, text, speed]);

    return <span style={{whiteSpace: 'pre-wrap'}}>
          <p className='text-slate-500 mt-2 leading-relaxed'>
        {typedText}

      </p>
    </span>;
};

export default Typewriter;
