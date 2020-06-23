import { Gui } from "./gui";

export class Playground extends Phaser.GameObjects.Container {
  constructor(scene, settings) {
		super(scene, 0, 0);
		
		scene.add.existing(this);
		
		this.width = 960;
		this.height = 960;
		
		this.settings = settings;
			
		this.gui = new Gui(scene, this.settings);		
	}	

	resize(){
			
	}
}