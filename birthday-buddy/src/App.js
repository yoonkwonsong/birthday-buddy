import React from "react"
import data from "./data"
import List from "./List"

function App() {
    const [people, setPeople] = React.useState(data)

    // console.log(people)

    return (
        <main>
            <section className="section">
                <div className="card">
                    <h1>{people.length} birthdays today</h1>
                    <List people={people} />
                    <button onClick={() => setPeople([])}>clear all</button>
                </div>
            </section>
        </main>
    )
}

export default App
