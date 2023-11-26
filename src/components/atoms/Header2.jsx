import React, { useContext, useEffect } from 'react';
import componenteUnachLogo from '../../assets/img/Icon/componenteUnachLogo.svg';
import more from '../../assets/img/Icon/more.svg';
import {  useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import SharedDataContext from '../../contexts/SharedDataContext';
import { getItem, setItem } from '../../utils/storage';

const Header2 = ({ShowMore}) => {
    // console.log("🚀 ~ file: header2.jsx:10 ~ Header2 ~ ShowMore:", ShowMore)
    const { isUser, setIsUser } = useContext(UserContext);
    const storedData = getItem('userData');
    const { idUnach } = storedData;
    const navigate = useNavigate();

    const handlerNewProject = async () => {
        try {
            // TODO: Fetch POST to the route '/newProject'
            const responseNewProject = await fetch('http://127.0.0.1:8000/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "unach_id": idUnach,//! obtain it from From the storage of user
                    "status": 0,
                })
            });

            if (responseNewProject.ok) {
                // TODO: Get data from the response and add it to the SetItme
                const newData = await responseNewProject.json();
                // console.log("🚀 ~ file: header2.jsx:34 ~ handlerNewProject ~ responseNewProject:", responseNewProject);
                // console.log("🚀 ~ file: header2.jsx:34 ~ handlerNewProject ~ newData.data:", newData.data.id);
                setItem('currentProyectID', newData.data.id);
                // TODO: Nested fetch POST to the route 'localhost:8080/api/Project'
                const responseNestedProject = await fetch('http://127.0.0.1:8000/api/DataProject', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "id_projects": newData.data.id,
                        "unach_id": idUnach,//! obtain it from From the storage of user
                    })
                });

                if (responseNestedProject.ok) {
                    // TODO: Get data from the response and add it to the  SetItme
                    const nestedData = await responseNestedProject.json();
                    // console.log("🚀 ~ file: header2.jsx:56 ~ handlerNewProject ~ responseNestedProject:", responseNestedProject);
                    // console.log("🚀 ~ file: header2.jsx:56 ~ handlerNewProject ~ nestedData:", nestedData.data);

                    //* Merge the new data with the existing state
                    setItem('currentProyect', { ...newData.data, ...nestedData.data
                        // ,work_group: {},
                    });
                    // console.log("🚀 ~ file: header2.jsx:50 ~ handlerNewProject ~ { ...newData.data, ...nestedData.data }:", { ...newData.data, ...nestedData.data })
                    // TODO: Navigate to '/PAGEx'
                    navigate('/Sections');
                } else {
                    console.error('Error in nested fetch POST to http://127.0.0.1:8000/api/DataProject');
                }
            } else {
                console.error('Error in fetch POST to http://127.0.0.1:8000/api/projects:', responseNewProject);
            }
        } catch (error) {
            console.error('Error in handlerNewProject:', error);
        }
    };
    // useEffect(() => {
                    
    //    // console.log("🚀 ~ file: header2.jsx:71 ~ Header2 ~ getItem:", getItem)
    // }, [getItem])
    

    return (
        <>
              <div className="flex w-full mb-20 bg-[#25313A]  rounded-b-3xl">
            <img src={componenteUnachLogo} className="h-[60px] mt-[1%] mb-[1%] ml-[3%]" alt="Componentito UNACH Logo" />
            <div className="flex w-full justify-end h-auto">
        {ShowMore !== undefined && ShowMore ? (
            <>
                <button className="" onClick={handlerNewProject}>
                    <div className="mr-[6%] mt-[2.5%]">
                        <img src={more} className="h-[35px] " alt="" />
                    </div>
                </button>
            </>
          ) : (
              <>
            </>
          )}
          
          </div>
      </div>
        
            </>
    );
};

export default Header2;
