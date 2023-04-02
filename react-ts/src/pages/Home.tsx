import NameForm from '../components/Form';
import { DataProvider } from '../components/DataContext';

function Home() {
  return (
    <main>
      <><h1>PAGE HOME</h1>
      <form className="search">
        <input type="text" className="input_search" value="Search bar design guide" />
        <img
          className="search-icon"
                  />
           </form>
      <DataProvider>
        <NameForm/>
      </DataProvider>
      
      </>
    </main>
    );
}


export default Home;
