const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series" : {
        "start": "1968",
        "end": "1973",
    }
};
let article = document.querySelector("article");
let memberNameContainer = document.createElement("h1");
article.appendChild(memberNameContainer);
memberNameContainer.innerHTML = "The Mod Squad";


const addToDOM = (member) => {
    let Member = document.createElement("h2");
    memberNameContainer.appendChild(Member);
    Member.innerHTML= member;
};

ModSquad.members.forEach(member => {
    addToDOM(member)
});

