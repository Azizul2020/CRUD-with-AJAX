<?php 
     if(isset($_FILES['file'])){
          $img=$_FILES['file'];
          $name=$img['name'];
          $tmp=$img['tmp_name'];
          move_uploaded_file($tmp,"images/".$name);
          echo $name;
     }

?>