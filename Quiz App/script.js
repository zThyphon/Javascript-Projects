//Correct Answers
const answers = ["A","B","A","B","B","C","D","D","C","A"];

//Selecting Form
const form = document.querySelector(".quiz-form");

//Selecting Result Screen 
const score_screen = document.querySelector(".result");

//Selecting Score Mark
const score_span = document.querySelector(".score-percent");

//Function Definition (When answers send)

function submit_answers()
{   
    //Default Score
    let score = 0;

    //Get User Answers
    const user_answers =
    [form.answer1.value, 
        form.answer2.value, 
        form.answer3.value, 
        form.answer4.value, 
        form.answer5.value, 
        form.answer6.value, 
        form.answer7.value, 
        form.answer8.value, 
        form.answer9.value, 
        form.answer10.value];

    //Answer Checking
    for(var i=0;answers.length>i;i++)
    {
        if(user_answers[i]==answers[i])
        {
            score+=10;
        }
    }

    //Score Modifying
    if(score!=0)
    {
        let score_mark = "%"+score.toString();
        score_span.innerHTML=score_mark;

    }

    //Show Result Screen
    score_screen.classList.remove("d-none");

    //Scroll Top of Page
    window.scrollTo(0,0);

    //Score Animation
    let showed_score = 0;
    const animation = setInterval(function()
    {
        score_span.textContent="%"+showed_score.toString();

        if(showed_score==score)
        {
            clearInterval(animation);
        }
        else
        {
            showed_score++;
        }

    },10);
}
