import Header from '../src/components/Header'

import Formulario from '../src/components/Formulario'

import ListadoPacientes from '../src/components/ListadoPacientes'





function App() {



  return (

    <div className="container mx-auto mt-20">

      <Header />

      <div className='flex'>

        <Formulario />

        <ListadoPacientes />

      </div>

    </div>

  )

}



export default App

