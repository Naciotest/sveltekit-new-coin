<script>
  import { gql, GraphQLClient } from 'graphql-request';

  const document = gql`
    {
      tasks {
        id
        status
      }
    }
  `

  const document1 = gql`
    query Task($taskId: Int!) {
      task(id: $taskId) {
        description
      }
    }
  `

  let promise = getGql();
  let taskId = 1;
  let multiSearch = true

  const endpoint = 'http://localhost:4000/'
  const client = new GraphQLClient(endpoint)

  async function getGql() {
    const res = await client.request(document);
    const tasks = await res;

    multiSearch = true
    return tasks.tasks
  }

  async function getGqlId(as = 1) {
    const res = await client.request(document1, {"taskId": as});
    const task = await res;
    
    multiSearch = false
    return task.task
  }

  function handleClick() {
    promise = getGql();
  }
  
  function inputCLick() {
    promise = getGqlId(taskId);
  }
</script>

<h1>Levantar entorno local 4000 con graphql del tutorial garage de ideas</h1>
<button on:click={handleClick}>Reurn 'All' tasks </button>
  or
<label>
  <button on:click={inputCLick}>Search by ID </button>
  <input type="number" bind:value={taskId} min="1" max="10" />
</label>

{#await promise}
	<p>...waiting</p>
{:then task}
{#if multiSearch}
<ul>
  {#each task as { id, status }, i}
    <li>{i} - The task ({id}) is {status}</li>
  {/each}
</ul>
{:else}
<ul>
  <li>
    {task.description}
  </li>
</ul>
{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
