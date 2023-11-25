import gif from '../assets/loading.gif'
const Loading = () => {
  return (
    <div className='w-full h-full grid place-items-center  '>
      <img className= ' max-h-80' src={gif} alt="" />
    </div>
  )
};

export default Loading;