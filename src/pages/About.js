import React from 'react';
import Topimage from "../assets/multiplePizzas.jpeg";
import '../style/About.css';

function About() {
  return (
    <div className='about'>
        <div className='TopAbout' style={{ backgroundImage: `url(${Topimage})` }}>
        </div>
        <div className='BottomAbout'>
            <h1>About Us</h1>
            <p>
            As we all know, a paragraph is a group of sentences that are connected and makes absolute sense. 
                While writing a long essay or letter, we break them into paragraphs for better understanding, and to make a well-structured writing piece. 
                Paragraph writing on any topic is not only about expressing your thoughts on the given topic, but it is also about framing ideas about the topic and making it convenient for the readers to follow it. In English paragraph writing, it is essential to focus on the writing style, i.e., the flow and connection between the sentences.
                Therefore, a paragraph must be written in simple language in order to avoid any interruption while reading. In order to write a paragraph on any topic, you can refer to the samples given below, and write a paragraph without any hindrance.
            </p>
        </div>
      
    </div>
  )
}

export default About;
