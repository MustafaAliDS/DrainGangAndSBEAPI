const express = require("express");
const app = express();
const PORT = 8000;

const sbeAndDg = {
  "yung lean": {
    birthName: "Jonatan Hastad Leandoer",
    birthLocation: "Minsk, Belarus",
    Age: 25,
  },
  bladee: {
    birthName: "Benjamin Reichwald",
    birthLocation: "Stockholm, Sweden",
    Age: 28,
  },
  "thaiboy digital": {
    birthName: "Thanapat Bunleang",
    birthLocation: "Stockholm, Sweden",
    Age: 28,
  },
  ecco2k: {
    birthName: "Zak Arogundade Gaterud",
    birthLocation: "London, England",
    Age: 27,
  },
  unknown: {
    birthName: "Unknown",
    birthLocation: "Unknown",
    Age: 0,
  },
};

// Serve up a file
// Network request, kind of like an event listener
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api:name", (req, res) => {
  const groupMember = req.params.name.toLowerCase();
  if (sbeAndDg[groupMember]) {
    res.json(sbeAndDg[groupMember]);
  } else {
    res.json(sbeAndDg["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}`);
});
