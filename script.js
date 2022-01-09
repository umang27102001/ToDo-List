  let add = document.getElementById("add")
    function getupdate(){
        console.log("Updating.....")
        tit = document.getElementById("title").value
        desc = document.getElementById("Description").value
        if (localStorage.getItem("listItems") == null) {
            list_ItemsArry = [];
            list_ItemsArry.push([tit, desc])
            localStorage.setItem('listItems', JSON.stringify(list_ItemsArry))
            console.log(localStorage.getItem('listItems'))
        }
        else {
            list_ItemsArryStr = localStorage.getItem('listItems');
            list_ItemsArry = JSON.parse(list_ItemsArryStr);
            list_ItemsArry.push([tit, desc])
            localStorage.setItem('listItems', JSON.stringify(list_ItemsArry))
            console.log(localStorage.getItem('listItems'))
        }
        update()
    }
    function update() {
        if (localStorage.getItem("listItems") == null) {
            list_ItemsArry = [];
            
            localStorage.setItem('listItems', JSON.stringify(list_ItemsArry))
            console.log(localStorage.getItem('listItems'))
        }
        else {
            list_ItemsArryStr = localStorage.getItem('listItems');
            list_ItemsArry = JSON.parse(list_ItemsArryStr);
            
            localStorage.setItem('listItems', JSON.stringify(list_ItemsArry))
            console.log(localStorage.getItem('listItems'))
        }
        let tablebody = document.getElementById("tablebody");
        let str = "";
        list_ItemsArry.forEach((element, index) => {
            str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            
            <td><button class="btn btn-danger btn-sm" onclick="deleted(${index})">Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg></button></td>
          </tr>
        `
        });
        tablebody.innerHTML = str;
    }

    add.addEventListener('click', getupdate);
    update()
    function deleted(itemIndex){
        console.log('deleting')
        list_ItemsArryStr = localStorage.getItem('listItems');
        list_ItemsArry = JSON.parse(list_ItemsArryStr);
        list_ItemsArry.splice(itemIndex,1)
        console.log(localStorage.setItem('listItems',JSON.stringify(list_ItemsArry)))
        update()
    }
   function clearStorage(){
       
           console.log("ok")
           localStorage.clear()
           update()

   }