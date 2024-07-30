const heading1 = React.createElement(
  "h1",
  {
    className: "heading1",
  },
  "Hello React"
);

const heading2 = React.createElement(
  "h3",
  {
    className: "heading2",
  },
  "Hello React"
);

const div = React.createElement(
  "div",
  {
    className: "container",
  },

  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
