export default function Validation(){
    this.checkEmpty = function (value,spanID,message){
        if (value.trim() != "") {
            // hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        }
            // k hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
    }
}