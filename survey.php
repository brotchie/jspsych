<?php
    $db = new mysqli(/*MySQL hostname, username, password, etc*/);
    
    $SOURCE = $_POST;

    $userid = $SOURCE['userid'];
    $surveyname = $SOURCE['name'];
    $survey_raw = $SOURCE['survey'];
    $survey = json_decode(str_replace("\\", "", $survey_raw));

    $query = "";
    foreach($survey as $response) {
        $query .= sprintf("INSERT INTO survey (userid, surveyname, question, answer) VALUES ('%s', '%s', '%s', '%s');",
            $db->real_escape_string($userid),
            $db->real_escape_string($surveyname),
            $db->real_escape_string($response[0]),
            $db->real_escape_string($response[1]));
    }
    $db->multi_query($query);

    /*
        +------------+-------------+------+-----+-------------------+-------+
        | Field      | Type        | Null | Key | Default           | Extra |
        +------------+-------------+------+-----+-------------------+-------+
        | userid     | varchar(32) | YES  |     | NULL              |       |
        | surveyname | text        | YES  |     | NULL              |       |
        | question   | text        | YES  |     | NULL              |       |
        | answer     | text        | YES  |     | NULL              |       |
        | created    | timestamp   | NO   |     | CURRENT_TIMESTAMP |       |
        +------------+-------------+------+-----+-------------------+-------+
     */

?>
