import {useEffect, useState} from "react";

export default function Quizcard({q ,setIndex , size ,index}){
    const [usrAns , setUsrAns] = useState(null);
    const [isCorrect , setIsCorrect] = useState(false)
    const [finished , setFinished ] = useState(false);
    const [marks , setMarks] = useState(0)

    function handleClick(){
        if (!(size-1 === index)){
            setIndex(prev => prev+1);
            setIsCorrect(prev => !prev)
        }else
        {
            setFinished(true)
            setIndex(0)
        }
    }

    useEffect(()=>{
        if(usrAns==q.cAns){
            console.log('correct')
            setIsCorrect(true)
            setMarks(prevState => prevState+10)
        }else {
            console.log('incorrect ')
            setIsCorrect(false)
        }
    },[usrAns])
    return(
    <div className={`card `}>
        <h1 className={'question'}>{q.question}</h1>
        <h3 className={'ans'} onClick={() => setUsrAns('ans1')}>{q.ans1}</h3>
        <h3 className={'ans'} onClick={() => setUsrAns('ans2')}>{q.ans2}</h3>
        <h3 className={'ans'} onClick={() => setUsrAns('ans3')}>{q.ans3}</h3>
        <h3 className={'ans'} onClick={() => setUsrAns('ans4')}>{q.ans4}</h3>
        <br/>
        {isCorrect && <button onClick={() => handleClick()}>Next</button>}
    </div>



    )
}