// const parent=React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"iam an h1 tag"),
//         React.createElement("h2",{},"iam an h2 tag"),
//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"iam an h1 tag"),
//         React.createElement("h2",{},"iam an h2 tag"),
 
//     ])


// ]);        


const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},[
            "iam an h1 tag",
             React.createElement("h2",{},"iam a p tag")
        ]),
        React.createElement("h2",{},"iam an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"iam an h1 tag"),
        React.createElement("h2",{},"iam an h2 tag"),
 
    ])
]);        

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);

// child1 => h1 => p | child2 => span => h5




















































































