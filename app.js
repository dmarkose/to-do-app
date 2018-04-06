function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // Create Delete Button
    let deleteButton= document.createElement('button');


    // set the input's type to checkbox
    checkbox.type = "checkbox"

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //append delete button to newLi
    newLi.appendChild(deleteButton);

    // append to to do list
    toDoList.appendChild(newLi);

    //give delete button name
    deleteButton.innerHTML = "Delete";

    //event listener for delete button
    deleteButton.addEventListener('click', function(e){
      toDoList.removeChild(e.target.parentNode);

});





  })


}

window.onload = function() {
  onReady();
};
