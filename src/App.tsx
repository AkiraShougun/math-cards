import '../src/index.css'
import 'katex/dist/katex.min.css';
import Card from './Components/card';
import questions from './questions';
import { useState } from 'react';



function App() {

  const [index, setIndex] = useState(1)
  const [questionIndices, setQuestionIndices] = useState([...questions.keys()])

  async function changeQuestion(){
    console.log(questionIndices)
    let indices = questionIndices
    if (questionIndices.length === 0){
      indices = [...questions.keys()]

    }
    const randomNumber = Math.floor(Math.random() * indices.length)
    setIndex(indices[randomNumber])
    setQuestionIndices(_ => indices.filter((_,i) => i!==randomNumber) )

  }


  return (
    <div>
      <div className="flex flex-col text-white min-[1000px]:mt-56 min-[1000px]:mx-56">
        <Card index={index}/>
        <button className='mt-4 outline rounded-md border-cyan-200 bg-slate-700 text-3xl py-4' onClick={changeQuestion}>Click</button>
      </div>
    </div>
  )
}

export default App
