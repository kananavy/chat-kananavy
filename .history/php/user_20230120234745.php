<?php
    session_start();
    include_once "config.php";
    $outgoing_id = $_SESSION['unique_id'];
    $sql = mysqli_query($conn, "SELECT * FROM users
                                LEFT JOIN messages ON users.unique_id = messages.mgs_id
                                 WHERE NOT unique_id = {$outgoing_id} AND unique_id = {$incomoing_id} ORDER BY mgs_id ASC");
    $output = "";
// Active user Online
    if(mysqli_num_rows($sql) == 0){
        $output .= "No users are available to chat";
    }elseif(mysqli_num_rows($sql) > 0){
    include_once "data.php";
        }
echo "$output";
?>