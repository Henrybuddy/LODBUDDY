<!-- <?php
$pname = $_post['pname'];
$reg = $_post['reg'];
$desc = $_post['desc'];
$social = $_post['social'];
$bp = $_post['bp'];
$price = $_post['price'];
$file = $_post['file'];
//Dtabase connection
$conn = new mysqli('localhost','root','','codmsell');
if($conn->connect_error){
    die('connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(pname, reg, desc, social, bp, price, file)
    values (?, ?, ?, ?, ?, ?, ?,)");
    $stmt->bind_param("ssssiib",$pname, $reg, $desc, $social, $bp, $price, $file);
    $stmt->execute();
    echo"Account Successfully Submited...";
    $stmt->close();
    $conn->close(); 
}


?> -->