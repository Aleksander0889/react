import { Children, useState } from "react";
import RendCard from "../components/MyCards/cards";
import { Data, products } from "../components/Data/data";
import MyFilters from "../components/MyFilters/MeFiltesr";
import  '../pages/cardList.css'



function About() {
  const [product, setProducts] = useState([])

  const [selectedSort, setSelrctedSort] = useState('')

  const sortCards = (sort) => {
    setSelrctedSort(sort)
    console.log(sort)
    [products].sort((a, b) => a[sort].localCompare(b[sort]))
  }

  return (
    <main>
      <h1>PAGE ABOUT US</h1>
<>
<MyFilters
value={selectedSort}
    defultValue='sort category'
    onChange={sortCards}
          options={[
            {value: "category", name: "smartphones"},
            {value: "brand", name: "brand"}
            ]}
></MyFilters>
<div className="cardWrapper">{products.map(products =>
<RendCard products={products} key={products.id}></RendCard>)}
 </div>
</>

    </main>
  );
}

export default About;
