async function loadMusic() {
  const res = await fetch("music.json");
  const musics = await res.json();

  const playlist = document.getElementById("playlist");
  const player = document.getElementById("player");

  musics.forEach((music) => {
    const li = document.createElement("li");
    li.textContent = `${music.title} - ${music.artist}`;
    li.onclick = () => {
      player.src = music.url;
      player.play();
    };
    playlist.appendChild(li);
  });
}

loadMusic();
