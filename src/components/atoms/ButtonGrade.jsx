import { setItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
function ButtonReview({GradeIdProject , project_assignment_id}) {
    
    const navigate = useNavigate();
    
    const HandlerGrade = async (GradeIdProject, project_assignment_id) => {
        console.log("🚀 ~ file: ButtonGrade.jsx:7 ~ HandlerGrade ~ GradeIdProject , project_assignment_id:", GradeIdProject, project_assignment_id);
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/grades', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    project_assignment_id: project_assignment_id,
                    project_id: GradeIdProject,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log("🚀 ~ file: ButtonGrade.jsx:24 ~ HandlerGrade ~ data:", data.data.data_project)
                setItem('currentProyect', data.data.data_project);
                setItem('currentProyectID', GradeIdProject);
                navigate('/Grade');
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    return (<>

        <button onClick={() => HandlerGrade(GradeIdProject , project_assignment_id)} className='flex w-auto items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
            <span className="text">Calificar</span>
        </button>
    </>);
}

export default ButtonReview;