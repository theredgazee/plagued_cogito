window.addEventListener("DOMContentLoaded", () => {

  const texts = [
`Earth be my head, sky be my feet.

The ladder is laid skyward, and the final kingdom's heart lies penetrated.

32 paths are revealed, the roses and falls of breaths are exiled you and returned at the hour of inequivalence.

I am the key and the lock of the steadfast gate, the bell that once rang at the end rings the beginning.

In the new millennial kingdom, shall the thirteen stand by my side.`,

`so many eyes in a world where people insist to remain blind.

Ah.. the cursed inherited will of only following what meets the eye.. witnesses to nothing but their own misery.

A flow like an age old river fed by bloodshed and sorrow. Humanity's biggest plague.. he who thinks but not acts breeds that sickness.. the sickness of the mind.

yet what blame is there, when all seen through the veil of light becomes unreachable dreams.. fragmented, shattered hopes of those before us?

Is it the fool who only meets his own pain that the sky laughs at.. or is it the lost one who walks aimlessly looking for a purpose in a world where darkness veils truth and balance..?

eyes so blind yet they know it not.

may these eyes of mine.. guide me to my answer.

these eyes... Eyes beyond light....`
  ];

  const el = document.getElementById("typewriter");

  let i = 0;
  let j = 0;
  let deleting = false;

  function delay(char) {
    if (".!?".includes(char)) return 600;
    if (",;:".includes(char)) return 300;
    if (char === "\n") return 400;
    return 25;
  }

  function tick() {
    const text = texts[i];

    if (!deleting) {
      el.textContent = text.slice(0, j + 1);
      const char = text[j];
      j++;

      if (j >= text.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }

      setTimeout(tick, delay(char));
    } else {
      el.textContent = text.slice(0, j - 1);
      j--;

      if (j <= 0) {
        deleting = false;
        i = (i + 1) % texts.length;
        setTimeout(tick, 800);
        return;
      }

      setTimeout(tick, 12);
    }
  }

  tick();
});
