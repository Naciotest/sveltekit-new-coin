<script>
import { PUBLIC_API_KEY } from '$env/static/public';
import { gql, GraphQLClient } from 'graphql-request';

const endpoint = `https://usable-kiwi-36.hasura.app/v1/graphql`

const client = new GraphQLClient(endpoint)

const query = gql`
  query MyQuery {
    products {
      id
      created_at
      name
    }
  }
`

const requestHeaders = {
  'x-hasura-admin-secret': PUBLIC_API_KEY,
}

async function getNew() {
  const res = await client.request(query, {}, requestHeaders);
  const tasks = await res;

  console.log(tasks)

  return tasks.tasks
}

getNew()
</script>

<h1>About page (HASURA)</h1>
<h2 text="5xl red">It has an 'cors' error</h2>