import { setItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
function ButtonReview({idR}) {
    
    const navigate = useNavigate();
    const HandlerGrade= async  (id) => {
        console.log("🚀 ~ file: ButtonReview.jsx:7 ~ HandlerGrade ~ id:", id)
        try {

            const response = await fetch(`http://127.0.0.1:8000/api/projects/PDF/${id}`);

            if (response.ok) {
                const data = await response.json();
                setItem('currentProyect', data.ALL)
                setItem('currentProyectID', id)
                navigate('/Review');
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (<>

        <button onClick={() => HandlerGrade(idR)} className='flex w-auto items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
            <span className="text">Calificar</span>
        </button>
    </>);
}

export default ButtonReview;