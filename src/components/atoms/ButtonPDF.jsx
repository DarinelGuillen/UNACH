import { getItem, setItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

function ButtonPDF({idP}) {
    const navigate = useNavigate();
    const handlerPDF = async (idP) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/projects/PDF/${idP}`);

            if (response.ok) {
                const data = await response.json();
                setItem('currentProyect', data.ALL)
                setItem('currentProyectID', idP)
                PDF();
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error handling PDF:', error);
        }
    };

    const PDF = () => {

        if (getItem('currentProyect') && getItem('currentProyectID')) {
            navigate('/PreviewPDF');
        }
    }

    return (

        <>
            <button onClick={() => handlerPDF(idP)} className='flex items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
                <span className="text">PDF</span>
            </button>
        </>
    );
}

export default ButtonPDF;