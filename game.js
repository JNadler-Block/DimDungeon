class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {
        //this.load.image('player', 'assets/Player.png');
        this.load.spritesheet('player', 'assets/PlayerSpritesheet.png', { frameWidth: 450, frameHeight: 210 });

        this.load.image('oval', 'assets/Oval.png');

        this.load.image('skeleton', 'assets/Skeleton.png');

        this.load.image('fb1', 'assets/FightButton.png');
        this.load.image('fb2', 'assets/FightButtonHovered.png');
        this.load.image('pb1', 'assets/PotionButton.png');
        this.load.image('pb2', 'assets/PotionButtonHovered.png');
    }

    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        this.player = this.add.sprite(this.w * 0.2, this.h * 0.55, 'player').setDepth(2);

        const frameData = [
            { key: 'player', frame: 0, duration: 400 },
            { key: 'player', frame: 1, duration: 100 }
        ];

        const idleAnimationConfig = {
            key: 'idle',
            frames: frameData,
            frameRate: 5,
            repeat: -1 // Set to -1 for infinite looping
        };
        
        // Create the idle animation from the configuration
        this.anims.create(idleAnimationConfig);
        
        // Play the idle animation on the character sprite
        this.player.anims.play('idle');
        
        this.oval1 = this.add.image(this.w * 0.19, this.h * 0.66, 'oval').setScale(1.3);
        this.oval2 = this.add.image(this.w * 0.82, this.h * 0.54, 'oval').setScale(1.3);

        this.monster = this.add.image(this.w * 0.8, this.h * 0.33, 'skeleton').setDepth(2);

        this.buttons = initializeButtons(this);
    }

    update() {

    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
    },
    backgroundColor: 0x989898,
    scene: [Game],
    title: "Infinity Dungeon",
});