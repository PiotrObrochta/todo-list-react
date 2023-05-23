

function App() {
  return (
    <main classNameName="container">
        <header>
            <h1>Lista zadań</h1>
        </header>
        </section>
        <section className="section">
            <h2 className="section__header">Dodaj nowe zadanie</h2>
            <div className="section__body">
                <form className="form js-form">
                    <input placeholder="Co jest do zrobienia?" className="form__field js-newTask" autofocus>
                    <button className="form__button">Dodaj zadanie</button>
            </div>
            </form>
        </section>
        <section className="section">
            <header className="section__header section__taskListTitleButtons">
            <h2>Lista zadań</h2>
            <div className="section__button js-buttons"></div>
            </header>
            <div className="section__body">
                <ul className="task js-tasks"></ul>
            </div>
        </section>
    </main>
  );
}

export default App;
