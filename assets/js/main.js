// â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
// â•‘  OPERATING CONSTANTS                                  â•‘
// â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const jsonData = {};

// fetch("../assets/json/folder2024.json")
//   .then((req) => req.json())
//   .then((res) =>
//     Object.entries(res).forEach(
//       (element) => (jsonData[element[0]] = element[1])
//     )
//   );

fetch("../assets/json/folder2024.min.json")
  .then((req) => req.json())
  .then((res) =>
    Object.entries(res).forEach(
      (element) => (jsonData[element[0]] = element[1])
    )
  );

const contentHeader = {
  0: "Anceau&nbsp;de&nbsp;Garlande",
  1: "Éducation&nbsp;musicale",
  2: "M.&nbsp;Ben&nbsp;Salah",
  3: "Nous sommes le",
  4: "13 aoÃ»t 1980",
  5: "08 : 45",
  step: 0,
};

var sessionsData;
var acivity;
var maxSessions;

// â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
// â•‘  DOM ELEMENTS                                         â•‘
// â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const header = document.querySelector("header");
const main = document.querySelector("main");
const mainMenu = document.querySelector("main > nav");
const mainContent = document.querySelector("main > div");

const displayer = {
  header: document.querySelectorAll("#displayer-infos > span"),
  title: document.querySelector("#display-title"),
  sequence: document.querySelector("#display-sequence"),
  session: document.querySelector("#display-session"),
  sheet: document.querySelector("#display-sheet"),
};

const buttons = {
  level: document.querySelectorAll(".btn-level"),
  sequence: document.querySelectorAll(".btn-sequence"),
  sequenceOpen: document.querySelectorAll(".btn-sequence_open"),
  session: document.querySelectorAll(".btn-session"),
};
const sequenceContainer = document.querySelector(".sequence");

// â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
// â•‘  ANIMATIONS                                           â•‘
// â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const Animations = class {
  static duration = 500;

  static fadeOut(target) {
    let keyframes = [{ filter: "blur(0.5vmin) opacity(0)" }];

    let options = { duration: this.duration, fill: "both", easing: "ease-out" };

    target.animate(keyframes, options);
  }

  static translateIn(target, index) {
    let keyframes = [
      { filter: "blur(0.5vmin) opacity(0)", transform: "translateX(50vw)" },
      { filter: "blur(0) opacity(1)", transform: "translateX(0)" },
    ];

    let options = {
      duration: this.duration,
      fill: "both",
      easing: "ease-out",
      delay: 100 * index,
    };

    target.animate(keyframes, options);
  }

  static rotateY(target, direction, delay = 0) {
    let options = {
      duration: this.duration,
      fill: "both",
      easing: "ease-in-out",
    };
    let keyframes = [];

    if (direction == "in") {
      keyframes = [
        { filter: "opacity(0) blur(1vmin)", transform: "rotateY(-90deg)" },
        { filter: "opacity(1) blur(0)", transform: "rotateY(0deg)" },
      ];

      target.classList.remove("invisible");
      target.animate(keyframes, { ...options, delay: delay });
    }

    if (direction == "out") {
      keyframes = [
        { filter: "opacity(1) blur(0)", transform: "rotateY(0deg)" },
        { filter: "opacity(0) blur(1vmin)", transform: "rotateY(90deg)" },
      ];

      target.animate(keyframes, options).finished.then(() => {
        target.classList.add("invisible");
      });
    }
  }

  static switchInfos(target, content) {
    let options = {
      duration: this.duration,
      fill: "both",
      easing: "ease-in-out",
    };

    let keyframes = [
      { opacity: 1, transform: "rotateX(0deg)" },
      { opacity: 0, transform: "rotateX(90deg)" },
      { opacity: 0, transform: "rotateX(-90deg)" },
      { opacity: 1, transform: "rotateX(0deg)" },
    ];

    target.animate([keyframes[0], keyframes[1]], options).finished.then(() => {
      target.innerHTML = content;
      target.animate([keyframes[2], keyframes[3]], options);
    });
  }

  static switchSession(key) {
    let options = {
      duration: this.duration,
      fill: "both",
      easing: "ease-in-out",
    };

    let keyframes = [{ opacity: 0 }, { opacity: 1 }];

    displayer.sheet.animate([keyframes[0]], options).finished.then(() => {
      displayer.sheet.animate([keyframes[1]], options);
    });
  }

  static startPoint() {
    let options = {
      duration: this.duration * 2,
      fill: "both",
      easing: "ease-out",
    };
    let keyframes = [{ left: 0, top: 0 }];

    header.animate(keyframes, options);
  }
};

