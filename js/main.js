console.log('Hello, World!');
const DOB = 'Feb 27 1995'
console.log(DOB);

let firstname = "Irene";
console.log(firstname);
console.log(typeof firstname);

var age = 20;
console.log(age);
console.log(typeof age);



    
        document.getElementById("btn-alert").addEventListener("click", function() {
            alert("Hello world!");
        });
    

    
        document.getElementById('hoverBtn').onmouseover = () => {
            document.getElementById('hoverBtn').innerText = 'Click this Button';
        };
        
        document.getElementById('hoverBtn').onmouseleave = () => {
            document.getElementById('hoverBtn').innerText = 'default button label';
        };
   



    
        // incrementing button
        let count = 1;

        document.getElementById('btn-counter').onclick = () => {
            count = count + 1;
            document.getElementById('txt-counter').innerHTML = `Number: ${count}`;
        
    
            //  if-else statement
            if (count % 2 === 0) {
                document.getElementById('txt-counter').classList.add('even');
                document.getElementById('txt-counter').classList.remove('odd');
            } else {
                document.getElementById('txt-counter').classList.add('odd');
                document.getElementById('txt-counter').classList.remove('even');
            }
        }
   

    

   
        //  list element
        var numbersList = document.getElementById('numbers');

        //  for loop 
        for (let i = 1; i <= 100; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
            numbersList.appendChild(listItem);
        }
    