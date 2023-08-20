function ClaveDeAcceso() {
    return (
        <>
            <div className="xl:grid xl:grid-cols-2 xl:mt-12 lg:grid lg:grid-cols-2 lg:mt-12">

                <div className="flex justify-center xl:justify-center lg:justify-center md:justify-center"  >

                    <div className="rounded-full ml-8 bg-gray-500 w-24 h-24 mt-8 md:w-24 md:h-24 lg:w-[180px] lg:h-[120px] lg:ml-[80px] xl:w-56 xl:h-36 xl:ml-[80px]"></div>

                    <div className="flex flex-col mt-8 md:mt-[55px] lg:mt-[55px] lg:w-full lg:mt-[45px] xl:w-full xl:mt-[45px] ">
                        <p className="text-center ml-[20px] xl:text-start lg:text-start"> <b>Clave de Registro </b>(Uso exclusivo DI)</p>
                        <simple-input class="w-[200px] ml-[20px] sm:w-[250px] md:w-[300px] lg:w-[200px] lg:ml-[10px] xl:w-[300px]" height="20%" type="text" placeholder="DI" id="text"></simple-input>
                    </div>
                </div>

                <div className="flex w-full mt-5 justify-center">
                    <ol class="flex items-center">
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-24 md:w-24 sm:w-20 sm:h-20 lg:h-20 lg:w-20 xl::h-24 xl::w-24 dark:bg-gray-500 shrink-0">
                                <p className="text-sm xl:text-base">Enviando</p>
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-24 md:w-24 sm:w-20 sm:h-20 lg:h-20 lg:w-20 xl::h-24 xl::w-24 dark:bg-gray-500 shrink-0">
                                <p className="text-sm xl:text-base">Validando</p>
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-24 md:w-24 sm:w-20 sm:h-20 lg:h-20 lg:w-20 xl::h-24 xl::w-24 dark:bg-gray-500 shrink-0">
                                <p className="text-sm xl:text-base">Rectificando</p>
                            </span>
                        </li>
                        <li class="flex items-center w-full">
                            <span class="flex items-center text-white text-center sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-24 md:w-24 sm:w-20 sm:h-20 lg:h-20 lg:w-20 xl::h-24 xl::w-24 dark:bg-gray-500 shrink-0">
                                <p className="text-sm xl:text-base">Aprobado <br />o <br /> Rechazado</p>
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default ClaveDeAcceso;