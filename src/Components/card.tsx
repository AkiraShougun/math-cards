import '../index.css'
import Tex from '@matejmazur/react-katex'
import dataStuff from '../../Questions/question.json'


interface Question{
  title:string
  problem:string
  options:string[]
}


const questions = dataStuff as Question[]


const Card = (props:{index:number}) => { 

  return (
    <div className='outline rounded-md border-cyan-200'>
        <div className='flex flex-col text-center p-4'>
          <p className='mb-2 break-words'>{questions[props.index].title}</p>
          <p className='mt-2'><Tex block>{questions[props.index].problem}</Tex></p>
        </div>
        <div className="grid grid-cols-2 p-4 gap-4 ">
            <button className="grid border-solid outline rounded-md">{questions[props.index].options[0]}</button>
            <button className="grid border-solid outline rounded-md">{questions[props.index].options[1]}</button>
            <button className="grid border-solid outline rounded-md">{questions[props.index].options[2]}</button>
            <button className="grid border-solid outline rounded-md">{questions[props.index].options[3]}</button>
        </div>
    </div>
  )
}

export default Card