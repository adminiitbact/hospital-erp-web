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
        active
        covid_status
      }
    }
  }`;

  const response = await apolloClient.query({ query });
  console.log(response);
  return response.data.facility[0];
}


export default {
  getFacility,
};
