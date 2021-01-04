import React from "react";
import "./App.css";

function App() {
    const style={
        backgroundImage: `url("../images/react-logo.svg")`,
        backgroundPosition: '80%',
        backgroundSize: '30%',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'repeat-y'
    }
    return (
        <div className="App">
            <header style={style}>
                <div className="navigation">
                   <img src="../images/ironhack-logo.svg"></img>
                   <img src="../images/menu-top.svg"></img>
                </div>
                <div className="banner">
                    <h1>Say hello to ReactJS</h1>
                    <p>
                        You will learn how to use the most popular frontend library, and become a
                        super Ninja developer
                    </p>
                    <button>Awesome</button>
                </div>
            </header>
            <main>
                <section className="item">
                    <img src="../images/icon1.png"></img>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs</p>
                </section>

                <section className="item">
                    <img src="../images/icon2.png"></img>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state</p>
                </section>

                <section className="item">
                    <img src="../images/icon3.png"></img>
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the components</p>
                </section>

                <section className="item">
                    <img src="../images/icon4.png"></img>
                    <h2>JSX</h2>
                    <p>Statically-typed designed to run on modern browsers</p>
                </section>
            </main>
        </div>
    );
}

export default App;
