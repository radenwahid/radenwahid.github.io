<?php
    if(isset($_POST['submit'])) {
        $name   = $_POST['name'];
        $email   = $_POST['email'];
        $pesan   = $_POST['pesan'];
        $no_wa   = $_POST['noWa'];

        header("location:https://api.whatsapp.com/send?phone=$no_wa&text-Nama:%20$name20%0DEmail:%20$emai1%20%0DPesan:%20$pesan");
    } else {
        echo "
        <script>
        windows.location=history.go(-1);
        </script>
        ";
    }
?>