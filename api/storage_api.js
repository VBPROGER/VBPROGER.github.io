var storage = window.localStorage
function getItems(){
  return storage
}
function getItem(name){
  return storage.getItem(name)
}
function setItem(name, value){
  storage.setItem(name, value)
  return true
}
function removeItem(name){
  storage.removeItem(name)
}
function removeAllItems(name){
  storage.clear()
}
function getItemsLength(){
  return storage.length
}
function getItemsLength(){
  return storage.length
}
function getValueByName(name){
  return storage.valueOf(name)
}
