function addUser () {
    player1_name = document.getElementById("player_1").value;
    player2_name = document.getElementById("player_2").value;

    localStorage.setItem("Player 1", player1_name);
    localStorage.setItem("Player 2", player2_name);

    window.location = "game_page.html";
}