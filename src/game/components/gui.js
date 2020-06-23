export class Gui extends Phaser.GameObjects.Container {
  constructor(scene, settings) {
		super(scene, 0, 0);
		
		scene.add.existing(this);		

		this.settings = settings;

		const bg = scene.add.image(0, 0, 'bg').setOrigin(0);

		this.centerX = scene.cameras.main.width / 2;

		const scaleX = scene.cameras.main.width / bg.width;
		const scaleY = scene.cameras.main.height / bg.height;
		let scale = Math.max(scaleX, scaleY);
		bg.setScale(scale).setScrollFactor(0);

		this.slots = {
			empty: []
		};

		this.createAceSlots();
		this.createBubbles();

		this.add([bg])


		console.log(this.scene.sys.game.canvas);
		console.log(this.scene.cameras.main.width);
		
		
		
	}	

	createAceSlots() {
		const y2 = 300;

		for (let i = 0; i < this.settings.cards.length; i++) {
		
			let x = (this.centerX - 100) + (i * 62);
			let y = y2 + 90;

			const emptySlot = this.scene.add.image(x, y, 'ace');
			this.slots.empty.push(emptySlot);
		}
	}

	createBubbles(){

	  let randomX = Phaser.Math.Between(0, this.scene.cameras.main.width);	
		console.log(randomX);
		
		let delay = 0;

		for(let i = 0; i < 30; i++ ){
			this.bubble = this.scene.add.image(this.width + randomX, 1000, 'puzir');

			this.bubble.setScale(Phaser.Math.Between(0.1, 0.6));

			const duration = Phaser.Math.Between(4000, 6000);

			this.scene.tweens
			.add({
				targets: this.bubble,
				y: +500,
				ease: 'Linear',
				duration: duration,
				repeat: Infinity,
				delay: delay
			})

			delay += 200;
		}

		this.add([this.bubble]);
	}

	resize(){
			
	}
}