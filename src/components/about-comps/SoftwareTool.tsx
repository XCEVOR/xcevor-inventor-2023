import Image from "next/image";

interface SoftwareToolProps {
    toolName: string;
  }

const SoftwareTool: React.FC<SoftwareToolProps> = ({ toolName }) => {

    // const containerStyles: React.CSSProperties = {
    //     padding: 4,
    //     // width: '100%',
    //     // backgroundColor: "#e0e0de",
    //     // borderRadius: 50,
    //     // margin: 0,
    //   };


    return (
        // <div style={containerStyles}>
        <div className="flex flex-row relative m-4 p-4 bg-[#000000]/80 backdrop-blur">
            <div className="">
                <Image src="/img/interest/python.svg" width={40} height={40} alt="" />
            </div>
            <h1 className="flex items-center ml-2">{toolName}</h1>
        </div>
    )
}

export default SoftwareTool;