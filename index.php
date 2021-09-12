<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
              text-align:center;
        }
        input{
            width:  100px;
            height: 100px;
            font-size:30px;
        }
        #res{
           color:red;
           font-weight:bold;
        }
    </style>
</head>
<body>
    <h1>Let's go X O :D</h1>
    <h3>You can't win lose or draw :P</h3>
    <p id="res"></p>
    <?php 
       // draw xo game
       for ($row=0; $row < 3; $row++) { 
           for ($col=0;$col<3;$col++){
               echo "<input type='button' id='elem".$row.$col."' onclick='clickX(".$row.",".$col.",this)' value=' '>";
           }
           echo "<br>";
       }
    ?>
    <script src="scripts/xo.js"></script>
</body>
</html>