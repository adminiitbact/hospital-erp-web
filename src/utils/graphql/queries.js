import gql from 'graphql-tag';

const getFacility = gql`
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


module.exports = {
  getFacility,
};
