const input = document.getElementById("input");
const uls = document.getElementById("uls")

function funClick() {
    if (input.value === "") {
        alert("Please Enter Some-Thing!!!");
    }
    else {
        let li1 = document.createElement("li");
        li1.innerText = input.value;
        uls.appendChild(li1)
        let remove = document.createElement("button");
        remove.innerText = "remove";
        remove.classList.add("remove_btn");
        li1.appendChild(remove);
        remove.addEventListener("click", () => {
            li1.remove();
        })

        let edit = document.createElement("button");
        edit.innerText = "edit";
        edit.classList.add("edit_btn");
        li1.appendChild(edit);
        edit.addEventListener("click", () => {
            let new_data = prompt("Enter New Task Here!!!!");
            console.log(new_data);
            if (new_data && new_data.trim() !== "") {
                li1.firstChild.textContent = new_data; 
            }
        })
    }
    input.value = "";
}