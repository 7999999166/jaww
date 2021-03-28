import App from './App.svelte';
import { initPathRouter } from '@bjornlu/svelte-router';
import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Product from './pages/Product.svelte';


initPathRouter([
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/product', component: Product }
])

let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
