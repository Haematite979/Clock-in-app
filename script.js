const NameText = document.getElementById("NameText").value;
const Task = document.getElementById("Task");
const Post = document.getElementById("Post");
const contentLink = document.getElementById("ContentLink");
const submitBtn = document.getElementById("submitBtn");


submitBtn.onclick = function(){
    let NameText = document.getElementById("NameText").value;
    let Task = document.getElementById("Task").value;
    let Post = document.getElementById("Post").value;
    let contentLink = document.getElementById("ContentLink").value;
    let content =(
        `
    Name: ${NameText}
    Task ✔️: ${Task}
    Post ✔️: ${Post}
    Content Link : ${contentLink}
        `
    )
    navigator.clipboard.writeText(content);
    alert('Copied to clipboard');
}

   
        
   

        
        
    