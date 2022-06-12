import React, { useState, useEffect } from "react";
import chat from "../../assets/chat.svg";
import mubeey from "../../assets/mub.svg";
import voice from "../../assets/call.svg";
import video from "../../assets/video.svg";
import sendIcon from "../../assets/send.svg"


export const Chat = () => {
    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        };
    }, []);


    const [dateTime, setDateTime] = useState(new Date());
    

    const [dialog, setDialog] = useState(false);
    return (
        <div >
            {dialog ? (
                <div className="relative ">

              
                <div
                    className=" bg-[#E6F1FF] w-1/3
        rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[60px] fixed right-10  bottom-24 z-10 px-4"
                >
                    <div className="mt-4 flex space-x-4">
                        <div className="relative">
                            <img className="w-12 h-12 rounded-full" src={mubeey} alt="" />
                            <span className="bottom-0 right-0 absolute  w-3 h-3 bg-[#64FFDA] border-2 border-white rounded-full"></span>
                        </div>
                        <div className="">
                            <div className="text-black text-sm">Mubarak Ibrahim</div>
                            <div className="text-xs text-gray">The Codeswot</div>
                        </div>
                    </div>
                    <div className="flex align-center space-x-4 justify-end">
                        <img src={voice} width="15px" className="cursor-pointer" />
                        <img src={video} className="cursor-pointer" width="15px" />
                    </div>
                    <div className="h-[1px] bg-[#353353] mt-2 ml-8 "></div>
                    <div className="flex mt-5 justify-center items-center space-x-4 ">
                        <div className="h-[1px] bg-gray w-20"></div>
                        <div className="text-xs"> {dateTime.toLocaleDateString()} </div>
                        <div className="h-[1px] bg-gray w-20"></div>
                    </div>

                    <div className="mt-3 relative">
                        <div className="overflow-y-auto h-96">
                            <div className="flex justify-end space-x-2 items-start">
                                <div className="py-6 px-4 bg-[#353353] rounded-l-full  text-white rounded-br-full  text-xs my-2">
                                    Hello 👋, How may i be of help ?
                                </div>
                                <img className="w-12 h-12 rounded-full" src={mubeey} alt="" />
                            </div>
                            <div className="flex justify-start space-x-2 items-start my-2">
                                <div className="py-6 px-4 bg-[#E5E5E5] rounded-r-full   rounded-bl-full  text-xs">
                                    Hi Codeswot, i will need your service to build the next big
                                    thing it is quite a job and i thought who to do it better than
                                    the codeswot himself ? are you available ?
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 items-start my-2">
                                <div className="py-6 px-4 bg-[#353353] rounded-l-full  text-white rounded-br-full  text-xs">
                                    Definately Chieff!! care for a call ?
                                </div>
                                <img className="w-12 h-12 rounded-full" src={mubeey} alt="" />
                            </div>

                        </div>

                        <div className="absolute  w-full bottom-5">
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-4  "
                                placeholder="type message"
                            />
                            <div className=" cursor-pointer z-20 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <img src={sendIcon} width="25px" />

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ) : null}
            <div
                className="fixed right-2 bottom-8 cursor-pointer"
                onClick={() => setDialog(!dialog)}
            >
                <div className="bg-[#E6F1FF] p-2 shadow-lg rounded-full">
                    <div className="rounded-full bg-white p-2">
                        <img className=" ring-white" src={chat} alt="" width="30" />
                    </div>
                </div>
            </div>
        </div>
    )
}