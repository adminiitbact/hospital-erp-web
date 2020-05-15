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
      region
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


export default {
  getFacility,
  getAreaAndGender,
  getWardCreateDetails,
};
