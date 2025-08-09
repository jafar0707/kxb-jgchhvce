let div = document.querySelector ('div')
let inp1 = document.querySelector ('.name')
let inp2 = document.querySelector ('.parol')
let btn = document.querySelector ('button')
let inp3 = document.querySelector ('.delete')
let btn2 = document.querySelector ('.deletebtn')
fetch("https://6891aa24447ff4f11fbd43a5.mockapi.io/u")
.then((res )=> res.json())
.then((data)=>{
    console.log(data);
    data.map((item)=>{
        div.innerHTML +=`
<div class="card">
<h1>${item.name}</h1>
<b>${item.id}</b>
</div>
`
    })




})


8
btn.addEventListener('click',()=>{


    
    
    fetch("https://6891aa24447ff4f11fbd43a5.mockapi.io/u",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inp1.value,
            id: inp2.value
        })
    } )

})

btn2.addEventListener('click', () => {
    const idToDelete = inp3.value;
    if (idToDelete) {
        fetch(`https://6891aa24447ff4f11fbd43a5.mockapi.io/u/${idToDelete}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                alert('Deleted successfully');
            } else {
                alert('Delete failed');
            }
        });
    }
});