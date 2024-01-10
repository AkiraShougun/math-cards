import '../index.css'


const Card = () => {
  return (
    <div className="flex flex-col mx-96 my-96 justify-center items-center max-w-2xl outline rounded-md border-cyan-200 text-white">
        <div className="flex px-24">Title</div>
        <div className="flex px-24">Problem</div>
        <div className="grid grid-cols-2 border-solid outline">
            <button className="border-solid outline">Choice 1</button>
            <button className="border-solid outline">Choice 2</button>
            <button className="border-solid outline">Choice 3</button>
            <button className="border-solid outline">Choice 4</button>
        </div>
    </div>
  )
}

export default Card