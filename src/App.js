import {useMemo, useRef, useState} from 'react'
function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  function onSubmit(e){
    e.preventDefault();

    const value = inputRef.current.value
    // console.log(value);
    if(value === "") return
    setItems(prev => {
      return [...prev, value]
    })
    // clear current input
    inputRef.current.value = ""
  }

  return (
    <div className="App">
      Search: <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="search"
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type='submit'>Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default App;
