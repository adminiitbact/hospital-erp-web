import gql from 'graphql-tag';

async function createPatient(data) {
  const query = gql`
  mutation insert_patient($objects: [patient_insert_input!]!) {
    insert_patient(objects: $objects) {
      returning {
        id
      }
    }
  }`;
  const response = await this.$apollo.mutation({ mutation: query, variables: { objects: data } });
  console.log(response);
  return response;
}

const updateFacility = gql`
mutation update_facility($id: uuid!, $object: facility_set_input!) {
  update_facility(where: {id: {_eq: $id}}, _set: $object) {
    affected_rows
  }
}`;

const createWard = gql`
mutation insert_ward($objects: [ward_insert_input!]!) {
  insert_ward(objects: $objects) {
    affected_rows
  }
}`;

const updateWard = gql`
mutation update_ward($id: uuid!, $object: ward_set_input!) {
  update_ward(where: {id: {_eq: $id}}, _set: $object) {
    affected_rows
  }
}`;

module.exports = {
  createPatient,
  createWard,
  updateFacility,
  updateWard,
};
