import "../assets/css/seccionVertical.css";

function VerticalText() {
    return ( 
        <>
            <div className="seccionVertical text-center">
                <p className="font-medium text-base sm:text-xl md:text-xl lg:text-xl text-center m-2 pl-3">Datos del proyecto</p>
                <p className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl m-2">Sección 1</p>
            </div>
            <div className="seccionVertical text-center pt-20">
                <p className="font-medium text-base sm:text-xl md:text-xl lg:text-xl text-center m-2 pl-3">Protocolo del proyecto</p>
                <p className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl m-2">Sección 2</p>
            </div>
        </>
     );
}

export default VerticalText;