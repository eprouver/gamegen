const { div, h1, h2, p, img } = van.tags;

const randOption = (index, arr) => {
  const contents = () => {
    const loc = ~~(Math.random() * arr.length);
    const myMech = arr[loc];

    return div(
      div(
        { class: "img-holder" },
        img({
          class: "help-image loading",
          src: `https://loremflickr.com/320/240/${myMech.name
            .replace(/ /g, "_")
            .replace(/^a-zA-Z0-9 ]/g, "")}`,
          alt: myMech.name,
          style: `  transform: rotate(${index % 2 == 0 ? "4" : "-4"}deg);`,
          onload: (e) => {
            e.target.classList.remove("loading");
          },
        })
      ),
      div({ class: "ordinal" }, `#${index}`),
      h2(myMech.name),
      p(myMech.description)
    );
  };

  const holder = div(
    {
      class: "card",
      onclick: (e) => {
        holder.innerHTML = "";
        van.add(holder, contents());
      },
    },
    contents()
  );

  return holder;
};

van.add(
  document.body,
  div(
    { id: "genre" },
    h1("Genre"),
    div({ class: "holder" }, randOption(1, genre), randOption(2, genre))
  )
);

van.add(
  document.body,
  div(
    { id: "setting" },
    h1("Location"),
    div({ class: "holder" }, randOption(1, loc1), randOption(2, loc1))
  )
);

van.add(
  document.body,
  div(
    { id: "setting" },
    h1("Theme"),
    div(
      { class: "holder" },
      randOption(1, artStyle),
      randOption(2, timePeriod),
      randOption(3, geographic)
    )
  )
);

van.add(
  document.body,
  div(
    { id: "mechanics" },
    h1("Mechanics"),
    div({ class: "holder" }, randOption(1, mechanics), randOption(2, mechanics))
  )
);
