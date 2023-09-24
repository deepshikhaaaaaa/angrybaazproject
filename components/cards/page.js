import Image from "next/image"
export default function Cards(props) {
    console.log(props.details[4])
    var mt=props.details[4];
    var c=`ml-[90px] mt-[${mt}px]`
    console.log(c)
    return (
        <div className="cardsout bg-[#FFF] mt-[90px] p-[12px]">
            <p className="cardtext text-[24px] mt-[35px] text-[#002A54]">{props.details[0]}</p>
                <Image src={props.details[1]} width={props.details[3].width} height={props.details[3].height} className={c}></Image>
                <p className="cardtextb text-[#002A54] mt-[20px]">{props.details[2]}</p>
                <Image src='/Arrow 1.png' width={98} height={0} className="float-right flex mr-[20px]"></Image>
        </div>
    )
}