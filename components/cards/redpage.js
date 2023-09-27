import Image from "next/image"

export default function Redcard()
{
    return(
        <div className="cardsout bg-[#ED1B24] sm:h-[558px] sm:w-[425px] w-[184px] h-[245px] sm:mt-[90px] mt-[50px] sm:p-[12px] p-[10px]">
        <p className="cardtext text-[#FFF] sm:mt-[35px] mt-[10px]">Bio-Security & Border Security
 (Customs)</p>
            <Image src='/g3264.png' width={131} height={131} className="sm:ml-[147px] ml-[52px] sm:mt-[20px] sm:h-[131px] sm:w-[131px] h-[85px] w-[85px]"></Image>
            <p className="cardtextb sm:text-[16px] text-[8px] sm:w-[395px] sm:h-[195px] w-[160px] h-[80px] text-[#FFF] mt-[8px] sm:mt-[20px]">Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
            <Image src='/Arrow 1 (1).png' width={98} height={0} className="float-right sm:w-[98px] w-[20px] flex sm:mr-[20px]"></Image>
    </div>
    )
}