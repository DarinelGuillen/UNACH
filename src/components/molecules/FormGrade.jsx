import React, { useState, useEffect } from 'react';
import { getItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

function FormGrade() {
  const navigate = useNavigate();

  const project_assignment_id = getItem('project_assignment_id');
  const [grade, setGrade] = useState(0);
  const [comments, setComments] = useState(''); 
  const [criteriaState, setCriteriaState] = useState({
    format_criteria: '',
    plagiarism: '',
    language_evaluation: '',
    citation_evaluation: '',
    concise_project_summary: '',
    clear_objectives: '',
    academic_language: '',
    precise_conclusion: '',
    unforeseen_situations: '',
    evident_contribution: '',
    academic_production: '',
    collaborative_work: '',
    well_written_report: '',
  });

 

  const Questions = [
    "Usa el formato FO-211-04-02 para el reporte del informe final",
    "Contiene plagio parcial o total",
    "Ortografía, redacción, sintaxis y claridad en la expresión de ideas",
    "Citación correcta de acuerdo al estilo APA",
    "El resumen contiene de forma sintética los objetivos trazados, la problemática abordada, la metodología, los resultados y conclusiones",
    "Define claramente los objetivos alcanzados, demostrando su logro",
    "Presenta, usando lenguaje académico-científico, los resultados de investigación articulándolos a los objetivos planteados",
    "La conclusión es precisa y responde a la pregunta de investigación y a los objetivos planteados",
    "Declara las situaciones no previstas y la forma en que se resolvieron",
    "El aporte al campo de estudio es evidente y está descrito correctamente",
    "La producción académica es la comprometida",
    "Se observa trabajo colegiado para el desarrollo del proyecto, demostrado en la producción académica",
    "En general, el informe está bien elaborado y reporta la investigación de forma suficiente"
  ];

  useEffect(() => {
    const adecuadoCount = Object.values(criteriaState).filter(value => value === 'Adecuado').length;
    const inadecuadoCount = Object.values(criteriaState).filter(value => value === 'Inadecuado').length;
    const calculatedGrade = 10 * adecuadoCount;

    setGrade(calculatedGrade);
  }, [criteriaState]);

  const handleCheckboxChange = (id, value) => {
    setCriteriaState(prevState => ({
      ...prevState,
      [id]: prevState[id] === value ? '' : value,
    }));
  };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (projectId) => {
    console.log("🚀 ~ file: FormGrade.jsx:65 ~ handleSubmit ~ projectId:", projectId)
    console.log('Form Data:', criteriaState,
    grade,
    comments,);

    // Realizar la solicitud PUT aquí
    fetch(`http://127.0.0.1:8000/api/grades/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...criteriaState,
        grade,
        comments,
      }),
    })
      .then((response) => response.json())
      .then((data) => {console.log('Update Successful:', data)
      navigate('/Evaluator');
  }
      )
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="flex-col w-full items-center justify-center px-9">
      <table className="border-separate border-spacing-2 border border-slate-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300 ">
        <tbody>
          {Questions.map((question, index) => (
            <tr key={index}>
              <th className="p-4 border rounded-lg border-gray-400">{question}</th>
              <td className="p-4 border rounded-lg border-gray-400">
                <input
                  type="checkbox"
                  id={`${Object.keys(criteriaState)[index]}_adecuado`}
                  name={`${Object.keys(criteriaState)[index]}`}
                  className="mr-2"
                  value={'Adecuado'}
                  checked={criteriaState[Object.keys(criteriaState)[index]] === 'Adecuado'}
                  onChange={() => handleCheckboxChange(Object.keys(criteriaState)[index], 'Adecuado')}
                />
                <label htmlFor={`${Object.keys(criteriaState)[index]}_adecuado`}>Adecuado</label>
              </td>
              <td className="p-4 border rounded-lg border-gray-400">
                <input
                  type="checkbox"
                  id={`${Object.keys(criteriaState)[index]}_inadecuado`}
                  name={`${Object.keys(criteriaState)[index]}`}
                  className="mr-2"
                  value={'Inadecuado'}
                  checked={criteriaState[Object.keys(criteriaState)[index]] === 'Inadecuado'}
                  onChange={() => handleCheckboxChange(Object.keys(criteriaState)[index], 'Inadecuado')}
                />
                <label htmlFor={`${Object.keys(criteriaState)[index]}_inadecuado`}>Inadecuado</label>
              </td>
            </tr>
          ))}
          <tr>
            <th className="p-4 border rounded-lg border-gray-400">Grade</th>
            <th className='p-4 border rounded-lg border-gray-400' colSpan="2">{grade}</th>
          </tr>

          <tr>
            <th className="p-4 border rounded-lg border-gray-400">JUSTIFICACIÓN DEL DICTAMEN<br />
              Argumente su dictamen detalladamente
            </th>
            <th className='p-4 border rounded-lg border-gray-400' colSpan="2">
              <textarea
                value={comments}
                onChange={handleCommentChange}
                className="w-full border rounded-lg border-gray-400 p-2"
              />

            </th>
          </tr>

        </tbody>
      </table>

      <div className="flex my-6 w-full items-center justify-center">
        <button
          type="button"
          className="bg-blue-500 drop-shadow-lg shadow-current hover:bg-blue-900 text-white rounded-full px-4 py-2 my-2 transition hover:-translate-y-1 ease-in-out delay-120 hover:scale-110 duration-500"
          onClick={() => handleSubmit(project_assignment_id)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormGrade;
