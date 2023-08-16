import '../assets/css/MyInput.css';
import '../assets/css/PlayGround.css';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';

function Seccion1() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="flex w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>

                <div className='flex w-5/6 bg-white rounded-l-3xl'>
                    
                    
                </div>
            </div>

        </>
    );
}

export default Seccion1;