export default function News() {
    return (
        <div className="sm:h-[780px] h-[301px]  bg-[#ED1B24] gap- news mt-[70px] flex overflow-hidden">
           <div className="ml-[-80px] flex gap-x-[20px]">
           {
            [...Array(3)].map((e)=>{
                return( <div className="cardsout w-[177px] h-[255px] sm:w-[425px] sm:h-[558px] bg-[#FFF] sm:ml-[50px]  relative sm:top-[50px] ">
                <div className="sm:h-[295px] sm:w-[427px] bgphoto ">

                </div>
                <p className="cardtext text-[24px] sm:mt-[10px] mt-[10px] sm:ml-[10px] ml-[6px]">World Shipping Council Releases
                    Containers Lost At Sea Report</p>
                <p className="cardtextb h-[50px] text-[16px] sm:h-[108px] sm:mt-[20px] mt-[20px] ml-[6px] sm:ml-[10px]">Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) </p>
                <p className="cardtext text-[20px] text-[#ED1B24] sm:float-right sm:mr-[20px] sm:mt-[-20px] mt-[5px] ml-[6px] ">Read More</p>
            </div>)
            })
           }
           </div>
        </div>
    )
}