import Hero from "../components/Hero"

const Home = ({ products,wishlist}) => {
  return (
    <Hero products={products} wishlist={wishlist} />
  )
}

export default Home