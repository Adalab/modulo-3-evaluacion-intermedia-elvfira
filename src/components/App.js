import "../styles/App.scss";
import { useState } from "react";
// import callToApi from '../services/api';
import adalabers from "../data/adalabers.json";

function App() {
  // Creo las variables de los contactos y para añadir un nuevo contacto

  const [listAdalabers, setListAdalabers] = useState("");
  const [tutorAdalab, setTutorAdalab] = useState("");
  const [specialityAdalab, setSpecialityAdalab] = useState("");

  const

  // Pinto la variable de estado para el nombre de las Adalabers y un map que recorra el array.
  const [adalabers, setAdalabers] = useState([]);

  const mainHeader = (title) => {
    <h1>{title}</h1>;
  };

  const listAdalabers = () => {
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

        <tbody>{listAdalabers()}</tbody>
      </table>
    </div>
  );
}

export default App;
