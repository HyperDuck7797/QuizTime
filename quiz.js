let question = document.getElementById("question");
let a1 = document.getElementById("ans1");
let a2 = document.getElementById("ans2");
let a3 = document.getElementById("ans3");
let a4 = document.getElementById("ans4");
let reset = document.getElementById("reset");
let qAmnt = document.getElementById("numQuestions");
let qs = document.getElementById("quizselect");

var ca1cbs = []
var ca2cbs = []
var ca3cbs = []
var ca4cbs = []
var cqs = []
var ca1s = []
var ca2s = []
var ca3s = []
var ca4s = []

cas = [a1,a1,a1,a1,a1,a1,a1,a1,a1,a1]

var cquestions = document.querySelectorAll(".cquestion");
for(var i=0;i<cquestions.length;i++){
    ca1cbs.push(cquestions[i].children[3]);
    ca2cbs.push(cquestions[i].children[5]);
    ca3cbs.push(cquestions[i].children[8]);
    ca4cbs.push(cquestions[i].children[10]);
    cqs.push(cquestions[i].children[0])
    ca1s.push(cquestions[i].children[4]);
    ca2s.push(cquestions[i].children[6]);
    ca3s.push(cquestions[i].children[9]);
    ca4s.push(cquestions[i].children[11]);
    let pos = i;
    if(localStorage.getItem("a1cb"+pos) == "true"){
        ca1cbs[pos].checked = true
        cas[pos] = a1
    }
    if(localStorage.getItem("a2cb"+pos) == "true"){
        ca2cbs[pos].checked = true
        cas[pos] = a2
    }
    if(localStorage.getItem("a3cb"+pos) == "true"){
        ca3cbs[pos].checked = true
        cas[pos] = a3
    }
    if(localStorage.getItem("a4cb"+pos) == "true"){
        ca4cbs[pos].checked = true
        cas[pos] = a4
    }
    cqs[pos].value = localStorage.getItem("question"+pos,cqs[pos].value)
    ca1s[pos].value = localStorage.getItem("a1"+pos,ca1s[pos].value)
    ca2s[pos].value = localStorage.getItem("a2"+pos,ca2s[pos].value)
    ca3s[pos].value = localStorage.getItem("a3"+pos,ca3s[pos].value)
    ca4s[pos].value = localStorage.getItem("a4"+pos,ca4s[pos].value)
    ca1cbs[pos].addEventListener("click", () => {
        cas[pos] = a1
        ca2cbs[pos].checked = false;
        ca3cbs[pos].checked = false;
        ca4cbs[pos].checked = false;
        localStorage.setItem("a1cb"+pos,ca1cbs[pos].checked)
        localStorage.setItem("a2cb"+pos,ca2cbs[pos].checked)
        localStorage.setItem("a3cb"+pos,ca3cbs[pos].checked)
        localStorage.setItem("a4cb"+pos,ca4cbs[pos].checked)
    })
    ca2cbs[pos].addEventListener("click", () => {
        cas[pos] = a2
        ca1cbs[pos].checked = false;
        ca3cbs[pos].checked = false;
        ca4cbs[pos].checked = false;
        localStorage.setItem("a1cb"+pos,ca1cbs[pos].checked)
        localStorage.setItem("a2cb"+pos,ca2cbs[pos].checked)
        localStorage.setItem("a3cb"+pos,ca3cbs[pos].checked)
        localStorage.setItem("a4cb"+pos,ca4cbs[pos].checked)
    })
    ca3cbs[pos].addEventListener("click", () => {
        cas[pos] = a3
        ca2cbs[pos].checked = false;
        ca1cbs[pos].checked = false;
        ca4cbs[pos].checked = false;
        localStorage.setItem("a1cb"+pos,ca1cbs[pos].checked)
        localStorage.setItem("a2cb"+pos,ca2cbs[pos].checked)
        localStorage.setItem("a3cb"+pos,ca3cbs[pos].checked)
        localStorage.setItem("a4cb"+pos,ca4cbs[pos].checked)
    })
    ca4cbs[pos].addEventListener("click", () => {
        cas[pos] = a4
        ca2cbs[pos].checked = false;
        ca3cbs[pos].checked = false;
        ca1cbs[pos].checked = false;
        localStorage.setItem("a1cb"+pos,ca1cbs[pos].checked)
        localStorage.setItem("a2cb"+pos,ca2cbs[pos].checked)
        localStorage.setItem("a3cb"+pos,ca3cbs[pos].checked)
        localStorage.setItem("a4cb"+pos,ca4cbs[pos].checked)
    })
    cqs[pos].onchange = () =>{localStorage.setItem("question"+pos,cqs[pos].value);quizzes[4][pos][0] = cqs[pos].value}
    ca1s[pos].onchange = () =>{localStorage.setItem("a1"+pos,ca1s[pos].value);quizzes[4][pos][1] = ca1s[pos].value}
    ca2s[pos].onchange = () =>{localStorage.setItem("a2"+pos,ca2s[pos].value);quizzes[4][pos][2] = ca2s[pos].value}
    ca3s[pos].onchange = () =>{localStorage.setItem("a3"+pos,ca3s[pos].value);quizzes[4][pos][3] = ca3s[pos].value}
    ca4s[pos].onchange = () =>{localStorage.setItem("a4"+pos,ca4s[pos].value);quizzes[4][pos][4] = ca4s[pos].value}
}

