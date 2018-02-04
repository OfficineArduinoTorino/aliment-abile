var playState={
    selected_category:0,
    actual_category_text:null,
    category_buttons:[],
    icons_positions:[[],[],[],[],[],[],[]],
    sprites:[],

    create:function() {
        game.world.removeAll()

        background = game.add.sprite(0, 0, 'background_table');
        day_name_text = game.add.text(800, 70, TEXT.week_names[ACTUAL_DAY], { font: '50pt Arial', fill: '#FFFFFF', align:'center' });
        
        var already_created=!(this.icons_positions[ACTUAL_DAY].length==0);

        this.sprites=[];

        var category_quantities=[];
        for (var i=0;i<TEXT.category_names.length;i++){
            category_quantities.push(0);
        }
        
        for (var i=0;i<NUMBER_OF_ICONS;i++){
            sprite=game.add.sprite(0,0, 'icons');
            sprite.category=TEXT.category_names.indexOf(TEXT.food[i][1]);
            sprite.x=1580+(category_quantities[sprite.category]%2)*(ICON_DIM[0]+30);
            sprite.y=200+Math.floor(category_quantities[sprite.category]/2)*(ICON_DIM[1]+10);
            category_quantities[sprite.category]++;
            sprite.frame=i;
            sprite.inputEnabled = true;
            sprite.input.enableDrag();
            //sprite.events.onDragStart.add(onDragStart, this);
            sprite.events.onDragStop.add(this.onDragStop, this);

            //custom variables
            sprite.id=i;
            sprite.defaultX=sprite.x;
            sprite.defaultY=sprite.y;
            

            if (already_created) {
                sprite.x=this.icons_positions[ACTUAL_DAY][i][0];
                sprite.y=this.icons_positions[ACTUAL_DAY][i][1];
            }
            else{
                this.icons_positions[ACTUAL_DAY].push([sprite.x,sprite.y]);
            }

            this.sprites.push(sprite);
        }

        game.add.button(1173, 54, 'back_button', this.backToMenu, this);

        this.actual_category_text = game.add.text(1600, 50, TEXT.category_names[this.selected_category], { font: '50pt Arial', fill: '#FFFFFF', align:'center' });

        this.category_buttons=[];
        for (var i=0;i<TEXT.category_names.length;i++){
            var b = game.add.button(-100,185+i*100,'menu_button',this.manageCategories,this);
            b.category_index=i;
            this.category_buttons.push(b);
            game.add.text(20, 185+i*100, TEXT.category_names[i], { font: '50pt Arial', fill: '#FFFFFF', align:'center' });
        }
    },

    update:function() {
        //ensure that the game stay fullscreen
        game.input.onDown.add(this.goFullScreen, this);
    },

    goFullScreen:function(){
        if (!game.scale.isFullScreen){
            game.scale.startFullScreen(false);
        }
    },

    onDragStop:function(sprite, pointer) {
        if (pointer.x>=DROP_AREA_COORDINATES[0] && pointer.x<=DROP_AREA_COORDINATES[2]
            && pointer.y>=DROP_AREA_COORDINATES[1] && pointer.y<=DROP_AREA_COORDINATES[3])
        {
            days_selected[sprite.id][ACTUAL_DAY]=true;

        }
        else{
            days_selected[sprite.id][ACTUAL_DAY]=false;
            sprite.x=sprite.defaultX;
            sprite.y=sprite.defaultY;
        }
        this.icons_positions[ACTUAL_DAY][sprite.id]=[sprite.x,sprite.y];
    },

    backToMenu:function(){
        game.state.start('menu');
    },
    manageCategories:function(k){
        this.selected_category=k.category_index;
        this.actual_category_text.text=TEXT.category_names[this.selected_category];
        
        for (var i=0;i<TEXT.category_names.length;i++){
            this.category_buttons[i].x=-100;
        }
        k.x=-50;
        
        for (var i=0;i<NUMBER_OF_ICONS;i++){
            if (!days_selected[i][ACTUAL_DAY]){
                if (this.sprites[i].category==this.selected_category) {
                    this.sprites[i].x=this.sprites[i].defaultX;   
                }
                else{
                    this.sprites[i].x=this.sprites[i].defaultX+10000;
                }
            }
        }
    }

}