// â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
// â•‘  ANIMATE DISPLAY INFORMATIONS                         â•‘
// â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function updateHeader() {
  let day = new Date();
  let locale = "fr-FR";
  let dateOptions = { day: "2-digit", month: "long", year: "numeric" };
  let timeOptions = { hour: "2-digit", hourCycle: "h23", minute: "2-digit" };

  contentHeader[4] = day.toLocaleDateString(locale, dateOptions);
  contentHeader[5] = day
    .toLocaleTimeString(locale, timeOptions)
    .replace(":", "<span id='dots'> : </span>");

  displayer.header.forEach((element, index) => {
    setTimeout(() => {
      Animations.switchInfos(element, contentHeader[contentHeader.step]);
      contentHeader.step = contentHeader.step < 5 ? contentHeader.step + 1 : 0;
    }, index * 100);
  });
}

// â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
// â•‘  NAVIGATION                                           â•‘
// â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

buttons.level.forEach((button) => {
  button.addEventListener("click", () => {
    let ref = button.getAttribute("data-ref");
    let step = main.getAttribute("data-step");
    let sequences = jsonData.sequences.filter(
      (element) => element.levelId == ref
    );
    let count = sequences.length;

    buttons.level.forEach((bt) => bt.classList.remove("selected"));
    button.classList.add("selected");

    if (step != 1) {
      Animations.rotateY(mainMenu, "in");
      if (step == 2) {
        Animations.rotateY(mainContent, "out");
      }
      main.setAttribute("data-step", 1);
    }

    buttons.sequence.forEach((bt) => Animations.fadeOut(bt));

    setTimeout(() => {
      buttons.sequence.forEach((bt, index) => {
        index < count ? bt.classList.remove("hide") : bt.classList.add("hide");
        if (index < count) {
          bt.innerHTML = `
                    <span>N°&nbsp;${index + 1}</span>
                    <span class="bull">&#8226;</span>
                    <span class="title">${sequences[`${index}`].title}</span>`;

          bt.setAttribute("data-ref", ref);
          Animations.translateIn(bt, index);
        }
      });
    }, Animations.duration);
  });
});

buttons.sequence.forEach((button) => {
  button.addEventListener("click", () => {
    let ref = button.getAttribute("data-ref");
    let key = button.getAttribute("data-key");
    let sequence = jsonData.sequences.filter(
      (element) => element.levelId == ref
    );
    let sequenceContent = sequence.filter(
      (element) => element.sequenceId == key
    );

    let maxSequences = sequence.length;

    Animations.rotateY(mainMenu, "out");
    Animations.rotateY(mainContent, "in", Animations.duration);

    main.setAttribute("data-step", "2");
    buttons.sequence.forEach((bt) => Animations.fadeOut(bt));

    sessionsData = jsonData.activities.filter(
      (element) => element.levelId == ref && element.sequenceId == key
    );
    acivity = sessionsData.filter((element) => element.sessionId == key);
    let indexOf = sessionsData.indexOf(sessionsData[sessionsData.length - 1]);

    maxSessions = 0;
    sessionsData.length > 0
      ? (maxSessions = sessionsData[indexOf].sessionId)
      : 0;

    if (maxSessions < 1 || !maxSessions) {
      displayer.session.classList.add("hide");
    } else {
      displayer.session.classList.remove("hide");
      buttons.session.forEach((button, index) => {
        index > 0
          ? button.classList.remove("in")
          : buttons.session[0].classList.add("in");
        index < maxSessions
          ? button.classList.remove("hide")
          : button.classList.add("hide");
      });
      engraveSession(1);
    }
    buttons.sequenceOpen.forEach((button) => {
      button.setAttribute("data-ref", ref);
    });
    buttons.sequenceOpen.forEach((button) => {
      button.addEventListener("click", () => {
        let ref = button.getAttribute("data-ref");
        let key = button.getAttribute("data-key");
        let sequence = jsonData.sequences.filter(
          (element) => element.levelId == ref
        );
        let sequenceContent = sequence.filter(
          (element) => element.sequenceId == key
        );

        let maxSequences = sequence.length;
        Animations.rotateY(mainMenu, "out");
        Animations.rotateY(mainContent, "in", Animations.duration / 10);

        sessionsData = jsonData.activities.filter(
          (element) => element.levelId == ref && element.sequenceId == key
        );
        acivity = sessionsData.filter((element) => element.sessionId == key);
        let indexOf = sessionsData.indexOf(
          sessionsData[sessionsData.length - 1]
        );

        maxSessions = 0;
        sessionsData.length > 0
          ? (maxSessions = sessionsData[indexOf].sessionId)
          : 0;

        if (maxSessions < 1 || !maxSessions) {
          displayer.session.classList.add("hide");
        } else {
          displayer.session.classList.remove("hide");
          buttons.session.forEach((button, index) => {
            index > 0
              ? button.classList.remove("in")
              : buttons.session[0].classList.add("in");
            index < maxSessions
              ? button.classList.remove("hide")
              : button.classList.add("hide");
          });
          engraveSession(1);
        }

        engraveSequence(sequenceContent, key, maxSequences, ref);
      });
    });

    engraveSequence(sequenceContent, key, maxSequences, ref);
  });
});

