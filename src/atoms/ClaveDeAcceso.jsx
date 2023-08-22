import Iconos from './Iconos';

function ClaveDeAcceso() {
    return (
        <>
            <div className="xl:grid xl:grid-cols-2 xl:mt-12 lg:grid lg:grid-cols-2 lg:mt-12">

                <div className="flex justify-center xl:justify-center lg:justify-center md:justify-center"  >

                    <div className="rounded-full ml-8 bg-gray-500 w-24 h-24 mt-8 md:w-24 md:h-24 lg:w-[180px] lg:h-[120px] lg:ml-[80px] xl:w-56 xl:h-36 xl:ml-[80px]"></div>

                    <div className="flex flex-col mt-8 md:mt-[35px] lg:mt-[55px] lg:w-full lg:mt-[45px] xl:w-full xl:mt-[45px] ">
                        <p className="text-center ml-[20px] xl:text-start lg:text-start"> <b>Clave de Registro </b>(Uso exclusivo DI)</p>
                        <simple-input class="w-[200px] ml-[20px] sm:w-[250px] md:w-[300px] lg:w-[200px] lg:ml-[10px] xl:w-[300px]" height="20%" type="text" placeholder="DI" id="text"></simple-input>
                    </div>
                </div>
        <Iconos/>
            </div>
        </>
    );
}

export default ClaveDeAcceso;