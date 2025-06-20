    document.title='Notes'
const ol=document.getElementById("myList")
const createButton=document.getElementById("create-button")

function addNote(text=''){
  const newLi=document.createElement("li")
  newLi.classList.add("textarea-wrapper")
  const newTextarea=document.createElement("textarea")
  newTextarea.classList.add("myTextarea")
  newTextarea.value=text
  const removeButton=document.createElement("button")
  removeButton.innerHTML="❌"
  removeButton.classList.add("send-btn")
  const SaveButton=document.createElement("button")
  SaveButton.innerHTML='Save'
  SaveButton.classList.add("savebutton")
  newLi.appendChild(SaveButton)
  newLi.appendChild(newTextarea)
  newLi.appendChild(removeButton)
  ol.appendChild( newLi)
  
  removeButton.addEventListener("click",()=>{
  newLi.remove()
  })

  SaveButton.addEventListener("click",()=>{
    saveNoteToLoacal()
    newTextarea.addEventListener("input", saveNoteToLoacal);
    SaveButton.innerHTML='Saved'

  })
  newTextarea.addEventListener("focus", () => {
    SaveButton.innerHTML = 'Save';
});

 
}
createButton.addEventListener("click",()=>{
  addNote()
  
})


function saveNoteToLoacal(){
  const allNotes=[]
document.querySelectorAll(".myTextarea").forEach(textarea => {
  allNotes.push(textarea.value)
});
  localStorage.setItem("Notedata",JSON.stringify(allNotes))
}
function LoadNoteFromLoacal(){
  const noter=JSON.parse(localStorage.getItem("Notedata")||"[]")
  noter.forEach(text => {
    addNote(text)
  });
}
const RemoveLi=document.getElementById("Remove-Li")
RemoveLi.addEventListener("click",()=>{
  localStorage.clear()
  location.reload()
})
LoadNoteFromLoacal()