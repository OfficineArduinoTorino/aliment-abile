var endState={
    create: function() {
        game.world.removeAll();

        background = game.add.sprite(0, 0, 'background_menu');
        
        
        game.add.text(20, 400, TEXT.end_message, { 
            font: '50pt Arial', fill: '#FFFFFF', align:'center',
            wordWrap: true, wordWrapWidth:game.world.width});
        
        var button = game.add.button(-10, game.world.height-100, 'menu_button', function(){
            //reset some global variables
            days_selected=[];
            ACTUAL_DAY=0;
            playState.icons_positions=[[],[],[],[],[],[],[]];
            game.state.start('load');},
            this);

        game.add.text(20, game.world.height-100, TEXT.restart_button, { 
            font: '50pt Arial', fill: '#FFFFFF', align:'center'});

    }
}