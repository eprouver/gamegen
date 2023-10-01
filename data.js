const mechanics = [
  {
    id: "acting",
    name: "Acting",
    description:
      "Players physically act out or mimic actions as part of gameplay.",
  },
  {
    id: "action-drafting",
    name: "Action Drafting",
    description:
      "Players draft actions or abilities they can use during their turns.",
  },
  {
    id: "action-points",
    name: "Action Points",
    description:
      "Players have a limited number of action points to spend on various actions.",
  },
  {
    id: "action-queue",
    name: "Action Queue",
    description:
      "Players plan and queue up actions to be resolved in a specific order.",
  },
  {
    id: "action-retrieval",
    name: "Action Retrieval",
    description:
      "Players retrieve specific actions or abilities from a shared pool.",
  },
  {
    id: "action-timer",
    name: "Action Timer",
    description:
      "Players are limited by a timer to make decisions and take actions.",
  },
  {
    id: "action-event",
    name: "Action/Event",
    description: "Specific actions or events trigger game-changing effects.",
  },
  {
    id: "advantage-token",
    name: "Advantage Token",
    description:
      "Players gain tokens that provide advantages or benefits during the game.",
  },
  {
    id: "alliances",
    name: "Alliances",
    description:
      "Players form temporary alliances or partnerships to achieve common goals.",
  },
  {
    id: "area-majority-influence",
    name: "Area Majority / Influence",
    description:
      "Players compete to have the most influence or control in specific regions of the game board.",
  },
  {
    id: "area-movement",
    name: "Area Movement",
    description:
      "Players move their pieces across the game board in a spatial manner.",
  },
  {
    id: "area-impulse",
    name: "Area-Impulse",
    description:
      "Players take actions in areas based on the impulse or initiative system.",
  },
  {
    id: "auction-compensation",
    name: "Auction Compensation",
    description:
      "Players receive compensation or rewards for participating in auctions.",
  },
  {
    id: "auction-dexterity",
    name: "Auction: Dexterity",
    description:
      "Auction-style mechanics combined with physical dexterity challenges.",
  },
  {
    id: "auction-dutch",
    name: "Auction: Dutch",
    description:
      "An auction format where the price decreases over time, encouraging bids.",
  },
  {
    id: "auction-dutch-priority",
    name: "Auction: Dutch Priority",
    description:
      "Auction format with priority rules determining who wins when multiple bids match.",
  },
  {
    id: "auction-english",
    name: "Auction: English",
    description:
      "Auction format where the highest bid wins the item being auctioned.",
  },
  {
    id: "auction-fixed-placement",
    name: "Auction: Fixed Placement",
    description:
      "Players place bids in specific locations on the board during an auction.",
  },
  {
    id: "auction-multiple-lot",
    name: "Auction: Multiple Lot",
    description:
      "An auction format where multiple items or lots are auctioned at once.",
  },
  {
    id: "auction-once-around",
    name: "Auction: Once Around",
    description:
      "An auction format where players take turns bidding once until all pass.",
  },
  {
    id: "auction-sealed-bid",
    name: "Auction: Sealed Bid",
    description:
      "Players submit secret bids, and the highest bidder wins without revealing the amount.",
  },
  {
    id: "auction-turn-order-until-pass",
    name: "Auction: Turn Order Until Pass",
    description:
      "Auction format where players take turns bidding for turn order until one passes.",
  },
  {
    id: "auction-bidding",
    name: "Auction/Bidding",
    description:
      "Players participate in auctions to acquire items, resources, or turn order.",
  },
  {
    id: "automatic-resource-growth",
    name: "Automatic Resource Growth",
    description:
      "Resources or assets automatically increase in quantity over time.",
  },
  {
    id: "betting-and-bluffing",
    name: "Betting and Bluffing",
    description:
      "Players make bets and use bluffing tactics to mislead opponents.",
  },
  {
    id: "bias",
    name: "Bias",
    description: "Game elements or rules favor certain players or strategies.",
  },
  {
    id: "bids-as-wagers",
    name: "Bids As Wagers",
    description: "Bids made during the game serve as wagers or bets.",
  },
  {
    id: "bingo",
    name: "Bingo",
    description:
      "Players mark off numbers or items on a card as they are called out.",
  },
  {
    id: "bribery",
    name: "Bribery",
    description:
      "Players offer incentives or rewards to influence the decisions of others.",
  },
  {
    id: "campaign-battle-card-driven",
    name: "Campaign / Battle Card Driven",
    description:
      "Gameplay is driven by cards that represent campaign or battle actions.",
  },
  {
    id: "card-play-conflict-resolution",
    name: "Card Play Conflict Resolution",
    description:
      "Card-based mechanics determine the outcome of conflicts or challenges.",
  },
  {
    id: "catch-the-leader",
    name: "Catch the Leader",
    description:
      "Game mechanics allow trailing players to catch up to or hinder the leader.",
  },
  {
    id: "chaining",
    name: "Chaining",
    description:
      "Players take actions in sequence, and one action may lead to another.",
  },
  {
    id: "chit-pull-system",
    name: "Chit-Pull System",
    description:
      "Players draw chits or tokens from a pool to determine actions or outcomes.",
  },
  {
    id: "closed-drafting",
    name: "Closed Drafting",
    description:
      "Players draft cards from a closed pool, where cards are hidden from view.",
  },
  {
    id: "closed-economy-auction",
    name: "Closed Economy Auction",
    description:
      "Auction system where the total budget is fixed and players bid on items within that budget.",
  },
  {
    id: "command-cards",
    name: "Command Cards",
    description: "Players use command cards to issue orders or take actions.",
  },
  {
    id: "commodity-speculation",
    name: "Commodity Speculation",
    description:
      "Players speculate on the future value of commodities or resources.",
  },
  {
    id: "communication-limits",
    name: "Communication Limits",
    description: "Game rules restrict or limit communication between players.",
  },
  {
    id: "connections",
    name: "Connections",
    description:
      "Players establish connections or routes between game elements or locations.",
  },
  {
    id: "constrained-bidding",
    name: "Constrained Bidding",
    description: "Players have restrictions on their bidding choices.",
  },
  {
    id: "contracts",
    name: "Contracts",
    description:
      "Players enter into contracts or agreements that affect gameplay.",
  },
  {
    id: "cooperative-game",
    name: "Cooperative Game",
    description:
      "Players work together as a team to achieve a common goal or overcome challenges.",
  },
  {
    id: "crayon-rail-system",
    name: "Crayon Rail System",
    description:
      "Players draw routes or tracks on the game board to build railways or networks.",
  },
  {
    id: "critical-hits-and-failures",
    name: "Critical Hits and Failures",
    description: "Game mechanics include critical success or failure outcomes.",
  },
  {
    id: "cube-tower",
    name: "Cube Tower",
    description:
      "A cube tower is used to resolve certain game events or conflicts.",
  },
  {
    id: "deck-construction",
    name: "Deck Construction",
    description:
      "Players construct and customize their decks of cards during the game.",
  },
  {
    id: "deck-bag-pool-building",
    name: "Deck, Bag, and Pool Building",
    description:
      "Players build and customize their decks, bags, or pools of resources.",
  },
  {
    id: "deduction",
    name: "Deduction",
    description:
      "Players use logic, reasoning, and clues to solve mysteries or identify hidden information.",
  },
  {
    id: "delayed-purchase",
    name: "Delayed Purchase",
    description:
      "Players make decisions to purchase or acquire items that are resolved at a later time.",
  },
  {
    id: "dice-rolling",
    name: "Dice Rolling",
    description: "Players roll dice to determine outcomes or resolve actions.",
  },
  {
    id: "die-icon-resolution",
    name: "Die Icon Resolution",
    description:
      "Icons on dice are used to resolve actions or determine outcomes.",
  },
  {
    id: "different-dice-movement",
    name: "Different Dice Movement",
    description:
      "Various types of dice movement mechanics are used in the game.",
  },
  {
    id: "drawing",
    name: "Drawing",
    description:
      "Players draw cards, tiles, or other components from a deck or pool.",
  },
  {
    id: "elapsed-real-time-ending",
    name: "Elapsed Real Time Ending",
    description:
      "The game has a real-time component that determines its ending.",
  },
  {
    id: "enclosure",
    name: "Enclosure",
    description: "Players try to enclose areas on the game board.",
  },
  {
    id: "end-game-bonuses",
    name: "End Game Bonuses",
    description:
      "Players receive bonuses or rewards at the end of the game based on specific criteria.",
  },
  {
    id: "events",
    name: "Events",
    description: "Random events or occurrences affect gameplay.",
  },
  {
    id: "finale-ending",
    name: "Finale Ending",
    description: "The game has a climactic ending or final phase.",
  },
  {
    id: "flicking",
    name: "Flicking",
    description: "Players use a flicking motion to move game pieces or tokens.",
  },
  {
    id: "follow",
    name: "Follow",
    description:
      "Players can mimic or follow the actions taken by other players.",
  },
  {
    id: "force-commitment",
    name: "Force Commitment",
    description:
      "Players are forced to commit to actions or decisions before seeing the full outcome.",
  },
  {
    id: "grid-coverage",
    name: "Grid Coverage",
    description:
      "Players try to cover or occupy grid spaces on the game board.",
  },
  {
    id: "grid-movement",
    name: "Grid Movement",
    description: "Players move their pieces along a grid-based system.",
  },
  {
    id: "hand-management",
    name: "Hand Management",
    description:
      "Players strategically manage and use the cards or components in their hand.",
  },
  {
    id: "hexagon-grid",
    name: "Hexagon Grid",
    description: "The game board is organized using a hexagonal grid pattern.",
  },
  {
    id: "hidden-movement",
    name: "Hidden Movement",
    description: "One player's movements or actions are concealed from others.",
  },
  {
    id: "hidden-roles",
    name: "Hidden Roles",
    description:
      "Players are assigned secret roles that may influence the game's outcome.",
  },
  {
    id: "hidden-victory-points",
    name: "Hidden Victory Points",
    description:
      "Players keep their victory points secret until the end of the game.",
  },
  {
    id: "highest-lowest-scoring",
    name: "Highest-Lowest Scoring",
    description:
      "Players aim to achieve both the highest and lowest scores simultaneously.",
  },
  {
    id: "hot-potato",
    name: "Hot Potato",
    description:
      "A game element or condition is passed between players in a 'hot potato' manner.",
  },
  {
    id: "i-cut-you-choose",
    name: "I Cut, You Choose",
    description:
      "One player divides a set of resources, and the other players choose their share.",
  },
  {
    id: "impulse-movement",
    name: "Impulse Movement",
    description:
      "Players take actions based on impulses or signals from game mechanics.",
  },
  {
    id: "income",
    name: "Income",
    description:
      "Players receive regular income or resources at specific intervals.",
  },
  {
    id: "increase-value-of-unchosen-resources",
    name: "Increase Value of Unchosen Resources",
    description:
      "Unused or unchosen resources increase in value or effectiveness over time.",
  },
  {
    id: "induction",
    name: "Induction",
    description:
      "Players use deduction and reasoning to determine hidden information.",
  },
  {
    id: "interrupts",
    name: "Interrupts",
    description:
      "Players can interrupt or respond to actions taken by others during their turn.",
  },
  {
    id: "investment",
    name: "Investment",
    description:
      "Players invest resources or assets with the expectation of future returns.",
  },
  {
    id: "kill-steal",
    name: "Kill Steal",
    description:
      "Players can 'steal' or defeat another player's target or achievement.",
  },
  {
    id: "king-of-the-hill",
    name: "King of the Hill",
    description:
      "Players aim to control a specific area or location to earn points or victory.",
  },
  {
    id: "ladder-climbing",
    name: "Ladder Climbing",
    description:
      "Players aim to play specific sequences of cards or achieve ladder-like progressions.",
  },
  {
    id: "layering",
    name: "Layering",
    description:
      "Game components or effects are layered or stacked on top of each other.",
  },
  {
    id: "legacy-game",
    name: "Legacy Game",
    description:
      "Games evolve over multiple sessions, with persistent changes.",
  },
  {
    id: "line-drawing",
    name: "Line Drawing",
    description:
      "Players draw lines or paths on the game board to achieve objectives.",
  },
  {
    id: "line-of-sight",
    name: "Line of Sight",
    description:
      "Game rules consider visibility and obstructions in determining actions or effects.",
  },
  {
    id: "loans",
    name: "Loans",
    description:
      "Players can take out loans or borrow resources with future repayment.",
  },
  {
    id: "lose-a-turn",
    name: "Lose a Turn",
    description:
      "Players may lose their turn or actions due to certain conditions or events.",
  },
  {
    id: "mancala",
    name: "Mancala",
    description:
      "Players move pieces around the board following specific rules and capturing opponents' pieces.",
  },
  {
    id: "map-addition",
    name: "Map Addition",
    description:
      "Players add elements or components to the game board, expanding the map.",
  },
  {
    id: "map-deformation",
    name: "Map Deformation",
    description:
      "Players change the shape or structure of the game board during play.",
  },
  {
    id: "map-reduction",
    name: "Map Reduction",
    description:
      "Players reduce the size or complexity of the game board during play.",
  },
  {
    id: "market",
    name: "Market",
    description:
      "A market or economy is simulated in the game, and players buy and sell resources or goods.",
  },
  {
    id: "matching",
    name: "Matching",
    description:
      "Players match or pair items or elements based on specific criteria.",
  },
  {
    id: "measurement-movement",
    name: "Measurement Movement",
    description:
      "Players move pieces based on specific measurements or distances.",
  },
  {
    id: "melding-and-splaying",
    name: "Melding and Splaying",
    description:
      "Players organize and arrange cards in specific ways, such as melding or splaying.",
  },
  {
    id: "memory",
    name: "Memory",
    description:
      "Players rely on their memory to recall information or game elements.",
  },
  {
    id: "minimap-resolution",
    name: "Minimap Resolution",
    description:
      "A smaller map or board represents the larger game world, and players resolve actions on it.",
  },
  {
    id: "modular-board",
    name: "Modular Board",
    description:
      "The game board is made up of modular pieces that can be rearranged for each playthrough.",
  },
  {
    id: "move-through-deck",
    name: "Move Through Deck",
    description:
      "Players move through a deck of cards as part of their actions or movement.",
  },
  {
    id: "movement-points",
    name: "Movement Points",
    description:
      "Players spend movement points to move their pieces on the game board.",
  },
  {
    id: "movement-template",
    name: "Movement Template",
    description:
      "Players use templates or guides to determine the movement of game pieces.",
  },
  {
    id: "moving-multiple-units",
    name: "Moving Multiple Units",
    description:
      "Players control and move multiple units or pieces during their turn.",
  },
  {
    id: "multi-use-cards",
    name: "Multi-Use Cards",
    description:
      "Cards in the game can be used for various purposes or actions.",
  },
  {
    id: "multiple-maps",
    name: "Multiple Maps",
    description:
      "The game includes multiple maps or boards that interact with each other.",
  },
  {
    id: "narrative-choice-paragraph",
    name: "Narrative Choice / Paragraph",
    description:
      "Players make narrative choices that lead to specific paragraphs or story outcomes.",
  },
  {
    id: "negotiation",
    name: "Negotiation",
    description:
      "Players engage in discussions and negotiations to make deals or alliances.",
  },
  {
    id: "neighbor-scope",
    name: "Neighbor Scope",
    description:
      "Game mechanics consider interactions with neighboring players or pieces.",
  },
  {
    id: "network-route-building",
    name: "Network and Route Building",
    description: "Players build networks or routes on the game board.",
  },
  {
    id: "once-per-game-abilities",
    name: "Once-Per-Game Abilities",
    description:
      "Players have unique abilities that can be used only once per game.",
  },
  {
    id: "open-drafting",
    name: "Open Drafting",
    description:
      "Players draft cards from a shared open pool, where choices are visible.",
  },
  {
    id: "order-counters",
    name: "Order Counters",
    description:
      "Players use counters or tokens to determine turn order or initiative.",
  },
  {
    id: "ordering",
    name: "Ordering",
    description:
      "Players determine the order of actions or events in the game.",
  },
  {
    id: "ownership",
    name: "Ownership",
    description: "Players have ownership of specific game elements or areas.",
  },
  {
    id: "paper-and-pencil",
    name: "Paper-and-Pencil",
    description:
      "Players use paper and pencil to keep track of game information or make choices.",
  },
  {
    id: "passed-action-token",
    name: "Passed Action Token",
    description:
      "A token or marker is passed among players to indicate their turn or actions.",
  },
  {
    id: "pattern-building",
    name: "Pattern Building",
    description:
      "Players create specific patterns or structures using game components.",
  },
  {
    id: "pattern-movement",
    name: "Pattern Movement",
    description: "Players move pieces in specific patterns or shapes.",
  },
  {
    id: "pattern-recognition",
    name: "Pattern Recognition",
    description: "Players identify and match patterns on the game components.",
  },
  {
    id: "physical-removal",
    name: "Physical Removal",
    description:
      "Players physically remove game components as part of gameplay.",
  },
  {
    id: "pick-up-and-deliver",
    name: "Pick-up and Deliver",
    description:
      "Players collect and deliver items or resources to specific locations.",
  },
  {
    id: "pieces-as-map",
    name: "Pieces as Map",
    description: "Game pieces themselves represent the map or terrain.",
  },
  {
    id: "player-elimination",
    name: "Player Elimination",
    description:
      "Players are eliminated from the game if certain conditions are met.",
  },
  {
    id: "player-judge",
    name: "Player Judge",
    description:
      "A player acts as a judge, making decisions or rulings during the game.",
  },
  {
    id: "point-to-point-movement",
    name: "Point to Point Movement",
    description:
      "Players move their pieces from one specific point to another on the game board.",
  },
  {
    id: "predictive-bid",
    name: "Predictive Bid",
    description:
      "Players make bids based on predictions or forecasts of future events.",
  },
  {
    id: "prisoners-dilemma",
    name: "Prisoner's Dilemma",
    description:
      "Game situations model the classic Prisoner's Dilemma scenario.",
  },
  {
    id: "programmed-movement",
    name: "Programmed Movement",
    description: "Players pre-program or plan their movements in advance.",
  },
  {
    id: "push-your-luck",
    name: "Push Your Luck",
    description:
      "Players take risks by pushing their luck in hopes of greater rewards.",
  },
  {
    id: "questions-and-answers",
    name: "Questions and Answers",
    description: "Gameplay involves answering questions or solving riddles.",
  },
  {
    id: "race",
    name: "Race",
    description:
      "Players compete in a race to achieve a specific goal or reach a destination.",
  },
  {
    id: "random-production",
    name: "Random Production",
    description:
      "Resource production or generation is determined by random factors.",
  },
  {
    id: "ratio-combat-results-table",
    name: "Ratio / Combat Results Table",
    description:
      "Combat outcomes are determined by comparing forces using a table or ratio.",
  },
  {
    id: "re-rolling-and-locking",
    name: "Re-rolling and Locking",
    description:
      "Players can re-roll dice or lock in specific results during gameplay.",
  },
  {
    id: "real-time",
    name: "Real-Time",
    description: "Gameplay occurs in real-time, with no distinct turns.",
  },
  {
    id: "relative-movement",
    name: "Relative Movement",
    description:
      "Player movements are determined in relation to other game elements.",
  },
  {
    id: "resource-queue",
    name: "Resource Queue",
    description: "Players queue up or prioritize resource acquisition.",
  },
  {
    id: "resource-to-move",
    name: "Resource to Move",
    description: "Resources are expended to facilitate movement in the game.",
  },
  {
    id: "rock-paper-scissors",
    name: "Rock-Paper-Scissors",
    description:
      "Game outcomes are determined using the Rock-Paper-Scissors hand game.",
  },
  {
    id: "role-playing",
    name: "Role Playing",
    description:
      "Players take on roles and engage in storytelling or role-playing elements.",
  },
  {
    id: "roles-with-asymmetric-information",
    name: "Roles with Asymmetric Information",
    description: "Players have different roles and access to information.",
  },
  {
    id: "roll-spin-and-move",
    name: "Roll / Spin and Move",
    description:
      "Players roll dice or spin a wheel to determine movement or actions.",
  },
  {
    id: "rondel",
    name: "Rondel",
    description:
      "A rondel game (or aspect of a game) is one in which a player's choice of actions is limited by their ability to move around the rondel, and so the player is restricted from taking the same action repeatedly.",
  },
  {
    id: "scenario-mission-campaign-game",
    name: "Scenario / Mission / Campaign Game",
    description:
      "Gameplay is divided into scenarios, missions, or campaigns with unique objectives.",
  },
  {
    id: "score-and-reset-game",
    name: "Score-and-Reset Game",
    description:
      "Players accumulate points or score, and the game periodically resets.",
  },
  {
    id: "secret-unit-deployment",
    name: "Secret Unit Deployment",
    description: "Players secretly deploy units or pieces on the game board.",
  },
  {
    id: "selection-order-bid",
    name: "Selection Order Bid",
    description:
      "Players bid to determine the order in which they choose game elements.",
  },
  {
    id: "semi-cooperative-game",
    name: "Semi-Cooperative Game",
    description:
      "Players work together toward a common goal but may have individual objectives or hidden agendas.",
  },
  {
    id: "set-collection",
    name: "Set Collection",
    description:
      "Players collect sets of specific game elements for points or advantages.",
  },
  {
    id: "simulation",
    name: "Simulation",
    description: "Games simulate real-world processes, situations, or systems.",
  },
  {
    id: "simultaneous-action-selection",
    name: "Simultaneous Action Selection",
    description:
      "Players choose actions simultaneously and reveal them together.",
  },
  {
    id: "singing",
    name: "Singing",
    description:
      "Singing or vocalization is part of gameplay or decision-making.",
  },
  {
    id: "single-loser-game",
    name: "Single Loser Game",
    description:
      "The game continues until only one player remains, with all others losing.",
  },
  {
    id: "slide-push",
    name: "Slide/Push",
    description: "Players slide or push game components to achieve objectives.",
  },
  {
    id: "solo-solitaire-game",
    name: "Solo / Solitaire Game",
    description:
      "The game is designed for solo play, with no other players involved.",
  },
  {
    id: "speed-matching",
    name: "Speed Matching",
    description:
      "Players engage in fast-paced matching or pattern recognition challenges.",
  },
  {
    id: "square-grid",
    name: "Square Grid",
    description: "The game board is organized using a square grid pattern.",
  },
  {
    id: "stacking-and-balancing",
    name: "Stacking and Balancing",
    description: "Players stack or balance game components in specific ways.",
  },
  {
    id: "stacking-and-turn-order",
    name: "Stacking and Turn Order",
    description: "Game pieces are stacked to determine turn order or actions.",
  },
  {
    id: "start-player-bid",
    name: "Start Player Bid",
    description: "Players bid to determine the starting player for the game.",
  },
  {
    id: "static-variable-setup",
    name: "Static Variable Setup",
    description:
      "Game setup includes static variables that don't change during play.",
  },
  {
    id: "steal-and-trade-assets",
    name: "Steal and Trade Assets",
    description:
      "Players can steal or trade assets and resources with each other.",
  },
  {
    id: "stock-market",
    name: "Stock Market",
    description:
      "Players buy and sell stocks or shares in a simulated stock market.",
  },
  {
    id: "storytelling",
    name: "Storytelling",
    description:
      "Players engage in storytelling or narrative-building as part of gameplay.",
  },
  {
    id: "strategic-movement",
    name: "Strategic Movement",
    description:
      "Players make strategic decisions about the movement of game pieces.",
  },
  {
    id: "take-that",
    name: "Take That",
    description:
      "Players use actions or cards to directly hinder or attack opponents.",
  },
  {
    id: "targeted-clues",
    name: "Targeted Clues",
    description:
      "Specific clues or information is provided to targeted players.",
  },
  {
    id: "territory-building",
    name: "Territory Building",
    description: "Players claim and build territories on the game board.",
  },
  {
    id: "tile-laying",
    name: "Tile Laying",
    description:
      "Players place tiles or pieces on the game board to build or modify the environment.",
  },
  {
    id: "time-track",
    name: "Time Track",
    description:
      "A track or timeline represents the progression of time in the game.",
  },
  {
    id: "trading",
    name: "Trading",
    description:
      "Players exchange resources, assets, or goods with each other.",
  },
  {
    id: "traitor",
    name: "Traitor",
    description:
      "One or more players may be secretly working against the group's goals.",
  },
  {
    id: "trick-taking",
    name: "Trick-Taking",
    description: "Players play cards or take actions in a trick-taking format.",
  },
  {
    id: "variable-player-powers",
    name: "Variable Player Powers",
    description:
      "Players have unique powers or abilities that affect gameplay.",
  },
  {
    id: "victory-points-as-a-resource",
    name: "Victory Points as a Resource",
    description:
      "Victory points can be spent or used as a resource for actions.",
  },
  {
    id: "voting",
    name: "Voting",
    description: "Players vote to make decisions or determine game outcomes.",
  },
  {
    id: "worker-placement",
    name: "Worker Placement",
    description:
      "Players place workers or tokens on specific locations to take actions.",
  },
];

