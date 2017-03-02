load("fx:base.js");
load("fx:controls.js");
load("fx:graphics.js");

$STAGE.title = "Hello JavaFX Nashorn by ffr";

var button = new Button();
button.text = "Say Hello World";
button.onAction = function(){
  print("Hello there ..")
};

var root = new StackPane();
root.children.add(button);

$STAGE.scene = new Scene(root, 300, 250);
$STAGE.show();
