export default function News() {
    return (
        <div className="h-[780px] bg-[#ED1B24] news mt-[70px] flex">
           {
            [...Array(3)].map((e)=>{
                return( <div className="cardsout bg-[#FFF] ml-[50px] relative top-[50px] ">
                <div className="h-[295px] w-[427px] bgphoto ">

                </div>
                <p className="cardtext text-[24px] mt-[10px] ml-[10px]">World Shipping Council Releases
                    Containers Lost At Sea Report</p>
                <p className="cardtextb mt-[12px] ml-[10px]">Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) </p>
                <p className="cardtext text-[20px] text-[#ED1B24] float-right mr-[20px] mt-[-20px]">Read More</p>
            </div>)
            })
           }
        </div>
    )
}