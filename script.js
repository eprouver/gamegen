const mechanics = [
  {
    id: "roll-and-move",
    name: "Roll and Move",
    description:
      "Players roll dice and move their game pieces a corresponding number of spaces."
  },
  {
    id: "tile-placement",
    name: "Tile Placement",
    description:
      "Players place tiles to build the game board or alter it during play."
  },
  {
    id: "deck-building",
    name: "Deck Building",
    description:
      "Players construct and customize their decks of cards during the game."
  },
  {
    id: "worker-placement",
    name: "Worker Placement",
    description:
      "Players assign their pieces (workers) to various actions or locations on the board."
  },
  {
    id: "area-control",
    name: "Area Control",
    description: "Players vie for control of specific areas of the game board."
  },
  {
    id: "set-collection",
    name: "Set Collection",
    description: "Players gather sets of items or cards to score points."
  },
  {
    id: "cooperative-play",
    name: "Cooperative Play",
    description: "Players work together to achieve a common goal."
  },
  {
    id: "auction-bidding",
    name: "Auction/Bidding",
    description: "Players bid on items, resources, or turn order."
  },
  {
    id: "hidden-role",
    name: "Hidden Role",
    description:
      "Players are assigned secret roles that may influence the game's outcome."
  },
  {
    id: "role-playing",
    name: "Role Playing",
    description:
      "Players take on specific roles and make decisions as those characters."
  },
  {
    id: "deduction",
    name: "Deduction",
    description:
      "Players use clues and deduction to solve a mystery or identify hidden information."
  },
  {
    id: "resource-management",
    name: "Resource Management",
    description: "Players collect and manage resources to achieve their goals."
  },
  {
    id: "trading-negotiation",
    name: "Trading/Negotiation",
    description: "Players can trade resources or negotiate with each other."
  },
  {
    id: "push-your-luck",
    name: "Push Your Luck",
    description: "Players take risks with uncertain outcomes."
  },
  {
    id: "route-building",
    name: "Route Building",
    description: "Players build pathways or connections on the game board."
  },
  {
    id: "action-points",
    name: "Action Points",
    description:
      "Players have a limited number of actions they can take on their turn."
  },
  {
    id: "variable-player-powers",
    name: "Variable Player Powers",
    description: "Each player has unique abilities or advantages."
  },
  {
    id: "pattern-recognition",
    name: "Pattern Recognition",
    description: "Players identify and match patterns on the game components."
  },
  {
    id: "card-drafting",
    name: "Card Drafting",
    description: "Players choose cards from a shared pool during the game."
  },
  {
    id: "area-movement",
    name: "Area Movement",
    description:
      "Players move their pieces across the game board in a spatial manner."
  },
  {
    id: "time-track",
    name: "Time Track",
    description:
      "The game includes a track that represents the passage of time."
  },
  {
    id: "press-your-luck",
    name: "Press Your Luck",
    description:
      "Players make decisions with uncertain outcomes and risk losing progress."
  },
  {
    id: "resource-trading",
    name: "Resource Trading",
    description: "Players exchange resources with one another."
  },
  {
    id: "action-event-trigger",
    name: "Action/Event Trigger",
    description:
      "Certain actions or events trigger specific effects in the game."
  },
  {
    id: "logic-puzzle-solving",
    name: "Logic/Puzzle Solving",
    description:
      "Players solve puzzles or logical challenges as part of gameplay."
  },
  {
    id: "hidden-movement",
    name: "Hidden Movement",
    description: "One player's movements or actions are concealed from others."
  },
  {
    id: "legacy-campaign",
    name: "Legacy/Campaign",
    description: "Games evolve over multiple sessions, with persistent changes."
  },
  {
    id: "storytelling-narrative",
    name: "Storytelling/Narrative",
    description: "Players create or contribute to a developing story."
  },
  {
    id: "area-enclosure",
    name: "Area Enclosure",
    description: "Players try to enclose areas on the game board."
  },
  {
    id: "simultaneous-action-selection",
    name: "Simultaneous Action Selection",
    description: "Players choose their actions simultaneously."
  }
];

const genre = [
  {
    id: "strategy",
    name: "Strategy",
    description:
      "Games that require careful planning, decision-making, and long-term thinking."
  },
  {
    id: "party",
    name: "Party",
    description:
      "Games designed for large groups and focused on social interaction and fun."
  },
  {
    id: "role-playing",
    name: "Role-playing",
    description:
      "Games that involve taking on the roles of fictional characters and storytelling."
  },
  {
    id: "dexterity",
    name: "Dexterity",
    description: "Games that test physical skill, coordination, and precision."
  },
  {
    id: "word",
    name: "Word",
    description: "Games centered around vocabulary, spelling, and wordplay."
  },
  {
    id: "adventure",
    name: "Adventure",
    description:
      "Games that involve exploration, storytelling, and character progression."
  },
  {
    id: "abstract",
    name: "Abstract",
    description:
      "Games with minimal theme, focusing on strategy and logical thinking."
  },
  {
    id: "trivia",
    name: "Trivia",
    description:
      "Games that test players' knowledge with questions and answers."
  },
  {
    id: "puzzle",
    name: "Puzzle",
    description:
      "Games that challenge players with various puzzles, brainteasers, or mysteries."
  }
];

const { div, h1, h2, p } = van.tags;

const randOption = (index, arr) => {
  const loc = ~~(Math.random() * arr.length);
  const myMech = arr[loc];
  arr.splice(loc, 1);
  return div(
    { class: "card" },
    div({ class: "ordinal" }, `#${index}`),
    h2(myMech.name),
    p(myMech.description)
  );
};

van.add(
  document.body,
  div(
    { id: "mechanics" },
    h1("Mechanics"),
    div({ class: "holder" }, randOption(1, mechanics), randOption(2, mechanics))
  )
);

van.add(
  document.body,
  div(
    { id: "genre" },
    h1("Genre"),
    div({ class: "holder" }, randOption(1, genre), randOption(2, genre))
  )
);