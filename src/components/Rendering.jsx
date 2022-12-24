import { useState } from "react";

const Profiles = () => {
  const [profiles, setProfiles] = useState([
    {
      isActive: true,
      name: "Aniket Singh Thakur",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      isActive: true,
      id: 2,
      phone: "010-692-6593 x09125",
    },
    {
      isActive: false,
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
    },
    {
      isActive: true,
      id: 4,
      name: "Patricia Lebsack",
    },
    {
      isActive: true,
      id: 5,
      name: "Chelsey Dietrich",
    },
    {
      isActive: true,
      id: 6,
    },
    {
      isActive: false,
      id: 7,
      name: "Kurtis Weissnat",
    },
    {
      isActive: true,
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
    },
    {
      isActive: false,
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
    },
    {
      isActive: true,
      id: 10,
      name: "Clementina DuBuque",
    },
  ]);

  const disabled = {
    color: "black",
    background: "olive",
  };

  const normal = {
    color: "black",
  };

  return (
    <>
      {profiles.map((items) => {
        return <p style={items.isActive ? disabled : normal}>{items.name}</p>;
      })}
    </>
  );
};
export default Profiles;
