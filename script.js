const text = `I don’t really trust easy answers. They usually fall apart the second you stop looking at them.

Most things I care about—people, ideas, even myself—don’t stay in one shape long enough to label properly. So I stopped trying to freeze them. I just… watch them move.

I think people mistake that for detachment, but it’s not. It’s just refusing to lie to myself about how unstable everything actually is.

Still, I keep building things. Systems, habits, understanding—like I can somehow make something stable out of something that isn’t.

Maybe that’s the joke. Or maybe that’s the point.

Either way, I’m still here doing it.`;

const el = document.getElementById("typewriter");

let i = 0;
let deleting = false;

function loop() {
  const current = text.slice(0, i);
  el.innerText = current;

  if (!deleting) {
    i++;
    if (i > text.length) {
      deleting = true;
      setTimeout(loop, 2000); // pause at full text
      return;
    }
  } else {
    i--;
    if (i < 0) {
      deleting = false;
      i = 0;
    }
  }

  const speed = deleting ? 20 : 35;
  setTimeout(loop, speed);
}

loop();
