//TODO: change to the Objects folder 
const MangaStatus = {
  completed: {
    color: "blueStatus",
  },
  ongoing: {
    color: "greenStatus",
  },
  cancelled: {
    color: "redStatus",
  },
  hiatus: {
    color: "orangeStatus",
  },
};


const getMangaStatusColor = (key) => {
  return MangaStatus[key].color || null;
}


export { 
  getMangaStatusColor 
}