reset.style.visibility = 'hidden';

const answers = [[a3,a4,a3,a1,a1,a2,a4,a2,a3,a1],[a2,a4,a1,a3,a2,a1,a1,a3,a4,a2],[a1,a2,a1,a3,a4,a2,a3,a2,a4,a1],[a3,a2,a1,a3,a4,a1,a1,a3,a2,a2],cas];
const quizzes = [[
    ["Who wrote Frankenstein; or the Modern Prometheus and The Last Man?","Jules Verne","Mary Wolltonecraft","Mary Shelley","H.G. Wells"],
    ["Who wrote The Time Machine, The War of the Worlds, and The Island of Dr. Moreau?","Jules Verne","Isaac Asimov","Douglas Adams","H.G. Wells"],
    ["Who wrote Point Counter Point and Brave New World?","Ray Bradbury","George Orwell","Aldous Huxley","Kurt Vonnegut"],
    ["Who wrote Journey to the Center of the Earth and Around the World in Eighty Days?","Jules Verne","H.G. Wells","Aldous Huxley","C. S. Lewis"],
    ["Who wrote Animal Farm and Nineteen Eighty-Four?","George Orwell","Kurt Vonnegut","Isaac Asimov","Ray Bradbury"],
    ["Who wrote The Martian Chronicles, The Illustrated Man and Fahrenheit 451?","Douglas Adams","Ray Bradbury","Philip K. Dick","Kurt Vonnegut"],
    ["Who wrote I, Robot, The Caves of Steel, and the Foundations series?","Arthur C. Clarke","Robert A. Heinlein","Aldous Huxley","Isaac Asimov"],
    ["Who wrote The Handmaid's Tale, Oryx and Crake, and The Penelopiad?","Octavia Butler","Margaret Atwood","Madeleine L’Engle","Ursula K. Le Guin"],
    ["Who wrote The Hitchhiker's Guide the the Galaxy and Dirk Gently's Holistic Detective Agency?","Arthur C. Clarke","Robert Heinlein","Douglas Adams","Terry Pratchett"],
    ["Who wrote Cat's Cradle; God Bless You, Mr. Rosewater; and Slaughterhouse-Five?","Kurt Vonnegut","Douglas Adams","Philip K. Dick","Anthony Burgess"]
],[
    ["Which civilization is credited with inventing the first form of writing, cuneiform?","Egyptians","Sumerians","Chinese","Mayans"],
    ["Who was the first ruler to codify laws in ancient Mesopotamia?","Nebuchadnezzar","Sargon","Ashurbanipal","Hammurabi"],
    ["What was the primary purpose of the Great Wall of China?","Defense against invaders","Trade route","Religious ceremonies","Transportation"],
    ["Which ancient civilization built Machu Picchu?","Mayans","Aztecs","Incas","Olmecs"],
    ["The Rosetta Stone helped scholars decode which ancient script?","Cuneiform","Hieroglyphs","Sanskrit","Greek"],
    ["The Trojan War was famously described in which ancient epic?","The Iliad","The Odyssey","The Aeneid","Gilgamesh"],
    ["Which ancient civilization first used democracy as a form of government?","Ancient Greece","Rome","Egypt","Persia"],
    ["What material was primarily used for writing in ancient Egypt?","Clay","Stone","Papyrus","Wood"],
    ["Which city-state was known for its strict military training in Ancient Greece?","Delphi","Athens","Corinth","Sparta"],
    ["What was the name of the Persian ruler who invaded Greece in 480 BCE?","Cyrus","Xerxes","Darius","Artaxerxes"],
],[
    ["Who was the first human to journey into outer space","Yuri Gagarin","Neil Armstrong","John Glenn","Buzz Aldrin"],
    ["What year did humans first land on the moon?","1967","1969","1996","2001"],
    ["What was the name of the first artificial satellite?","Sputnik 1","Explorer 1","Voyager 1","Hubble"],
    ["Which space telescope has provided detailed images of distant galaxies?","Kepler","James Webb","Hubble","Chandra"],
    ["What planet did the Mars Rover 'Curiosity' land on?","Jupiter","Venus","Neptune","Mars"],
    ["Which NASA mission was the first to successfully land a spacecraft on Mars?","Opportunity","Viking 1","Preserverance","Spirit"],
    ["What is the name of the international space station shared by multiple countries?","Apollo","Skylab","ISS","Mir"],
    ["Who was the first woman in space?","Sally Ride","Valentina Tereshkova","Mae Jemison","Peggy Whitson"],
    ["What was the primary mission of the Voyager spacecraft?","Establish human colonies","Land on Mars","Study the Moon","Explore outer planets"],
    ["Which country was the first to land a spacecraft on the far side of the Moon?","China","USA","Russia","India"],
],[
    ["Which TV show featured the characters Ross, Rachel, and Monica?"," How I Met Your Mother","The Office","Friends","Seinfeld"],
    ["Who won the first season of American Idol?","Justin Guarini","Kelly Clarkson","Carrie Underwood","Fantasia Barrino"],
    ["What was the highest-grossing film of 2009?","Avatar","Harry Potter and the Half-Blood Prince","Transformers: Revenge of the Fallen","Twilight: New Moon"],
    ["Which artist famously interrupted Taylor Swift at the 2009 VMAs?","Jay-Z","Justin Timberlake","Kanye West","Lil Wayne"],
    ["What popular gaming console was released by Nintendo in 2006?","GameCube","Xbox 360","Playstation 3","Wii"],
    ["Which song became a viral dance sensation thanks to Beyoncé in 2008","Single Ladies (Put a Ring on It)","Halo","Irreplaceable","If I Were a Boy"],
    ["What social media platform was launched in 2004?","Facebook","Twitter (X)","Instagram","LinkedIn"],
    ["Which movie introduced the characters of Shrek and Donkey?","Shrek 2","Shrek Forever After","Shrek","Shrek the Third"],
    ["What reality TV show followed the lives of a wealthy family in Orange County?","Laguna Beach","The O.C.","Real Housewives of Orange County","The Hills"],
    ["What was Britney Spears' hit song released in 2000?","Oops!... I Did It Again","Baby One More Time","Toxic","I'm a Slave 4 U"]
],[
    [cqs[0].value,ca1s[0].value,ca2s[0].value,ca3s[0].value,ca4s[0].value],
    [cqs[1].value,ca1s[1].value,ca2s[1].value,ca3s[1].value,ca4s[1].value],
    [cqs[2].value,ca1s[2].value,ca2s[2].value,ca3s[2].value,ca4s[2].value],
    [cqs[3].value,ca1s[3].value,ca2s[3].value,ca3s[3].value,ca4s[3].value],
    [cqs[4].value,ca1s[4].value,ca2s[4].value,ca3s[4].value,ca4s[4].value],
    [cqs[5].value,ca1s[5].value,ca2s[5].value,ca3s[5].value,ca4s[5].value],
    [cqs[6].value,ca1s[6].value,ca2s[6].value,ca3s[6].value,ca4s[6].value],
    [cqs[7].value,ca1s[7].value,ca2s[7].value,ca3s[7].value,ca4s[7].value],
    [cqs[8].value,ca1s[8].value,ca2s[8].value,ca3s[8].value,ca4s[8].value],
    [cqs[9].value,ca1s[9].value,ca2s[9].value,ca3s[9].value,ca4s[9].value]
]];