const genre = [
  {
    id: "abstract-strategy",
    name: "Abstract Strategy",
    description:
      "Games that focus on strategic thinking and lack a theme or narrative.",
  },
  {
    id: "action-dexterity",
    name: "Action / Dexterity",
    description:
      "Games that involve physical skills, coordination, and quick reflexes.",
  },
  {
    id: "adventure",
    name: "Adventure",
    description:
      "Games that involve exploration, storytelling, and epic quests.",
  },
  {
    id: "age-of-reason",
    name: "Age of Reason",
    description: "Games set in historical periods of enlightenment and reason.",
  },
  {
    id: "american-civil-war",
    name: "American Civil War",
    description: "Games that simulate the American Civil War and its battles.",
  },
  {
    id: "american-indian-wars",
    name: "American Indian Wars",
    description:
      "Games set during conflicts between Native American tribes and European settlers.",
  },
  {
    id: "american-revolutionary-war",
    name: "American Revolutionary War",
    description: "Games that recreate the American Revolutionary War.",
  },
  {
    id: "american-west",
    name: "American West",
    description: "Games set in the American Wild West frontier.",
  },
  {
    id: "ancient",
    name: "Ancient",
    description: "Games set in ancient civilizations and historical periods.",
  },
  {
    id: "animals",
    name: "Animals",
    description: "Games featuring animals as a central theme or component.",
  },
  {
    id: "arabian",
    name: "Arabian",
    description: "Games inspired by Arabian culture, folklore, or settings.",
  },
  {
    id: "aviation-flight",
    name: "Aviation / Flight",
    description: "Games centered around aviation, flying, or aircraft.",
  },
  {
    id: "bluffing",
    name: "Bluffing",
    description:
      "Games where players deceive or mislead opponents to achieve their goals.",
  },
  {
    id: "book",
    name: "Book",
    description: "Games based on literary works or books.",
  },
  {
    id: "card-game",
    name: "Card Game",
    description:
      "Games primarily played with a deck of cards as the central component.",
  },
  {
    id: "childrens-game",
    name: "Children's Game",
    description: "Games designed for and suitable for children.",
  },
  {
    id: "city-building",
    name: "City Building",
    description:
      "Games where players construct and develop cities or civilizations.",
  },
  {
    id: "civil-war",
    name: "Civil War",
    description: "Games set during historical civil wars.",
  },
  {
    id: "civilization",
    name: "Civilization",
    description:
      "Games that focus on the growth and development of civilizations.",
  },
  {
    id: "collectible-components",
    name: "Collectible Components",
    description:
      "Games that involve collecting and trading components or cards.",
  },
  {
    id: "comic-book-strip",
    name: "Comic Book / Strip",
    description: "Games inspired by comic books or comic strips.",
  },
  {
    id: "deduction",
    name: "Deduction",
    description:
      "Games where players deduce hidden information or solve mysteries.",
  },
  {
    id: "dice",
    name: "Dice",
    description: "Games that heavily involve dice as a primary mechanic.",
  },
  {
    id: "economic",
    name: "Economic",
    description: "Games where players manage resources and economies.",
  },
  {
    id: "educational",
    name: "Educational",
    description:
      "Games designed for educational purposes or to teach specific concepts.",
  },
  {
    id: "electronic",
    name: "Electronic",
    description: "Games that incorporate electronic components or devices.",
  },
  {
    id: "environmental",
    name: "Environmental",
    description: "Games with a focus on environmental themes and issues.",
  },
  {
    id: "expansion-for-base-game",
    name: "Expansion for Base-game",
    description: "Expansion sets that add content to a base game.",
  },
  {
    id: "exploration",
    name: "Exploration",
    description:
      "Games that involve discovering new territories or uncovering hidden information.",
  },
  {
    id: "fan-expansion",
    name: "Fan Expansion",
    description: "Fan-created expansions for existing games.",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    description:
      "Games set in fantastical worlds with magic, mythical creatures, and epic adventures.",
  },
  {
    id: "farming",
    name: "Farming",
    description: "Games that simulate farming and agricultural activities.",
  },
  {
    id: "fighting",
    name: "Fighting",
    description: "Games focused on combat, martial arts, or battles.",
  },
  {
    id: "game-system",
    name: "Game System",
    description: "Games that belong to a specific game system or series.",
  },
  {
    id: "horror",
    name: "Horror",
    description: "Games that aim to evoke fear, suspense, or horror themes.",
  },
  {
    id: "humor",
    name: "Humor",
    description: "Games designed to be humorous or light-hearted in nature.",
  },
  {
    id: "industry-manufacturing",
    name: "Industry / Manufacturing",
    description:
      "Games centered around industrial processes, factories, or manufacturing.",
  },
  {
    id: "korean-war",
    name: "Korean War",
    description: "Games set during the Korean War conflict.",
  },
  {
    id: "mafia",
    name: "Mafia",
    description:
      "Games inspired by organized crime, secret societies, or mafia culture.",
  },
  {
    id: "math",
    name: "Math",
    description:
      "Games that involve mathematical concepts, puzzles, or challenges.",
  },
  {
    id: "mature-adult",
    name: "Mature / Adult",
    description: "Games intended for mature or adult audiences.",
  },
  {
    id: "maze",
    name: "Maze",
    description: "Games featuring mazes or labyrinthine puzzles.",
  },
  {
    id: "medical",
    name: "Medical",
    description: "Games with medical or healthcare themes.",
  },
  {
    id: "medieval",
    name: "Medieval",
    description:
      "Games set in medieval times, featuring knights, castles, and feudal systems.",
  },
  {
    id: "memory",
    name: "Memory",
    description: "Games that test and improve memory recall.",
  },
  {
    id: "miniatures",
    name: "Miniatures",
    description:
      "Games that use detailed miniature figures to represent characters and units.",
  },
  {
    id: "modern-warfare",
    name: "Modern Warfare",
    description: "Games set in contemporary or modern military conflicts.",
  },
  {
    id: "movies-tv-radio-theme",
    name: "Movies / TV / Radio Theme",
    description: "Games based on popular movies, TV shows, or radio programs.",
  },
  {
    id: "murder-mystery",
    name: "Murder/Mystery",
    description: "Games focused on solving mysteries or investigating crimes.",
  },
  {
    id: "music",
    name: "Music",
    description: "Games with a musical theme or component.",
  },
  {
    id: "mythology",
    name: "Mythology",
    description: "Games inspired by myths, legends, and ancient folklore.",
  },
  {
    id: "napoleonic",
    name: "Napoleonic",
    description: "Games set during the Napoleonic era and its battles.",
  },
  {
    id: "nautical",
    name: "Nautical",
    description: "Games with a maritime or sea-faring theme.",
  },
  {
    id: "negotiation",
    name: "Negotiation",
    description: "Games that involve player negotiations and deal-making.",
  },
  {
    id: "novel-based",
    name: "Novel-based",
    description: "Games based on novels, literature, or written works.",
  },
  {
    id: "number",
    name: "Number",
    description:
      "Games that involve numbers, counting, or numerical challenges.",
  },
  {
    id: "party-game",
    name: "Party Game",
    description:
      "Games designed for social gatherings and group entertainment.",
  },
  {
    id: "pike-and-shot",
    name: "Pike and Shot",
    description: "Games set in the Pike and Shot era of warfare.",
  },
  {
    id: "pirates",
    name: "Pirates",
    description:
      "Games featuring pirates, buccaneers, and high-sea adventures.",
  },
  {
    id: "political",
    name: "Political",
    description:
      "Games centered around political themes, strategies, and decision-making.",
  },
  {
    id: "post-napoleonic",
    name: "Post-Napoleonic",
    description: "Games set in the aftermath of the Napoleonic era.",
  },
  {
    id: "prehistoric",
    name: "Prehistoric",
    description:
      "Games set in prehistoric times, featuring early human civilizations and dinosaurs.",
  },
  {
    id: "print-play",
    name: "Print & Play",
    description: "Games that are available for download and self-printing.",
  },
  {
    id: "puzzle",
    name: "Puzzle",
    description:
      "Games that involve solving puzzles, riddles, or brain teasers.",
  },
  {
    id: "racing",
    name: "Racing",
    description:
      "Games that simulate racing competitions, including cars, horses, or other vehicles.",
  },
  {
    id: "real-time",
    name: "Real-time",
    description:
      "Games where actions occur in real-time with no distinct turns.",
  },
  {
    id: "religious",
    name: "Religious",
    description: "Games with religious or spiritual themes.",
  },
  {
    id: "renaissance",
    name: "Renaissance",
    description: "Games set in the historical period known as the Renaissance.",
  },
  {
    id: "science-fiction",
    name: "Science Fiction",
    description:
      "Games set in futuristic or space-faring settings with advanced technology.",
  },
  {
    id: "space-exploration",
    name: "Space Exploration",
    description:
      "Games focused on exploring outer space, planets, and galaxies.",
  },
  {
    id: "spies-secret-agents",
    name: "Spies/Secret Agents",
    description:
      "Games where players take on the roles of spies, secret agents, or espionage.",
  },
  {
    id: "sports",
    name: "Sports",
    description:
      "Games that simulate various sports and athletic competitions.",
  },
  {
    id: "territory-building",
    name: "Territory Building",
    description:
      "Games where players claim and build territories on the game board.",
  },
  {
    id: "trains",
    name: "Trains",
    description: "Games centered around trains, railways, and locomotives.",
  },
  {
    id: "transportation",
    name: "Transportation",
    description:
      "Games involving the movement of people or goods via different modes of transportation.",
  },
  {
    id: "travel",
    name: "Travel",
    description:
      "Games that focus on travel, exploration, and journeying to different locations.",
  },
  {
    id: "trivia",
    name: "Trivia",
    description:
      "Games that challenge players' knowledge and facts on various topics.",
  },
  {
    id: "video-game-theme",
    name: "Video Game Theme",
    description: "Games inspired by video games, their worlds, or characters.",
  },
  {
    id: "vietnam-war",
    name: "Vietnam War",
    description: "Games set during the Vietnam War conflict.",
  },
  {
    id: "wargame",
    name: "Wargame",
    description:
      "Games that simulate historical or fictional warfare scenarios.",
  },
  {
    id: "word-game",
    name: "Word Game",
    description:
      "Games centered around wordplay, vocabulary, or language skills.",
  },
  {
    id: "world-war-i",
    name: "World War I",
    description: "Games set during the events of World War I.",
  },
  {
    id: "world-war-ii",
    name: "World War II",
    description: "Games set during the events of World War II.",
  },
  {
    id: "zombies",
    name: "Zombies",
    description:
      "Games featuring zombies, survival horror, or post-apocalyptic settings.",
  },
];

