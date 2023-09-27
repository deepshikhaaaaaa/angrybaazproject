'use client'
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Footer() {
    const [boxa, setboxa] = useState(false)
    const [boxb, setboxb] = useState(false)
    const [boxc, setboxc] = useState(false)
    var a, b, c;
    // useEffect(()=>{
    //     a=boxa?"font-normal  flex-col sm:flex ":"font-normal  flex-col  hidden";

    // }, boxa)
    a = boxa ? "font-normal  flex-col flex ml-[20px] sm:ml-[0]" : "font-normal  flex-col sm:flex hidden ml-[20px] sm:ml-[0]";
    b = boxb ? "font-normal  flex-col flex ml-[20px] sm:ml-[0]" : "font-normal  flex-col sm:flex hidden ml-[20px] sm:ml-[0]";
    c = boxc ? "font-normal  flex-col flex ml-[20px] sm:ml-[0]" : "font-normal  flex-col sm:flex hidden ml-[20px] sm:ml-[0]";

    var main = (boxa && boxb && boxc) ? "sm:h-[494px] h-[1294px] w-full bg-[#002A54]  z-0" : (((boxa && boxb) || (boxb && boxc) || (boxc && boxa)) ? "h-[994px] w-full bg-[#002A54]  z-0" : (boxa || boxb || boxc) ? "h-[630px] sm:h-[494px] w-full bg-[#002A54]  z-0" : "h-[494px] w-full bg-[#002A54]  z-0");


    var main2 = (boxa && boxb && boxc) ? " footer sm:flex  sm:h-[494px] h-[1294px] w-full relative  z-[30] foottext  justify-center sm:gap-[167px] sm:ml-[-200px]" : ((boxa && boxb) || (boxb && boxc) || (boxc && boxa)) ? "footer sm:flex sm:h-[494px]  h-[994px] w-full relative  z-[30] foottext  justify-center sm:gap-[167px] sm:ml-[-200px] " : (boxa || boxb || boxc) ? " footer sm:flex   h-[630px] w-full relative  z-[30] foottext  justify-center sm:gap-[167px] sm:ml-[-200px] " : " footer sm:flex   h-[494px] w-full relative  z-[30] foottext  justify-center sm:gap-[167px] sm:ml-[-200px] gap-[50px]"
var srca,srcb,srcc;


srca=boxa?"/Arrow 4.png":"/Arrow 5.png";
srcb=boxb?"/Arrow 4.png":"/Arrow 5.png";
srcc=boxc?"/Arrow 4.png":"/Arrow 5.png";

    return (

        <div className={main}>
            <div className={main2}>
                <div className="sm:mt-[70px] relative sm:top-[0px] top-[30px]">
                    <a href="" className="font-bold flex sm:gap-[0] gap-[5px] items-center ml-[20px] sm:ml-[0]" onClick={(e) => {
                        e.preventDefault();
                        setboxa(!boxa)
                    }}>INFORMATION
                    <Image src={srca} width={20} height={5} className="h-[10px] w-[15px]  sm:hidden"></Image></a>
                    <div className={a}>
                        <a href="">About us</a>
                        <a href="">Careers</a>

                        <a href="">Driver safety</a>

                        <a href="">Contact us</a>

                        <a href="">Terms of use</a>
                        <a href="">Privacy Policy</a>
                    </div>

                </div>
                <div className="sm:mt-[70px] mt-[50px]">
                    <a href="" className="font-bold flex gap-[5px] items-center ml-[20px] sm:ml-[0]" onClick={(e) => {
                        e.preventDefault();
                        setboxb(!boxb)
                    }}>CONTAINER TRANSPORT
<Image src={srcb} width={20} height={5} className="h-[10px] w-[15px]  sm:hidden"></Image>
                    </a>
                    <div className={b}>
                        <a href="">Convenience</a>
                        <a href="">Location</a>

                        <a href="">Live Unloads</a>

                        <a href="">Side Loader Drops</a>

                        <a href=""> Imports and Exports</a>
                        <a href=""> 50T Onsite Forklift</a>
                        <a href="">Oversize, Overweight</a>
                        <a href=""> Dangerous Goods</a>
                        <a href="">24/7 Operations</a>
                        <a href="">Company Owned Fleet</a>
                    </div>
                </div>
                <div className="sm:mt-[70px] mt-[30px]">
                    <a href="" className="font-bold flex gap-[5px] items-center ml-[20px] sm:ml-[0]" onClick={(e) => {
                        e.preventDefault();
                        setboxc(!boxc)
                    }}>COMPLETE WAREHOUSING SOLUTIONS <Image src={srcc}  width={20} height={5} className="h-[10px] w-[15px] sm:hidden"></Image></a>
                    
                    <div className={c}>
                        <a href="">Short & Long Term
                        </a>
                        <a href="">Indoor & Outdoor Storage
                        </a>

                        <a href="">Racked, Dry & Floor Stacked
                        </a>

                        <a href="">Distribution</a>

                        <a href="">Import, Unpack, Pack, Ship
                        </a>
                        <a href="">Sub-Leasing</a>
                        <a href="">Secure Facilities</a>
                        <a href="">Barcode Scanning</a>

                    </div>
                </div>
                <div className="sm:hidden flex flex-col justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="325" height="2" viewBox="0 0 385 2" fill="none" className="mt-[50px]">
                        <path d="M1 1L384 0.999967" stroke="#D9D9D9" stroke-opacity="0.62" stroke-linecap="round" />
                    </svg>
                    <p className="footer font-bold flex gap-[5px] items-center">SOCIAL MEDIA</p>
                    <div>
                        <div className="flex gap-[31px] mt-[13px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_1_288)">
                                    <path d="M24 12.0732C24 5.44624 18.627 0.0732422 12 0.0732422C5.373 0.0732422 0 5.44624 0 12.0732C0 18.0632 4.388 23.0272 10.125 23.9272V15.5422H7.078V12.0722H10.125V9.43024C10.125 6.42324 11.917 4.76124 14.658 4.76124C15.97 4.76124 17.344 4.99624 17.344 4.99624V7.94924H15.83C14.339 7.94924 13.874 8.87424 13.874 9.82324V12.0732H17.202L16.67 15.5432H13.874V23.9282C19.612 23.0272 24 18.0622 24 12.0732Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_288">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_1_290)">
                                    <path d="M0.0583991 0.768555L9.32452 13.158L0 23.2312H2.09874L10.2625 14.411L16.8584 23.2312H24L14.2131 10.145L22.8916 0.768555H20.7929L13.2747 8.89086L7.2 0.768555H0.0583991ZM3.14469 2.31432H6.42551L20.9133 21.6867H17.6325L3.14469 2.31432Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_290">
                                        <rect width="24" height="22.4627" fill="white" transform="translate(0 0.768555)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_1_295)">
                                    <path d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_295">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_1_297)">
                                    <path d="M20.447 19.452H16.893V13.883C16.893 12.555 16.866 10.846 15.041 10.846C13.188 10.846 12.905 12.291 12.905 13.785V19.452H9.351V8H12.765V9.561H12.811C13.288 8.661 14.448 7.711 16.181 7.711C19.782 7.711 20.448 10.081 20.448 13.166L20.447 19.452ZM5.337 6.433C4.193 6.433 3.274 5.507 3.274 4.368C3.274 3.23 4.194 2.305 5.337 2.305C6.477 2.305 7.401 3.23 7.401 4.368C7.401 5.507 6.476 6.433 5.337 6.433ZM7.119 19.452H3.555V8H7.119V19.452ZM22.225 -1H1.771C0.792 -1 0 -0.226 0 0.729V21.271C0 22.227 0.792 23 1.771 23H22.222C23.2 23 24 22.227 24 21.271V0.729C24 -0.226 23.2 -1 22.222 -1H22.225Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_297">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="325" height="2" viewBox="0 0 385 2" fill="none" className="mt-[40px]">
                        <path d="M1 1L384 0.999967" stroke="#D9D9D9" stroke-opacity="0.62" stroke-linecap="round" />
                    </svg>
                    <p className="footer mt-[34px]">© 2014 Swift Transport. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}