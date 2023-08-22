import { useContext, useEffect } from "react";
import SharedDataContext from "../contexts/SharedDataContext";
import { dataDictionary } from "../webComponents/input";
import { dataDictionaryTextArea } from "../webComponents/textArea";
import logoSave from "../assets/img/Icon/Save.svg"
function ButtonSaveInfo() {
  const { isShareData, setIsShareData } = useContext(SharedDataContext);

    const HandlerClickSetData =((e)=>{
        e.preventDefault();
        setIsShareData(dataDictionary);
        console.log("🚀 ~ file: button.jsx:13 ~ HandlerClickSetData ~ isShareData:", isShareData)
         
    })

    useEffect(() => {
        console.log("🚀 ~ useEffect ~ dataDictionary:", dataDictionary);
    }, [dataDictionary]);
    return ( 
        <>
        <button onClick={HandlerClickSetData} ><img src={logoSave} className='h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]'></img></button>

        {/* <button onClick={HandlerClickSetData}>Set information into ShareDataContext</button> */}
        </>
     );
}

export default ButtonSaveInfo;