import React from 'react';

const Blog = () => {
    //     // 13.1 What are the different ways to manage a state in a React application?

    // 13.2 ow does prototypical inheritance work?H

    // 13.3 What is a unit test? Why should we write unit tests?

    // 13.4 React vs. Angular vs. Vue?
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>  the different ways
                        are managing state in a React application are many
                        1 useState
                        2 useReducer
                        3 useContext
                        4 useImmer
                        5 useImmerReducer
                        6 useImmerContext
                        7 useLocalStore
                        etc
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    ow does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p> Prototpical
                        inheritance is a way of creating objects in JavaScript.

                        inheritance  work in JavaScript is that objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
                        In JavaScript, all objects have a prototype property, which makes inheritance possible in JavaScript. It is a way of creating objects that inherit directly from other objects.
                        Prototpical

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        A unit test is a piece of code that tests a small unit of functionality in your application. Unit tests are written by developers to ensure that a section of an application (known as the “unit”) meets its design and behaves as intended.
                        Unit tests are written by developers to ensure that a section of an application (known as the “unit”) meets its design and behaves as intended.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                  React vs. Angular vs. Vue? 
                </div>
                <div className="collapse-content">
                    <p> 
                        React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
                        Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
                        SO the difference between React and Angular is that React is a JavaScript library for building user interfaces, while Angular is a TypeScript-based open-source web application framework.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;