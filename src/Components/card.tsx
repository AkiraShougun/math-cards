import '../index.css'
import Tex from '@matejmazur/react-katex'

const Card = () => {
  return (
    <div className="flex flex-col mx-96 my-96 outline rounded-md border-cyan-200 text-white">
        <div className='flex flex-col text-center p-4'>
          <p className='mb-2 break-words'>Title</p>
          <p className='mt-2'><Tex block>x=3+2x</Tex></p>
        </div>
        <div className="grid grid-cols-2 p-4 gap-4 ">
            <button className="grid border-solid outline rounded-md">Choice 1</button>
            <button className="grid border-solid outline rounded-md">Choice 2</button>
            <button className="grid border-solid outline rounded-md">Choice 3</button>
            <button className="grid border-solid outline rounded-md">Choice 4</button>
        </div>
    </div>
  )
}

export default Card