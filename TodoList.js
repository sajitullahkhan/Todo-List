//Commented lines are can be use to save Tasks in the local storage

let todoList = [] //JSON.parse(localStorage.getItem('Tasks'));

let audio = new Audio('mixkit-battleship-alarm-1001.wav')
function ringingBell (){
    audio.play();
}


function addTodoList() {

    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        let { name, alarmTime} = todoObject;
        let html = `
            <div class='sd'>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"><div class="name">${name}</div>
            
            
            <div class="time">${alarmTime}</div>
                <button class="de" onclick="
                todoList.splice(${index}, 1)
                addTodoList();
                "><i class="fa-solid fa-x"></i></button>
            </div>
        `;
        todoListHTML += html;
    })
    document.querySelector(`.div-todo`)
        .innerHTML = todoListHTML;

}
let re = document.querySelector('.inputed-task');
document.querySelector('.add-btn').addEventListener('click', () => {
    if (re.value === '') {
        alert('Youn have to type your work name');
    } else {
        let intElement = document.querySelector('.inputed-task');
        let name = intElement.value;
        console.log(intElement)
        let timeElement = document.querySelector('#inputed-time');
        let alarmTime = timeElement.value;

        todoList.push({
            name,
            alarmTime
        });
        intElement.value = '';
        addTodoList();

        
        let alarmTimedate = new Date(timeElement.value);
        now = new Date();
        let alarmAt = alarmTimedate - now
        if(alarmAt >= 0){
            setTimeout(()=>{
                ringingBell();
            }, alarmAt)
        }
    }
});
//localStorage.setItem('Tasks', JSON.stringify(todoList));