if (localStorage.getItem("qs") == null){
    localStorage.setItem("qs", 0);
}
qs.value = localStorage.getItem("qs");

if (localStorage.getItem("qAmnt") == null){
    localStorage.setItem("qAmnt", 10);
}
qAmnt.value = localStorage.getItem("qAmnt");

let questionNum = 0;
let quizNum = qs.value;
let questionAmnt = qAmnt.value;
let numRight = 0;
let correctAnswer = answers[quizNum][questionNum];

question.innerText = quizzes[quizNum][questionNum][0];
a1.innerText = quizzes[quizNum][questionNum][1];
a2.innerText = quizzes[quizNum][questionNum][2];
a3.innerText = quizzes[quizNum][questionNum][3];
a4.innerText = quizzes[quizNum][questionNum][4];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
qs.onchange = function(){
    quizNum = qs.value;
    localStorage.setItem("qs", qs.value);
    questionNum = 0;
    numRight = 0;
    correctAnswer = answers[quizNum][questionNum];

    a1.style.visibility = 'visible';
    a2.style.visibility = 'visible';
    a3.style.visibility = 'visible';
    a4.style.visibility = 'visible';
    reset.style.visibility = 'hidden';
    question.innerText = quizzes[quizNum][questionNum][0];
    a1.innerText = quizzes[quizNum][questionNum][1];
    a2.innerText = quizzes[quizNum][questionNum][2];
    a3.innerText = quizzes[quizNum][questionNum][3];
    a4.innerText = quizzes[quizNum][questionNum][4];
};

