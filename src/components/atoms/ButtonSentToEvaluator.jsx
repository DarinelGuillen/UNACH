import React, { useState, useEffect } from 'react';
import { setItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

function ButtonSentToEvaluator({ id, Evaluator }) {
    const users = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
        },
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
        },
        {
            id: '3',
            name: 'Alex Johnson',
            email: 'alex.johnson@example.com',
        },
        {
            id: '4',
            name: 'Alice Williams',
            email: 'alice.williams@example.com',
        },
        {
            id: '5',
            name: 'Bob Miller',
            email: 'bob.miller@example.com',
        },
        {
            id: '6',
            name: 'Carlos',
            email: 'Carlos.davis@example.com',
        },
        {
            id: '7',
            name: 'Darinel',
            email: 'Darinel.white@example.com',
        },
        {
            id: '8',
            name: 'Ali',
            email: 'Ali.brown@example.com',
        },
    ];

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [showUserList, setShowUserList] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const [evaluators, setEvaluators] = useState([]);

    useEffect(() => {
        console.log("🚀 ~ file: ButtonSentToEvaluator.jsx:60 ~ fetchEvaluators ~ id:", id)
        const fetchEvaluators = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/ProjectAssignments/get/${id}`);
                const data = await response.json();

                if (response.ok) {
                    // BCM: Obtener los IDs de los profesores
                    const professorIds = data.data.evaluators.map(evaluator => evaluator.professor_id);
                    console.log("🚀 ~ file: ButtonSentToEvaluator.jsx:65 ~ fetchEvaluators ~ professorIds:", professorIds)

                    // BCM: Actualizar el estado con los IDs de los profesores
                    setEvaluators(professorIds);
                } else {
                    console.error(`Error en la solicitud: ${data.message}`);
                }
            } catch (error) {
                console.error(`Error en la solicitud: ${error.message}`);
            }
        };

        // BCM: Llamar a la función de fetch solo cuando showUserList cambie
        if (showUserList) {
            fetchEvaluators();
        }
    }, [showUserList]); // BCM: Asegurarse de que la solicitud se realice solo cuando showUserList cambie



    const handleButtonClick = () => {
        setShowUserList(!showUserList);
        setSearchTerm("");
    };

    const handleCheckboxChange = (email) => {
        // Toggle selection of the user
        const updatedSelection = selectedUsers.includes(email)
            ? selectedUsers.filter((userEmail) => userEmail !== email)
            : [email, ...selectedUsers];

        setSelectedUsers(updatedSelection);
    };

    const handleSendClick = (id) => {
        // Iterar sobre los correos electrónicos seleccionados
        selectedUsers.forEach((selectedUserEmail) => {
            // Encontrar el usuario correspondiente al correo electrónico
            const selectedUser = users.find((user) => user.email === selectedUserEmail);
    
            // Verificar si se encontró el usuario
            if (selectedUser) {
                // Actualizar el cuerpo de la solicitud con el id del profesor actual
                const requestBody = {
                    project_id: id,
                    professor_id: selectedUser.id,
                };
    
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                };
    
                const url = 'http://127.0.0.1:8000/api/ProjectAssignments';
    
                fetch(url, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        // alert(`Solicitud exitosa: ${JSON.stringify(data)}`);
                        // console.log("🚀 ~ handleSendClick ~ data:", data);
                    })
                    .catch(error => {
                        // alert(`Error en la solicitud: ${error.message}`);
                        // console.error("🚀 ~ handleSendClick ~ error:", error);
                    });
            }
        });
    
        // Limpiar la lista de usuarios seleccionados y ocultar la lista de usuarios
        setSelectedUsers([]);
        setShowUserList(false);
        alert("Asignacion Completada")
    };
    

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

   
    const sortedUsers = [
        ...selectedUsers.map(
            (selectedUser) =>
                users.find((user) => user.email === selectedUser) || {}
        ),
        ...filteredUsers.filter(
            (filteredUser) =>
                !selectedUsers.includes(filteredUser.email) &&
                (Evaluator.includes(filteredUser.name) ||
                    selectedUsers.includes(filteredUser.email))
        ),
        ...filteredUsers.filter(
            (filteredUser) =>
                !selectedUsers.includes(filteredUser.email) &&
                !Evaluator.includes(filteredUser.name) &&
                !selectedUsers.includes(filteredUser.email)
        ),
    ];


    return (
        <>
            <button
                className="flex w-auto items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400"
                onClick={handleButtonClick}
            >
                <span className="text">Enviar A</span>
            </button>

            {showUserList && (
                <div className="flex flex-col items-start bg-gray-300 rounded-xl border-4 border-double border-black p-5  mb-10 absolute z-4">
                    {/* Resto de tu código */}
                    {sortedUsers.map((user) => (
                        <div key={user.id} className="flex items-center space-x-2">
                            <input
                                className='cursor-pointer px-4 py-2 my-2 transition hover:-translate-y-1 ease-in-out delay-120 hover:scale-110 duration-500'
                                type="checkbox"
                                id={user.id}
                                onChange={() => handleCheckboxChange(user.email)}
                                checked={
                                    selectedUsers.includes(user.email) ||
                                    Evaluator.includes(user.name) ||
                                    evaluators.includes(user.id)  
                                }
                            />

                            <label className='antialiased ' htmlFor={user.id}>{user.name + ' ' + user.email}</label>
                        </div>
                    ))}
                    <div className='flex justify-around items-center w-full '>
                        <button
                            className="bg-red-500 drop-shadow-lg hover:bg-gray-700 text-white rounded-full px-4 py-2 my-2 transition hover:-translate-y-1 ease-in-out delay-120 hover:scale-110 duration-500"
                            onClick={() => { setShowUserList(false) }}
                        >
                            Cancelar
                        </button>
                        <button
                            className="bg-blue-500 drop-shadow-lg hover:bg-gray-700 text-white rounded-full px-4 py-2 my-2 transition hover:-translate-y-1 ease-in-out delay-120 hover:scale-110 duration-500"
                            onClick={()=> handleSendClick(id)}
                        >
                            Enviar
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}

export default ButtonSentToEvaluator;
