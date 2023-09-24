import Image from "next/image";
import Cards from "../cards/page";
import Redcard from "../cards/redpage";

export default function Second() {
    const a = 'Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) in all major capital cities across Australia. All sites are connected to the Port by High Productivity…';
    const details = [
        ['Transport - Container, Tautliner, Bulk', '/truck 1.png', a, {width:223 , height:152},4],
        ['Intermodal Rail Terminals', '/train_x2C__logistics_x2C__cargo_x2C__wagon_x2C__transportation.png', a , {width:171 , height:138} , 54],
        ['Empty Container Depots', '/Group.png', a , {width:164 , height:164},8],
        ['Warehousing - 3PL, FAK and eCommerce', '/warehouse 2.png', a , {width:119 , height:119},28]
    ]



    return (
        <div>
            <div className="h-[511px] bg-[#ED1B24] w-full mt-[300px] ">
                <div className="secondtext relative z-30 top-[40px] ml-[40px] p-[20px]">
                    <div className="fleettext">
                        A fleet capable of much more
                        than you'd think
                    </div>
                    <div className="fleetnext mt-[30px]">With a diverse range of utes, trucks and semi-trailers, Swift Transport is capable of much more than you'd think. Combine our versatile fleet wth our industry leading technology and 'can-do' attitude for a winning logistics partnership with your organization.
                    </div>
                    <div className="fleetnextnext float-right mr-[20px]">
                        Why Swift
                    </div>
                </div>
                <Image src='/Rectangle 9.png' height={701} width={1352} className="relative mt-[-620px] float-right "></Image>
            </div>
            <div>
                <div className="w-full h-[1574px] thir mt-[40px]">
                    <div className="ml-[40px] relative top-[40px]">
                        <p className="fleettext ">Services</p>
                        <p className="smarttext mt-[20px]">A <span className=" text-[#ED1B24]">smarter</span> container transport business
                        </p>
                        <p className="ondemand mt-[8px]">AN ON-DEMAND CONTAINER TRANSPORT SOLUTION THAT WORKS, UTILISING THE LATEST IN GPS, GEO-MAPPING SOFTWARE AND TECHNOLOGY.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-[x] ml-[50px]">
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