function ClaveDeAcceso() {
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 lg:mt-12">

                <div className="flex lg:justify-center">

                    <div className="rounded-full ml-10 bg-gray-500 w-20 h-20 mt-8 lg:h-36 lg:w-56 lg:ml-[80px]"></div>

                    <div className="flex flex-col mt-8 lg:mt-[55px] lg:w-full lg:mt-[45px]">
                        <p className="text-center lg:text-start ml-[20px]"> <b>Clave de Registro </b>(Uso exclusivo DI)</p>
                        <simple-input class="w-[250px] ml-[20px] lg:w-[300px]" height="20%" type="text" placeholder="DI" id="text"></simple-input>
                    </div>
                </div>

                <div className="flex w-full mt-5 justify-center">
                    <ol class="flex items-center">
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-16 sm:w-10 sm:h-10 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 dark:bg-gray-500 shrink-0">
                                <p className="text-sm lg:text-base">Enviando</p>
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-16 sm:w-10 sm:h-10 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 dark:bg-gray-500 shrink-0">
                                <p className="text-sm lg:text-base">Validando</p>
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-16 sm:w-10 sm:h-10 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 dark:bg-gray-500 shrink-0">
                                <p className="text-sm lg:text-base">Rectificando</p>
                            </span>
                        </li>
                        <li class="flex items-center w-full">
                            <span class="flex items-center text-white text-center sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-16 sm:w-10 sm:h-10 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 dark:bg-gray-500 shrink-0">
                                <p className="text-sm lg:text-base">Aprobado <br />o <br /> Rechazado</p>
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default ClaveDeAcceso;