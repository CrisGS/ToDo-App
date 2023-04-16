function addTask() {
  let taskName = document.getElementById('floating-input-grid').value;
  let priorityValue = parseInt(document.getElementById('floating-select-grid').value);
  let li = document.createElement('li');
  let textElement = document.createTextNode(taskName);
  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete-btn');
  li.appendChild(textElement);
  li.classList.add('list-group-item');
  li.classList.add('list-group-item-action');
  li.classList.add('list-group-item-light');
  li.appendChild(deleteBtn);
  deleteBtn.style.float = 'right';
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  if (!taskName.match(/[a-z]/i)) {
    alert("You need to complete a valid task name!");
    return;
  } else if (taskName.length === 0 && priorityValue === 0) {
    alert("You need to complete the task name and choose the priority level!");
    return;
  } else if (taskName.length === 0) {
    alert("You need to complete the task name!");
    return;
  } else if (priorityValue === 0) {
    alert("You need to choose the priority level!");
    return;
  }

  let tasksList;

  switch (priorityValue) {
    case 1:
      tasksList = document.getElementById('high-priority');
      break;
    case 2:
      tasksList = document.getElementById('medium-priority');
      break;
    case 3:
      tasksList = document.getElementById('low-priority');
      break;
  }
  tasksList.appendChild(li);
}

function clearInput() {
  document.getElementById('floating-input-grid').value = '';
  document.getElementById('floating-select-grid').value = '0';
}