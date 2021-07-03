const INITIAL_STATE = {
  questions: [
    {
      question: "HTML stands for __________",
      options: [
        "Hypertext Markup Langauge",
        "Programming Langauge",
        "Markup Language",
      ],
      correctAns: "Hypertext Markup Langauge",
    },
    {
      question: "Bootstrap is a Framework of __________",
      options: ["CSS", "HTML", "JS"],
      correctAns: "CSS",
    },
    {
      question: "JSX Stands for_________",
      options: ["JavaScript XML", "JavaScript", "JavaScriptX"],
      correctAns: "JavaScript XML",
    },
    {
      question: "Flutter use for developing_________",
      options: ["Andoid Apps", "IOS Apps", "Both"],
      correctAns: "Both",
    },
    {
      question: "Git is a_________",
      options: [
        "Version Controlling System",
        "Version Distributing System",
        "None",
      ],
      correctAns: "Version Controlling System",
    },
    {
      question: "_____ tag in HTML used for links",
      options: ["Anchor Tag", "Paragraph Tag", "Pre Tag"],
      correctAns: "Anchor Tag",
    },
    {
      question: "React JS is ________ of JavaScript",
      options: ["Library", "Framework", "Style Sheet"],
      correctAns: "Library",
    },
  ],
};
const reducer = (state = INITIAL_STATE) => {
  return state;
};

export default reducer;
