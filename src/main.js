import Phaser from "phaser";
import TitleScreen from "./scenes/TitleScreen";
import GameplayScene from "./scenes/GameplayScene";

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720
};

const game = new Phaser.Game(config);

game.scene.add('gameplayscene', GameplayScene)
game.scene.start('gameplayscene')