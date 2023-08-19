const projects = [
  {
      "projects": {
        "id": "123",
        "title": "Research on Renewable Energy Sources",
        "created_at": "2023-07-15",
        "updated_at": "2023-08-10"
      },
      "project_proposals": {
        "id": "456",
        "project_id": "123",
        "registration_key": "PR12345",
        "creation_date": "2023-06-20",
        "location": "City A",
        "status_id": "2",
        "created_at": "2023-06-21",
        "updated_at": "2023-07-10"
      },
      "project_proposal_execution_periods": {
        "id": "789",
        "project_proposal_id": "456",
        "project_start_date": "2023-07-01",
        "project_end_date": "2023-12-31",
        "weekly_hours": "30",
        "created_at": "2023-06-22",
        "updated_at": "2023-07-15"
      }
    }
];

export default projects;