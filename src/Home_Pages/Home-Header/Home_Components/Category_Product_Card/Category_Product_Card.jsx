
import fooditem from '../../../../assets/Icon-Images/alt (1).png'
export default function Category_Product_Card({category }) {
            const {name,url} = category ;



  return (
    <section>
       <div className=' w-fit flex flex-col justify-center items-center card-bg-color py-5 px-7 rounded-xl' >
           <div> <img className='w-[100px] h-[80px] object-contain' src={url} alt="" /></div>
           <div className='flex flex-col justify-center items-center '>
            <p className='font-bold text-base quicksand-regular menu-text-color'>{name}</p>
            {/* <p className='lato-regular text-base secondary-text-color'>11 items</p> */}
           </div>
      </div>
    </section>
  )
}
