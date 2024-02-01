const message = document.querySelector("input")
const button = document.querySelector("button")

//Add 버튼 클릭 시 할 일 추가
button.addEventListener("click", addTodo)

function addTodo(){
  if(message.value === "" ){
    alert("내용을 입력해주세요")
  }else{
    const addArea = document.getElementById("addArea")

    //태그 동적 생성
    const item = document.createElement("div")
    const checkbox = document.createElement("input")
    const text = document.createElement("span")
    const img = document.createElement("img")

    item.setAttribute("id", "addList")
    checkbox.setAttribute("type", "checkbox")
    img.setAttribute("id", "trashcanButton")

    text.innerHTML = message.value
  
    item.appendChild(checkbox)
    item.appendChild(text)
    item.appendChild(img)
    addArea.appendChild(item)

    //리스트 삭제
    img.addEventListener("click", deleteList)
    //체크박스 선택 시 밑줄 표시
    checkbox.addEventListener("click", checkboxLine)

    message.value = ""
  }
}

function deleteList(e){
  e.target.parentElement.remove()
}

function checkboxLine(e){
  const is_checked = e.target.checked
  if(is_checked === true){
    e.target.nextElementSibling.style.textDecoration = "line-through"
  }else{
    e.target.nextElementSibling.style.textDecoration = "none"
  }
}


