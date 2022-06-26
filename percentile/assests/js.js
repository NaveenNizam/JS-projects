function clickit(){
    var a;
    var input = document.getElementById('num').value;
    switch(true){
        case (input <=100 && input >=90):
            document.getElementById('ok').innerHTML = 'A-one Grade';
            break;
        case (input <=89 && input >=75):
            
            document.getElementById('ok').innerHTML = 'A Grade'

            break;    
        case (input <=74 && input >=60):
           
            document.getElementById('ok').innerHTML = 'B Grade'

            break;
        case (input <=59 && input >=45):
            document.getElementById('ok').innerHTML = 'C Grade'
            break;
        case (input <=44 && input >=30):
            document.getElementById('ok').innerHTML = 'D Grade'
            break; 
        case (input <=29 && input >=0):
            document.getElementById('ok').innerHTML = 'F Grade'
            break;  
        default:  
        return 'INVALID SCORE'       
    }
}