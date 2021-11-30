  $('#add').show();
    $('#update').hide();
    $('#addEmployee').show();
    $('#updateEmployee').hide();

    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    })
  //  clear data start
    function clearData(){
        var name = $('#name').val('');
        var email = $('#email').val('');
        var designation = $('#designation').val('');
        var salary = $('#salary').val('');

        $('#nameError').text('');
        $('#emailError').text('');
        $('#desigError').text('');
        $('#salaryError').text('');
    }

  //  clear data end

// check email
    function checkemail(email) {
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (filter.test(email))
      testresults = true
    else {
      testresults = false
    }
    console.log(testresults)
    return (testresults)
  }
  // checkemail end


  // addData

    function addData(){
      var name = $('#name').val();
      var email = $('#email').val();
      var designation = $('#designation').val();
      var salary = $('#salary').val();      

        if (name==''||checkemail(email)==false || designation==''|| salary=='') {
          $('#nameError').text('*Your name is required.').css("color", "red");
          $('#emailError').text('*Email format is not correct').css("color", "red");
          $('#desigError').text('*Designation is required').css("color", "red");
          $('#salaryError').text('*Salary is required').css("color", "red");
        }
        else {
            $.ajax({
              type:'POST',
              dataType:'json',
              data:{name:name,email:email,designation:designation,salary:salary},
              url:"{{route('emp.store')}}",
              success:function(data){
                allData();
                clearData();
              }

          })
        } 
    }
     // addData end

//show data
    function allData(){
        $.ajax({
            type:"GET",
            dataType:'json',
            url: "{{route('emp.all')}}",
            success:function(data){
               var date = "";
                $.each(data,function(key,value){
                    data = data+ "<tr>"
                    data = data + "<td>"+ value.name +"</td>"
                    data = data + "<td>"+ value.email +"</td>"
                    data = data + "<td>"+ value.designation +"</td>"
                    data = data + "<td>"+ value.salary +"</td>"
                    data = data +"<td>"
                    data = data + "<button class='btn btn-primary mr-2' onclick='editData("+ value.id +")'>Edit</button>"
                    data = data + "<button class='btn btn-danger'>Delete</button>"
                    data = data + "</td>"
                    data = data + "</tr>"
                })
            $('tbody').html(data);
            }
        })
    }
    function editData(value){
      $('#addEmployee').hide();
      $('#add').hide();
      $('#updateEmployee').show();
      $('#update').show();
      $.ajax({
            type:"get",
            dataType:'json',
            url:"emp/edit/"+value,
            success:function(data){
             $('#name').val(data.name);
             $('#email').val(data.email);
             $('#designation').val(data.designation);
             $('#salary').val(data.salary);
             $('#id').val(data.id);
            }
        })
    }

  function updateData(){
    var name = $('#name').val();
    var email = $('#email').val();
    var designation = $('#designation').val();
    var salary = $('#salary').val();  
    var id = $('#id').val();

    $.ajax({
      type:'POST',
      dataType:'json',
      data:{name:name,email:email,designation:designation,salary:salary},
      url:"emp/update/"+ id,
      success:function(data){
        clearData();
        allData();

        $('#add').show();
        $('#update').hide();
        $('#addEmployee').show();
        $('#updateEmployee').hide();
      }

    })
  }
  allData();