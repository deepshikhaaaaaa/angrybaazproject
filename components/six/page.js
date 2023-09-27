import Image from "next/image";


export default function Six() {
    return (
        <div>
            <div className="sm:h-[612px] h-[200px] ">
                <div className="flex gap-[10px]">
                    <div>
                        <Image src='/Rectangle 29.png' width={768} height={451} className="z-30  sm:h-[451px] sm:w-[768px] h-[134px] w-[229px] relative flex mt-[108px]"></Image>

                    </div>
                    <div className=" mt-[108px]  z-30 sm:ml-[90px] mr-[-10px] flex flex-col gap-[10px]">
                        <p className="cardtext sm:text-[32px] text-[10px] sm:w-[408px]">We deliver, no matter
                            how hard the challenge.
                        </p>
                        <Image src='/image 8.png' height={198} width={400} className=" sm:h-[198px] sm:w-[400px] h-[59px] w-[119px] sm:mt-[40px]"></Image>
                        <p className="fleettext text-[10px] sm:text-[24px]  underline sm:mt-[55px]">Kennards Hire Case Study</p>
                    </div>
                </div>
                <div className="w-full sm:h-[273px] h-[81px] bg-[#002A54] relative z-0 sm:mt-[-220px] mt-[-74px]">

                </div>
            </div>
            <div className="sm:h-[301px] sm:w-[1300px] sm:ml-[95px]  sm:gap-[119px] relative sm:flex hidden ">
                <div className="flex flex-col justify-center items-center">
                    <Image src='/support 1.png' width={80} height={80}></Image>
                    <p className="lastbox mt-[31px] sm:text-[16px] text-[#002A54] sm:w-[171px] text-center ">Call us at anytime on
                        1300 779 438</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src='/email.png' width={80} height={80}></Image>
                    <p className="lastbox mt-[31px] text-[#002A54] w-[147px] text-center ">See why more
                        companies prefer
                        Swift</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src='/rate (1).png' width={80} height={80}></Image>
                    <p className="lastbox mt-[31px] text-[#002A54] w-[145px] text-center ">Email the Team at
                        Swift Transport
                        Courier Division</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src='/warehouse (1).png' width={80} height={80}></Image>
                    <p className="lastbox mt-[31px] text-[#002A54] w-[149px] text-center ">Email the Team at
                        Swift Containers
                        Transport Division</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src='/email (1).png' width={80} height={80}></Image>
                    <p className="lastbox mt-[31px] text-[#002A54] w-[146px] text-center ">Visit our
                        warehousing and
                        distribution center</p>
                </div>
            </div>
            <div className="sm:hidden lastsec flex h-[162px] w-full gap-[41px]  mt-[58px] mb-[10px]">

                <div className="flex flex-col justify-center items-center mt-[10px] relative left-[20px]">
                    <Image src='/email.png' width={35} height={37} className=""></Image>
                    <p className="lastbox mt-[15px] text-[8px] text-[#002A54] w-[74px] text-center ">See why more
                        companies prefer
                        Swift</p>
                </div>
                <div className="redthumb mt-[14px] flex flex-col justify-center items-center ">
                    <Image src='/rate (1) (1).png' height={82} width={81} className="relative top-[10px]"></Image>
                    <p className="lastbox mt-[15px] mb-[8px] text-[8px] text-[#ED1B24] w-[74px] text-center ">
                        Email the Team at
                        Swift Transport
                        Courier Division
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-[10px] relative right-[14px]">
                    <Image src='/rate (1).png' width={37} height={37}></Image>
                    <p className="lastbox mt-[15px] text-[8px] text-[#002A54] w-[74px] text-center  ">Email the Team at
                        Swift Transport
                        Courier Division</p>
                </div>
            </div>
        </div>
    )
}