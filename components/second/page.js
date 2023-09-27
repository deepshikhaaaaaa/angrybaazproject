import Image from "next/image";
import Cards from "../cards/page";
import Redcard from "../cards/redpage";

export default function Second() {
    const a = 'Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…';
    const details = [
        ['Transport - Container, Tautliner, Bulk', '/truck 1.png', a, { width: 223, height: 152 , widths:70, heights:48 }, 4],
        ['Intermodal Rail Terminals', '/train_x2C__logistics_x2C__cargo_x2C__wagon_x2C__transportation.png', a, { width: 171, height: 138, widths:60, heights:55  }, 54],
        ['Empty Container Depots', '/Group.png', a, { width: 164, height: 164, widths:55, heights:55  }, 8],
        ['Warehousing - 3PL, FAK and eCommerce', '/warehouse 2.png', a, { width: 119, height: 119, widths:54, heights:54  }, 28]
    ]



    return (
        <div>
            <div className="sm:h-[511px] h-[137px] bg-[#ED1B24] w-full sm:mt-[300px] mt-[100px]">
                <div className="secondtext sm:w-[540px] sm:h-[430px] h-[115px] w-[160px] relative z-30 sm:top-[40px] top-[9px] ml-[20px] sm:ml-[40px] sm:p-[20px] p-[5px]">
                    <div className="fleettext sm:text-[32px]  sm:w-[483px] text-[8px] w-[143px]">
                        A fleet capable of much more
                        than you'd think
                    </div>
                    <div className="fleetnext text-[6px] sm:h-[171px] sm:w-[478px] w-[142px] h-[51px] sm:text-[16px] sm:mt-[30px]">With a diverse range of utes, trucks and semi-trailers, Swift Transport is capable of much more than you'd think. Combine our versatile fleet wth our industry leading technology and 'can-do' attitude for a winning logistics partnership with your organization.
                    </div>
                    <div className="fleetnextnext sm:text-[24px] text-[10px] relative top-[10px] float-right mr-[20px]">
                        Why Swift
                    </div>
                </div>
                <Image src='/Rectangle 9.png' height={701} width={1352} className="relative sm:mt-[-620px] mt-[-180px] sm:h-[701px] sm:w-[1352px] w-[401px] h-[188px] float-right "></Image>
            </div>
            <div>
                <div className="w-full sm:h-[1574px] h-[1000px] thir mt-[40px]">
                    <div className="ml-[40px] relative top-[40px]">
                        <p className="fleettext sm:text-[32px] ">Services</p>
                        <p className="smarttext sm:text-[40px] text-[10px] mt-[20px]">A <span className=" text-[#ED1B24]">smarter</span> container transport business
                        </p>
                        <p className="ondemand mt-[8px] sm:text-[20px] text-[8px] w-[323px] sm:w-[1038px]">AN ON-DEMAND CONTAINER TRANSPORT SOLUTION THAT WORKS, UTILISING THE LATEST IN GPS, GEO-MAPPING SOFTWARE AND TECHNOLOGY.</p>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-[x] sm:ml-[50px] ml-[2px]">
                        {
                            details.map((e, i) => {
                                return <Cards details={e} key={i}></Cards>
                            })
                        }
                        <Redcard></Redcard>

                    </div>
                </div>
            </div>
        </div>
    )
}