import Phaser from "phaser";
import {GameScene} from './game/scenes/GameScene';

const config = {
  type: Phaser.CANVAS,
	backgroundColor: "b9eaff",
	width: 960,
	height: 960,
  plugins: {},
//   scale: {
//   mode: Phaser.Scale.FIT,
//   autoCenter: Phaser.Scale.CENTER_BOTH
//  },
	physics: {
		default: 'matter',
		matter: {
			gravity: { y: 0.2 },
		},
	},

	scene: [GameScene]
}


window.addEventListener('load', ()=>{
	const game = new Phaser.Game(config);


	const resize = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		
		game.scale.resize(width, height);
		
		game.canvas.style.width = '100%';
		game.canvas.style.height = '100%';
	}

	window.addEventListener('resize', () => {
    console.log('resize event')
    resize()
  })
  console.log('resize at start')
  resize()
})
