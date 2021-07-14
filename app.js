document.getElementById("noAcc").addEventListener('click',signUp);

function signUp(){
    if(document.getElementById("confirmPass").style.display === "none"){
        document.getElementById("confirmPass").style.display ="block";
        document.getElementById('noAcc').innerHTML = "Already have an account? Log in.";
    } else {
        document.getElementById("confirmPass").style.display ="none";
        document.getElementById('noAcc').innerHTML = "Don't have an account? Sign Up.";
    }
}