const loc1 = [
  {
    id: "beach",
    name: "Beach",
    description:
      "A sandy shore along the ocean, often a popular spot for swimming and sunbathing.",
  },
  {
    id: "forest",
    name: "Forest",
    description:
      "A dense area filled with trees and undergrowth, often teeming with wildlife.",
  },
  {
    id: "city",
    name: "City",
    description:
      "A densely populated urban area with buildings, streets, and a variety of amenities.",
  },
  {
    id: "mountain",
    name: "Mountain",
    description:
      "A large landform that rises steeply above its surroundings, offering scenic views and hiking opportunities.",
  },
  {
    id: "desert",
    name: "Desert",
    description:
      "An arid and barren landscape characterized by sand dunes, extreme temperatures, and sparse vegetation.",
  },
  {
    id: "jungle",
    name: "Jungle",
    description:
      "A lush and tropical forest often found in equatorial regions, known for its biodiversity.",
  },
  {
    id: "space",
    name: "Space",
    description:
      "The vast and infinite expanse beyond Earth's atmosphere, home to celestial bodies like planets and stars.",
  },
  {
    id: "castle",
    name: "Castle",
    description:
      "A large fortified structure typically built during medieval times for defense and residence.",
  },
  {
    id: "countryside",
    name: "Countryside",
    description:
      "Rural areas outside of cities and towns, often characterized by farms, fields, and natural beauty.",
  },
  {
    id: "underwater",
    name: "Underwater",
    description:
      "Beneath the surface of oceans, seas, or lakes, where aquatic life and unique ecosystems thrive.",
  },
];

