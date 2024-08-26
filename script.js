function addfun(){
let a = document.getElementById('r1').value
let b = document.getElementById('r2').value
let c = document.getElementById('p1')
 a = parseFloat(a)
 b = parseFloat(b)
let sum = a+b
c.innerHTML=sum;
}
function subfun(){
    let a = document.getElementById('r1').value
    let b = document.getElementById('r2').value
    let c = document.getElementById('p1')
     a = parseFloat(a)
     b = parseFloat(b)
    let sum = a-b
    c.innerHTML=sum;
    }

     function mulfun(){
        let a = document.getElementById('r1').value
        let b = document.getElementById('r2').value
        let c = document.getElementById('p1')
         a = parseFloat(a)
         b = parseFloat(b)
        let sum = a*b
        c.innerHTML=sum;
        }
        function divfun(){
            let a = document.getElementById('r1').value
            let b = document.getElementById('r2').value
            let c = document.getElementById('p1')
             a = parseFloat(a)
             b = parseFloat(b)
            let sum = a/b
            c.innerHTML=sum;
            }