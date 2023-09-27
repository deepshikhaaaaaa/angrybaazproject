import Image from "next/image"
export default function Cards(props) {
    console.log(props.details[4])
    var mt=props.details[4];
    var c=`ml-[90px] mt-[${mt}px] sm:block hidden`
    var d=`ml-[10px] sm:hidden mt-[10px]`
    console.log(c)
    return (
        <div className="cardsout sm:h-[558px] sm:w-[425px] w-[184px] h-[245px] bg-[#FFF] sm:mt-[90px] mt-[50px] sm:p-[12px] p-[10px]">
            <p className="cardtext  sm:mt-[35px] text-[#002A54] mt-[10px] ml-[]">{props.details[0]}</p>
            <Image src={props.details[1]} width={props.details[3].widths} height={props.details[3].heights} className={d}></Image>

                <Image src={props.details[1]} width={props.details[3].width} height={props.details[3].height} className={c}></Image>
                <p className="cardtextb sm:text-[16px] text-[8px] h-[90px] sm:w-[395px] sm:h-[195px] w-[160px]  text-[#002A54] mt-[10px] sm:mt-[20px]">{props.details[2]}</p>
                <Image src='/Arrow 1.png' width={98} height={0} className="float-right flex sm:w-[98px] w-[20px] sm:mr-[20px]"></Image>
        </div>
    )
}