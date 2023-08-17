import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';

function Seccion1() {
    return ( 
        <>
        <Header/>
        <div className="flex">
                <div className="flex w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>
                <div className='flex flex-col w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso/>
                    </div>
                    <div>
Titulo 
                    </div>
                    <div>
Titulito pero con componente
                    </div>
                </div>
            </div>
        <Footer/>
        </>
     );
}

export default Seccion1;