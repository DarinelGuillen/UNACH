function ClaveDeAcceso() {
    return ( 
        <>
            <div className="grid grid place-items-center grid-cols-3 mt-12">
                <div className="rounded-full lg:ml-16  bg-gray-500 w-32 h-32">
                    
                </div>
                <div className="">
                    <center>
                        <b>Clave de Registro</b> (Uso exclusivo DI)
                        <br/>
                        <simple-input type="text" placeholder="DI" id="text" width="100%" height="2%"></simple-input>
                    </center>
                </div>
                <div>
                    <ol class="flex items-center w-full">
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm  justify-center w-20 h-20 bg-gray-100 rounded-full md:h-16 sm:w-10 sm:h-10 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 dark:bg-gray-500 shrink-0">
                                Enviado 
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm  justify-center w-20 h-20 bg-gray-100 rounded-full md:h-16 sm:w-10 sm:h-10 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 dark:bg-gray-500 shrink-0">
                                Validando
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-500">
                            <span class="flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-16 sm:w-10 sm:h-10 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 dark:bg-gray-500 shrink-0">
                                Rectificando
                            </span>
                        </li>
                        <li class="flex items-center w-full">
                            <span class="flex items-center text-white text-center sm:md:text-xs md:text-sm justify-center w-20 h-20 bg-gray-100 rounded-full md:h-16 sm:w-10 sm:h-10 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 dark:bg-gray-500 shrink-0">
                                Aprobado<br/>o<br/>Rechazado
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
     );
}

export default ClaveDeAcceso;