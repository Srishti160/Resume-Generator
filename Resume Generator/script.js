function addNewWEField() {
    // Create a new textarea element
    const newNode = document.createElement('textarea');
  
    // Add necessary classes and attributes
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter Here');
  
    // Create a new delete button element
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.textContent = 'Delete';
  
    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
      // Remove the textarea and the delete button when clicked
      newNode.remove();
      deleteButton.remove();
    });
  
    // Get the container and the button elements
    const weOb = document.getElementById("we");
    const addButtonContainer = weOb.querySelector('#weAddButton');
    const addButton = addButtonContainer.querySelector('button');
  
    // Insert the new textarea and delete button after the button container
    const textareaContainer = document.createElement('div');
    textareaContainer.appendChild(newNode);
    textareaContainer.appendChild(deleteButton);
    weOb.insertBefore(textareaContainer, addButtonContainer);
    }



 function addNewProjectField() {
  // Create a new textarea element
  const newNode = document.createElement('textarea');

  // Add necessary classes and attributes
  newNode.classList.add('form-control');
  newNode.classList.add('projectField');
  newNode.classList.add('mt-2');
  newNode.setAttribute('rows', 3);
  newNode.setAttribute('placeholder', 'Enter Here');

  // Create a new delete button element
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
  deleteButton.textContent = 'Delete';

  // Add an event listener to the delete button
  deleteButton.addEventListener('click', function() {
    // Remove the textarea and the delete button when clicked
    newNode.remove();
    deleteButton.remove();
  });

  // Get the container and the button elements
  const projectOb = document.getElementById("project");
  const addButtonContainer = projectOb.querySelector('#projectAddButton');
  const addButton = addButtonContainer.querySelector('button');

  // Insert the new textarea and delete button before the button container
  const textareaContainer = document.createElement('div');
  textareaContainer.appendChild(newNode);
  textareaContainer.appendChild(deleteButton);
  projectOb.insertBefore(textareaContainer, addButtonContainer);
}




function addNewAQField() {
    // Create a new textarea element
    const newNode = document.createElement('textarea');
  
    // Add necessary classes and attributes
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter Here');
  
    // Create a new delete button element
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.textContent = 'Delete';
  
    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
      // Remove the textarea and the delete button when clicked
      newNode.remove();
      deleteButton.remove();
    });
  
    // Get the container and the button elements
    const aqOb = document.getElementById("aq");
    const addButtonContainer = aqOb.querySelector('#aqAddButton');
    const addButton = addButtonContainer.querySelector('button');
  
    // Insert the new textarea and delete button before the button container
    const textareaContainer = document.createElement('div');
    textareaContainer.appendChild(newNode);
    textareaContainer.appendChild(deleteButton);
    aqOb.insertBefore(textareaContainer, addButtonContainer);
  }

//generating cv

function generateCV()
{
  //console.log("Generating CV")

  let nameField=document.getElementById("nameField").value;
  let nameT1=document.getElementById("nameT1");
  nameT1.innerHTML=nameField;

  //........direct.........
  document.getElementById('nameT2').innerHTML=nameField;
  // contacts
  document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
  // address
  document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
  // links
  document.getElementById('gitT').innerHTML=document.getElementById('githubField').value;
  document.getElementById('portfolioT').innerHTML=document.getElementById('portfolioField').value;
  document.getElementById('linkedinT').innerHTML=document.getElementById('linkedinField').value;
  //objective
  console.log("Before updating objective field");
  document.getElementById('objectiveT').innerHTML = document.querySelector(".objectiveField").value;
  console.log("After updating objective field");  
  // projects
  console.log("Before updating pjT");
  let pjs=document.getElementsByClassName('projectField');
  let str='';
  for (let e of pjs) {
    str += '<li>' + e.value + '</li>';
  }
    document.getElementById('pjT').innerHTML=str;
    console.log("After updating pjT");

  //work experience
  let wes= document.getElementsByClassName('weField');
  let str1='';
  for (let e of wes){
    str1 += '<li>' + e.value + '</li>';
  }
  document.getElementById('weT').innerHTML=str1;

  //academic qualification
  let aqs= document.getElementsByClassName('aqField');
  let str2='';
  for (let e of aqs){
    str2 += '<li>' + e.value + '</li>';
  }
  document.getElementById('aqT').innerHTML=str2;

  document.getElementById('cv-form').style.display='none';
  document.getElementById('cv-template').style.display='block'
}

//print cv
function printCV()
{
  window.print();
}