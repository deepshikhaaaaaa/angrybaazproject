import Image from "next/image"

export default function Five() {
    return (
        <div>
            <div className="sm:h-[881px] h-[301px] w-full fivbg bg-cover mt-[50px]">
                <div className="fivbox sm:h-[230px] sm:w-[639px] relative top-[30px]">
                    <p className="heroboxtwo sm:w-[427px] relative sm:top-[30px] text-[10px]  sm:text-[32px] sm:left-[30px] left-[10px] mt-[13px] ">Have a question regarding
                        Swift services?</p>
                    <div className="flex float-right sm:mt-[50px] mt-[20px] mr-[30px] sm:mr-[80px]">
                        <p className="fleettext  text-[10px]">Contact us</p>
                        <Image src='/Arrow 1 (1).png ' width={58} height={0} className="sm:mt-[18px] mt-[5px] sm:ml-[5px] sm:w-[58px] w-[20px] h-[3px] sm:h-[12px]" ></Image>
                    </div>
                </div>
            </div>
            <div className="w-full h-[270px] sm:h-[613px] bg-[#ED1B24] sm:mt-[100px] mt-[50px]">
                <div className="redbg sm:h-[613px] h-[287px] w-full flex ">
                    <div className="relative">
                        <p className="good sm:ml-[50px] w-[164px] sm:w-[490px] sm:h-[98px] sm:text-[36px] text-[12px] relative sm:top-[40px] ml-[10px] mt-[17px]">You'll be in good company</p>
                        <Image src='/Rectangle 27.png' height={397} width={628} className="w-[242px] h-[153px] sm:h-[397px] sm:w-[628px] sm:mt-[50px] sm:ml-[50px] ml-[10px] mt-[26px]"></Image>
                    </div>
                    <div className="whitebg h-[197px] w-[185px] sm:h-[527px] sm:w-[666px] sm:mt-[50px] mt-[20px] sm:ml-[50px] relative right-[20px] flex">
                        <div className="flex flex-col sm:gap-[81px] gap-y-[26px] sm:mt-[48px] mt-[28px] ml-[21px] sm:ml-[106px]">

                            <Image src='/image 2.png' height={61} width={83} className="sm:h-[61px] sm:w-[83px] h-[19px] w-[22px]"></Image>
                            <Image src='/image 5.png' height={56} width={165} className="sm:h-[56px] sm:w-[165px] h-[17px] w-[51px]"></Image>
                            <Image src='/image 3.png' height={38} width={138} className="sm:h-[38px] sm:w-[138px] h-[12px] w-[38px]"></Image>

                            <Image src='/image 4.png' height={47} width={163} className="sm:h-[47px] sm:w-[163px] h-[15px] w-[45px]"></Image>


                        </div>
                        <div className="flex flex-col sm:gap-[81px] gap-y-[26px] mt-[34px] ml-[42px] sm:mt-[48px] sm:ml-[163px]">
                            <Image src='/image 6.png' height={105} width={154} className="sm:h-[105px] sm:w-[154px] h-[34px] w-[42px]"></Image>
                            <Image src='/image 7.png' height={93} width={156} className="sm:h-[93px] sm:w-[156px] h-[30px] w-[43px]"></Image>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}