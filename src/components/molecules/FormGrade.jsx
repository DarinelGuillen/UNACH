import React, { useState } from 'react';

function FormGrade() {
  const [criteriaState, setCriteriaState] = useState({
    formatCriteria: '',
    plagiarism: '',
    languageEvaluation: '',
    citationEvaluation: '',
    conciseProjectSummary: '',
    clearObjectives: '',
    academicLanguage: '',
    preciseConclusion: '',
    unforeseenSituations: '',
    evidentContribution: '',
    academicProduction: '',
    collaborativeWork: '',
    wellWrittenReport: '',
    grade: '',
    comments: '',
  });

  const handleCheckboxChange = (question, value) => {
    setCriteriaState((prevState) => ({
      ...prevState,
      [question]: prevState[question] === value ? '' : value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', criteriaState);

    // Realizar la solicitud PUT aquí
    fetch('http://127.0.0.1:8000/api/grades/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(criteriaState),
    })
      .then((response) => response.json())
      .then((data) => console.log('Update Successful:', data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="flex-col w-full items-center justify-center">
      <table className="border-separate border-spacing-2 border border-slate-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300 px-8">
        <tbody>
          <tr>
            <th className="p-4 border rounded-lg border-gray-400">Usa el formato FO-211-04-02 para el reportar del informe final</th>
            <td className="p-4 border rounded-lg border-gray-400">
              <input
                type="checkbox"
                id="format_criteria_adecuado"
                name="format_criteria"
                className="mr-2"
                value={'Adecuado'}
                checked={criteriaState.formatCriteria === 'Adecuado'}
                onChange={() => handleCheckboxChange('formatCriteria', 'Adecuado')}
              />
              <label htmlFor="format_criteria_adecuado">Adecuado</label>
            </td>
            <td className="p-4 border rounded-lg border-gray-400">
              <input
                type="checkbox"
                id="format_criteria_inadecuado"
                name="format_criteria"
                className="mr-2"
                value={'Inadecuado'}
                checked={criteriaState.formatCriteria === 'Inadecuado'}
                onChange={() => handleCheckboxChange('formatCriteria', 'Inadecuado')}
              />
              <label htmlFor="format_criteria_inadecuado">Inadecuado</label>
            </td>
          </tr>

          <tr>
            <th className="p-4 border rounded-lg border-gray-400">Contiene plagio parcial o total</th>
            <td className="p-4 border rounded-lg border-gray-400">
              <input
                type="checkbox"
                id="plagiarism_adecuado"
                name="plagiarism"
                className="mr-2"
                value={'Adecuado'}
                checked={criteriaState.plagiarism === 'Adecuado'}
                onChange={() => handleCheckboxChange('plagiarism', 'Adecuado')}
              />
              <label htmlFor="plagiarism_adecuado">Adecuado</label>
            </td>
            <td className="p-4 border rounded-lg border-gray-400">
              <input
                type="checkbox"
                id="plagiarism_inadecuado"
                name="plagiarism"
                className="mr-2"
                value={'Inadecuado'}
                checked={criteriaState.plagiarism === 'Inadecuado'}
                onChange={() => handleCheckboxChange('plagiarism', 'Inadecuado')}
              />
              <label htmlFor="plagiarism_inadecuado">Inadecuado</label>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex my-6 w-full items-center justify-center">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormGrade;
