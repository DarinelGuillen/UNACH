import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';

function Seccion1() {
    return ( 
        <>
        <Header/>
        <ClaveDeAcceso/>
        <div className="flex">
                <div className="flex w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>

                <div className='flex w-5/6 bg-white rounded-l-3xl'>

                </div>
            </div>
        <Footer/>
        </>
     );
}

export default Seccion1;