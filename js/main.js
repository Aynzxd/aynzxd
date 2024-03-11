const droparea = document.getElementById("dropfile");
droparea.addEventListener("dragover" , function(e)
{
    e.preventDefault();
});

droparea.addEventListener("drop" , function(e)
{
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file)
    {
        const reader = new FileReader();
        reader.onload = function(e)
        {
            const files = e.target.result;
            console.log(files)
        }
        reader.readAsText(file);
    }
})