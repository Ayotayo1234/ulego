import React, { useState } from 'react'
import Question from './Question'
import './faq.css';

const Faq = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        },
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        },
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        },
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        },
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        },
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        },
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        },
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        },
        {
            question: 'how are you doing?',
            answer:'im fine thank you',
            open: false
        }
    ]);

    const toggleFAQ = index =>{
        setFaqs(faqs.map((faq, i)=>{
            if (i === index){
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }


  return (
    <div className="faq-div">
        <div className="faq-txt">
            <div className="txt1">FAQ</div>
            <div className="txt2">Find answers to some of your questions here</div>
        </div>
        <div className="faqs">
           {faqs.map((faq, i) => (
            <Question faq={faq} index={i} toggleFAQ={toggleFAQ} />
           )
           )}
        </div>
    </div>
  )
}

export default Faq