buttons.session.forEach((button) => {
  button.addEventListener("click", () => {
    let key = button.getAttribute("data-ref");
    acivity = sessionsData.filter((element) => element.sessionId == key);

    buttons.session.forEach((button) => button.classList.remove("in"));
    button.classList.add("in");

    Animations.switchSession(key);
    setTimeout(() => {
      engraveSession(key);
    }, "400");
  });
});

// â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
// â•‘  ENGRAVERS                                            â•‘
// â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function engraveSession(key) {
  let list = new ArticleList();
  let factory = new ArticleFactory();
  acivity = sessionsData.filter((element) => element.sessionId == key);

  acivity.forEach((item) => {
    let article = factory.build(item);
    list.add(article);
    list.build(list.all);
  });
}
function engraveSequence(sequenceContent, key, maxSequences) {
  buttons.sequenceOpen.forEach((bt, index) => {
    index < maxSequences && index != key - 1
      ? bt.classList.remove("hide")
      : bt.classList.add("hide");
  });

  let opusHtml = "";

  let h3Html = "";

  let oeuvresHtml = "";
  let projectHtml = "";
  let notionsHtml = "";
  let commentHtml = "";

  if (sequenceContent[0].opus && sequenceContent[0].opus.length > 0) {
    switch (sequenceContent[0].opus.length) {
      case 1:
        h3Html = "Œuvre";
        break;
      default:
        h3Html = "Œuvres";
    }
    sequenceContent[0].opus.forEach((opus) => (opusHtml += `<p>${opus}</p>`));
    oeuvresHtml = `
      <div><h3>${h3Html}</h3>${opusHtml}</div>
    `;
  }
  if (sequenceContent[0].project) {
    projectHtml = `
      <div><h3>Projet musical</h3><p>${sequenceContent[0].project}</p></div>
    `;
  }
  if (sequenceContent[0].notions) {
    notionsHtml = `
      <div><h3>Notions et vocabulaire</h3><p>${sequenceContent[0].notions.join(
        ", "
      )}</p></div>
        </div>
    `;
  }
  if (sequenceContent[0].comment) {
    commentHtml = `
      <p class="comment">${sequenceContent[0].comment}</p>
    `;
  }
  let content = `
        <div>
            ${oeuvresHtml}
            ${projectHtml}
            ${notionsHtml}
         </div>   
        ${commentHtml}`;

  displayer.title.innerHTML = `<span>Séquence n°${key}&emsp;-&emsp;</span>${sequenceContent[0].title}`;
  displayer.sequence.innerHTML = content;
}

// â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
// â•‘  ON START                                             â•‘
// â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

updateHeader();
setInterval(() => {
  updateHeader();
}, 8000);

Animations.startPoint();
