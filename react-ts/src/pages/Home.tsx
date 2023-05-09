import {useEffect, useState, FC} from 'react';
// import { DataProvider } from '../components/DataContext';

interface Cat {
  _id:	string

owner:	string
createdAt:	string
updatedAt:	string
}

const  Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


 useEffect(() => {
  fetch('https://cataas.com/api/cats')
  .then(res => {
    return res.json()
    
  })
  .then(
    (result) => {
      console.log(result)
      setIsLoaded(true);
      setItems(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
  )
 },
 []);

 if (error) {
  return <div>Ошибка: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Загрузка...</div>;
} else {
  return (
    <main>
      <><h1>PAGE HOME</h1>
      
            <div >
        {items.map(item => (
          <div key={Math.random()}>
            {item.createdAt}
            {item.tags}
          </div>
        ))}
      </div>    
         </>
    </main>)
};
}


export default Home;


