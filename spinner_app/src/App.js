function App() {

  setInterval(() => {
    document.querySelector(".spinner").style.display = "none";
    document.querySelector(".content").style.display = "block";
    setInterval(() => {
      document.querySelector(".content").style.opacity = "100%";
    },50);
  },4000);

  return (
    <div className="App">
      <div className="spinner"></div>
      <div className="content">
        <h2>Welcome to the main page</h2>
      </div>
    </div>
  );
}

export default App;
