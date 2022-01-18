import { useState } from "react";
// import callToApi from '../services/api';
import adalabersList from "../data/contacts.json";

function App() {
  // Creo las variables de los contactos y para añadir un nuevo contacto

  const [listAdalabers, setListAdalabers] = useState("");
  const [tutorAdalab, setTutorAdalab] = useState("");
  const [specialityAdalab, setSpecialityAdalab] = useState("");

  // Pinto la variable de estado para el nombre de las Adalabers y un map que recorra el array.
  const [adalabers, setAdalabers] = useState(adalabersList.results);

  const mainHeader = (title) => {
    return <h1>{title}</h1>;
  };

  const getListAdalabers = () => {
    return adalabers.map((adalaber, index) => (
      <tr key={index}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>
      </tr>
    ));
  };

  return (
    // Pinto el HTML

    <div className="app">
      <header>{mainHeader("Adalabers")}</header>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>

        <tbody>{getListAdalabers()}</tbody>
      </table>
    </div>
  );
}

export default App;
