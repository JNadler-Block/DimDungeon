function initializeButtons(scene) {
    const buttonScale = {
        normal: 0.4,
        hovered: 0.45
    };
    
    let fbClicked = false;
    let fb = scene.add.image(scene.w * 0.37, scene.h * 0.9, 'fb1')
        .setScale(0.4)
        .setInteractive()
        .on('pointerover', () => {
            fb.setScale(buttonScale.hovered);
        })
        .on('pointerout', () => {
            fb.setScale(buttonScale.normal);
        })
        .on('pointerdown', () => {
            if (!fbClicked) {
                fbClicked = true;
                fb.setTexture('fb2');
                scene.time.delayedCall(100, () => {
                    fbClicked = false;
                    fb.setTexture('fb1');
                });
            }
        });

    let pbClicked = false;
    let pb = scene.add.image(scene.w * 0.63, scene.h * 0.9, 'pb1')
        .setScale(0.4)
        .setInteractive()
        .on('pointerover', () => {
            pb.setScale(buttonScale.hovered);
        })
        .on('pointerout', () => {
            pb.setScale(buttonScale.normal);
        })
        .on('pointerdown', () => {
            if (!pbClicked) {
                pbClicked = true;
                pb.setTexture('pb2');
                scene.time.delayedCall(100, () => {
                    pbClicked = false;
                    pb.setTexture('pb1');
                });
            }
        });

    return {
        FightButton : fb,
        PotionButton : pb
    }
}