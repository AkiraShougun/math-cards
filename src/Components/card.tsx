import '../index.css'
import Tex from '@matejmazur/react-katex'
import dataStuff from '../../Questions/question.json'
import { useEffect, useState } from 'react'

interface Question{
  title:string
  problem:string
  options:string[]
  correct:number
}


const questions = dataStuff as Question[]



const Card = (props:{index:number}) => { 

  const [content, setContent] = useState("")

  function reply(ind:number){
    if (ind === questions[props.index].correct){
      setContent("This is correct")
    }
    else{
      setContent("This is false")
    }
  }

  useEffect(() => {
    setContent("")
  },[questions[props.index].title])

  function renderButtons(){
    const buttons = []
    for(let [index,option] of questions[props.index].options.entries()){
      buttons.push(<button key={index} className="grid border-solid outline rounded-md" onClick={() => reply(index)}><Tex block>{option}</Tex></button>)
      
      }
    return buttons
  }

  return (
    <>
    <div className="outline rounded-md border-cyan-200 bg-slate-700">
        <div className='flex flex-col text-center text-2xl'>
          <p className='mb-2 break-words bg-cyan-500'>{questions[props.index].title}</p>
          <div className='mt-2'><Tex block>{questions[props.index].problem}</Tex></div>
        </div>
        <div className="grid grid-cols-2 p-4 gap-4 ">
          {renderButtons()}
        </div>
        <p className="text-center my-10">{content}</p>
    </div>
    </>
  )
}

export default Card