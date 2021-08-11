

var millisec=0,sec=0,min=0 ;
var sec = document.getElementById('userinputsec').value;
var min = document.getElementById('userinputmin').value;
var displaymili = document.getElementById('displaymiliSec')
var displaysec = document.getElementById('displaySec')
var displaymin = document.getElementById('displayMin')
var flag =false;
// var d=


function timer() {
    if(flag == false)
    {
         sec = document.getElementById('userinputsec').value;
         min = document.getElementById('userinputmin').value;
        flag =true;
        
        if(min ==0 && sec > 60)
        {
            min = sec  / 60
         millisec = sec * 1000;
         displaymin.innerHTML = --min;

        }
        else if(min >0)
        {
            sec = min * 60
            millisec = sec * 1000;
            displaymin.innerHTML = --min;
        }
        else
        {
            millisec = sec * 1000;
        }
         sec--;
    }
   
    
    
    millisec--;
    var ce =  millisec.toString();
    var  milisecval = ce.split("");
   
        displaymili.innerHTML = millisec;
        if(sec > 0 && millisec ==0)
        {
            displaysec.innerHTML = --sec;
        }
        else{
            displaysec.innerHTML = sec;
        }
        
        
        var ce =  millisec.toString();
        
   var  milisecval = ce.split("");
        
        if(milisecval[milisecval.length-1] ==0  && milisecval[milisecval.length-2] ==0 && milisecval[milisecval.length-3] ==0)
        {
        
            displaymili.innerHTML = millisec--;
            displaysec.innerHTML = sec--;
            
            
            var cb = sec.toString();
            
            flag =true;
           var secval = cb.split("");

            if(secval[secval.length] == 0)
            
            {
                var cf = min.toString()
                var minval = cf.split("");
                if(min > 0)
                {
                    displaysec.innerHTML = --min;
                }

                if(minval[minval.length] ==0)
                {
                displaymin.innerHTML = min
                }
                // if(min > 0)
                // {
                //    min--;
                //    displaymin.innerHTML = min
                // }
                
            }
            
        }


       if(sec <= 0 && millisec ==0 && min ==0)
       {
        reset();
       }

  
    }

    
   


var interval;

function start() {
    
    interval = setInterval(timer, 0.1);

}
function pause() {
    clearInterval(interval)
}
function reset() {
    pause()
    millisec = 0
    sec = 0
    min = 0
    displaymili.innerHTML = millisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
}




