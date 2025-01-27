let question = document.getElementById("question");
let a1 = document.getElementById("ans1");
let a2 = document.getElementById("ans2");
let a3 = document.getElementById("ans3");
let a4 = document.getElementById("ans4");
let reset = document.getElementById("reset");
let qAmnt = document.getElementById("numQuestions");
let qs = document.getElementById("quizselect");

let customQ1 = document.getElementById("cquestion1");
let cq1 = document.getElementById("c1question");
let cq1a1 = document.getElementById("1a1");
let cq1a1t = document.getElementById("1s1Answer");
let cq1a2 = document.getElementById("1a2");
let cq1a2t = document.getElementById("1s2Answer");
let cq1a3 = document.getElementById("1a3");
let cq1a3t = document.getElementById("1s3Answer");
let cq1a4 = document.getElementById("1a4");
let cq1a4t = document.getElementById("1s4Answer");

let customQ2 = document.getElementById("cquestion2");
let cq2 = document.getElementById("c2question");
let cq2a1 = document.getElementById("2a1");
let cq2a1t = document.getElementById("2s1Answer");
let cq2a2 = document.getElementById("2a2");
let cq2a2t = document.getElementById("2s2Answer");
let cq2a3 = document.getElementById("2a3");
let cq2a3t = document.getElementById("2s3Answer");
let cq2a4 = document.getElementById("2a4");
let cq2a4t = document.getElementById("2s4Answer");

let customQ3 = document.getElementById("cquestion3");
let cq3 = document.getElementById("c3question");
let customQ4 = document.getElementById("cquestion4");
let cq4 = document.getElementById("c4question");
let customQ5 = document.getElementById("cquestion5");
let cq5 = document.getElementById("c5question");
let customQ6 = document.getElementById("cquestion6");
let cq6 = document.getElementById("c6question");
let customQ7 = document.getElementById("cquestion7");
let cq7 = document.getElementById("c7question");
let customQ8 = document.getElementById("cquestion8");
let cq8 = document.getElementById("c8question");
let customQ9 = document.getElementById("cquestion9");
let cq9 = document.getElementById("c9question");
let customQ10 = document.getElementById("cquestion10");
let cq10 = document.getElementById("c10question");

reset.style.visibility = 'hidden';
// custom question setup

cq1.onchange = function(){
    if (cq1.value == null){
        cq1.value = "";
    }
    localStorage.setItem("cq1", cq1.value);
}
cq1.value = localStorage.getItem("cq1");
cq2.onchange = function(){
    if (cq2.value == null){
        cq2.value = "";
    }
    localStorage.setItem("cq2", cq2.value);
}
cq2.value = localStorage.getItem("cq2");
cq3.onchange = function(){
    if (cq3.value == null){
        cq3.value = "";
    }
    localStorage.setItem("cq3", cq3.value);
}
cq3.value = localStorage.getItem("cq3");
cq4.onchange = function(){
    if (cq4.value == null){
        cq4.value = "";
    }
    localStorage.setItem("cq4", cq4.value);
}
cq4.value = localStorage.getItem("cq4");
cq5.onchange = function(){
    if (cq1.value == null){
        cq1.value = "";
    }
    localStorage.setItem("cq5", cq5.value);
}
cq5.value = localStorage.getItem("cq5");
cq6.onchange = function(){
    if (cq6.value == null){
        cq6.value = "";
    }
    localStorage.setItem("cq6", cq6.value);
}
cq6.value = localStorage.getItem("cq6");
cq7.onchange = function(){
    if (cq7.value == null){
        cq7.value = "";
    }
    localStorage.setItem("cq7", cq7.value);
}
cq7.value = localStorage.getItem("cq7");
cq8.onchange = function(){
    if (cq8.value == null){
        cq8.value = "";
    }
    localStorage.setItem("cq8", cq8.value);
}
cq8.value = localStorage.getItem("cq8");
cq9.onchange = function(){
    if (cq9.value == null){
        cq9.value = "";
    }
    localStorage.setItem("cq9", cq9.value);
}
cq9.value = localStorage.getItem("cq9");
cq10.onchange = function(){
    if (cq10.value == null){
        cq10.value = "";
    }
    localStorage.setItem("cq10", cq10.value);
}
cq10.value = localStorage.getItem("cq10");

// end custom question setup

const answers = [[a3,a4,a3,a1,a1,a2,a4,a2,a3,a1],[a2,a4,a1,a3,a2,a1,a1,a3,a4,a2],[a1,a2,a1,a3,a4,a2,a3,a2,a4,a1],[a3,a2,a1,a3,a4,a1,a1,a3,a2,a2]];
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
    ["What was Britney Spears' hit song released in 2000?","Oops!... I Did It Again","Baby One More Time","Toxic","I'm a Slave 4 U"],
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