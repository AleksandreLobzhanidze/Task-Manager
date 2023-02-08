const LOCALE = {
    'web.page.error': 'შეავსეთ ველი',
    'web.page.success': 'Succes',
    'web.page.error2':  '5ზე მეტი'
};

let array [
    {
        id: 242342564645242,
        completed: true,
        name: "html&css"
    },
    {
        id: 135462342336434,
        completed: false,
        name: "Dagvianeba"
    }
];

let array1 = [1,2,3,4,5,6,7];


function addList(){
    let inputValue = document.getElementsByClassName('input').value;
    let message = document.getElementsByClassName('massage');

    if(inputValue.length === 0){
        message.classList.add('error');
        message.innerText = getCaption('web.page.error');
        
        setTimeout(function() {
            message.classList.remove('error');
        }, 2000);
    }else{
        array.push({
            name: inputValue,
            id: '1239756823',
            completed: false
        })
        message.classList.add('success');
        setTimeout(function() {
            message.classList.remove('success');
        },2000)
        message.innerText = getCaption('web.page.success');

        drawList();
    }
    localStorage.setItem("items", JSON.stringify(array));
}

function drawList(){
    let html = '';
    for(let index = 0;  index < array.length; index++){
        html += `
            <div class="list ${array[index].completed ? 'task-completed' : '' } ">
                <img src="check-mark.png" class="xazgasmuli" alt="">
                <h3>
                    <span class="completedmark"></span>
                    ${array[index].name}
                </h3>
                <p>html&css</p>
                <a href="index2.html"><img class="editP" src="edit.png" alt="editIcon" id="${array[index].id}"></a>
                <a href=""><img class="deleteP" src="delete.png" alt="DeleteIcon"></a>
            </div>
        `
    }
    document.getElementById('taskContainer').innerHTML = html;

}

drawList();



