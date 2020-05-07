import gql from 'graphql-tag';
import apolloClient from '../../hasuraConfig';


async function createPatient(data) {
  const query = gql`
  mutation insert_patient($objects: [patient_insert_input!]!) {
    insert_patient(objects: $objects) {
      returning {
        id
      }
    }
  }`;
  const response = await apolloClient.mutation({ mutation: query, variables: { objects: data } });
  console.log(response);
  return response;
}

async function updateFacility(data, facilityID) {
  const query = gql`
  mutation update_facility($id: uuid!, $object: facility_set_input!) {
    update_facility(where: {id: {_eq: $id}}, _set: $object) {
      returning {
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
          active
          covid_status
        }
      }
    }
  }`;
  const response = await apolloClient.mutate({ mutation: query, variables: { object: data, id: facilityID } });
  return response.data.update_facility.returning[0];
}

async function createWard(data) {
  const query = gql`
  mutation insert_ward($objects: [ward_insert_input!]!) {
    insert_ward(objects: $objects) {
      returning {
        id
        active
        covid_status
      }
    }
  }`;

  const response = await apolloClient.mutate({ mutation: query, variables: { objects: [data] } });
  return response.data.insert_ward.returning[0];
}

// const updateWard = gql`
// mutation update_ward($id: uuid!, $object: ward_set_input!) {
//   update_ward(where: {id: {_eq: $id}}, _set: $object) {
//     affected_rows
//   }
// }`;

export default {
  createPatient,
  updateFacility,
  createWard,
};
