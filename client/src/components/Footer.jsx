import logo from "../../images/logo.png";
import zeLogo from "../../images/zeLogo.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.5] justify-center items-center">
                <img src={logo} alt="logo" className="w-36" />
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
                <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
                <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
                <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-white text-sm text-center">Come join us</p>
            <p className="text-white text-sm text-center font-medium mt-2 hover:text-[#22a2e1]"><a href="mailto:hello@zaynejaz.com">hello@zaynejaz.com</a></p>
        </div>

        <div className="sm:w-[90%] w-full h-[.5px] bg-gray-300 mt-8 mb-4" />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs">@hyperion</p>
            <p className="text-white text-center text-xs">
                <a href="https://zaynejaz.com" target="_blank" >
                    <img src={zeLogo} alt="zayn ejaz logo" className="w-12 ml-14 hover:scale-125 ease-in-out duration-300" />
                </a>
            </p>
            <p className="text-white text-right text-xs">All rights reserved</p>
        </div>
    </div>
);

export default Footer;