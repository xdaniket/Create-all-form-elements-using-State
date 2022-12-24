import { useState } from "react";

const FC = () => {
  const [namee, setterVal] = useState("");
  const [email, setterVal1] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={namee}
          onChange={(e) => setterVal(e.target.value)}
        />
        <p>Name: {namee}</p>
      </div>

      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setterVal1(e.target.value)}
        />
        <p>Email: {email}</p>
      </div>
    </>
  );
};

export default FC;

//**

// import { useState } from "react";

// const FirstFC = () => {
//   const [userName, setUserName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <p>Name: {userName}</p>
//     </div>
//   );
// };

// export default FirstFC;
