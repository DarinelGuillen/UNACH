// ApiFunctions.jsx


// Function for Case 1
export const updateCase1 = (CurrentProyectID, isShareData) => {
    return {
        apiUrl: `http://127.0.0.1:8000/api/projects/data/${CurrentProyectID}`,
        requestOptions: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title_project: isShareData.title_project || null,
                start_date: isShareData.start_date || null,
                end_date: isShareData.end_date || null,
                student_name: isShareData.student_name || null,
                link_drive: isShareData.link_drive || null,
            }),
        },
    };
};

// Function for Case 2
export const updateCase2 = (CurrentProyectID, isShareData) => {
    return {
        apiUrl: `http://127.0.0.1:8000/api/DataProject/${CurrentProyectID}`,
        requestOptions: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                location_execution: isShareData.location_execution || null,
                weekly_hours: isShareData.weekly_hours || null,
                full_name_technical_responsible: isShareData.full_name_technical_responsible || null,
                affiliation_center: isShareData.affiliation_center || null,
                email: isShareData.email || null,
                office_phone: isShareData.office_phone || null,
                cellphone: isShareData.cellphone || null,
                degree: isShareData.degree || null,
                employment_status: isShareData.employment_status || null,
                knowledge_area: isShareData.knowledge_area || null,
                discipline: isShareData.discipline || null,
                specify: isShareData.specify || null,
                specific_topic: isShareData.specific_topic || null,
                academic_body_name: isShareData.academic_body_name || null,
                ca_status: isShareData.ca_status || null,
                collaboration_networks: isShareData.collaboration_networks || null,
                specify_network_name: isShareData.specify_network_name || null,
                collegiate_research_group_name: isShareData.collegiate_research_group_name || null,
                formalization_instance: isShareData.formalization_instance || null,
                research_line_to_develop: isShareData.research_line_to_develop || null,
                funding_type: isShareData.funding_type || null,
                institution_source: isShareData.institution_source || null,
                call_program: isShareData.call_program || null,
                call_year: isShareData.call_year || null,
                call_link: isShareData.call_link || null,
                evaluating_instance: isShareData.evaluating_instance || null,
                allocation_resources_agreement: isShareData.allocation_resources_agreement || null,
                total_amount_mexican_pesos: isShareData.total_amount_mexican_pesos || null,
                rt_perspective: isShareData.rt_perspective || null,
                rt_scope: isShareData.rt_scope || null,
                rt_specify: isShareData.rt_specify || null,
                work_group: isShareData.work_group || null,
                research_training_students: isShareData.research_training_students || null,
                participating_entities: isShareData.participating_entities || null,
            }),
        },
    };
};

// Function for Case 3
export const updateCase3 = (CurrentProyectID, isShareData) => {
    return {
        apiUrl: `http://127.0.0.1:8000/api/ProjectProtocol/${CurrentProyectID}`,
        requestOptions: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_projects: CurrentProyectID, // Assuming id_projects is required
                unach_id: get('user_unach_id'), // Assuming unach_id is required, obtain it from storage
                location_execution: isShareData.location_execution || null,
                weekly_hours: isShareData.weekly_hours || null,
                full_name_technical_responsible: isShareData.full_name_technical_responsible || null,
                affiliation_center: isShareData.affiliation_center || null,
                email: isShareData.email || null,
                office_phone: isShareData.office_phone || null,
                cellphone: isShareData.cellphone || null,
                degree: isShareData.degree || null,
                employment_status: isShareData.employment_status || null,
                knowledge_area: isShareData.knowledge_area || null,
                discipline: isShareData.discipline || null,
                specify: isShareData.specify || null,
                specific_topic: isShareData.specific_topic || null,
                academic_body_name: isShareData.academic_body_name || null,
                ca_status: isShareData.ca_status || null,
                collaboration_networks: isShareData.collaboration_networks || null,
                specify_network_name: isShareData.specify_network_name || null,
                collegiate_research_group_name: isShareData.collegiate_research_group_name || null,
                formalization_instance: isShareData.formalization_instance || null,
                research_line_to_develop: isShareData.research_line_to_develop || null,
                funding_type: isShareData.funding_type || null,
                institution_source: isShareData.institution_source || null,
                call_program: isShareData.call_program || null,
                call_year: isShareData.call_year || null,
                call_link: isShareData.call_link || null,
                evaluating_instance: isShareData.evaluating_instance || null,
                allocation_resources_agreement: isShareData.allocation_resources_agreement || null,
                total_amount_mexican_pesos: isShareData.total_amount_mexican_pesos || null,
                rt_perspective: isShareData.rt_perspective || null,
                rt_scope: isShareData.rt_scope || null,
                rt_specify: isShareData.rt_specify || null,
                work_group: isShareData.work_group || null,
                research_training_students: isShareData.research_training_students || null,
                participating_entities: isShareData.participating_entities || null,
            }),
        },
    };
};