qAmnt.onchange = function(){
    questionAmnt = qAmnt.value;
    localStorage.setItem("qAmnt", qAmnt.value);
    questionNum = 0;
    numRight = 0;
    correctAnswer = answers[quizNum][questionNum];

    a1.style.visibility = 'visible';
    a2.style.visibility = 'visible';
    a3.style.visibility = 'visible';
    a4.style.visibility = 'visible';
    reset.style.visibility = 'hidden';
    question.innerText = quizzes[quizNum][questionNum][0];
    a1.innerText = quizzes[quizNum][questionNum][1];
    a2.innerText = quizzes[quizNum][questionNum][2];
    a3.innerText = quizzes[quizNum][questionNum][3];
    a4.innerText = quizzes[quizNum][questionNum][4];
};

a1.onclick = async function(){
    question.innerText = "Incorrect Answer";
    a1.style.background = "red";
    a2.style.background = "red";
    a3.style.background = "red";
    a4.style.background = "red";
    correctAnswer.style.background = "green";
    await sleep(500);
    a1.style.background = "#363636";
    a2.style.background = "#363636";
    a3.style.background = "#363636";
    a4.style.background = "#363636";
    questionNum = questionNum + 1;
    if(questionNum < questionAmnt){
        correctAnswer = answers[quizNum][questionNum];

        question.innerText = quizzes[quizNum][questionNum][0];
        a1.innerText = quizzes[quizNum][questionNum][1];
        a2.innerText = quizzes[quizNum][questionNum][2];
        a3.innerText = quizzes[quizNum][questionNum][3];
        a4.innerText = quizzes[quizNum][questionNum][4];
    }
    else{
        a1.style.visibility = 'hidden';
        a2.style.visibility = 'hidden';
        a3.style.visibility = 'hidden';
        a4.style.visibility = 'hidden';
        question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
        reset.style.visibility = 'visible';
    }
};
a2.onclick = async function(){
    question.innerText = "Incorrect Answer";
    a1.style.background = "red";
    a2.style.background = "red";
    a3.style.background = "red";
    a4.style.background = "red";
    correctAnswer.style.background = "green";
    await sleep(500);
    a1.style.background = "#363636";
    a2.style.background = "#363636";
    a3.style.background = "#363636";
    a4.style.background = "#363636";
    questionNum = questionNum + 1;
    if(questionNum < questionAmnt){
        correctAnswer = answers[quizNum][questionNum];

        question.innerText = quizzes[quizNum][questionNum][0];
        a1.innerText = quizzes[quizNum][questionNum][1];
        a2.innerText = quizzes[quizNum][questionNum][2];
        a3.innerText = quizzes[quizNum][questionNum][3];
        a4.innerText = quizzes[quizNum][questionNum][4];
    }
    else{
        a1.style.visibility = 'hidden';
        a2.style.visibility = 'hidden';
        a3.style.visibility = 'hidden';
        a4.style.visibility = 'hidden';
        question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
        reset.style.visibility = 'visible';
    }
};
a3.onclick = async function(){
    question.innerText = "Incorrect Answer";
    a1.style.background = "red";
    a2.style.background = "red";
    a3.style.background = "red";
    a4.style.background = "red";
    correctAnswer.style.background = "green";
    await sleep(500);
    a1.style.background = "#363636";
    a2.style.background = "#363636";
    a3.style.background = "#363636";
    a4.style.background = "#363636";
    questionNum = questionNum + 1;
    if(questionNum < questionAmnt){
        correctAnswer = answers[quizNum][questionNum];

        question.innerText = quizzes[quizNum][questionNum][0];
        a1.innerText = quizzes[quizNum][questionNum][1];
        a2.innerText = quizzes[quizNum][questionNum][2];
        a3.innerText = quizzes[quizNum][questionNum][3];
        a4.innerText = quizzes[quizNum][questionNum][4];
    }
    else{
        a1.style.visibility = 'hidden';
        a2.style.visibility = 'hidden';
        a3.style.visibility = 'hidden';
        a4.style.visibility = 'hidden';
        question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
        reset.style.visibility = 'visible';
    }
};
a4.onclick = async function(){
    question.innerText = "Incorrect Answer";
    a1.style.background = "red";
    a2.style.background = "red";
    a3.style.background = "red";
    a4.style.background = "red";
    correctAnswer.style.background = "green";
    await sleep(500);
    a1.style.background = "#363636";
    a2.style.background = "#363636";
    a3.style.background = "#363636";
    a4.style.background = "#363636";
    questionNum = questionNum + 1;
    if(questionNum < questionAmnt){
        correctAnswer = answers[quizNum][questionNum];

        question.innerText = quizzes[quizNum][questionNum][0];
        a1.innerText = quizzes[quizNum][questionNum][1];
        a2.innerText = quizzes[quizNum][questionNum][2];
        a3.innerText = quizzes[quizNum][questionNum][3];
        a4.innerText = quizzes[quizNum][questionNum][4];
    }
    else{
        a1.style.visibility = 'hidden';
        a2.style.visibility = 'hidden';
        a3.style.visibility = 'hidden';
        a4.style.visibility = 'hidden';
        question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
        reset.style.visibility = 'visible';
    }
};

