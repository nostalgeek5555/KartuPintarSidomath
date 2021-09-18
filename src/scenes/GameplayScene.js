import Phaser from "phaser";

export default class GameplayScene extends Phaser.Scene
{
    preload()
    {
        this.load.image('GameplayBG', 'assets/BG.png')
        this.load.image('Table', 'assets/table-mockup.png')
        this.load.image('PlayerIcon', 'assets/UI/Player/player-icon.png')
    }

    create()
    {
        if(!this.sys.game.device.os.desktop){
            this.sys.game.device.fullscreen()
        }
        
        var gameplayBG = this.add.image(640, 360, 'GameplayBG')
        var tableImage = this.add.image(640, 360, 'Table')

        for (let i = 0; i < 3; i++){
            var playerIcon = this.add.image((300 + 300 * i),  500, 'PlayerIcon')
            playerIcon.setScale(0.1, 0.1)
        }
        
    }
}