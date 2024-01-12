import questionJSON from '../Questions/question.json'


interface Question{
  title:string
  problem:string
  options:string[]
}
export default questionJSON as Question[]