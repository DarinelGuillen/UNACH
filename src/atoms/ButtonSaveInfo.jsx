import React, { useContext, useEffect } from "react";
import SharedDataContext from "../contexts/SharedDataContext";
import { dataDictionary } from "../webComponents/input";
import { dataDictionaryTextArea } from "../webComponents/textArea";
import logoSave from "../assets/img/Icon/Save.svg";

function ButtonSaveInfo() {
    const { isShareData, setIsShareData } = useContext(SharedDataContext);

    const handleSave = async () => {
        const mergedData = { ...dataDictionary, ...dataDictionaryTextArea };

        try {
            setIsShareData(mergedData);

            const response = await fetch('url_del_servidor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mergedData)
            });

            if (response.ok) {
                console.log('Datos guardados exitosamente');
            } else {
                console.error('Error al guardar los datos');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }

    useEffect(() => {
        console.log("🚀 ~ useEffect ~ dataDictionary:", dataDictionary);
    }, [dataDictionary]);

    useEffect(() => {
        console.log("🚀 ~ useEffect ~ isShareData:", isShareData);
    }, [isShareData]);

    return (
        <button onClick={handleSave}>
            <img
                src={logoSave}
                className='h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]'
                alt="Guardar"
            />
        </button>
    );
}

export default ButtonSaveInfo;
