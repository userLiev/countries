import { gql } from "@apollo/client";

export const countryData = `
  code
  name
  native
  phone
  continent {
    code
    name
  }
  capital
  currency
  languages {
    code
    name
    native
    rtl
  }
  emoji
  emojiU

`;



export const COUNTRY_GQL = gql`
  query Country (
    $code: ID!
  ) {
    country (
      code: $code
    ) {
      ${countryData}
    }
  }
`;
