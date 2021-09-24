import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Component';
import Propiedades from './components/Propiedades';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </section>
        <section>
          <Componente msg = 'Hola soy una prop'></Componente>
          <hr/>
          <Propiedades 
          cadena='soy un text pasado por props desde App' 
          number={10} 
          boolean = {true}
          arreglo = {[2, 3, 5]}
          objeto={[
            { name: 'Adidas',
              price: 150},

            { name: 'Nike',
              price: 120}
          ]}
          funcion = {(num)=>num*num}
          elementoReact = {<i>Esto es un elemento React</i>}
          componenteReact = {<Componente msg = 'Soy un componente pasado como Prop'/>}
          />
        </section>
      </header>
    </div>

  );
}

export default App;
