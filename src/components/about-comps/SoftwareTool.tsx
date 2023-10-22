import Image from "next/image";

type Props = {
    toolName: string;
    toolLogo: string;
    // options?: { title: string; additionalPrice: number }[];
  };

const SoftwareTool = ( {toolName, toolLogo}: Props ) => {

    // const containerStyles: React.CSSProperties = {
    //     padding: 4,
    //     // width: '100%',
    //     // backgroundColor: "#e0e0de",
    //     // borderRadius: 50,
    //     // margin: 0,
    //   };

// console.log(toolLogo)


    return (
        // <div style={containerStyles}>
        // <div className="flex flex-row relative m-4 p-4 bg-[#0A0A0A]/80 backdrop-blur">
        //     <div className="">
        //         <Image src="/images/interest/python.svg" width={40} height={40} alt="" />
        //     </div>
        //     <h1 className="flex items-center ml-2">{toolName}</h1>
        // </div>

        <div className="flex flex-row relative p-4   border border-white/20  bg-[#282120]/80 backdrop-blur rounded-xl   transition duration-300 hover:scale-105">
            <div className="relative w-12 aspect-square">
                <Image src={`${process.env.DEV_FILESERVER_URL}${toolLogo.toLowerCase()}`} fill alt="" />
            </div>
            <h1 className="flex items-center ml-4">{toolName}</h1>
        </div>
    )
}

export default SoftwareTool;