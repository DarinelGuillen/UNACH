import { getItem, setItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
function ButtonReview({idR}) {
    const navigate = useNavigate();
    const HandlerReview=(id) => {
        console.log("🚀 ~ file: ButtonReview.jsx:6 ~ HandlerReview ~ id:", id)
        navigate('/Review')
    }
    return (<>

        <button onClick={() => HandlerReview(idR)} className='flex w-auto items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
            <span className="text">Calificar</span>
        </button>
    </>);
}

export default ButtonReview;