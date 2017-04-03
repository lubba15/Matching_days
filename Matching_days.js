var List = document.querySelectorAll('.List')
var day1 = document.querySelector('#date1')
var day2 = document.querySelector('#date2')
// console.log(List);

day1.addEventListener('change',getDays );
day2.addEventListener('change', getDays);


 function getDays() {

  		if(day1.value !==""){
        var newDate1 = new Date(day1.value).getDay();
      }

      if(day2.value !== ""){
      	var newDate2 = new Date(day2.value).getDay();

      }

       for (var i = 0; i < List.length; i++) {
         List[i].classList.remove('green');
         List[i].classList.remove('red');
         List[i].classList.remove('blue');
}
      if(newDate1 ===  newDate2){
      	List[newDate1].classList.add('green');
        //console.log(List[newDate1]);
      }
      //
       if(newDate2 !== newDate1 && newDate1!== undefined){
      	List[newDate1].classList.add('red');
      }
      //
      if( newDate1 !== newDate2 && newDate2 !== undefined){
      	List[newDate2].classList.add('blue');
         }
      //  }
     }
