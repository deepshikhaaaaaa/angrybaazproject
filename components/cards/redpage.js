import Image from "next/image"

export default function Redcard()
{
    return(
        <div className="cardsout bg-[#ED1B24] mt-[90px] p-[12px]">
        <p className="cardtext text-[#FFF] mt-[35px]">Bio-Security & Border Security
 (Customs)</p>
            <Image src='/g3264.png' width={131} height={131} className="ml-[147px] mt-[20px]"></Image>
            <p className="cardtextb text-[#FFF] mt-[20px]">Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…</p>
            <Image src='/Arrow 1 (1).png' width={98} height={0} className="float-right flex mr-[20px]"></Image>
    </div>
    )
}