import React, { useContext, useEffect } from 'react';
import componenteUnachLogo from '../../assets/img/Icon/componenteUnachLogo.svg';
import more from '../../assets/img/Icon/more.svg';
import {  useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import SharedDataContext from '../../contexts/SharedDataContext';

const Header2 = () => {
    const { isUser, setIsUser } = useContext(UserContext);
    const { isShareData, setIsShareData } = useContext(SharedDataContext);
    const navigate = useNavigate();

    const handlerNewProject = async () => {
        try {
            // TODO: Fetch POST to the route '/newProject'
            const responseNewProject = await fetch('http://127.0.0.1:8000/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "unach_id": "A",
                    "status": 0,
                    "title_project": "TEST",
                    "start_date": "2023-01-01",
                    "end_date": "2023-12-31",
                    "student_name": "Escobar Guillenn Christian Darinel",
                    "link_drive": ""
                })
            });

            if (responseNewProject.ok) {
                // TODO: Get data from the response and add it to the context isShareData
                const newData = await responseNewProject.json();
                console.log("🚀 ~ file: header2.jsx:34 ~ handlerNewProject ~ responseNewProject:", responseNewProject);
                console.log("🚀 ~ file: header2.jsx:34 ~ handlerNewProject ~ newData.data:", newData.data.id);

                // TODO: Nested fetch POST to the route 'localhost:8080/api/Project'
                const responseNestedProject = await fetch('http://127.0.0.1:8000/api/DataProject', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "id_projects": newData.data.id,
                        "unach_id": "UNACH123",
                        "proposal_elaboration_date": "2023-11-09",
                        "location_execution": "TESTFETCH",
                        "project_execution_period_start": "2023-11-10",
                        "project_execution_period_end": "2024-05-09",
                        "weekly_hours": 10
                    })
                });

                if (responseNestedProject.ok) {
                    // TODO: Get data from the response and add it to the context isShareData
                    const nestedData = await responseNestedProject.json();
                    console.log("🚀 ~ file: header2.jsx:56 ~ handlerNewProject ~ responseNestedProject:", responseNestedProject);
                    console.log("🚀 ~ file: header2.jsx:56 ~ handlerNewProject ~ nestedData:", nestedData.data);

                    //* Merge the new data with the existing state
                    // setIsShareData(prevData => [...prevData, { ...newData.data, ...nestedData.data }]);
                    setIsShareData({ ...newData.data, ...nestedData.data });

                    // TODO: Navigate to '/PAGEx'
                    navigate('/Sections');
                    // You can use React Router's history or any other navigation mechanism
                } else {
                    console.error('Error in nested fetch POST to http://127.0.0.1:8000/api/DataProject');
                }
            } else {
                console.error('Error in fetch POST to http://127.0.0.1:8000/api/projects:', responseNewProject.status);
            }
        } catch (error) {
            console.error('Error in handlerNewProject:', error);
        }
    };
    useEffect(() => {
       
        console.log("🚀 ~ file: header2.jsx:80 ~ Header2 ~ isShareData:", isShareData)
    }, [isShareData])
    

    return (
        <div className="flex w-full bg-[#25313A] mb-5 rounded-b-3xl">
            <img src={componenteUnachLogo} className="h-[60px] mt-[1%] mb-[1%] ml-[3%]" alt="Componentito UNACH Logo" />
            <div className="flex w-full justify-end h-auto">
                <button className="" onClick={handlerNewProject}>
                    <div className="mr-[6%] mt-[2.5%]">
                        <img src={more} className="h-[35px] " alt="" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Header2;
