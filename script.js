const doStuffs = () =>
  fetch("https://Flake.krustyy.repl.co")
    .then((e) => e.json())
    .then((f) => {
      document.querySelector("#servers").innerHTML = "Used by "+f.guilds.toLocaleString()+" servers.";
      document.querySelector("#users").innerHTML = "Trusted by "+f.users.toLocaleString()+" users.";
    });
doStuffs();
setInterval(doStuffs, 3e4);

