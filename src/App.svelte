<script>
  import { RouterView, Link } from '@bjornlu/svelte-router'
</script>
<h1>Hello Guys</h1>
<main>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/Product">Product</Link>
    <Link to="/About">About</Link>
  </nav>
  <RouterView />
</main>