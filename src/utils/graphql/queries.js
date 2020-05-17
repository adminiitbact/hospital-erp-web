import gql from 'graphql-tag';
import apolloClient from '../../hasuraConfig';

async function getFacility() {
  const query = gql`
  query {
    facility {
      id
      address
      area
      agreement_status
      covid_facility_type
      created_at
      email
      facility_status
      assets
      staff
      inventory
      checklist
      wards {
        id
        building_name
        floor
        ward_name
        total_beds
        gender
        covid_ward
        covid_status
        severity
        ventilators
        extra_fields
        available_beds
        ventilators_occupied
      }
      patient_live_statuses {
        patientByPatient {
          id
          first_name
          last_name
          patient_test_details(order_by: {created_at: desc}, limit: 1) {
            test_result_status {
              key
              value
            }
          }
          patient_live_statuses(limit: 1, order_by: {created_at: desc}) {
            hospital_patient_id
            wardByWard {
              building_name
              ward_name
            }
            severityBySeverity {
              key
              value
            }
          }
        }
      }
    }
  }`;

  const response = await apolloClient.query({ query });
  // TODO: check this once rbac is in place
  return response.data.facility[0];
}

async function getAreaAndGender() {
  const query = gql`
  query {
    area {
      key
      value
    }
    gender {
      key
      value
    }
  }`;
  const response = await apolloClient.query({ query });
  return response.data;
}


async function getWardCreateDetails() {
  const query = gql`
  query {
    gender {
      key
      value
    }
    severity {
      key
      value
    }
  }`;
  const response = await apolloClient.query({ query });
  return response.data;
}


async function getTestDetailFields() {
  const query = gql`
  query {
    collection_center {
      key
      value
    }
    lab {
      key
      value
    }
    test_result_status {
      key
      value
    }
  }`;
  const response = await apolloClient.query({ query });
  return response.data;
}


export default {
  getFacility,
  getAreaAndGender,
  getWardCreateDetails,
  getTestDetailFields,
};
