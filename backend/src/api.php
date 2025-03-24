<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$mysqli = new mysqli("db", "user", "password", "monksdb");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Obtemos o caminho da URL
$path = $_SERVER['REQUEST_URI'];

// Remove query strings
$path = parse_url($path, PHP_URL_PATH);

// Remove possíveis barras antes de processar
$path = rtrim($path, '/');

// Normalizamos o prefixo
if (strpos($path, '/api') === 0) {
    $path = substr($path, 4); // remove "/api"
}

// Rotas:
if ($path == '/categories') {
    $result = $mysqli->query("SELECT * FROM categories");
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
}
elseif ($path == '/cards') {
    $result = $mysqli->query("SELECT * FROM cards");
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
}
elseif ($path == '/contact-form' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $stmt = $mysqli->prepare("INSERT INTO contact (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $input['name'], $input['email'], $input['message']);
    $stmt->execute();
    echo json_encode(["status" => "success"]);
}
else {
    echo json_encode(["message" => "Endpoint not found"]);
}

$mysqli->close();
?>

