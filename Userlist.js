import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Listusers = () => {
  const [user, setUser] = useState([]);
  const [loding, setloding] = useState(true);
  useEffect(() => {
    const getProds = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUser(res.data);
        console.log(res.data);
        setloding(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProds();
  }, []);
  if (loding) {
    return <Spinner animation="border" variant="success" />;
  }
  return (
    <div>
      {" "}
      <h1>List user</h1>
      {user.map((el) => (
        <div key={el.id}>
          <h2>{el.name}</h2>
          <p>{el.username} </p>
          <p>{el.email}</p>

          <h2>{el.address.street}</h2>
          <p>{el.address.suite} </p>
          <p>{el.address.city}</p>
          <h2> {el.address.zipcode}</h2>

          <p>{el.address.geo.lat} </p>
          <p>{el.address.geo.lng}</p>
          <h2> {el.phone}</h2>
          <h2>{el.website}</h2>

          <p>{el.company.name}</p>
          <h2> {el.company.catchPhrase} </h2>
          <h2> {el.company.bs} </h2>
        </div>
      ))}
    </div>
  );
};

export default Listusers;
