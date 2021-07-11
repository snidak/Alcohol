let input = document.querySelectorAll('.form__input');

for(let i=0; i< input.length; i++){
    input[i].onblur = function() {
        console.log(this.value);

        if( ( this.value != "" ) && ( !this.checkValidity() )){
            console.log("Присваимваем класс invalid");

            this.classList.add("invalid");
            return ;
        } else if( ( this.value == "" ) && (this.classList.contains("invalid")) ){
            console.log("Удаляем класс invalid");
            this.classList.remove("invalid");
            return ;
        }
    };
}
let arrInputPhone   = document.getElementsByClassName('input-phone');
let arrInputCard    = document.getElementsByClassName('input-card');
let arrInputMonth    = document.getElementsByClassName('input-card');

let maskPhone = {   mask: '+{7}(000)000-00-00' },
    maskCard = {    mask: '0000-0000-0000-0000[-000]' },
    maskMonth = {    mask: '00 / 0000' };

  PhoneMask(arrInputPhone, maskPhone);
  PhoneMask(arrInputCard, maskCard);
  PhoneMask(arrInputMonth, maskMonth);

function PhoneMask(arr, maskOptions){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
        let mask = IMask(arr[i], maskOptions);
    }
    return ;
}

