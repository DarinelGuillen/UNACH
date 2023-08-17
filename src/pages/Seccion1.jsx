import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import { useState } from 'react';

function Seccion1() {
    const [inputValues, setInputValues] = useState({
        password: '',
        email: '',
    });

    const handleInputChange = (id, value) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
        console.log("🚀 ~ file: Home.jsx:20 ~ handleInputChange ~ inputValues:", inputValues);
    };

    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>
                <div className='flex flex-col w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div class="flex flex-col items-center text-center w-full mt-20">
                        <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                            <p className='text-3xl'>Titulo del proyecto</p>
                        </div>
                        <simple-input class="mt-10 mampo" width="880px" placeholder="Enter email" id="emailInput" height="30px"></simple-input>
                        <simple-input class="mt-10 mampo" width="880px" placeholder="Enter email" id="emailInput" height="30px"></simple-input>
                        <simple-input class="mt-10 mampo" width="880px" placeholder="Enter email" id="emailInput" height="30px"></simple-input>
                    </div>

                    <div>
                        Titulo
                    </div>
                    <div>
                        Titulito pero con componente
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion1;
