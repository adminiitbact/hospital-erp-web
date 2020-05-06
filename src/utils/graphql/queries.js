import gql from 'graphql-tag';


async function getFacility(apollo) {
  const query = gql`
  query {
    facility {
      address
      area
      agreement_status
      covid_facility_type
      created_at
      email
      facility_status
    }
  }`;

  const response = await apollo.query({ query });
  return response;
}

module.exports = {
  getFacility,
};
