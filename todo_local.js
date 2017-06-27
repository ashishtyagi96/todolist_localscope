'use strict';
window.onload = function () {
    var todoList=[];
    var inputValve = document.getElementById('getValue');
    var addTodo =  document.getElementById('done');
    var outputValue =  document.getElementById('output');
    var x = JSON.parse(localStorage.getItem('todo'));
    if(x!==null) {
        for (var i = 0; i < x.length; i++) {
            var element = x[i].done;
            if (element === true) {
                outputValue.innerHTML += '<li  onchange="checking('+i+')"'+' id='+ i + '><input type="checkbox" checked>' +x[i].task+'</li>';

            }
            else {
                outputValue.innerHTML += '<li  onchange="checking('+i+')"'+' id='+ i + '><input type="checkbox">' +x[i].task+'</li>';

            }
            todoList.push({
                "task":x[i].task,
                "done":x[i].done
            });
        }
    }
    addTodo.onclick = function () {
        var value = inputValve.value;
        var ch = checker1(value);
        if((ch===true)&&(value!=='')){
            todoList.push({
                "task":value,
                "done":false
            });
            inputValve.value = '';
            outputValue.innerHTML='';
            for(var i = 0;i<todoList.length;i++){
                var element = todoList[i].done;
                if(element===true){
                    outputValue.innerHTML += '<li  onchange="checking('+i+')"'+' id='+ i + '><input type="checkbox" checked>' +todoList[i].task+'</li>';
                }
                else{
                    outputValue.innerHTML += '<li  onchange="checking('+i+')"'+' id='+ i + '><input type="checkbox">' +todoList[i].task+'</li>';
                }
            }
            window.localStorage.setItem('todo',JSON.stringify(todoList));
        }
        else{
            inputValve.value='';
        }
    }

};
function checking(el) {
    console.log("no no");
    var c = JSON.parse(localStorage.getItem('todo'));
    if(c[el].done===false){
        c[el].done=true;
    }
    else{
        c[el].done=false;
    }
    localStorage.setItem('todo',JSON.stringify(c));
}
function checker1(v) {
    console.log("yes yes");
    var b = true;
    var c = JSON.parse(localStorage.getItem('todo'));
    for(var k = 0;k<c.length;k++){
        if(c[k].task===v){
            b = false;
        }
    }
    return b;
}