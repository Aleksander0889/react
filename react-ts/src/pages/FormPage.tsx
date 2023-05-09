import NameForm from '../components/Form';
import RendCard from '../components/MyCards/cards'
import CardUser from './../components/CardUser/CardUser';
import { schema } from './../components/Form';
// import { DataProvider } from '../components/DataContext';


function FormPage() {
  return (
    <main>
      <><h1>FORM PAGE</h1>
      <NameForm/>
      <CardUser card={{id: 1, title: 'ggg', body: 'iriirir'}}></CardUser>
      <CardUser></CardUser>
      <CardUser></CardUser>
      </>
    </main>
    );
}


export default FormPage;