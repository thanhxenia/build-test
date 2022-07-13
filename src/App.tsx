import './App.css';
import { FooterComponent } from './component/Footer';
import { HeaderComponent } from './component/Header';
import { ListPerson } from './component/ListPerson';

function App() {
  return (
    <div className="o-container o-body">
      <HeaderComponent title="Build Test - React + TypeScript" />
      <ListPerson />
      <FooterComponent title="Footer" copyright="Design by Thanh Ho" />
    </div>
  );
}

export default App;
