import Image from "next/image"


export default function Hero() {
    return (
        <div className="hero w-full h-[950px] ">
            <div className="w-[1000px] float-right">
                <div className="float-right sm:w-[194px] flex gap-[15px] p-[15px] mr-[45px] mt-[28px] relative" >
                    <Image src='/landline 1.png' width={48} height={48} className=""></Image>
                    <div className="herotext">
                        <p>Call Us</p>
                        <p>1300 779 438</p>
                    </div>
                </div>
                {/* <p>hi</p> */}
                <div className="float-right flex mt-[102px] secbox mr-[-180px]">
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
                    <p className="heroboxtwo">
                        Cheaper delivery costs through
                        innovative vehicle design
                    </p>
                </div>
                <div>
                    <p className="heroboxsec float-right mt-[25px]">
                        OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU'LL BE PLEASANTLY SUPRISED
                    </p>
                </div>
                <div>
                    <p className="heroboxthir float-right">
                        Taxi and Courier truck
                    </p>
                    <Image></Image>
                </div>
            </div>
        </div>
    )
}