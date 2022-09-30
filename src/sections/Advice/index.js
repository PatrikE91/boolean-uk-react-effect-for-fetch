import { useEffect, useState } from "react";

function AdviceSection() {
  const [advices, setAdvices] = useState([]);
  const [savedAdvices, setSavedAdvices] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        console.log("advices", data.slip);
        setAdvices(data.slip);
      });
  }, []);

  console.log("saved", savedAdvices);
  const test = (e) => {
    if (savedAdvices.filter((el) => el.id === e.id).length > 0) {
      console.log("hello");
    } else {
      setSavedAdvices([...savedAdvices, advices]);
    }
    return;
  };

  const newAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        console.log("advices", data.slip);
        setAdvices(data.slip);
      });
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advices.advice}</p>
        <button onClick={() => newAdvice()}>Get More Advice</button>
        <button onClick={() => test(advices)}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {savedAdvices.map((element) => {
            return <li key={element.id}>{element.advice}</li>;
          })}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
