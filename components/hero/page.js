import Image from "next/image"


export default function Hero() {
    return (
        <div clas>
            <div className="bg-[#ED1B24] flex h-[50px] w-full sm:hidden">
                <Image src='/image 1.png' height={37} width={67}></Image>
                <div className="flex relative ml-[200px]">
                    <Image src='/phone-call.png' width={24} height={24} className="h-[24px] w-[24px] mt-[10px]"></Image>
                    <Image src='/align-justify.png' width={24} height={24} className="h-[24px] w-[24px] mt-[10px] ml-[10px]"></Image>

                </div>
            </div>
            <div className="herobg w-full h-[371px] sm:h-[950px] z-20 relative">
                <div className=" w-full hero  h-[371px] sm:h-[950px]">
                    <p className="heroboxtwo w-[195px] text-[12px] sm:hidden relative top-[13px] left-[29px]">
                        Cheaper delivery costs through
                        innovative vehicle design
                    </p>
                    <div className="w-[1000px] float-right sm:block  hidden">
                        <div className="float-right sm:w-[194px] flex gap-[15px] p-[15px] mr-[45px] mt-[28px] relative" >
                            <Image src='/landline 1.png' width={48} height={48} className=""></Image>
                            <div className="herotext">
                                <p>Call Us</p>
                                <p>1300 779 438</p>
                            </div>
                        </div>
                        {/* <p>hi</p> */}
                        <div className="float-right flex mt-[102px] secbox text-[#FFF] mr-[-180px]">
                            <p>WHY SWIFT TRANSPORT</p>
                            <p>FLEET</p>

                            <p>COMPANY POLICIES</p>

                            <p>ABOUT US</p>

                            <p>CONTACT US</p>

                        </div>
                        <div className="thirbox w-[910px] flex float-right mt-[13px]">
                            <p className="aa relative right-[88px]">
                                Swift Intermodal
                            </p>
                            <p className="bb relative right-[44px]">
                                Container Transport Solutions
                            </p>
                            <p className="cc ">
                                Complete Warehousing Solutions
                            </p>
                        </div>
                    </div>
                    <div className="w-[801px] float-right bot">
                        <div>
                            <p className="heroboxtwo font-normal text-right w-[801px] hidden sm:block text-[48px]">
                                Cheaper delivery costs through
                                innovative vehicle design
                            </p>
                        </div>
                        <div>
                            <p className="heroboxsec float-right mt-[25px] hidden sm:block">
                                OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN'T. YOU'LL BE PLEASANTLY SUPRISED
                            </p>
                        </div>
                        <div>
                            <p className="heroboxthir float-right hidden sm:block">
                                Taxi and Courier truck
                            </p>
                            <Image></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}