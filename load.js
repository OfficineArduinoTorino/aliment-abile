var loadState={
    preload: function() {
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    	game.load.image('background_table', 'assets/background_table.png');
        game.load.image('background_menu', 'assets/background_menu.png');
        game.load.spritesheet('icons', 'assets/food_pics.png', ICON_DIM[0], ICON_DIM[1]);
        game.load.image('back_button', 'assets/back_button.png');
        game.load.image('menu_button', 'assets/category_button.png');
    },

    create: function() {
        for (var i=0;i<NUMBER_OF_ICONS;i++){
            days_selected.push([false,false,false,false,false,false,false]);
        }

        game.state.start('menu');
    }
}