import Select from './Select/Select';

function App() {
  const options = [
    {
      size: 'S',
      value: 10,
      stock: 2,
      price: '18.00 €'
    },
    {
      size: 'M',
      value: 11,
      stock: 5,
      price: '18.00 €'
    },
    {
      size: 'L',
      value: 12,
      stock: 0,
      price: '18.00 €'
    },
    {
      size: 'XL',
      value: 13,
      stock: 2,
      price: '22.00 €'
    },
  ];

  return (
    <div>
      <h1>Alltricks frontend test: </h1>
      <Select options={options} />
    </div>
  );
}

export default App;
