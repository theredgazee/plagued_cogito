const texts = [
`Earth be my head, sky be my feet.

The ladder is laid skyward, and the final kingdom's heart lies penetrated.

32 paths are revealed, the roses and falls of breaths are exiled you and returned at the hour of inequivalence.

I am the key and the lock of the steadfast gate, the bell that once rang at the end rings the beginning.

In the new millennial kingdom, shall the thirteen stand by my side.`,

`so many eyes in a world where people insist to remain blind.

Ah.. the cursed inherited will of only following what meets the eye.. witnesses to nothing but thier own misery.

A flow like an age old river fed by bloodshed and sorrow. Humanity's biggest plague.. he who thinks but not acts breeds that sickness.. the sickness of the mind.

yet what blame is there, when all seen through the veil of light becomes unreachable dreams..fragmented, shattered hopes of those before us?

Is it the fool who only meets his own pain that the sky laughs at.. or is it the lost one who walks aimlessly looking for a purpose in a world where darkness veils truth and balance..?

eyes so blind yet they know it not.

may these eyes of mine..guide me to my answer.

these eyes... Eyes beyond light....`
];

const el = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function getDelay(char) {
  // slower on punctuation = more “thinking” pauses
  if (char === "." || char === "!" || char === "?") return 650;
  if (char === "," || char === ";" || char === ":") return 350;
  if (char === "\n") return 500;
  return 25;
}

function loop() {
  const currentText = texts[textIndex];

  if (!deleting) {
    // typing forward
    el.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex >= currentText.length) {
      deleting = true;
      setTimeout(loop, 2000); // pause at end of block
      return;
    }

    const char = currentText[charIndex - 1];
    setTimeout(loop, getDelay(char));
  } else {
    // deleting backwards
    el.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex <= 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(loop, 800); // pause before next text
      return;
    }

    setTimeout(loop, 15);
  }
}

// start
loop();
