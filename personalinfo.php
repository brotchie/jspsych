<?php
    $db = new mysqli(/*MySQL hostname, username, password, etc*/);

    /* Allows us to switch easily between POST and GET parameters. */
    $SOURCE = $_POST;

    $firstname = $SOURCE['firstname'];
    $surname = $SOURCE['surname'];
    $major = $SOURCE['major'];
    $age = $SOURCE['age'];
    $gender = $SOURCE['gender'];
    $expectedGPA = $SOURCE['expectedGPA'];
    $aboriginal = $SOURCE['aboriginal'] == 'on';
    $userid = $SOURCE['userid'];
    $condition = $SOURCE['condition'];

    $query = sprintf("INSERT INTO personaldetails (userid, firstname, surname, gender, expectedGPA, aboriginal, major, age, cond) VALUES ('%s', '%s', '%s', '%s', %d, %d, '%s', %d, %d)",
        $db->real_escape_string($userid),
        $db->real_escape_string($firstname),
        $db->real_escape_string($surname),
        $db->real_escape_string($gender),
        $expectedGPA,
        $aboriginal,
        $db->real_escape_string($major),
        $age,
        $condition);

    $db->query($query);
?>
