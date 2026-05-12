const texts = [

`Earth be my head, sky be my feet.

The ladder is laid skyward, and the final kingdom's heart lies penetrated.

32 paths are revealed, the roses and falls of breaths are exiled you and returned at the hour of inequivalence.

I am the key and the lock of the steadfast gate, the bell that once rang at the end rings the beginning.

In the new millennial kingdom, shall the thirteen stand by my side.`,

`I don’t really trust easy answers. They usually fall apart the second you stop looking at them.

Most things I care about—people, ideas, even myself—don’t stay in one shape long enough to label properly. So I stopped trying to freeze them. I just… watch them move.

I think people mistake that for detachment, but it’s not. It’s just refusing to lie to myself about how unstable everything actually is.

Still, I keep building things. Systems, habits, understanding—like I can somehow make something stable out of something that isn’t.

Maybe that’s the joke. Or maybe that’s the point.

Either way, I’m still here doing it.`,

`so many eyes in a world where people insist to remain blind.

Ah.. the cursed inherited will of only following what meets the eye.. witnesses to nothing but their own misery.

A flow like an age old river fed by bloodshed and sorrow. Humanity's biggest plague.. he who thinks but not acts breeds that sickness.. the sickness of the mind.

yet what blame is there, when all seen through the veil of light becomes unreachable dreams.. fragmented, shattered hopes of those before us?

Is it the fool who only meets his own pain that the sky laughs at.. or is it the lost one who walks aimlessly looking for a purpose in a world where darkness veils truth and balance..?

eyes so blind yet they know it not.

may these eyes of mine.. guide me to my answer.

these eyes... Eyes beyond light....`

];

const typewriter = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function delay(character) {

  if (character === ".") return 320;
  if (character === ",") return 140;
  if (character === "?") return 420;
  if (character === "!") return 420;
  if (character === "\n") return 300;

  return 22;
}

function animate() {

  const current = texts[textIndex];

  if (!deleting) {

    typewriter.textContent =
      current.substring(0, charIndex);

    charIndex++;

    if (charIndex > current.length) {

      deleting = true;

      setTimeout(animate, 2600);
      return;
    }

    const currentChar =
      current.charAt(charIndex - 1);

    setTimeout(animate, delay(currentChar));

  } else {

    typewriter.textContent =
      current.substring(0, charIndex);

    charIndex--;

    if (charIndex < 0) {

      deleting = false;

      textIndex =
        (textIndex + 1) % texts.length;

      setTimeout(animate, 900);
      return;
    }

    setTimeout(animate, 10);
  }
}

animate();
