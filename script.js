const NameText = document.getElementById("NameText").value;
const Task = document.getElementById("Task");
const Post = document.getElementById("Post");
const contentLink = document.getElementById("ContentLink");
const submitBtn = document.getElementById("submitBtn");


submitBtn.onclick = function(){
    let NameText = document.getElementById("NameText").value;
    let content =(
        `
    ${NameText}  Clocking In 
        Read ✅
        Write ✅
        Meditate ✅
        Research ✅
        Implement ✅
        `
    )
    navigator.clipboard.writeText(content);
    alert('Copied to clipboard');
}

   
        
   

        
        
    