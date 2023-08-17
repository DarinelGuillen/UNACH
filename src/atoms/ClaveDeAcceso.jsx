function ClaveDeAcceso() {
    return ( 
        <>
            <div className="grid grid-cols-3 place-items-center gap-4">
                <div className="rounded-full bg-gray-500 w-20 h-20">
                    
                </div>
                <div>
                    <b>Clave de Registro</b> (Uso exclusivo DI)
                    <br/>
                    <simple-input type="text" placeholder="DI" id="text" width="100%" height="100%"></simple-input>
                </div>
                <div>
                    <ol class="flex items-center w-full">
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span class="flex items-center text-white justify-center w-20 h-20 bg-gray-100 rounded-full lg:h-20 lg:w-20 dark:bg-gray-700 shrink-0">
                                Enviado 
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span class="flex items-center text-white justify-center w-20 h-20 bg-gray-100 rounded-full lg:h-20 lg:w-20 dark:bg-gray-700 shrink-0">
                                Validando
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span class="flex items-center text-white justify-center w-20 h-20 bg-gray-100 rounded-full lg:h-20 lg:w-20 dark:bg-gray-700 shrink-0">
                                Rectificando
                            </span>
                        </li>
                        <li class="flex items-center w-full">
                            <span class="flex items-center text-white text-center justify-center w-20 h-20 bg-gray-100 rounded-full lg:h-20 lg:w-20 dark:bg-gray-700 shrink-0">
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