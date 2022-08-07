var player_name1= localStorage.getItem("player1")
var player_name2= localStorage.getItem("player2")

var player1_score= 0;
var player2_score=0;

document.getElementById("player1").innerHTML= player_name1 + ":"
document.getElementById("player2").innerHTML= player_name2 + ":"

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question turn - " + player_name1;
document.getElementById("player_answer").innerHTML= "Answer turn - " + player_name2;

function send(){
    get_word= document.getElementById("Word").value;
    word= get_word.toLowerCase();

    second_letter= word.charAt(1);

    middle_index= Math.floor(word.length/2)
    middle_letter= word.charAt(middle_index);

    last_index= word.length - 1;
    last_letter= word.charAt(last_index)

    remove_s_letter= word.replace(second_letter,"_");
    remove_m_letter= remove_s_letter.replace(middle_letter, "_");
    remove_l_letter= remove_m_letter.replace(last_letter, "_");
    question= "<h4 id='word_display'>Q."+ remove_l_letter + "</h4>"
    answer= "<br>Answer : <input type='text' id='answer_box' placeholder='Enter answer' >"
    button= "<br><br><button class='btn btn-info' onclick='check()' >Check</button>"
    join= question + answer + button;
    document.getElementById("output").innerHTML= join;
    document.getElementById("Word").value="";

}
question_turn= "player1"
answer_turn= "player2"

function check(){
    get_answer= document.getElementById("answer_box").value;
    answer= get_answer.toLowerCase();
    if(word==answer){
        if(answer_turn=="player1"){
            player1_score= player1_score + 1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
    }
    if(answer_turn=="player1"){

        answer_turn= "player2"
        document.getElementById("player_answer").innerHTML= "Answer turn - " + player_name2;

    }else{
        answer_turn= "player1";
        document.getElementById("player_answer").innerHTML= "Answer turn - " + player_name1;

    }
    if(question_turn=="player1"){

        question_turn= "player2"
        document.getElementById("player_question").innerHTML= "Question turn - " + player_name2;

    }else{
        question_turn= "player1";
        document.getElementById("player_question").innerHTML= "Question turn - " + player_name1;

    }
    document.getElementById("output").innerHTML= "";




}
