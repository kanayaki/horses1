const horsies = [
    {
      image: "L1.jpg",
      description: "Люблю лошадей - вот прекрасные звери!",
    },
    {
      image: "L2.jpg",
      description: "Но в чём же любовь мне к лошадкам измерить?",
    },
    {
      image: "L3.jpg",
      description: "Она, как мне кажется, очень весома!..",
    },
    {
      image: "L4.jpg",
      description: "Размером с площадку, киоск и три дома.",
    },
    {
      image: "L5.jpg",
      description: "Да что там c киоск! - Пустяки, несомненно.",
    },
    {
      image: "L6.jpg",
      description: "Любовь к лошадям больше целой Вселенной.",
    },
    {
        image: "L7.jpg",
        description: "❤️",
    },
    {
        image: "L8.jpg",
        description: "❤️",
    },
    {
        image: "L9.jpg",
        description: "❤️",
    }  
  ];
  
  function onehorse(horse) {
    const block = document.createElement("div");
    block.classList.add("style_product");
  
    const image = document.createElement("img");
    image.src = horse.image;
    block.appendChild(image);
  
    const description = document.createElement("p");
    description.textContent = horse.description;
    block.appendChild(description);
  
    return block;
    }

const container = document.getElementById("for_horses");

horsies.forEach(horse => {
  const pblock = onehorse(horse);
  container.appendChild(pblock);
});