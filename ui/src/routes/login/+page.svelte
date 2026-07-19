<script lang="ts">
  import { goto } from "$app/navigation";

  // FIX: remove
  function mockCall(time: number): Promise<void> {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, time);
    });
  }

  let loading = $state<boolean>(false);
  async function login() {
    loading = true;
    await mockCall(1_000);
    loading = false;
    goto("/board", { replaceState: true });
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<h1>Login</h1>
{#if loading}
  <p>Loading...</p>
{/if}
<button onclick={login}>Login</button>
