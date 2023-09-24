import Image from "next/image"

export default function Five() {
    return (
        <div>
            <div className="h-[881px] w-full fivbg bg-cover mt-[50px]">
                <div className="fivbox relative top-[30px]">
                    <p className="heroboxtwo w-[427px] relative top-[30px]   text-[32px] left-[30px]">Have a question regarding
                        Swift services?</p>
                    <div className="flex float-right mt-[50px] mr-[80px]">
                        <p className="fleettext ">Contact us</p>
                        <Image src='/Arrow 1 (1).png ' width={58} height={0} className="mt-[18px] ml-[5px] w-[58px] h-[12px]" ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}