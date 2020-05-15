import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_PERSONS = gql`
  query personsWithPagination {
    persons(page:0, pageSize: 10) {
      id
      firstName
      lastName
    }
  }
`;

const PersonList = () => {
    const {data, loading, error} = useQuery(GET_PERSONS);
console.log(data);

    if (loading) return <div>LOADING</div>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <div>
            {data.persons.map((p: any) => <div key={p.id}>{p.id} | {p.firstName} {p.lastName}</div>)}
        </div>
    )
}

export default PersonList