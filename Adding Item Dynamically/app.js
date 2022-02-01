showitem();
let additeminput = document.getElementById("additeminput");
let additembtn = document.getElementById("additembtn");

additembtn.addEventListener("click", function(){
    additeminputval = additeminput.value;
    if(additeminputval.trim()!=0){
        let additem = localStorage.getItem("localitem");
        if(additem == null){
            itemObj = [];
        }
        else{
            itemObj = JSON.parse(additem);
        }
        itemObj.push({"item_name":additeminputval,"Added":false});
        localStorage.setItem("localitem", JSON.stringify(itemObj));
        additeminput.value = '';
    }
    showitem();
})

// Show Item
function showitem(){
    let additem = localStorage.getItem("localitem");
    if(additem == null) {
        itemObj = [];
    }
    else{
        itemObj = JSON.parse(additem);
    }
    let html = '';
    let addeditemlist = document.getElementById("addeditemlist");
    itemObj.forEach((item, index) =>{

        if(item.completeStatus==true){
            itemCompleteValue = `<td class="completed">${item.item_name}</td>`;
        }else{
            itemCompleteValue = `<td>${item.item_name}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${itemCompleteValue}
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger" style="float:right"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addeditemlist.innerHTML = html;
    
}

// Delete Item
function deleteitem(index){
    let additem = localStorage.getItem("localitem");
    let itemObj = JSON.parse(additem);
    itemObj.splice(index, 1);
    localStorage.setItem("localitem", JSON.stringify(itemObj));
    showitem();
}

// Delete All
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    
    let additembtn = document.getElementById("additembtn");
    let additem = localStorage.getItem("localitem");
    let itemObj = JSON.parse(additem);
    if(additem == null){
        itemObj = [];
    }
    else{
        itemObj = JSON.parse(additem);
        itemObj = [];
    }
    additembtn.style.display="block";
    localStorage.setItem("localitem", JSON.stringify(itemObj));
    showitem();

})