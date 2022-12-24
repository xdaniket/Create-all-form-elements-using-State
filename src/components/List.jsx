const JsonData = [
  {
    id: 1,
    name: "Annu",
    city: "Sehore",
  },

  {
    id: 2,
    name: "Pihu",
    city: "Bhopal",
  },

  {
    id: 3,
    name: "Munu",
    city: "Indore",
  },

  {
    id: 4,
    name: "Aaru",
    city: "Fhanda",
  },

  {
    id: 5,
    name: "Pari",
    city: "Aambhlikheda",
  },
];

function JsonDataDisplay() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr.no </th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
