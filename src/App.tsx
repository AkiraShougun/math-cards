import '../src/index.css'
import 'katex/dist/katex.min.css';
import Card from './Components/card';
import questions from './questions';


const randomNumber = Math.floor(Math.random() * questions.length)

function App() {

  return (
    <div>
      <div className='flex mx-80 mt-80 flex-col text-white'>
        <Card index={randomNumber}/>
        <button className='mt-4 outline rounded-md border-cyan-200'>Click</button>
      </div>
    </div>
  )
}

export default App
