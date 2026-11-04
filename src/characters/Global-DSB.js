
(() => {
  const BL = window.BL;

  BL.characters.add({
    handle: "Global-DSB",
    joined: "2026-11-04",
    lastCommit: "2026-11-04",
    github: "Global-DSB",

    display: {
      name: "🔥 Fire Elmo",
      description: "The fiery red monster"
    },

    look: {
      build: "stocky",
      skin: "red",
      fur: "bright red",
      eyes: "large white googly eyes",
      nose: "orange",
      mouth: "wide smile",
      fire: true,
      flames: {
        body: "orange",
        core: "yellow",
        intensity: "high",
        animated: true
      }
    },

    voice: {
      style: "high-pitched",
      personality: "chaotic, playful and mischievous",
      catchphrase: "ELMO IS ON FIRE!"
    },

    dress: {
      outfit: "classic simple Ooga clothing",
      weapon: {
        name: "Inferno Lollipop",
        type: "melee",
        appearance: "giant red and orange flaming lollipop",
        effects: ["fire", "embers", "flame trail"],
        replaces: "normal club"
      }
    }
  });
})();
