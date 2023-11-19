// ApiFunctions.jsx
import {getItem, setItem} from '../../utils/storage'


// Function for Case 1
export const updateCase1 = () => {
    const CurrentProyectID = getItem('currentProyectID');
  const Current = getItem('currentProyect') || {};
    return {
        apiUrl: `http://127.0.0.1:8000/api/projects/data/${CurrentProyectID}`,
        requestOptions: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title_project: Current.title_project || null,
                start_date: Current.start_date || null,
                end_date: Current.end_date || null,
                student_name: Current.student_name || null,
                link_drive: Current.link_drive || null,
            }),
        },
    };
};

// Function for Case 2
export const updateCase2 = () => {
    const CurrentProyectID = getItem('currentProyectID');
  const Current = getItem('currentProyect') || {};
    console.log("🚀 ~ file: ButtonVars.jsx:26 ~ updateCase2 ~ Current.work_group:", Current.work_group)
    console.log("🚀 ~ file: ButtonVars.jsx:27 ~ updateCase2 ~ Current:", Current)
    return {
        apiUrl: `http://127.0.0.1:8000/api/DataProject/${CurrentProyectID}`,
        requestOptions: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                location_execution: Current.location_execution || null,
                weekly_hours: Current.weekly_hours || null,
                full_name_technical_responsible: Current.full_name_technical_responsible || null,
                affiliation_center: Current.affiliation_center || null,
                email: Current.email || null,
                office_phone: Current.office_phone || null,
                cellphone: Current.cellphone || null,
                degree: Current.degree || null,
                employment_status: Current.employment_status || null,
                knowledge_area: Current.knowledge_area || null,
                discipline: Current.discipline || null,
                specify: Current.specify || null,
                specific_topic: Current.specific_topic || null,
                academic_body_name: Current.academic_body_name || null,
                ca_status: Current.ca_status || null,
                collaboration_networks: Current.collaboration_networks || null,
                specify_network_name: Current.specify_network_name || null,
                collegiate_research_group_name: Current.collegiate_research_group_name || null,
                formalization_instance: Current.formalization_instance || null,
                research_line_to_develop: Current.research_line_to_develop || null,
                funding_type: Current.funding_type || null,
                institution_source: Current.institution_source || null,
                call_program: Current.call_program || null,
                call_year: Current.call_year || null,
                call_link: Current.call_link || null,
                evaluating_instance: Current.evaluating_instance || null,
                allocation_resources_agreement: Current.allocation_resources_agreement || null,
                total_amount_mexican_pesos: Current.total_amount_mexican_pesos || null,
                rt_perspective: Current.rt_perspective || null,
                rt_scope: Current.rt_scope || null,
                rt_specify: Current.rt_specify || null,
                work_group: Current.work_group || null,
                research_training_students: Current.research_training_students || null,
                participating_entities: Current.participating_entities || null,
            }),
        },
    };
};

// Function for Case 3
export const updateCase3 = () => {
    const CurrentProyectID = getItem('currentProyectID');
  const Current = getItem('currentProyect') || {};
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
                location_execution: Current.location_execution || null,
                weekly_hours: Current.weekly_hours || null,
                full_name_technical_responsible: Current.full_name_technical_responsible || null,
                affiliation_center: Current.affiliation_center || null,
                email: Current.email || null,
                office_phone: Current.office_phone || null,
                cellphone: Current.cellphone || null,
                degree: Current.degree || null,
                employment_status: Current.employment_status || null,
                knowledge_area: Current.knowledge_area || null,
                discipline: Current.discipline || null,
                specify: Current.specify || null,
                specific_topic: Current.specific_topic || null,
                academic_body_name: Current.academic_body_name || null,
                ca_status: Current.ca_status || null,
                collaboration_networks: Current.collaboration_networks || null,
                specify_network_name: Current.specify_network_name || null,
                collegiate_research_group_name: Current.collegiate_research_group_name || null,
                formalization_instance: Current.formalization_instance || null,
                research_line_to_develop: Current.research_line_to_develop || null,
                funding_type: Current.funding_type || null,
                institution_source: Current.institution_source || null,
                call_program: Current.call_program || null,
                call_year: Current.call_year || null,
                call_link: Current.call_link || null,
                evaluating_instance: Current.evaluating_instance || null,
                allocation_resources_agreement: Current.allocation_resources_agreement || null,
                total_amount_mexican_pesos: Current.total_amount_mexican_pesos || null,
                rt_perspective: Current.rt_perspective || null,
                rt_scope: Current.rt_scope || null,
                rt_specify: Current.rt_specify || null,
                work_group: Current.work_group || null,
                research_training_students: Current.research_training_students || null,
                participating_entities: Current.participating_entities || null,
            }),
        },
    };
};
