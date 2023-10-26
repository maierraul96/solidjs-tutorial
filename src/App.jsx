import { createSignal } from 'solid-js'
import { Routes, Route, A } from "@solidjs/router";
import banner from './assets/banner.png'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { useCartContext } from './contexts/CartContext';
import Test from './pages/Test';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  const { items } = useCartContext()

  const quantity = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity
    }, 0)
  }

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </span>
        <h1>Welcome Raul </h1>

        <A href='/'>Home</A>
        <A href='/cart'>Cart ({quantity()})</A>
        <A href='/test'>!!!TEST!!!</A>
      </header>

      <img src={banner} width="1200" height="210" alt="banner img"/>


      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path={"/product/:id"} component={Product} />
        <Route path={"/test"} component={Test} />
      </Routes>

    </div>
  )
}

export default App
