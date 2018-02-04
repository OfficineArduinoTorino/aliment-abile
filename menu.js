var menuState={
    create: function() {
        game.world.removeAll();

        background = game.add.sprite(0, 0, 'background_menu');
        
        for (var i=0;i<7;i++){
            var button = game.add.button(-10, 100+110*i, 'menu_button', function(k){
            ACTUAL_DAY=k.id;
            game.state.start('play');}, 
            this);
            button.id=i;
            game.add.text(20, 100+110*i, TEXT.week_names[i], { font: '50pt Arial', fill: '#FFFFFF', align:'center' });
        }

        var button = game.add.button(-10, game.world.height-100, 'menu_button', function(){
            game.state.start('end');},
            this);

        game.add.text(20, game.world.height-100, TEXT.finish_button, { font: '50pt Arial', fill: '#FFFFFF', align:'center' });

        //draw the food selected for the week
        var elements_found=0;
        for (var i=0;i<days_selected.length;i++){
            if (days_selected[i].includes(true)){
                var posX=500+Math.floor(elements_found%9)*(ICON_DIM[0]+20);
                var posY=50+Math.floor(elements_found/9)*(ICON_DIM[1]+20);
                var sprite = game.add.sprite(
                    posX,
                    posY,
                    'icons');
                sprite.frame = i;
                elements_found++;
                game.add.text(
                    posX+20, 
                    posY+100, 
                    TEXT.food[i][0], {font: '15pt Arial', fill: '#FFFFFF'})
            }
        }
    }
}