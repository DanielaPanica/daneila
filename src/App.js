import "./App.css";
function App() {
  const ingredients = [
    {
      name: "envelopes unflavored gelatine",
      quantity: "2",
    },
    {
      name: "cup sugar",
      quantity: "1/2",
    },
    {
      name: "teaspoon salt",
      quantity: "1",
    },
    {
      name: "can (12 oz) apple juice",
      quantity: "1",
    },
    {
      name: " cup lemon juice",
      quantity: "1/2",
    },
    {
      name: "tablespoons vinegar",
      quantity: "2",
    },
    {
      name: "cup shredded carrot",
      quantity: "1",
    },
    {
      name: "cup sliced celery",
      quantity: "1",
    },
    {
      name: "cup finely shredded cabbage",
      quantity: "1",
    },
    {
      name: "cup chopped green pepper",
      quantity: "1/2",
    },
    {
      name: "can (4 oz) chopped pimiento",
      quantity: "1",
    },
  ];
  console.log(ingredients);

  return (
    <div>
      <div style={{ position: "fixed", top: 0, left: 0 }}></div>
      <img src="/perfection_salad.jpeg" alt="Salad" width="400" height="400" />
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(function (elem) {
          const { quantity, name } = elem;
          return (
            <li>
              <b>{quantity} </b>
              {name}
            </li>
          );
        })}
      </ul>
      <h2>Preparation</h2>
      <ol>
        <li>
          In small saucepan, combine <b>gelatine, sugar, and salt</b>; mix well.
        </li>
        <li>
          <p>
            Add 1 cup <b>water</b>.
          </p>
          <p>
            Heat over low heat, stirring constantly, until{" "}
            <b>sugar and gelatine</b> are dissolved. <p>Remove from heat.</p>
          </p>
        </li>
        <li>
          <p>
            Stir in <b>apple juice, lemon juice, vinegar</b>, and 1/4 cup{" "}
            <b>cold water</b>.<p>Pour into medium bowl.</p>
          </p>
          <p>
            Refrigerate 1 hour, or until mixture is consistency of unbeaten egg
            white.
          </p>
        </li>
        <li>
          Add <b>carrot, celery, cabbage, green pepper, and pimiento</b>; stir
          until well combined.
        </li>
        <li>
          <p>Turn into decorative, 1 1/2-quart mold.</p>
          <p>Refrigerate 4 hours,or until firm.</p>
        </li>
        <li>
          <p>
            To unmold: Run small spatula around edge of mold; invert onto
            serving plate.
          </p>
          <p>Place hot dishcloth over mold; shake gently to release.</p>{" "}
          <p>Repeat, if necessary.</p>
          <p>Lift off mold.</p>
          <p>Refrigerate until ready to serve./p></p>
        </li>
      </ol>
    </div>
  );
}

export default App;