correctAnswer.onclick = async function(){
    question.innerText = "Correct Answer";
    a1.style.background = "red";
    a2.style.background = "red";
    a3.style.background = "red";
    a4.style.background = "red";
    correctAnswer.style.background = "green";
    await sleep(500);
    a1.style.background = "#363636";
    a2.style.background = "#363636";
    a3.style.background = "#363636";
    a4.style.background = "#363636";
    questionNum = questionNum + 1;
    numRight = numRight +1;
    if(questionNum < questionAmnt){
        correctAnswer = answers[quizNum][questionNum];

        question.innerText = quizzes[quizNum][questionNum][0];
        a1.innerText = quizzes[quizNum][questionNum][1];
        a2.innerText = quizzes[quizNum][questionNum][2];
        a3.innerText = quizzes[quizNum][questionNum][3];
        a4.innerText = quizzes[quizNum][questionNum][4];
    }
    else{
        a1.style.visibility = 'hidden';
        a2.style.visibility = 'hidden';
        a3.style.visibility = 'hidden';
        a4.style.visibility = 'hidden';
        question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
        reset.style.visibility = 'visible';
    }
};

document.onclick = async function(){
    await sleep(500);
    a1.onclick =  async function(){
        question.innerText = "Incorrect Answer";
        a1.style.background = "red";
        a2.style.background = "red";
        a3.style.background = "red";
        a4.style.background = "red";
        correctAnswer.style.background = "green";
        await sleep(500);
        a1.style.background = "#363636";
        a2.style.background = "#363636";
        a3.style.background = "#363636";
        a4.style.background = "#363636";
        questionNum = questionNum + 1;
        if(questionNum < questionAmnt){
            correctAnswer = answers[quizNum][questionNum];

            question.innerText = quizzes[quizNum][questionNum][0];
            a1.innerText = quizzes[quizNum][questionNum][1];
            a2.innerText = quizzes[quizNum][questionNum][2];
            a3.innerText = quizzes[quizNum][questionNum][3];
            a4.innerText = quizzes[quizNum][questionNum][4];
        }
        else{
            a1.style.visibility = 'hidden';
            a2.style.visibility = 'hidden';
            a3.style.visibility = 'hidden';
            a4.style.visibility = 'hidden';
            question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
            reset.style.visibility = 'visible';
        }
    };
    a2.onclick = async function(){
        question.innerText = "Incorrect Answer";
        a1.style.background = "red";
        a2.style.background = "red";
        a3.style.background = "red";
        a4.style.background = "red";
        correctAnswer.style.background = "green";
        await sleep(500);
        a1.style.background = "#363636";
        a2.style.background = "#363636";
        a3.style.background = "#363636";
        a4.style.background = "#363636";
        questionNum = questionNum + 1;
        if(questionNum < questionAmnt){
            correctAnswer = answers[quizNum][questionNum];

            question.innerText = quizzes[quizNum][questionNum][0];
            a1.innerText = quizzes[quizNum][questionNum][1];
            a2.innerText = quizzes[quizNum][questionNum][2];
            a3.innerText = quizzes[quizNum][questionNum][3];
            a4.innerText = quizzes[quizNum][questionNum][4];
        }
        else{
            a1.style.visibility = 'hidden';
            a2.style.visibility = 'hidden';
            a3.style.visibility = 'hidden';
            a4.style.visibility = 'hidden';
            question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
            reset.style.visibility = 'visible';
        }
    };
    a3.onclick = async function(){
        question.innerText = "Incorrect Answer";
        a1.style.background = "red";
        a2.style.background = "red";
        a3.style.background = "red";
        a4.style.background = "red";
        correctAnswer.style.background = "green";
        await sleep(500);
        a1.style.background = "#363636";
        a2.style.background = "#363636";
        a3.style.background = "#363636";
        a4.style.background = "#363636";
        questionNum = questionNum + 1;
        if(questionNum < questionAmnt){
            correctAnswer = answers[quizNum][questionNum];

            question.innerText = quizzes[quizNum][questionNum][0];
            a1.innerText = quizzes[quizNum][questionNum][1];
            a2.innerText = quizzes[quizNum][questionNum][2];
            a3.innerText = quizzes[quizNum][questionNum][3];
            a4.innerText = quizzes[quizNum][questionNum][4];
        }
        else{
            a1.style.visibility = 'hidden';
            a2.style.visibility = 'hidden';
            a3.style.visibility = 'hidden';
            a4.style.visibility = 'hidden';
            question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
            reset.style.visibility = 'visible';
        }
    };
    a4.onclick = async function(){
        question.innerText = "Incorrect Answer";
        a1.style.background = "red";
        a2.style.background = "red";
        a3.style.background = "red";
        a4.style.background = "red";
        correctAnswer.style.background = "green";
        await sleep(500);
        a1.style.background = "#363636";
        a2.style.background = "#363636";
        a3.style.background = "#363636";
        a4.style.background = "#363636";
        questionNum = questionNum + 1;
        if(questionNum < questionAmnt){
            correctAnswer = answers[quizNum][questionNum];

            question.innerText = quizzes[quizNum][questionNum][0];
            a1.innerText = quizzes[quizNum][questionNum][1];
            a2.innerText = quizzes[quizNum][questionNum][2];
            a3.innerText = quizzes[quizNum][questionNum][3];
            a4.innerText = quizzes[quizNum][questionNum][4];
        }
        else{
            a1.style.visibility = 'hidden';
            a2.style.visibility = 'hidden';
            a3.style.visibility = 'hidden';
            a4.style.visibility = 'hidden';
            question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
            reset.style.visibility = 'visible';
        }
    };

    correctAnswer.onclick = async function(){
        question.innerText = "Correct Answer";
        a1.style.background = "red";
        a2.style.background = "red";
        a3.style.background = "red";
        a4.style.background = "red";
        correctAnswer.style.background = "green";
        await sleep(500);
        a1.style.background = "#363636";
        a2.style.background = "#363636";
        a3.style.background = "#363636";
        a4.style.background = "#363636";
        questionNum = questionNum + 1;
        numRight = numRight +1;
        if(questionNum < questionAmnt){
            correctAnswer = answers[quizNum][questionNum];

            question.innerText = quizzes[quizNum][questionNum][0];
            a1.innerText = quizzes[quizNum][questionNum][1];
            a2.innerText = quizzes[quizNum][questionNum][2];
            a3.innerText = quizzes[quizNum][questionNum][3];
            a4.innerText = quizzes[quizNum][questionNum][4];
        }
        else{
            a1.style.visibility = 'hidden';
            a2.style.visibility = 'hidden';
            a3.style.visibility = 'hidden';
            a4.style.visibility = 'hidden';
            question.textContent = "Your Score:\n"+String(numRight)+"/"+String(questionAmnt);
            reset.style.visibility = 'visible';
        }
    };
}
