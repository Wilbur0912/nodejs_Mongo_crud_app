$("#add_user").submit(function(event){
    alert("Data Inserted successfully");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array,function(n,i){
        data[['name']] = n['value']
    })
    console.log(data);
    var request = {
        "url" : ``
    }
})