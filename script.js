//1.1
let sentence = "London is the capital of Great Britain"
document.write("Sentence example: ", sentence, ".<br>")
//1.2
document.write("It has ", sentence.split(" ").length, " word(s), ", sentence.length - sentence.split(" ").length + 1, " letter(s).<br>")
//1.5
document.write("URL: ", window.location, "<br>")
document.write("Protocol: ", window.location.protocol, "<br>")
document.write("File name: ", window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].split(".")[0], "<br>")
document.write("File extension: ", window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].split(".")[1], "<br>")
//1.6
document.write("Parameters: ", window.location.search.replace("?", ""), "<br>")
let params = [];
for (let i = 0; i < window.location.search.replace("?", "").split("&").length; i++) {
  params.push({name: window.location.search.replace("?", "").split("&")[i].split("=")[0], value: window.location.search.replace("?", "").split("&")[i].split("=")[1]})
}

//creating forms...
for (i = 0; i < 10; i++) {
  let form = document.createElement("form")
  form.id = form.name = "form" + i
  let item = form.appendChild(document.createElement("span"))
  item.innerHTML = "Form " + i
  item = form.appendChild(document.createElement("input"))
  item.type = "text"
  item = form.appendChild(document.createElement("input"))
  item.type = "password"
  for (j = 0; j < 4; j++) {
    item = form.appendChild(document.createElement("button"))
    item.setAttribute("class", "t" + j)
    item.type = "button"
    switch (j) {
      case 0:
        item.setAttribute("onclick", "showButtonName(" + i + ")")
        item.innerHTML = "Show the form's name"
        break
      case 1:
        item.setAttribute("onclick", "showParentFormID(" + i + ")")
        item.innerHTML = "Affiliation"
        break
      case 2:
        item.setAttribute("onclick", "resetForm(" + i + ")")
        item.innerHTML = "Reset"
        break
      case 3:
        item.setAttribute("onclick", "showNumberOfInputs(" + i + ")")
        item.innerHTML = "Number of inputs"
        break
    }
  document.body.appendChild(form)
  }
}

//2.4
let count = 0
let a_tag = document.getElementsByTagName("a")
for (let i = 0; i < a_tag.length; i++) {
  if (a_tag[i].getAttribute("href")[0] == "#") {
    count++
  }
}
document.write("Anchors: ", count, "<br>")
//2.5
document.write("Links: ", a_tag.length, "<br>")
//2.6
for (let i = 0; i < a_tag.length; i++) {
  if (a_tag[i].getAttribute("href")[0] == "#") {
    document.write("1st anchor inner HTML: ", a_tag[i].innerHTML, "<br>")
    break
  }
}
//2.7
img_tag = document.getElementsByTagName("img")
document.write("Images: ", img_tag.length, "<br>")
//2.8
document.write("1st image width: ", img_tag[0].getAttribute("width"), "<br>")
//2.9, 2.10
let max_width = Number(img_tag[0].getAttribute("width"))
let sum_height = 0
for (let i = 0; i < img_tag.length; i++) {
  if (Number(img_tag[i].getAttribute("width")) > max_width) {
    max_width = Number(img_tag[i].getAttribute("width"))
  }
  sum_height += Number(img_tag[i].getAttribute("height"))
}
document.write("Max image width: ", max_width, "<br>")
document.write("Image height sum: ", sum_height, "<br>")
//3.2
let form_tag = document.getElementsByTagName("form")
document.write("Even nth form names: ")
for (let i = 0; i < form_tag.length; i += 2) {
  document.write(form_tag[i].getAttribute("name"))
  if (i < form_tag.length - 2) {
    document.write(", ")
  }
  else {
    document.write("<br>")
  }
}
//3.4
function showButtonName(j) {
  for (let i = 0; i < form_tag[j].children.length; i++) {
    if (form_tag[j].children[i].tagName == "BUTTON") {
      alert(form_tag[j].children[i].innerHTML)
      break
    }
  }
}
//3.5
function showParentFormID(j) {
  alert(form_tag[j].getAttribute("id"))
}
//3.6
function resetForm(j) {
  form_tag[j].reset()
}
//3.7
function showNumberOfInputs(j) {
  count = 0
  for (let i = 0; i < form_tag[j].children.length; i++) {
    if (form_tag[j].children[i].tagName == "INPUT") {
      count++
    }
  }
  alert(count)
}

//4.2
let flag = true
function createTable() {
  if (flag) {
    let table = document.createElement("table")
    table.border = "1";
    table.id = "table"
    links = []
    for (let i = 0; i < a_tag.length; i++) {
      if (a_tag[i].getAttribute("class") == "table-link") {
        links.push(a_tag[i])
      }
    }
    let set = new Set()
    for (let i = 0; i < links.length; i++) {
      set.add(links[i].innerHTML);
    }
    for (let item of set) {
      let tr = table.insertRow(item.number)
      let arr = []
      for (let i = 0; i < links.length; i++) {
        if (links[i].innerHTML == item) {
          arr.push(links[i].getAttribute("href"))
        }
      }
      let td = tr.insertCell(0);
      td.innerHTML = String(item)
      td = tr.insertCell(1);
      td.innerHTML = arr.length
      td = tr.insertCell(2);
      td.innerHTML = arr
    }
    document.body.appendChild(table)
    flag = false
  }
}