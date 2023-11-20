window.onload = () => {
  let genereteDominios = (pronoun, adj, noun) => {
    let dominos = [];

    for (let p = 0; p < pronoun.length; ++p) {
      for (let a = 0; a < adj.length; ++a) {
        for (let n = 0; n < noun.length; ++n) {
          dominos.push(pronoun[p] + adj[a] + noun[n] + ".com");
        }
      }
    }
    return dominos;
  };

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let result = genereteDominios(pronoun, adj, noun);
  console.log(result);

  document.querySelector("#nombres_dominios").innerHTML = result.map;
};
