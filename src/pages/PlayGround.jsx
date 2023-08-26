import { useContext, useEffect, useState } from "react";
import SharedDataContext from "../contexts/SharedDataContext";
import { dataDictionary } from "../webComponents/input";
import ButtonSaveInfo from "../atoms/ButtonSaveInfo";
import Pdf from "../components/ProjectPdf/Pdf";

function PlayGround() {

  const { isShareData, setIsShareData } = useContext(SharedDataContext);
  const [dataPdf, setDataPdf] = useState({nombre: "alfredo"})

  console.log({ isShareData });
  return (
    <>
    <Pdf data={dataPdf}/>
    </>
  );
}

export default PlayGround;

