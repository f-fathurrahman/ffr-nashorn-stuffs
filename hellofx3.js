var msg = new javafx.scene.control.Label("Hello JavaFX from Nashorn by ffr!");
msg.font = javafx.scene.text.Font.font("Fira Sans", 24);

load("fx:controls.js");
var label2 = new Label("Hello Again !!");
label2.font = javafx.scene.text.Font.font("Fira Mono", 26);

var layout = new javafx.scene.layout.VBox(msg, label2);

$STAGE.setTitle("Hello FX");
$STAGE.setScene(new javafx.scene.Scene(layout, 300, 100));
$STAGE.sizeToScene();
$STAGE.show();

