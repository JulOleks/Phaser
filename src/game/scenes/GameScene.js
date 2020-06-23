import { Playground } from '../components/playground';
import mainBg from '../../assets/images/bg_main.png';
import aceSlot from '../../assets/images/ace_slot.png';
import puzir from '../../assets/images/puzir.png';

const store = {
	suit: ['h', 'd', 's', 'c'],
	rank: ['a', '2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k'],
	frames: [
		'as', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'ts', 'js', 'qs', 'ks',
		'b',
	],
	cards: [
		[],
		['', 'as', '7s'],
		['ts', 'js', 'qs'],
		['ks'],
		['', '', '', '5s', '4s', '3s', '9s'],
		['', '2s', '6s', '8s'],
	],
	deck: ['', '', '', ''],
}

export class GameScene extends Phaser.Scene {
	constructor(config) {
		super(config)
		
	}
	
	preload() {
		this.load.image('bg', mainBg);
		this.load.image('ace', aceSlot);
		this.load.image('puzir', puzir);
	}
	
	create() {

		this.playground = new Playground(this, store);

		this.scale.on('resize', this.resize, this);
	}


	resize({ width, height }) {

		this.playground.resize();
		//	this.cameras.resize(width,  height)

		// if (width > height) {
		// 	this.resize(width, height);
		// } else {
		// 	this.resize(width, height);
		// }


		//this.bg.setSize(width, height);
	}



}