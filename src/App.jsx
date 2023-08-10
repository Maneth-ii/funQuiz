import Quizcard from "./components/Quizcard.jsx";
import {useState} from "react";
export default function App(){
    const[index , setIndex]=useState(0);

    const q =[
        {
            question:'who is the president of srilanka',
            ans1:'maithripala sirisena',
            ans2:'gotabaya rajapakshe',
            ans3:'ranil wickramasinghe',
            ans4:'AKD',
            cAns:'ans3'
        },
        {
            question:'who is the president of usa',
            ans1:'maithripala sirisena',
            ans2:'Joe Biden',
            ans3:'Donald Trumph',
            ans4:'michale jordan',
            cAns:'ans2'
        },
        {
            question:'who is the creator of linux',
            ans1:'Mark Zuckerberg',
            ans2:'Steve Jobs',
            ans3:'Linus Trovalds',
            ans4:'Bill Gates',
            cAns:'ans3'
        },
        {
            question:'What is the Most Loved FrameWork Acording to the StackOverflow Developer Survey',
            ans1:'React',
            ans2:'Vue JS',
            ans3:'ASP.NET Core',
            ans4:'Svelte',
            cAns:'ans4'
        },
        {
            question:'What is the Most Loved Programming Language In 2022',
            ans1:'Python',
            ans2:'C++',
            ans3:'Rust',
            ans4:'Javascript',
            cAns:'ans3'
        }

    ]
    const size = q.length;
    return(
        <section className={'main-container'}>
            <Quizcard index={index} setIndex={setIndex} size={size} q={q[index]}/>
        </section>
    )
}