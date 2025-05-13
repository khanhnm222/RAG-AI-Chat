import Image from "next/image";
import avatar from '../../public/Graident Ai Robot.jpg';
import logo from '../../public/white-logo.png';

const NavigationBar = () => {
  return (
    <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10 bg-gradient-2">
      <div className="columns-2 gap-0 self-stretch [column-fill:balance] [column-rule:1.5px_solid_#ffff]">
        <Image src={logo} width={undefined} height={50} alt="logo" className="mx-[40px]"/>
        <div className="logo text-white transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
          RAG AI CHAT
        </div>
      </div>
      <div className="grow h-full flex items-center justify-center"></div>
      <div className="flex-none h-full text-center flex items-center justify-center">
        <div className="flex space-x-3 items-center px-3">
          <div className="flex-none flex justify-center">
            <div className="w-8 h-8 flex ">
              <Image src={avatar} width={90} height={90} alt="avatar" className="shadow rounded-full object-cover" />
            </div>
          </div>

          <div className="hidden md:block text-sm md:text-md text-black dark:text-white">
            Khanh Nguyen
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;