const uploader = document.getElementById('uploader');
uploader.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, "utf-8");
    reader.onload = function () {
        document.getElementById("list").innerHTML = reader["result"];
        console.log(reader["result"]);
        $('#download').hide();
        $('#uploader').hide();
        $('#start').show();
    }
});