const artStyle = [
  {
    id: "realism",
    name: "Realism",
    description:
      "Artistic style that aims to depict subjects as they appear in reality with high attention to detail.",
  },
  {
    id: "impressionism",
    name: "Impressionism",
    description:
      "Art style that captures the impression of a scene or subject through loose brushwork and color.",
  },
  {
    id: "cubism",
    name: "Cubism",
    description:
      "Artistic movement that presents subjects as geometric shapes and fragmented forms.",
  },
  {
    id: "surrealism",
    name: "Surrealism",
    description:
      "Art style that explores the world of dreams, the unconscious, and fantastical imagery.",
  },
  {
    id: "abstract",
    name: "Abstract",
    description:
      "Art style that emphasizes non-representational forms, shapes, and colors.",
  },
  {
    id: "pop-art",
    name: "Pop Art",
    description:
      "Art movement that incorporates popular culture and everyday objects into artworks.",
  },
  {
    id: "minimalism",
    name: "Minimalism",
    description:
      "Artistic style characterized by simplicity, minimal elements, and clean lines.",
  },
  {
    id: "renaissance",
    name: "Renaissance",
    description:
      "Art movement that flourished in Europe during the 14th to 17th centuries, known for its focus on realism and classical themes.",
  },
];

const geographic = [
  {
    id: "european",
    name: "European",
    description:
      "Art and culture originating from the diverse countries of Europe.",
  },
  {
    id: "asian",
    name: "Asian",
    description:
      "Art and culture originating from the various regions of Asia.",
  },
  {
    id: "african",
    name: "African",
    description:
      "Art and culture originating from the diverse countries and regions of Africa.",
  },
  {
    id: "latin-american",
    name: "Latin American",
    description:
      "Art and culture originating from the countries of Central and South America.",
  },
  {
    id: "north-american",
    name: "North American",
    description:
      "Art and culture originating from the United States and Canada.",
  },
  {
    id: "middle-eastern",
    name: "Middle Eastern",
    description:
      "Art and culture originating from the countries of the Middle East.",
  },
  {
    id: "oceanian",
    name: "Oceanian",
    description:
      "Art and culture originating from the diverse islands of Oceania.",
  },
];

