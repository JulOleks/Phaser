import Phaser from "phaser";
import {GameScene} from './game/scenes/GameScene';

const config = {
  parent: "phaser-app", 
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
    
    const ratio = Math.floor((width / height) * 1000) / 1000;
    const landscape = (width > height);
    const [srcWidth, srcHeight] = (landscape) ?  [Math.round(960 / ratio), 960] : [960, Math.round(960 / ratio)];
  
    console.log(srcWidth, srcHeight);
    
		game.canvas.style.width = '100% !import';
		game.canvas.style.height = '100% !import';
  
   game.scale.resize(srcWidth, srcHeight);
  }
   
	window.addEventListener('resize', () => {
    console.log('resize event')
    resize()
  })
  console.log('resize at start')
  resize()
})
