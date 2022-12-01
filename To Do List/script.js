//Select Add Form
const add_form = document.querySelector(".add-form");

//Select To Do List Items
const list = document.querySelector(".todos");

//Select Search Text
const search_input = document.querySelector(".search input");

//This function adds new to do elements
function createTemplate(to_do)
{
    let html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${to_do}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML+=html;

}

//When user entered new to do this function calls createTemplate function
add_form.addEventListener("submit",e=>
{
    e.preventDefault();

    const to_do = add_form.add.value.trim();
    
    const add_box = document.getElementById("add");

    if(add_box.value.length!="")
    {
        createTemplate(to_do);
        add_box.value ="";
    }
});

//When user clicked trash icon this function deletes selected to do list item
list.addEventListener("click",e=>
{
    if(e.target.classList.contains("delete"))
    {
        let removed_item = e.target.parentElement;
        removed_item.remove();
    }
});

search_input.addEventListener("keyup",e=>
{
    const input = search_input.value.trim();
    filter(input);
});

//This function filters in to do list accordingly in search text
function filter(input)
{
    
    Array.from(list.children).filter(function(to_do)
    {
        return !to_do.textContent.includes(input);
    }).forEach(to_do=>
        {
            to_do.classList.add("filtered");
        });

    Array.from(list.children).filter(function(to_do)
    {
        return to_do.textContent.includes(input);
    }).forEach(to_do=>
        {
            to_do.classList.remove("filtered");
        });
}