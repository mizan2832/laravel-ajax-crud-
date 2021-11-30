<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jquery and ajax crud</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container pt-5">
<div class="row">
    <div class="col-md-8">
        <h2>Employees</h2>
              
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
    </div>
    <div class="col-md-4">
    <span id="addEmployee">Add new Employee</span>
    <span id="updateEmployee">Update Employee</span>
            <div class="mb-3 mt-3">
              <label for="name" class="form-label">Name:</label>
              <input type="text" class="form-control" id="name" placeholder="Enter name" name="name">
              <span id="nameError"></span>

            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
              <span id="emailError"></span>
            </div>
            <div class="mb-3">
              <label for="designation" class="form-label">Designation:</label>
              <input type="text" class="form-control" id="designation" placeholder="Enter designation" name="designation">
              <span id="desigError"></span>
            </div>
            <div class="mb-3">
              <label for="salary" class="form-label">Salary:</label>
              <input type="number" min="0" class="form-control" id="salary" placeholder="Enter salary" name="salary">
              <span id="salaryError"></span>
            </div>

            <input type="number" name="id" id="id" hidden>
           
            <button type="submit" id="add" onclick="addData()" class="btn btn-primary">ADD</button>
            <button type="submit" id="update" class="btn btn-primary"  onclick="updateData()" >UPDATE</button>
        
    </div>

</div>
    </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="app.js"></script>
</body>
</html>