const timePeriod = [
  {
    id: "medieval",
    name: "Medieval",
    description:
      "Art and style from the Middle Ages, characterized by Gothic architecture and religious themes.",
  },
  {
    id: "renaissance",
    name: "Renaissance",
    description:
      "Art and style from the 14th to 17th centuries known for its revival of classical themes and realism.",
  },
  {
    id: "baroque",
    name: "Baroque",
    description:
      "Art and style from the 17th to 18th centuries known for its dramatic and ornate aesthetics.",
  },
  {
    id: "modern",
    name: "Modern",
    description:
      "Art and style from the late 19th to early 20th centuries marked by innovation and abstraction.",
  },
  {
    id: "contemporary",
    name: "Contemporary",
    description:
      "Art and style of the present day, often characterized by diversity and experimentation.",
  },
  {
    id: "ancient",
    name: "Ancient",
    description:
      "Art and style from ancient civilizations, such as Egyptian, Greek, and Roman.",
  },
  {
    id: "art-nouveau",
    name: "Art Nouveau",
    description:
      "Art and style from the late 19th to early 20th centuries known for its organic and decorative motifs.",
  },
  {
    id: "art-deco",
    name: "Art Deco",
    description:
      "Art and style from the 1920s and 1930s known for its geometric shapes and luxury.",
  },
];
