import logo from './logo.svg';
import {Card} from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Card     
        name={"Sydney"}
        phone={"111-111-1111"}
        email={"dubstr1@gmail.com"}
        image = {{
            url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", 
            alt: "cute cat" 
        }}
        favoured={false}
      />
    </div>
  );
}

export default App;
