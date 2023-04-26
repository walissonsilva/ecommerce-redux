import { useState } from "react";

export const Counter: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <main>
      <div>
        <h1>{value}</h1>

        <div>
          <button onClick={() => setValue(value - 1)}>Diminuir</button>
          <button onClick={() => setValue(value + 1)}>Aumentar</button>
        </div>
      </div>
    </main>
  );
};
