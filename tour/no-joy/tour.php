<!-- <?php
$pname = $_post['pname'];
$sname = $_post['sname'];
$email = $_post['email'];

$conn = new mysqli('localhost','root','','tour');
if($conn->connect_error){
    die('connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(pname, sname, email,)
    values (?, ?, ?,)");
    $stmt->bind_param("sss",$pname, $sname, $email,);
    $stmt->execute();
    echo"Account Successfully Submited...";
    $stmt->close();
    $conn->close(); 
}
?> -->